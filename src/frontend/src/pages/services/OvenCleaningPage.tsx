import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { useMetaTags } from "../../hooks/useMetaTags";

export default function OvenCleaningPage() {
  useMetaTags({
    title: "Oven Cleaning Sunshine Coast | Appliance Deep Clean | Tru",
    description:
      "Professional oven cleaning on the Sunshine Coast. We deep clean ovens, stovetops and rangehoods so they sparkle. Book today.",
    ogImage: "/assets/generated/oven-cleaning-sunshine-coast.dim_800x500.jpg",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <img
          src="/assets/generated/oven-cleaning-sunshine-coast.dim_800x500.jpg"
          alt="Professional oven and kitchen appliance deep cleaning service on the Sunshine Coast by Tru Sunshine Coast Bond Cleaners"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-yellow text-brand-navy text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              Included in Bond Clean
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
              Oven & Appliance Cleaning Sunshine Coast
            </h1>
            <p className="text-white/85 text-lg mb-8 leading-relaxed">
              Baked-on grease and carbon buildup doesn't stand a chance. We make
              ovens, stovetops and rangehoods look brand new.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-brand-yellow text-brand-navy font-bold px-8 hover:bg-brand-yellow/90"
                >
                  Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:0488841883">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-bold"
                >
                  <Phone className="mr-2 w-4 h-4" /> Call 0488 841 883
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-brand-navy font-bold mb-4">
                  Why Oven Cleaning Matters for Your Bond
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The oven is one of the most carefully inspected items during a
                  bond check. Property managers and landlords open the oven door
                  and look inside — if they see baked-on grease, carbon buildup
                  or dirty racks, it's an immediate mark against you.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Many tenants try to clean the oven themselves, but DIY
                  cleaning rarely achieves the standard required for a bond
                  return. Baked-on carbon and grease can take hours to remove
                  and requires professional-grade degreasers and techniques to
                  do properly.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our oven cleaning team uses commercial-strength degreasers
                  that soak through carbon buildup, making it easy to wipe away.
                  We dismantle oven racks, door seals and burner covers to clean
                  everything thoroughly — including the bits most people miss.
                </p>
              </div>
              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-display font-bold text-brand-navy mb-4">
                  What We Clean
                </h3>
                <div className="space-y-3">
                  {[
                    "Oven interior walls and base",
                    "Oven door glass (inside and out)",
                    "Oven racks and trays",
                    "Oven door seal and hinge",
                    "Stovetop and burner grates",
                    "Rangehood exterior and filters",
                    "Rangehood fan and interior",
                    "Dishwasher interior and filter",
                    "Microwave inside and out",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-brand-light rounded-2xl p-8 mb-12">
              <h2 className="font-display text-2xl text-brand-navy font-bold mb-4">
                Our Oven Cleaning Method
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We don't use harmful fumes or harsh chemicals that can damage
                your oven. Instead, we use a professional two-step process:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  [
                    "Step 1: Degrease & Soak",
                    "We apply professional-grade degreaser to all surfaces and let it soak in to break down baked-on carbon and grease.",
                  ],
                  [
                    "Step 2: Scrub & Wipe",
                    "We use specialised scrapers and non-scratch scourers to remove stubborn buildup without scratching surfaces.",
                  ],
                  [
                    "Step 3: Polish & Inspect",
                    "We wipe everything down with clean cloths, polish the glass and do a final inspection to make sure it's spotless.",
                  ],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="bg-white rounded-xl p-5 shadow-xs"
                  >
                    <h4 className="font-bold text-brand-navy text-sm mb-2">
                      {title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-display text-2xl text-brand-navy font-bold mb-4">
                Common Oven Cleaning Problems We Fix
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No matter how bad the oven looks, our team has seen worse and
                fixed it. We regularly deal with:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Years of baked-on carbon",
                  "Burnt food spills",
                  "Grease-coated rangehood",
                  "Clogged range filters",
                  "Rust spots on racks",
                  "Mouldy door seals",
                  "Filthy oven glass",
                  "Grimy stovetop burners",
                  "Sticky drip pans",
                ].map((problem) => (
                  <div
                    key={problem}
                    className="flex items-center gap-2 bg-background border border-border rounded-lg px-3 py-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-sm">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-display text-2xl text-brand-navy font-bold mb-4">
                Oven Cleaning Pricing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Oven cleaning is included in our full bond clean packages. If
                you need a standalone oven clean, here are our prices:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  ["Single oven (standard)", "From $60"],
                  ["Double oven", "From $90"],
                  ["Stovetop clean", "From $30"],
                  ["Rangehood deep clean", "From $40"],
                ].map(([service, price]) => (
                  <div
                    key={service}
                    className="flex justify-between items-center bg-brand-light rounded-xl px-5 py-4"
                  >
                    <span className="font-medium text-brand-navy text-sm">
                      {service}
                    </span>
                    <span className="font-bold text-brand-navy">{price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="section-gradient rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-white mb-3">
                Book Your Oven Clean Today
              </h2>
              <p className="text-white/80 text-sm mb-6">
                Get a spotless oven ready for your bond inspection. Book online
                or call us now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-brand-yellow text-brand-navy font-bold px-8 hover:bg-brand-yellow/90"
                  >
                    Book Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:0488841883">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-bold"
                  >
                    <Phone className="mr-2 w-4 h-4" /> 0488 841 883
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
