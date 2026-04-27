export default function Footer() {
  return (
    <footer className="py-12 mt-12 border-t border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-text-dim text-sm">
          &copy; {new Date().getFullYear()} Akshar Khatrani
        </p>
      </div>
    </footer>
  );
}
