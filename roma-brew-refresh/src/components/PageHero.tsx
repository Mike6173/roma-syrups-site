interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section
      className="relative flex min-h-[300px] items-center justify-center bg-primary bg-cover bg-center"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {backgroundImage && <div className="hero-overlay absolute inset-0" />}
      <div className="relative z-10 container py-16 text-center">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-wider text-primary-foreground text-shadow md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-primary-foreground/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
