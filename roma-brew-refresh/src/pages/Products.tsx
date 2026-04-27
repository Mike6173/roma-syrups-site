import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import servicesHero from "@/assets/services-hero.jpg";

const productCategories = [
  {
    title: "Soda Systems",
    items: ["Soda Fountains (New & Used)", "Bar Guns", "Jet Sprays", "Carbonators", "CO2 & G-Mix Tanks"],
  },
  {
    title: "Draft Beer Systems",
    items: ["Kegerators", "Multi-Tier Beer Systems", "Beer Towers", "Glycol Systems", "Beer Line Cleaning Equipment"],
  },
  {
    title: "Wine on Tap",
    items: ["Wine Dispensing Systems", "Wine Preservation", "Tap Handles & Accessories"],
  },
  {
    title: "Refrigeration",
    items: ["Ice Makers", "Walk-In Coolers & Boxes", "Reach-In Coolers", "Under-Counter Refrigerators"],
  },
  {
    title: "Compressed Gas",
    items: ["CO2", "G-Mix", "Beer Gas", "Nitrogen", "Helium"],
  },
  {
    title: "Syrups & Beverages",
    items: ["House Brand Cola", "Diet Cola", "Lemon Up", "Cherry Cola", "Root Beer", "Ginger Ale", "Coca Cola Brand Products"],
  },
];

const Products = () => {
  return (
    <>
      <PageHero title="Our Products" subtitle="Quality commercial beverage equipment and supplies for every need." backgroundImage={servicesHero} />
      <section className="bg-background py-20">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat) => (
              <div key={cat.title} className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground border-b border-border pb-3">{cat.title}</h2>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="gold-gradient inline-block rounded px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow transition-transform hover:scale-105">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
