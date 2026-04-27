import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import servicesHero from "@/assets/services-hero.jpg";

const businesses = [
  "Casinos", "Restaurants", "Bars and Lounges", "Cafeterias", "Hotels", "Hospitals",
  "Schools", "Fast Food Franchises", "Catering Halls", "Coffee Shops", "Nursing Homes",
  "Ice Cream Parlors", "Stationery Stores", "Discount Stores", "Sandwich Shops",
  "Stadiums", "Movie Theaters", "Airport Terminal Shops",
];

const WhoWeService = () => {
  return (
    <>
      <PageHero title="Who We Service" subtitle="Reputation Takes Us a Long Way" backgroundImage={servicesHero} />
      <section className="bg-background py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground">
                Some of the businesses we proudly serve:
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {businesses.map((b) => (
                  <div key={b} className="flex items-center gap-2 rounded bg-secondary px-4 py-3 font-body text-sm text-foreground">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-lg border border-gold bg-card p-8 shadow-md">
                <h3 className="font-heading text-lg font-bold uppercase text-foreground">Did You Know?</h3>
                <p className="mt-3 font-body text-sm text-muted-foreground">
                  Roma Syrups has been serving the NYC & NJ hospitality industry since 1979. Browse our full catalog to see how we can help your business.
                </p>
                <Link to="/catalog" className="gold-gradient mt-4 inline-block rounded px-6 py-2.5 font-heading text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                  View Catalog
                </Link>
              </div>
              <div className="mt-6 rounded-lg bg-primary p-8 text-primary-foreground">
                <h3 className="font-heading text-lg font-bold uppercase">Ready to Get Started?</h3>
                <p className="mt-2 font-body text-sm opacity-80">Contact us for a free consultation and quote.</p>
                <Link to="/contact" className="gold-gradient mt-4 inline-block rounded px-6 py-2.5 font-heading text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeService;
