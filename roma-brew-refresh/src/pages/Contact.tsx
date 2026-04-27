import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in touch for a free consultation or service request." />
      <section className="bg-background py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground">Send Us a Message</h2>
              <p className="mt-2 font-body text-muted-foreground">We respond within 24 hours.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg bg-primary p-8 text-primary-foreground">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-gold">Contact Information</h3>
                <div className="mt-6 space-y-4 font-body text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>Roma Syrups<br />Brooklyn, NY 11204</span>
                  </div>
                  <a href="tel:718-259-1842" className="flex items-center gap-3 hover:text-gold">
                    <Phone className="h-5 w-5 shrink-0 text-gold" />
                    718-259-1842
                  </a>
                  <a href="mailto:info@romasyrups.com" className="flex items-center gap-3 hover:text-gold">
                    <Mail className="h-5 w-5 shrink-0 text-gold" />
                    info@romasyrups.com
                  </a>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-gold" />
                    24-Hour Service Response
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-heading text-base font-bold uppercase text-foreground">Service Areas</h3>
                <p className="mt-2 font-body text-sm text-muted-foreground">
                  Brooklyn · Manhattan · Queens · Bronx · Staten Island · New Jersey · Connecticut
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
