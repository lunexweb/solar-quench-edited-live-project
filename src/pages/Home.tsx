import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, Clock3, DollarSign, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/solar-hero.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Zap,
    title: "High Efficiency",
    description: "Premium solar panels with industry-leading conversion for maximum output.",
  },
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Comprehensive coverage on every installation for complete peace of mind.",
  },
  {
    icon: Clock3,
    title: "Quick Installation",
    description: "Professional teams complete projects in days, not weeks, with minimal disruption.",
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Reduce energy bills by up to 70% while increasing property value long-term.",
  },
];

const benefits = ["Lower electricity bills immediately", "24/7 backup with battery storage", "Guaranteed installation timelines"];

const solutionHighlights = [
  { label: "Average Savings", value: "70%", icon: DollarSign },
  { label: "Installations", value: "2,500+", icon: CheckCircle2 },
  { label: "Customer Rating", value: "4.9/5", icon: Shield },
];

const valueAddedServices = [
  {
    title: "System Monitoring",
    description:
      "Continuous performance tracking with alerts for faults so your array stays efficient and issues are resolved early.",
  },
  {
    title: "System Maintenance",
    description: "Scheduled inspections and servicing of inverters, wiring, and components to keep everything safe and reliable.",
  },
  {
    title: "Solar Panel Cleaning",
    description: "Gentle removal of dust and debris to maximize sunlight absorption and maintain peak energy output.",
  },
  {
    title: "SSEG Application",
    description: "We manage the municipal/Eskom registration to ensure your system is legally connected to the grid.",
  },
  {
    title: "Bird Proofing",
    description: "Discreet mesh and barriers that stop nesting, protect wiring, and prevent performance losses.",
  },
  {
    title: "System Upgrades",
    description: "Add panels, batteries, or smarter components to boost capacity, backup power, and ROI.",
  },
];

const trustedVendors = [
  { name: "SolarEdge", descriptor: "Smart Energy Technologies" },
  { name: "Enphase", descriptor: "Microinverter Solutions" },
  { name: "Canadian Solar", descriptor: "Global Solar Manufacturing" },
  { name: "JinkoSolar", descriptor: "Premium Solar Panels" },
  { name: "Trina Solar", descriptor: "Advanced Technology" },
];

