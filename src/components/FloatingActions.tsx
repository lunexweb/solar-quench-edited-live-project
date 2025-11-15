import { Phone, MessageCircle, FileDown } from "lucide-react";
import { useState } from "react";

const FloatingActions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+27786359549";
  };

  const handleWhatsApp = () => {
    const phoneNumber = "27786359549";
    const message = encodeURIComponent("Hi! I'm interested in SOLARQUENCH solar solutions.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 sm:bottom-8 right-4 sm:right-8 z-40 flex flex-col items-end gap-4">
      <div className="flex flex-col gap-3">
        <button
          onClick={handleWhatsApp}
          className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-fade-in"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <div className="absolute right-16 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-medium hidden sm:block">
            Chat on WhatsApp
          </div>
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        </button>

        <button
          onClick={handleCall}
          className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-fade-in"
          style={{ animationDelay: "100ms" }}
          aria-label="Call us now"
        >
          <Phone className="w-6 h-6 text-primary-foreground" />
          <div className="absolute right-16 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-medium hidden sm:block">
            Call Us Now
          </div>
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
        </button>

        <a
          href="https://drive.google.com/uc?export=download&id=12oPT2OhgstRwYuBC54r0Mbf6hV3gkB_h"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-fade-in"
          style={{ animationDelay: "200ms" }}
          aria-label="Download our profile"
        >
          <FileDown className="w-6 h-6 text-white" />
          <div className="absolute right-16 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-medium hidden sm:block">
            Download Profile
          </div>
          <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-20" />
        </a>
      </div>
    </div>
  );
};

export default FloatingActions;
