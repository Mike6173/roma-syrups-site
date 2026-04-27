import { Link } from "react-router-dom";
import { Phone, Shield, Clock, Wrench, Droplets, Beer, Wine, Snowflake, Coffee, GlassWater } from "lucide-react";
import heroBar from "@/assets/hero-bar.jpg";
import wineImg from "@/assets/wine-systems.jpg";
import refrigerationImg from "@/assets/refrigeration.jpg";
import sodaImg from "@/assets/soda-systems.jpg";
import beerImg from "@/assets/beer-systems.jpg";
import waterImg from "@/assets/water-systems.jpg";
import coffeeImg from "@/assets/coffee-tap.jpg";
import servicesHero from "@/assets/services-hero.jpg";
import ContactForm from "@/components/ContactForm";

const thingsWeDo = [
  { title: "WINE SYSTEMS", img: wineImg, desc: "We install Wine on Tap Systems, providing a fresh and crisp pour in every glass without the high cost, storage space and waste." },
  { title: "REFRIGERATION", img: refrigerationImg, desc: "We service, sell and install Ice Makers, Walk-In Boxes/Coolers and Refrigeration." },
  { title: "SODA SYSTEMS", img: sodaImg, desc: "Our prompt service department will ensure your issue is resolved the first time and your soda dispensing system, bar gun and soda machines run optimally." },
  { title: "BEER SYSTEMS", img: beerImg, desc: "Whether it's a single kegerator or multi-tier beer system, we can do it from the ground up. Have our experts design your draft beer system." },
  { title: "WATER SYSTEMS", img: waterImg, desc: "Each year over 22 billion water bottles are thrown away… By choosing the Crysalli system you help reduce environmental impact." },
  { title: "COFFEE ON TAP", img: coffeeImg, desc: "Nitro Cold Brew Coffee is one of the hottest trends today! Have us design a coffee dispensing system for you and give your business a JOLT…" },
];

const productServices = [
  { icon: Droplets, label: "Soda Systems" },
  { icon: Beer, label: "Draft Beer Systems" },
  { icon: Wine, label: "Wine on Tap" },
  { icon: Snowflake, label: "Ice Makers" },
  { icon: Snowflake, label: "Refrigeration" },
  { icon: Snowflake, label: "Walk-In Boxes" },
  { icon: GlassWater, label: "Bottled Water Systems" },
  { icon: Wrench, label: "Line Cleaning" },
  { icon: Wrench, label: "Preventive Maintenance" },
  { icon: Wrench, label: "Repairs" },
  { icon: Coffee, label: "Coffee on Tap" },
  { icon: Droplets, label: "Bar Guns & Jet Sprays" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[600px] items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBar})` }}
      >
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container py-20">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl font-bold uppercase leading-tight tracking-wider text-primary-foreground text-shadow md:text-6xl">
              Welcome to Roma Syrups and Beverage Systems
            </h1>
            <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              We specialize in Soda Systems, Draft Beer Systems, Glycol Systems, Water Systems, Compressed Gas, Coffee on Tap, Wine on Tap, Ice Makers, Refrigeration, Walk-In Boxes and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="gold-gradient inline-flex items-center rounded px-8 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-lg transition-transform hover:scale-105"
              >
                Get a Free Consultation
              </Link>
              <a
                href="tel:718-259-1842"
                className="inline-flex items-center gap-2 rounded border-2 border-gold px-8 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-gold hover:text-accent-foreground"
              >
                <Phone className="h-4 w-4" />
                Call 718-259-1842
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <span className="gold-gradient inline-block rounded-full px-5 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              Family Owned Since 1979
            </span>
            <h2 className="mt-6 font-heading text-3xl font-bold uppercase tracking-wide text-foreground md:text-4xl">
              Serving NYC & NJ Since 1979
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
              Roma Syrups and Beverage Systems has been providing top-shelf service and products to bars, lounges, diners, restaurants, pizzerias, catering halls and other establishments for over 30 years. Roma Syrups is centrally located in Brooklyn, NY. Now servicing New Jersey from our new Marlboro, NJ location. Family owned and operated since 1979. Serving Staten Island, Manhattan, Brooklyn, Queens, Bronx, Connecticut and New Jersey.
            </p>
          </div>
        </div>
      </section>

      {/* Products & Services overview */}
      <section className="bg-secondary py-20">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-wide text-foreground md:text-4xl">
            Products & Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-body text-muted-foreground">
            Sales of new & used soda fountains, bar guns, beer taps and draft systems. We also service home soda dispensers and soda fountains.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {productServices.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 rounded-lg bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-md">
                <item.icon className="h-8 w-8 text-gold" />
                <span className="font-heading text-sm font-medium uppercase tracking-wide text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Things We Do */}
      <section className="bg-background py-20">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-wide text-foreground md:text-4xl">
            Things We Do
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {thingsWeDo.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-lg bg-card shadow-md transition-shadow hover:shadow-xl">
                <div className="flex justify-center bg-secondary p-6">
                  <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-gold shadow-lg">
                    <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform group-hover:scale-110" loading="lazy" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">{item.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-gold transition-colors hover:text-gold-dark"
                  >
                    Contact Us →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kosher banner */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${servicesHero})` }}
      >
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container text-center">
          <Shield className="mx-auto h-12 w-12 text-gold" />
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-wide text-primary-foreground text-shadow md:text-4xl">
            We Are Proud to Sell Kosher Products
          </h2>
          <p className="mt-4 font-body text-lg text-primary-foreground/80">
            Call Today — <a href="tel:718-259-1842" className="text-gold hover:underline">718-259-1842</a>
          </p>
          <Link
            to="/catalog"
            className="gold-gradient mt-6 inline-block rounded px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-lg transition-transform hover:scale-105"
          >
            View Online Catalog
          </Link>
        </div>
      </section>

      {/* Local SEO section */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-foreground md:text-4xl">
            Commercial Beverage Systems in NYC & NJ
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
            Roma Syrups provides commercial soda systems, draft beer systems, wine on tap installations and refrigeration services throughout Brooklyn, Manhattan, Queens, Bronx, Staten Island, New Jersey and Connecticut. We specialize in beverage system installation, maintenance and repair for restaurants, bars and hospitality businesses.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gold" />
              <span className="font-body text-sm text-muted-foreground">24-Hour Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-gold" />
              <span className="font-body text-sm text-muted-foreground">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-gold" />
              <span className="font-body text-sm text-muted-foreground">Expert Technicians</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-dark py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-wide text-primary-foreground md:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-2 text-center font-body text-primary-foreground/70">
              <Phone className="mr-1 inline h-4 w-4" /> 718-259-1842 · info@romasyrups.com · We respond within 24 hours.
            </p>
            <div className="mt-8">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
