import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import servicesHero from "@/assets/services-hero.jpg";
import { Beer, Droplets, Wrench, GlassWater, Snowflake, Coffee } from "lucide-react";

const categories = [
  { title: "Beer Equipment", icon: Beer, desc: "Draft beer systems, kegerators, glycol systems, beer towers and accessories." },
  { title: "Beverages", icon: Droplets, desc: "Syrups, concentrates, and beverage products for commercial dispensing." },
  { title: "Liquor Management", icon: GlassWater, desc: "Liquor control and dispensing systems for bars and restaurants." },
  { title: "Services", icon: Wrench, desc: "Installation, maintenance, line cleaning, and 24-hour repair services." },
  { title: "Soda Equipment", icon: Droplets, desc: "Soda fountains, bar guns, jet sprays, and carbonation systems." },
  { title: "Water Systems", icon: Coffee, desc: "Crysalli water filtration, bottled water alternatives, and water dispensing." },
];

const Catalog = () => {
  return (
    <>
      <PageHero title="Product Catalog" subtitle="Browse our complete range of commercial beverage equipment and services." backgroundImage={servicesHero} />
      <section className="bg-background py-20">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div key={cat.title} className="group rounded-lg border border-border bg-card p-8 text-center shadow-sm transition-all hover:shadow-lg hover:border-gold">
                <cat.icon className="mx-auto h-12 w-12 text-gold" />
                <h2 className="mt-4 font-heading text-xl font-bold uppercase tracking-wide text-foreground">{cat.title}</h2>
                <p className="mt-3 font-body text-sm text-muted-foreground">{cat.desc}</p>
                <Link to="/contact" className="mt-4 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-gold hover:text-gold-dark">
                  Inquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