const energyGurusFaqs = [
  {
    question: "How long will my solar battery last?",
    answer:
      "Batteries have varying life spans depending on their quality and battery technology. A great quality, well-maintained lithium-ion solar battery can last up to 10 years. We ensure that a battery management system (BMS) is connected which extends the life span of your battery significantly. It is important to remember to take maintenance into consideration as a healthy battery will last longer and can even exceed its expected lifespan.",
  },
  {
    question: "What affects the power generation of my system?",
    answer:
      "The angle and intensity of the UV rays of the sun on your roof on a daily basis will drastically affect your power generation, so location of your installed panels is key. Shade, roof orientation, trees, other obstructions, weather conditions, and maintenance all affect the maximum output of your system. We design the most efficient layout for your building, taking all unique factors into consideration.",
  },
  {
    question: "What should I consider before I make a purchase?",
    answer:
      "Even though we experience the daily pressures of South Africa’s energy crisis, this is not a process one should rush into. You must take the following factors into consideration carefully before going ahead with you purchase; energy requirements, system design, correct technology, quality and durability of the system’s components, credibility and reputation of your installer, product and installation costs, length of the projects and your contractors experience and qualifications.",
  },
  {
    question: "How reliable will my solar system be?",
    answer:
      "A properly installed system will be extremely reliable in saving on your monthly utility bill and providing sufficient power during load-shedding schedules. Provided your system is maintained properly and you have installed a sufficient size system for your load, you will not feel the effects of power outages.",
  },
  {
    question: "How long will my installation take?",
    answer:
      "After your first consultation with one of our skilled Gurus, we will require a couple of things from you in order to accurately quote and send through a proposal. Installations usually take 1-2 days depending on the system size. Commercial projects are handled differently and our engineers will schedule site visits first beforehand where we measure the energy quality and supply and then advise on project timelines.",
  },
  {
    question: "Which areas in South Africa do you service?",
    answer:
      "We install and provide residential solutions to all of Gauteng as well as the Hartebeespoort area, Nelspruit, Bloemfontein and George, Western Cape.\n\nCommercial, industrial and agricultural projects are commissioned all over South Africa, depending on the project size and this process is handled by our highly qualified engineers and project managers.",
  },
  {
    question: "Do you only offer solar PV?",
    answer:
      "No, we have a variety of different energy solutions we offer to our clients. As energy experts, we want our clients to get the most out of their investment and we build bespoke energy packages around each individual’s needs - this includes energy efficiencies and backup solutions.",
  },
  {
    question: "What size system should I purchase?",
    answer:
      "We calculate your needs based on your requirements during power outages. One of the most important calculations is your peak power demand which is the amount of power that will be drawn from the system during peak use - the other is the monthly usage (kWh). One of our skilled team members will recommend the size system you need based on your first consultation. Commercial projects are designed and built differently from residential installations and through a detailed process, our engineers will recommend fit-for-purpose energy solutions based on your company’s requirements.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Fill out a form on our home or contact us page. Alternatively, you can drop us an email or give us a call directly. We have a skilled team ready to assist you with all the necessary information you may need. For accurate quotes on bigger installations, we will request your utility bills, so make sure to have those handy.",
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SOLARQUENCH",
  "url": "https://solarquench.com/",
  "publisher": {
    "@type": "Organization",
    "name": "SOLARQUENCH",
    "logo": {
      "@type": "ImageObject",
      "url": "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760962192/WhatsApp_Image_2025-10-17_at_07.25.35_jynxa8.jpg"
    }
  },
  "description": "Premium solar installations, battery backups, and maintenance services across South Africa.",
  "inLanguage": "en-ZA",
  "potentialAction": {
    "@type": "ContactAction",
    "target": "https://solarquench.com/contact",
    "name": "Request Solar Consultation"
  },
  "sameAs": [
    "https://www.facebook.com/solarquench",
    "https://www.instagram.com/solarquench",
    "https://www.linkedin.com/company/solarquench"
  ]
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEOHead
        title="SOLARQUENCH | Premium Solar Installations & Backup Power"
        description="Power your home or business with SOLARQUENCH. Custom solar, battery backup, and maintenance packages engineered for South African conditions."
        keywords="solar installation, battery backup, inverter, south africa solar company"
        url="https://solarquench.com/"
        structuredData={websiteSchema}
      />

      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
          <img src={heroImage} alt="Solar hero" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
          <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-3xl space-y-6">
              <Badge variant="secondary" className="bg-white/10 text-white backdrop-blur">
                Since 2015 • 2,500+ installations
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Power every moment with <span className="text-primary">SOLARQUENCH</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                Tailored solar and battery systems that slash energy costs, beat load-shedding, and protect your investment with full monitoring and support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                  <Link to="/quote">Get a Free Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white/40 hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link to="/gallery">View Projects</Link>
                </Button>
                <a
                  href="https://drive.google.com/uc?export=download&id=12oPT2OhgstRwYuBC54r0Mbf6hV3gkB_h"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-white text-primary font-semibold hover:bg-white/90">
                    Download our Business Profile
                  </Button>
                </a>
              </div>
              <div className="grid gap-2 text-white/90">
                {benefits.map((benefit) => (
                  <p key={benefit} className="flex items-center gap-2 text-sm md:text-base">
                    <Check className="h-4 w-4 text-accent" />
                    {benefit}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-semibold mb-4">
                Why Choose <span className="text-primary">SOLARQUENCH</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Leading the renewable energy revolution with cutting-edge technology and unmatched service.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title} className="h-full border-none shadow-lg bg-gradient-to-b from-white to-orange-50">
                  <CardContent className="p-6 space-y-4 text-center md:text-left">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
          <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold leading-tight text-slate-900">Complete Solar Solutions for Every Need</h2>
              <p className="text-lg text-muted-foreground">
                From residential homes to large commercial installations, we deliver end-to-end solar solutions that maximize your investment and minimize your carbon footprint.
              </p>
              <ul className="space-y-3 text-base text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> Free consultation and site assessment
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> Custom solar solutions tailored to your needs
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> 24/7 monitoring and support system
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> Clean, renewable energy for a better future
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> Professional installation by certified technicians
                </li>
              </ul>
              <Button size="lg" className="mt-4 w-fit bg-gradient-to-r from-orange-500 to-amber-400 text-white px-8" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <Card className="border-primary/30 shadow-lg">
              <CardContent className="p-8 space-y-6 text-center md:text-left">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-wide text-primary">Direct Support</p>
                  <h3 className="text-2xl font-semibold text-slate-900">Talk to our energy specialists</h3>
                  <p className="text-muted-foreground">
                    Share your requirements and we’ll prepare a tailored solar proposal backed by live performance data and clear ROI projections.
                  </p>
                </div>
                <div className="grid gap-4 text-left">
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Project enquiries</p>
                    <a href="mailto:modishane@solarquench.co.za" className="text-lg font-semibold text-slate-900 hover:text-primary transition-colors">
                      modishane@solarquench.co.za
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">General support</p>
                    <a href="mailto:info@solarquench.co.za" className="text-lg font-semibold text-slate-900 hover:text-primary transition-colors">
                      info@solarquench.co.za
                    </a>
                  </div>
                </div>
                <div className="grid gap-4">
                  {solutionHighlights.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                        <p className="text-xl font-semibold text-slate-900">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-4xl font-semibold text-slate-900">
                Value Added <span className="text-primary">Services</span>
              </h2>
              <p className="text-muted-foreground">Comprehensive support to keep your solar system running at peak performance.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {valueAddedServices.map((service) => (
                <div key={service.title} className="group relative">
                  <Card className="border border-orange-100 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <CardContent className="p-6 space-y-4 text-center">
                      <div className="mx-auto w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <p className="font-semibold text-slate-900">{service.title}</p>
                    </CardContent>
                  </Card>
                  <div className="pointer-events-none absolute left-1/2 bottom-full z-10 mb-3 w-full max-w-xs -translate-x-1/2 rounded-2xl border border-orange-100 bg-white p-4 text-sm text-slate-700 opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100">
                    {service.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-orange-500 to-amber-400 text-white" asChild>
                <Link to="/products">View All Packages →</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-orange-50/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Partner Network
              </Badge>
              <h2 className="text-4xl font-semibold">
                Trusted by <span className="text-primary">Industry Leaders</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We collaborate with the world&apos;s most innovative solar technology companies to ensure every SOLARQUENCH installation is future-proof, efficient, and supported globally.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {trustedVendors.map((vendor) => (
                <Card key={vendor.name} className="border border-border/70 shadow-sm hover:shadow-lg transition-all">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-b from-orange-200 to-orange-100 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-b from-orange-500 to-amber-400" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xl font-semibold text-slate-900">{vendor.name}</p>
                      <p className="text-sm text-muted-foreground">{vendor.descriptor}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center space-y-4 mb-10">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-4xl font-semibold text-slate-900">Everything you need to know</h2>
              <p className="text-lg text-muted-foreground">
                Answers sourced from Energy Gurus to help you plan your next solar investment with confidence.
              </p>
            </div>
            <Accordion type="single" collapsible className="bg-white rounded-3xl border border-orange-100 shadow-lg divide-y">
              {energyGurusFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className="px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
