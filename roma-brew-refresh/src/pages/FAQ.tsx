import PageHero from "@/components/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  { q: "What areas do you service?", a: "We service Brooklyn, Manhattan, Queens, Bronx, Staten Island, New Jersey, and Connecticut. Our main offices are in Brooklyn, NY and Marlboro, NJ." },
  { q: "How quickly can you respond to service calls?", a: "We are committed to responding to all service requests within 24 hours. For emergencies, call us directly at 718-259-1842." },
  { q: "How often should beer lines be cleaned?", a: "The Brewers Association recommends cleaning beer lines every two weeks. Regular cleaning prevents buildup of bacteria, yeast, mold, and beer stone that can affect taste and quality." },
  { q: "Do you sell both new and used equipment?", a: "Yes, we sell both new and used soda fountains, bar guns, beer taps, and draft systems. All used equipment is thoroughly inspected and tested before sale." },
  { q: "Can you design a custom draft beer system?", a: "Absolutely. Whether it's a single kegerator or a multi-tier beer system, our experts can design and install a draft system tailored to your establishment's needs." },
  { q: "Do you offer maintenance contracts?", a: "Yes, we offer preventive maintenance programs that include regular inspections, cleaning, and tune-ups to keep your systems running optimally and prevent costly breakdowns." },
  { q: "What types of compressed gas do you supply?", a: "We supply CO2, G-Mix, Beer Gas, Nitrogen, and Helium for commercial beverage dispensing applications." },
  { q: "Are your products kosher?", a: "Yes, we are proud to sell kosher products. Contact us for details about specific product certifications." },
  { q: "Do you service home soda dispensers?", a: "Yes, in addition to commercial equipment, we also service home soda dispensers and soda fountains." },
  { q: "How can I request a free consultation?", a: "You can request a free consultation by filling out our contact form, calling 718-259-1842, or emailing info@romasyrups.com." },
];

const FAQ = () => {
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Answers to common questions about our products and services." />
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-6 shadow-sm">
                <AccordionTrigger className="font-heading text-base font-semibold uppercase tracking-wide text-foreground hover:text-gold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 text-center">
            <p className="font-body text-muted-foreground">Still have questions?</p>
            <Link to="/contact" className="gold-gradient mt-3 inline-block rounded px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent-foreground">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
