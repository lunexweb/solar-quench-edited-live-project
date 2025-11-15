import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Quote = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEOHead 
        title="Get Free Solar Quote - SOLARQUENCH | Professional Solar Installation"
        description="Get your free solar quote from SOLARQUENCH. Professional consultation, custom solar solutions, and expert installation. Start saving on energy bills today."
        keywords="solar quote, free solar consultation, solar installation quote, solar energy assessment, solar savings calculator"
        url="https://solarquench.com/quote"
      />
      <Navbar />
      
      <main className="flex-1">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/doqsolr8d/image/upload/v1760692915/pexels-pnw-prod-8276364_nk8nzo.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative container mx-auto px-4 text-center text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Get Your Free{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solar Quote
            </span>
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto">
            Share a few project details and receive a personalised solar proposal within 24 hours. No obligation, completely free.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background" data-scroll-section>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl font-bold">Request a Quote</h2>
            <p className="text-lg text-muted-foreground">
              Email our estimating desk directly with your consumption details or latest utility bill and we’ll send a tailored proposal within 24 hours.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border shadow-lg">
              <CardContent className="p-8 space-y-4 text-center md:text-left">
                <Phone className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-semibold">Project Enquiries</h3>
                <p className="text-muted-foreground">
                  For customised system sizing, commercial sites, or financing options, contact Modishane directly.
                </p>
                <a href="mailto:modishane@solarquench.co.za" className="text-xl font-semibold text-primary hover:text-accent transition-colors">
                  modishane@solarquench.co.za
                </a>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg">
              <CardContent className="p-8 space-y-4 text-center md:text-left">
                <Mail className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-semibold">General Support</h3>
                <p className="text-muted-foreground">
                  For residential packages, maintenance, or after-sales assistance, reach our support desk.
                </p>
                <a href="mailto:info@solarquench.co.za" className="text-xl font-semibold text-primary hover:text-accent transition-colors">
                  info@solarquench.co.za
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="border-border shadow-lg">
              <CardContent className="p-8 space-y-4 text-center md:text-left">
                <MapPin className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Visit Us</h3>
                <p className="text-muted-foreground">17 Olea Road, Midrand</p>
              </CardContent>
            </Card>
            <Card className="border-border shadow-lg">
              <CardContent className="p-8 space-y-4 text-center md:text-left">
                <Clock className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Operating Hours</h3>
                <p className="text-muted-foreground">
                  Mon-Fri: 7AM-5PM<br />
                  Sat: 8AM-1PM<br />
                  Sun & Public Holidays: Closed
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 border-border shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-semibold">What to include in your email</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                  Latest electricity bill or average monthly usage.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                  Property type and desired backup duration.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                  Preferred installation timeline or budget range.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quote;
