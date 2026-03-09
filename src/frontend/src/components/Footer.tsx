import { Link } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img
                src="/assets/generated/logo-transparent.dim_400x120.png"
                alt="Tru Sunshine Coast Bond Cleaners"
                className="h-10 w-auto mb-4"
                width={400}
                height={120}
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Sunshine Coast's most trusted bond cleaners. We help tenants get
              their full bond back — guaranteed.
            </p>
            <a
              href="https://wa.me/61488841883?text=Hi%2C%20I%27d%20like%20a%20bond%20cleaning%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp 0488 841 883
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-brand-yellow mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Our Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-brand-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-bold text-brand-yellow mb-4 text-sm uppercase tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Bond Cleaning", href: "/services/bond-cleaning" },
                {
                  label: "Carpet Steam Cleaning",
                  href: "/services/carpet-cleaning",
                },
                {
                  label: "Oven & Appliance Cleaning",
                  href: "/services/oven-cleaning",
                },
                {
                  label: "Bathroom Cleaning",
                  href: "/services/bathroom-cleaning",
                },
                {
                  label: "Kitchen Cleaning",
                  href: "/services/kitchen-cleaning",
                },
                { label: "Window Cleaning", href: "/services/window-cleaning" },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-white/70 hover:text-brand-yellow transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div>
            <h3 className="font-display font-bold text-brand-yellow mb-4 text-sm uppercase tracking-wide">
              Service Areas
            </h3>
            <div className="flex items-start gap-2 mb-4">
              <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
              <p className="text-white/70 text-sm leading-relaxed">
                Sunshine Coast · Noosa · Caloundra · Maroochydore · Buderim ·
                Kawana · Mooloolaba
              </p>
            </div>
            <div className="flex items-start gap-2 mb-4">
              <Clock className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
              <div className="text-white/70 text-sm leading-relaxed">
                <p>Mon–Sat: 7am–6pm</p>
                <p>Sun: 8am–4pm</p>
              </div>
            </div>
            <a
              href="tel:0488841883"
              className="text-brand-yellow hover:text-brand-yellow/80 font-semibold text-sm transition-colors"
            >
              0488 841 883
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {currentYear} Tru Sunshine Coast Bond Cleaners. All rights
            reserved.
          </p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-brand-yellow transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
