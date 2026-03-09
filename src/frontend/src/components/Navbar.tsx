import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const services = [
  { name: "Bond Cleaning", href: "/services/bond-cleaning" },
  { name: "Carpet Steam Cleaning", href: "/services/carpet-cleaning" },
  { name: "Oven & Appliance Cleaning", href: "/services/oven-cleaning" },
  { name: "Bathroom Cleaning", href: "/services/bathroom-cleaning" },
  { name: "Kitchen Cleaning", href: "/services/kitchen-cleaning" },
  { name: "Window Cleaning", href: "/services/window-cleaning" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-navy shadow-navy">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0"
            data-ocid="nav.home.link"
          >
            <img
              src="/assets/generated/logo-transparent.dim_400x120.png"
              alt="Tru Sunshine Coast Bond Cleaners logo"
              className="h-10 md:h-12 w-auto"
              width={400}
              height={120}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-white/90 hover:text-brand-yellow transition-colors rounded-md"
              data-ocid="nav.home.link"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-brand-yellow transition-colors rounded-md"
                data-ocid="nav.services.link"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-card-hover border border-border py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-brand-navy/5 hover:text-brand-navy transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-border mt-2 pt-2">
                    <Link
                      to="/services"
                      className="block px-4 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-navy/5 transition-colors"
                    >
                      All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="px-4 py-2 text-sm font-medium text-white/90 hover:text-brand-yellow transition-colors rounded-md"
              data-ocid="nav.about.link"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium text-white/90 hover:text-brand-yellow transition-colors rounded-md"
              data-ocid="nav.contact.link"
            >
              Contact
            </Link>
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0488841883"
              className="flex items-center gap-2 text-sm text-white/90 hover:text-brand-yellow transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              0488 841 883
            </a>
            <Link to="/contact">
              <Button
                className="bg-brand-yellow text-brand-navy font-bold hover:bg-brand-yellow/90 transition-all shadow-sm"
                data-ocid="nav.quote.button"
              >
                Get a Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white hover:text-brand-yellow transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-navy-dark border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-white hover:text-brand-yellow hover:bg-white/5 rounded-md transition-colors font-medium"
              data-ocid="nav.home.link"
            >
              Home
            </Link>

            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between px-4 py-3 text-white hover:text-brand-yellow hover:bg-white/5 rounded-md transition-colors font-medium text-left"
              data-ocid="nav.services.link"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="ml-4 flex flex-col gap-1 border-l-2 border-brand-yellow/40 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 text-sm text-white/80 hover:text-brand-yellow transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-white hover:text-brand-yellow hover:bg-white/5 rounded-md transition-colors font-medium"
              data-ocid="nav.about.link"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-white hover:text-brand-yellow hover:bg-white/5 rounded-md transition-colors font-medium"
              data-ocid="nav.contact.link"
            >
              Contact
            </Link>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:0488841883"
                className="flex items-center gap-2 px-4 py-3 text-white/90 hover:text-brand-yellow transition-colors font-medium"
              >
                <Phone className="w-4 h-4" />
                0488 841 883
              </a>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <Button
                  className="w-full bg-brand-yellow text-brand-navy font-bold hover:bg-brand-yellow/90"
                  data-ocid="nav.quote.button"
                >
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
