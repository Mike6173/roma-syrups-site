import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/romasyrupslogo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/catalog", label: "Catalog" },
  { to: "/who-we-service", label: "Who We Service" },
  { to: "/services", label: "Services" },
  { to: "/payment", label: "Payment" },
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container flex items-center justify-between py-2 text-sm text-primary-foreground">
          <span className="font-body">NYC & NJ's Trusted Beverage System Contractor Since 1979</span>
          <a
            href="tel:718-259-1842"
            className="hidden items-center gap-2 font-heading text-base font-semibold tracking-wide text-gold sm:flex"
          >
            <Phone className="h-4 w-4" />
            718-259-1842
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-border bg-card shadow-md">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Roma Syrups" className="h-10 w-auto" />
            <span className="font-heading text-2xl font-bold uppercase tracking-wider text-primary">Roma Syrups</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`rounded px-3 py-2 font-body text-sm font-medium transition-colors hover:bg-secondary hover:text-primary ${
                    location.pathname === link.to ? "bg-secondary text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:718-259-1842"
              className="gold-gradient inline-flex items-center gap-2 rounded px-5 py-2.5 font-heading text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              Call Today
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-card px-4 pb-4 lg:hidden">
            <ul className="space-y-1 pt-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded px-3 py-2 font-body text-base transition-colors hover:bg-secondary ${
                      location.pathname === link.to ? "bg-secondary font-semibold text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="tel:718-259-1842"
              className="gold-gradient mt-3 flex items-center justify-center gap-2 rounded px-5 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-accent-foreground"
            >
              <Phone className="h-4 w-4" />
              Call 718-259-1842
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
