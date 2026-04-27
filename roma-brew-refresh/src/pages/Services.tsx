import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import servicesHero from "@/assets/services-hero.jpg";
import { Wrench, Settings, Droplets, Clock } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Installation",
    desc: "Complete installation of soda systems, draft beer systems, wine on tap, water filtration, coffee on tap and refrigeration equipment. Our expert technicians handle everything from design to final testing.",
  },
  {
    icon: Wrench,
    title: "Repair",
    desc: "Fast, reliable repair service for all commercial beverage equipment. Our skilled team diagnoses and fixes problems quickly to minimize your downtime.",
  },
  {
    icon: Droplets,
    title: "Line Cleaning",
    desc: "Regular line cleaning is essential for quality beverages and food safety compliance. We provide professional beer line cleaning, soda line cleaning, and glycol system maintenance.",
  },
  {
    icon: Clock,
    title: "Preventive Maintenance",
    desc: "Keep your systems running at peak performance with our preventive maintenance programs. Regular inspections, cleaning, and tune-ups extend equipment life and prevent costly breakdowns.",
  },
];

const Services = () => {
  return (
    <>
      <PageHero title="Our Services" subtitle="Expert installation, repair, and maintenance for commercial beverage systems." backgroundImage={servicesHero} />
      <section className="bg-background py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-lg border border-border bg-card p-8 shadow-sm">
                <s.icon className="h-10 w-10 text-gold" />
                <h2 className="mt-4 font-heading text-2xl font-bold uppercase tracking-wide text-foreground">{s.title}</h2>
                <p className="mt-3 font-body leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link to="/contact" className="mt-4 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-gold hover:text-gold-dark">
                  Request Service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Center */}
      <section className="section-dark py-16">
        <div className="container text-center">
          <Clock className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-wide text-primary-foreground">
            24-Hour Service Response
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-primary-foreground/80">
            We understand that equipment downtime costs you money. That's why our service center is committed to responding to your service requests within 24 hours. Call us anytime.
          </p>
          <a
            href="tel:718-259-1842"
            className="gold-gradient mt-6 inline-block rounded px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent-foreground"
          >
            Call 718-259-1842
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
