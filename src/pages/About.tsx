import { Users, Target, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To accelerate the world's transition to sustainable energy through innovative solar solutions that are accessible, affordable, and reliable.",
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "A future where clean, renewable solar energy powers every home and business, creating a sustainable planet for generations to come.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Expert engineers, certified installers, and dedicated support staff committed to delivering excellence in every project.",
    },
    {
      icon: Award,
      title: "Our Quality",
      description: "Industry-leading warranties, premium components, and meticulous installation standards ensure long-lasting performance.",
    },
  ];

  const milestones = [
    { year: "2015", event: "Company Founded", description: "Started with a vision to revolutionize solar energy" },
    { year: "2018", event: "1,000 Installations", description: "Reached our first major milestone" },
    { year: "2021", event: "Industry Recognition", description: "Awarded Best Solar Provider of the Year" },
    { year: "2024", event: "2,500+ Happy Customers", description: "Leading the solar revolution" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEOHead 
        title="About SOLARQUENCH - Leading Solar Energy Provider Since 2015"
        description="Learn about SOLARQUENCH's journey in revolutionizing solar energy in South Africa. Founded in 2015, we've completed 2,500+ installations with expert engineers and certified technicians."
        keywords="about solarquench, solar energy company south africa, solar installation history, renewable energy provider, solar experts"
        url="https://solarquench.com/about"
      />
      <Navbar />
      
      <main className="flex-1">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950">
        <img
          src="https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961795/WhatsApp_Image_2025-10-19_at_19.55.52_wluvdj.jpg"
          alt="Solar Installation Background"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative container mx-auto px-4 text-center text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SOLARQUENCH
            </span>
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto">
            Leading the renewable energy revolution since 2015. We make solar accessible to every household and business while protecting our planet for future generations.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 bg-background" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                <p>
                  Founded in 2015, SOLARQUENCH began with a simple yet powerful vision: 
                  to make clean, renewable solar energy accessible to homes and businesses 
                  across the region. What started as a small team of passionate engineers 
                  has grown into a leading solar energy provider.
                </p>
                <p>
                  Today, we've completed over 2,500 installations, helping thousands of 
                  customers reduce their energy costs while contributing to a more 
                  sustainable future. Our commitment to quality, innovation, and customer 
                  satisfaction has made us a trusted name in solar energy.
                </p>
                <p>
                  We believe that transitioning to solar energy shouldn't be complicated 
                  or expensive. That's why we've streamlined the process, offering 
                  comprehensive solutions from initial consultation to long-term 
                  maintenance and support.
                </p>
              </div>
            </div>

            <div className="relative" data-scroll data-scroll-speed="0.5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img 
                src="https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961795/WhatsApp_Image_2025-10-19_at_19.55.52_wluvdj.jpg"
                alt="Solar Energy Professional"
                className="relative rounded-2xl shadow-2xl w-full premium-glow"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 md:py-20 bg-muted/30" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-base md:text-xl text-primary-foreground max-w-2xl mx-auto bg-primary px-6 py-3 rounded-lg inline-block">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group premium-glow"
                data-scroll
                data-scroll-speed={0.3 + (index % 2) * 0.2}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to power a sustainable future
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start group rounded-2xl p-6 bg-muted/40"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <span className="text-xl sm:text-2xl font-bold text-primary-foreground">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default About;
