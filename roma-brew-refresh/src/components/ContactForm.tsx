import { useState } from "react";
import { toast } from "sonner";

interface ContactFormProps {
  compact?: boolean;
}

const ContactForm = ({ compact }: ContactFormProps) => {
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll respond within 24 hours.");
    setForm({ name: "", business: "", phone: "", email: "", message: "" });
  };

  const inputClass = "w-full rounded border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 md:grid-cols-2"}>
        <input
          type="text"
          placeholder="Your Name *"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Business Name"
          value={form.business}
          onChange={(e) => setForm({ ...form, business: e.target.value })}
          className={inputClass}
        />
        <input
          type="tel"
          placeholder="Phone Number *"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass}
        />
        <input
          type="email"
          placeholder="Email Address *"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
      </div>
      <textarea
        placeholder="Your Message"
        rows={compact ? 3 : 5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={inputClass}
      />
      <button
        type="submit"
        className="gold-gradient rounded px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow transition-transform hover:scale-105"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
