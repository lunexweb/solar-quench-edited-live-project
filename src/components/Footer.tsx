import { Mail, Phone, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1CfiG55hgU/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/solar_quench?utm_source=qr&igsh=MWRyMGEyMHkzYTZuZA==", label: "Instagram" },
  ];

  return (
    <footer
      className="bg-secondary text-secondary-foreground pt-8 pb-20 sm:py-10 relative z-10 mt-auto"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-secondary/95 p-6 sm:p-8 shadow-lg shadow-black/15">
          <div className="flex flex-col gap-6 text-center md:text-left">
            {/* Logo + Socials */}
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-secondary-foreground/10">
                  <img
                    src="https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760962192/WhatsApp_Image_2025-10-17_at_07.25.35_jynxa8.jpg"
                    alt="SOLARQUENCH Logo"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  SOLARQUENCH
                </span>
              </div>

              <div className="flex items-center justify-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary-foreground/10 hover:bg-primary/20 text-secondary-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@solarquench.co.za"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors hover:underline break-all sm:break-normal"
                >
                  info@solarquench.co.za
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+27712345678"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors hover:underline whitespace-nowrap"
                >
                  +27 71 234 5678
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80 whitespace-nowrap">Mon–Fri 7–5</span>
              </div>
            </div>

            <div className="border-t border-secondary-foreground/10 pt-4 text-center md:text-left">
              <p className="text-xs sm:text-sm text-secondary-foreground/70">
                © {currentYear} SOLARQUENCH · All rights reserved ·{" "}
                <a
                  href="https://www.lunexweb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors font-semibold hover:underline"
                >
                  Built by LUNEXWEB
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

