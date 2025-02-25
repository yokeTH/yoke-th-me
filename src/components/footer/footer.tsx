export function Footer() {
  return (
    <footer className="pt-4">
      <div className="w-full h-16 bg-primary flex items-center justify-center">
        <span className="text-primary-foreground font-bold">&copy; {new Date().getFullYear()} yoke-th.me</span>
      </div>
    </footer>
  );
}
