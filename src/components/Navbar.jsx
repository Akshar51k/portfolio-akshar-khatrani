import { useState, useEffect } from "react";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {/* Desktop pill */}
      <div
        className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-border shadow-sm"
            : "bg-white/60 backdrop-blur-md border-transparent"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="px-4 py-1.5 text-sm text-text-muted hover:text-text rounded-full hover:bg-bg transition-all duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl border-border shadow-sm"
              : "bg-white/60 backdrop-blur-md border-transparent"
          }`}
          aria-label="Menu"
        >
          <span className="text-sm text-text-muted">Menu</span>
          <span className={`transition-transform duration-300 text-xs ${mobileOpen ? "rotate-45" : ""}`}>
            ✕
          </span>
        </button>

        {mobileOpen && (
          <div className="absolute top-full mt-2 right-0 bg-white/90 backdrop-blur-xl border border-border rounded-2xl shadow-lg p-2 min-w-[160px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-2 text-sm text-text-muted hover:text-text rounded-xl hover:bg-bg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
