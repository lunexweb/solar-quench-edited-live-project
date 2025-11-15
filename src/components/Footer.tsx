import { Mail, Phone, Clock } from "lucide-react";

const FacebookLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" role="img" aria-hidden="true">
    <path
      d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.692V11.08h3.128V8.41c0-3.1 1.893-4.79 4.658-4.79 1.324 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.765v2.312h3.59l-.467 3.626h-3.123V24h6.127C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z"
      fill="#1877F2"
    />
  </svg>
);

const InstagramLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" role="img" aria-hidden="true">
    <defs>
      <radialGradient id="footerIgGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4 24) rotate(-45) scale(34)">
        <stop offset="0%" stopColor="#FEDA75" />
        <stop offset="25%" stopColor="#FA7E1E" />
        <stop offset="50%" stopColor="#D62976" />
        <stop offset="75%" stopColor="#962FBF" />
        <stop offset="100%" stopColor="#4F5BD5" />
      </radialGradient>
    </defs>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" fill="url(#footerIgGrad)" />
    <path
      d="M12 8.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5m0-2A5.5 5.5 0 1 0 17.5 12 5.5 5.5 0 0 0 12 6.5Zm5.75-.25a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 17.75 6.25Z"
      fill="#fff"
    />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FacebookLogo />, href: "https://www.facebook.com/share/1CfiG55hgU/", label: "Facebook" },
    { icon: <InstagramLogo />, href: "https://www.instagram.com/solar_quench?utm_source=qr&igsh=MWRyMGEyMHkzYTZuZA==", label: "Instagram" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground pt-8 pb-20 sm:py-10 relative z-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-secondary/95 p-6 sm:p-8 shadow-lg shadow-black/15">
          <div className="flex flex-col gap-6 text-center md:text-left">
            {/* Logo + Socials */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-8">
              <div className="flex items-center gap-3 justify-center md:justify-start">
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

              <div className="flex flex-wrap items-center justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/30 bg-transparent text-white hover:text-primary transition-transform duration-300 hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:justify-between">
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

