import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/catalog", label: "Catalog" },
  { to: "/who-we-service", label: "Who We Service" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/payment", label: "Payment" },
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const categories = [
  "Beer Equipment",
  "Beverages",
  "Liquor Management",
  "Services",
  "Soda Equipment",
  "Water Systems",
];

const infoLinks = [
  "My Account",
  "Conditions of Use",
  "Become an Affiliate",
  "Product Index",
  "Category Index",
  "Contact Us",
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold uppercase tracking-wider text-gold">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="font-body text-sm opacity-80 transition-opacity hover:opacity-100 hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold uppercase tracking-wider text-gold">Categories</h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <Link to="/catalog" className="font-body text-sm opacity-80 transition-opacity hover:opacity-100 hover:text-gold">
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold uppercase tracking-wider text-gold">Information</h3>
          <ul className="space-y-2">
            {infoLinks.map((link) => (
              <li key={link}>
                <span className="font-body text-sm opacity-80 cursor-pointer transition-opacity hover:opacity-100 hover:text-gold">
                  {link}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold uppercase tracking-wider text-gold">Contact Us</h3>
          <div className="space-y-3 font-body text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="opacity-80">Roma Syrups<br />Brooklyn, NY 11204</span>
            </div>
            <a href="tel:718-259-1842" className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-gold">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              718-259-1842
            </a>
            <a href="mailto:info@romasyrups.com" className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-gold">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              info@romasyrups.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-olive-light/30">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-center text-xs opacity-60 sm:flex-row">
          <span>Copyright © Roma Syrups. All rights reserved.</span>
          <span>Family Owned & Operated Since 1979</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
