import PageHero from "@/components/PageHero";
import servicesHero from "@/assets/services-hero.jpg";

const Catalog = () => {
  return (
    <>
      <PageHero title="Product Catalog" subtitle="" backgroundImage={servicesHero} />
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-foreground">
            Coming Soon
          </h2>
          <p className="mt-4 font-body text-muted-foreground">
            Our online catalog is currently being built. Check back soon!
          </p>
        </div>
      </section>
    </>
  );
};

export default Catalog;
