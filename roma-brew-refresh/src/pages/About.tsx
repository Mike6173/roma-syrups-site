import PageHero from "@/components/PageHero";
import servicesHero from "@/assets/services-hero.jpg";
import { MapPin, Clock, Users } from "lucide-react";

const About = () => {
  return (
    <>
      <PageHero title="About Us" subtitle="Family owned and operated since 1979." backgroundImage={servicesHero} />
      <section className="bg-background py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg bg-secondary p-6 text-center">
                <Users className="h-10 w-10 text-gold" />
                <h3 className="mt-3 font-heading text-lg font-bold uppercase text-foreground">Family Owned</h3>
                <p className="mt-2 font-body text-sm text-muted-foreground">Three generations of beverage system expertise since 1979.</p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-secondary p-6 text-center">
                <MapPin className="h-10 w-10 text-gold" />
                <h3 className="mt-3 font-heading text-lg font-bold uppercase text-foreground">Two Locations</h3>
                <p className="mt-2 font-body text-sm text-muted-foreground">Brooklyn, NY and Marlboro, NJ serving the entire tri-state area.</p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-secondary p-6 text-center">
                <Clock className="h-10 w-10 text-gold" />
                <h3 className="mt-3 font-heading text-lg font-bold uppercase text-foreground">45+ Years</h3>
                <p className="mt-2 font-body text-sm text-muted-foreground">Over four decades of trusted service to the hospitality industry.</p>
              </div>
            </div>

            <div className="mt-12 space-y-6 font-body text-lg leading-relaxed text-muted-foreground">
              <p>
                Roma Syrups and Beverage Systems has been providing top-shelf service and products to bars, lounges, diners, restaurants, pizzerias, catering halls and other establishments for over 30 years. We are centrally located in Brooklyn, New York, with a second location in Marlboro, New Jersey to better serve our growing customer base.
              </p>
              <p>
                As a family-owned business, we take pride in building lasting relationships with our clients. From small neighborhood bars to large-scale casino operations, we bring the same level of dedication and expertise to every job. Our team of experienced technicians is trained to handle everything from simple repairs to complex multi-system installations.
              </p>
              <p>
                We serve Staten Island, Manhattan, Brooklyn, Queens, the Bronx, Connecticut and New Jersey. Whether you need a new draft beer system, soda fountain repair, or regular line cleaning service, Roma Syrups is the name trusted by thousands of businesses across the tri-state area.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
