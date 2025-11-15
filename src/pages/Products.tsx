import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const residentialPackages = [
  {
    label: "Popular",
    title: "Residential Starter",
    subtitle: "Perfect for small homes and apartments",
    price: "From R50,000 / system",
    features: ["5kW Inverter", "5kW Battery", "6 Panels", "Basic Monitoring System", "10-Year Warranty", "Professional Installation", "Grid Connection Setup"],
  },
  {
    label: "Best Value",
    title: "Home Complete",
    subtitle: "Ideal for medium to large homes",
    price: "From R90,000 / system",
    features: ["8kW Inverter", "10kW Battery", "12 x Panels", "Advanced Monitoring & App", "15-Year Warranty", "Professional Installation", "Energy Optimization"],
  },
  {
    label: "Enterprise",
    title: "Commercial Package",
    subtitle: "Comprehensive solution for businesses",
    price: "Custom",
    features: ["Custom kW Configuration", "Industrial-Grade Panels", "Real-Time Analytics Dashboard", "25-Year Warranty", "Dedicated Installation Team", "Battery Storage Included", "Energy Management System", "Tax Incentive Assistance"],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEOHead
        title="SOLARQUENCH Products | Residential & Commercial Solar Packages"
        description="Browse SOLARQUENCH residential packages, commercial solar systems, and energy storage solutions tailored for South African conditions."
        keywords="solar products, solar packages south africa, commercial solar, battery storage"
        url="https://solarquench.com/products"
      />

      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <section className="container mx-auto px-4 text-center space-y-6">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Solar & Storage Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-semibold">Products built for South African grids</h1>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            Whether you need reliable backup for your home or want to offset utility costs across a national footprint, SOLARQUENCH designs, installs, and supports turnkey systems with premium components and transparent pricing.
          </p>
        </section>

        <section className="container mx-auto px-4 mt-16 space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-3xl font-semibold">Packages</h2>
            <a
              href="https://drive.google.com/uc?export=download&id=12oPT2OhgstRwYuBC54r0Mbf6hV3gkB_h"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full lg:w-auto"
            >
              <Button variant="outline" className="border-primary text-primary w-full lg:w-auto self-start lg:self-auto">
                Download our Profile
              </Button>
            </a>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {residentialPackages.map((pkg, index) => (
              <Card
                key={pkg.title}
                className={`relative border-none shadow-xl ${
                  index === 1 ? "bg-gradient-to-b from-orange-50 to-white" : "bg-white"
                } flex h-full flex-col`}
              >
                <CardContent className="p-8 flex h-full flex-col">
                  <div className="flex justify-center">
                    <Badge className="rounded-full px-4 py-1 bg-slate-900 text-white">{pkg.label}</Badge>
                  </div>
                  <div className="text-center space-y-2 mt-6">
                    <h3 className="text-2xl font-semibold text-slate-900">{pkg.title}</h3>
                    <p className="text-muted-foreground">{pkg.subtitle}</p>
                  </div>
                  <p className="text-3xl font-bold text-orange-500 text-center mt-4">{pkg.price}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-800 flex-1 min-h-[11rem]">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-orange-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full bg-gradient-to-r from-orange-500 to-amber-400 text-white">Get Started</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 mt-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center rounded-3xl bg-muted/40 p-8 md:p-12 shadow-lg">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Business Presentation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">SOLARQUENCH Company Overview</h2>
              <p className="text-muted-foreground text-base md:text-lg">
                Watch our executive deck in video format to understand how SOLARQUENCH scopes, engineers, and delivers turnkey solar systems for residential estates and commercial facilities across South Africa.
              </p>
              <p className="text-sm text-muted-foreground">
                The presentation walks through our service pillars, value proposition, and sample installations so stakeholders can quickly align on project outcomes.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-black">
              <video
                controls
                poster="https://res.cloudinary.com/dnnwvmh3n/video/upload/so_0/v1763193942/Solar_quench_profile_1_zcvouo.jpg"
                className="w-full h-full object-cover"
                preload="none"
              >
                <source src="https://res.cloudinary.com/dnnwvmh3n/video/upload/v1763193942/Solar_quench_profile_1_zcvouo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Products;
