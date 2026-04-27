import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:718-259-1842"
      className="gold-gradient fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 lg:hidden"
      aria-label="Call Roma Syrups"
    >
      <Phone className="h-6 w-6 text-accent-foreground" />
    </a>
  );
};

export default FloatingCallButton;
