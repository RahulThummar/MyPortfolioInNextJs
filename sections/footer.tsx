export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-transparent py-8 md:py-12 border-t border-border/40 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Rahul Thummar</h2>
        <p className="text-text-secondary mb-6 font-medium">React.js Developer</p>
        <p className="text-sm font-medium text-text-secondary">
          &copy; {currentYear} Rahul Thummar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
