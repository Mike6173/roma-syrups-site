import PageHero from "@/components/PageHero";
import { Phone, Mail, CreditCard } from "lucide-react";

const Payment = () => {
  return (
    <>
      <PageHero title="Payment" subtitle="Convenient payment options for our valued customers." />
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-2xl text-center">
          <CreditCard className="mx-auto h-16 w-16 text-gold" />
          <h2 className="mt-6 font-heading text-2xl font-bold uppercase tracking-wide text-foreground">
            Payment Options
          </h2>
          <p className="mt-4 font-body text-muted-foreground leading-relaxed">
            Secure online payment is coming soon. In the meantime, please contact us directly to arrange payment for your orders or service invoices.
          </p>
          <div className="mt-8 space-y-3">
            <a href="tel:718-259-1842" className="flex items-center justify-center gap-2 font-body text-foreground hover:text-gold">
              <Phone className="h-5 w-5 text-gold" /> 718-259-1842
            </a>
            <a href="mailto:info@romasyrups.com" className="flex items-center justify-center gap-2 font-body text-foreground hover:text-gold">
              <Mail className="h-5 w-5 text-gold" /> info@romasyrups.com
            </a>
          </div>
          <p className="mt-6 font-body text-sm text-muted-foreground">
            Have an invoice number? Call us or email with your invoice details and we'll help you complete your payment.
          </p>
        </div>
      </section>
    </>
  );
};

export default Payment;
