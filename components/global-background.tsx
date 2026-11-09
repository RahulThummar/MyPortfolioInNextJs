
"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
};

export function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let particles: Particle[] = [];
    let frame = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const connectionDistance = 145;

    const createParticles = () => {
      const count = Math.min(
        125,
        Math.max(55, Math.floor((width * height) / 11500))
      );

      particles = Array.from({ length: count }, () => {
        const z = Math.random() * 0.8 + 0.2;

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          vx: (Math.random() - 0.5) * 0.32 * z,
          vy: (Math.random() - 0.5) * 0.32 * z,
          radius: (Math.random() * 1.5 + 1) * z,
          phase: Math.random() * Math.PI * 2,
        };
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
      draw();
    };

    const drawBackgroundDetails = () => {
      // Soft ambient light zones
      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        0,
        width * 0.5,
        height * 0.4,
        Math.max(width, height) * 0.75
      );

      gradient.addColorStop(0, "rgba(219, 239, 255, 0.28)");
      gradient.addColorStop(0.5, "rgba(239, 248, 255, 0.15)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Subtle orbital rings
      ctx.save();
      ctx.translate(width * 0.5, height * 0.5);
      ctx.rotate(-0.22);

      [0.3, 0.43, 0.57].forEach((factor, index) => {
        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          width * factor,
          height * (factor * 0.48),
          0,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          index === 1
            ? "rgba(56, 189, 248, 0.09)"
            : "rgba(59, 130, 246, 0.055)";

        ctx.lineWidth = 1;
        ctx.stroke();
      });

      ctx.restore();
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > connectionDistance) continue;

          const opacity =
            (1 - distance / connectionDistance) *
            Math.min(a.z, b.z) *
            0.24;

          const gradient = ctx.createLinearGradient(
            a.x,
            a.y,
            b.x,
            b.y
          );

          gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`);
          gradient.addColorStop(1, `rgba(6, 182, 212, ${opacity})`);

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    };

    const drawMouseConnections = () => {
      if (!mouse.active) return;

      particles.forEach((particle) => {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 190) {
          const opacity = (1 - distance / 190) * 0.35;

          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(particle.x, particle.y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      const glow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        190
      );

      glow.addColorStop(0, "rgba(56, 189, 248, 0.09)");
      glow.addColorStop(1, "rgba(56, 189, 248, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(
        mouse.x - 190,
        mouse.y - 190,
        380,
        380
      );
    };

    const drawParticles = () => {
      particles.forEach((particle) => {
        const { x, y, z, radius } = particle;

        // Mouse interaction
        if (mouse.active) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150 && distance > 0) {
            const force = (1 - distance / 150) * 0.018;

            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;
          }
        }

        // Keep velocity smooth
        particle.vx *= 0.995;
        particle.vy *= 0.995;

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Keep particles inside the viewport
        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        const pulse = 0.75 + Math.sin(frame * 0.015 + particle.phase) * 0.25;

        // Particle glow
        ctx.beginPath();
        ctx.arc(x, y, radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${0.035 * pulse * z})`;
        ctx.fill();

        // Particle core
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 119, 210, ${0.35 + z * 0.5})`;
        ctx.fill();
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      drawBackgroundDetails();
      drawConnections();
      drawMouseConnections();
      drawParticles();
    };

    const animate = () => {
      frame++;
      draw();
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    resize();

    if (!reducedMotion) {
      animationId = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="digital-universe fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="digital-universe-base absolute inset-0" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      <div className="digital-universe-vignette absolute inset-0" />
    </div>
  );
}
