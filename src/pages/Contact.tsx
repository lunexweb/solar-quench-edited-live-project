import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: ["+27 71 234 5678"],
      description: "Call or WhatsApp us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["modishane@solarquench.co.za", "info@solarquench.co.za"],
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["17 Olea Road", "Midrand"],
      description: "Our location"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["Mon-Fri: 7AM-5PM", "Sat: 8AM-1PM", "Sun & Public Holidays: Closed"],
      description: "We're here to help"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEOHead 
        title="Contact SOLARQUENCH - Get Expert Solar Consultation | Midrand, South Africa"
        description="Contact SOLARQUENCH for expert solar consultation. Located in Midrand, South Africa. Call +27 71 234 5678 or email info@solarquench.co.za for immediate assistance."
        keywords="contact solarquench, solar consultation, solar expert, midrand south africa, solar contact, solar phone number"
        url="https://solarquench.com/contact"
      />
      <Navbar />
      
      <main className="flex-1">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961787/WhatsApp_Image_2025-10-19_at_19.55.48_fb2mns.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative container mx-auto px-4 text-center text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto">
            Ready to start your solar journey? Contact our expert team for a personalized consultation and free quote.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20 bg-background" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Information</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach our solar experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group premium-glow"
                data-scroll
                data-scroll-speed={0.3 + (index % 2) * 0.2}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg mx-auto">
                    <info.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => {
                      // Make email clickable
                      if (info.title === "Email") {
                        return (
                          <a 
                            key={idx} 
                            href={`mailto:${detail}`}
                            className="text-sm text-primary hover:text-accent transition-colors hover:underline block"
                          >
                            {detail}
                          </a>
                        );
                      }
                      // Make phone clickable
                      if (info.title === "Phone & WhatsApp") {
                        return (
                          <a 
                            key={idx} 
                            href={`tel:${detail.replace(/\s/g, '')}`}
                            className="text-sm text-primary hover:text-accent transition-colors hover:underline block"
                          >
                            {detail}
                          </a>
                        );
                      }
                      // Regular text for other details
                      return (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      );
                    })}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Media */}
          <div className="max-w-6xl mx-auto mt-16">
            <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg premium-glow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold">Follow us on Social Media</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Stay updated with our latest projects, tips, and offers
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 justify-start md:justify-end">
                    <a
                      href="https://www.facebook.com/share/1CfiG55hgU/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit SOLARQUENCH on Facebook"
                      className="inline-flex items-center gap-2 h-10 px-4 md:px-5 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors shrink-0"
                    >
                      {/* Facebook SVG */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#1877F2]">
                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.41c0-3.1 1.893-4.79 4.658-4.79 1.324 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.765v2.312h3.59l-.467 3.626h-3.123V24h6.127C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z"/>
                      </svg>
                      <span className="text-sm font-medium">Facebook</span>
                    </a>
                    <a
                      href="https://www.instagram.com/solar_quench?utm_source=qr&igsh=MWRyMGEyMHkzYTZuZA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit SOLARQUENCH on Instagram"
                      className="inline-flex items-center gap-2 h-10 px-4 md:px-5 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors shrink-0"
                    >
                      {/* Instagram SVG */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <radialGradient id="igGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4 24) rotate(-45) scale(34)">
                          <stop offset="0%" stopColor="#FEDA75"/>
                          <stop offset="25%" stopColor="#FA7E1E"/>
                          <stop offset="50%" stopColor="#D62976"/>
                          <stop offset="75%" stopColor="#962FBF"/>
                          <stop offset="100%" stopColor="#4F5BD5"/>
                        </radialGradient>
                        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" fill="url(#igGrad)"/>
                        <path d="M12 8.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5m0-2A5.5 5.5 0 1 0 17.5 12 5.5 5.5 0 0 0 12 6.5Zm5.75-.25a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 17.75 6.25Z" fill="#fff"/>
                      </svg>
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Direct Support</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Prefer email? Reach our specialists directly using the addresses below and we&apos;ll respond within one business day.
              </p>
            </div>
            <Card className="border-border shadow-xl">
              <CardContent className="p-10 space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">Project enquiries</p>
                  <a href="mailto:modishane@solarquench.co.za" className="text-2xl font-semibold text-primary hover:text-accent transition-colors">
                    modishane@solarquench.co.za
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">General support</p>
                  <a href="mailto:info@solarquench.co.za" className="text-2xl font-semibold text-primary hover:text-accent transition-colors">
                    info@solarquench.co.za
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
