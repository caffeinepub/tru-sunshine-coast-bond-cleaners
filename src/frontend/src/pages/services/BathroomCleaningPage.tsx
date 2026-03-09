import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { useMetaTags } from "../../hooks/useMetaTags";

export default function BathroomCleaningPage() {
  useMetaTags({
    title: "Bathroom Cleaning Sunshine Coast | Bond Clean Bathrooms | Tru",
    description:
      "Sparkling bathrooms guaranteed. Our professional bathroom and toilet cleaning service on the Sunshine Coast gets you bond-ready.",
    ogImage:
      "/assets/generated/bathroom-cleaning-sunshine-coast.dim_800x500.jpg",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <img
          src="/assets/generated/bathroom-cleaning-sunshine-coast.dim_800x500.jpg"
          alt="Professional bathroom and toilet deep cleaning for bond inspection on the Sunshine Coast by Tru Bond Cleaners"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-yellow text-brand-navy text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              Included in Bond Clean
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
              Bathroom Cleaning Sunshine Coast
            </h1>
            <p className="text-white/85 text-lg mb-8 leading-relaxed">
              Sparkling tiles, streak-free mirrors and a spotless toilet — we
              make bathrooms and laundries bond-inspection ready.
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
                  Why Bathrooms Matter at Bond Inspections
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bathrooms and toilets are inspected very closely during bond
                  checks. Property managers look for soap scum on shower
                  screens, mould in the grout, limescale on taps and mirrors,
                  and anything less than a spotless toilet.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bathroom cleaning is one of the most physically demanding
                  parts of a bond clean. It requires the right products, the
                  right tools and the experience to know exactly where problem
                  areas hide — behind taps, in grout lines, under toilet rims
                  and around silicone seals.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our bathroom specialists take pride in making every bathroom
                  sparkle. We use commercial-grade products that cut through
                  soap scum, limescale, mould and watermarks in a fraction of
                  the time it takes to do it yourself.
                </p>
              </div>
              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-display font-bold text-brand-navy mb-4">
                  What We Clean
                </h3>
                <div className="space-y-3">
                  {[
                    "Shower tiles and grout lines",
                    "Shower screens (streak-free)",
                    "Bath and spa tub",
                    "Vanity and basin",
                    "Taps and fixtures (descaled)",
                    "Mirror (streak-free)",
                    "Toilet — bowl, seat, cistern and base",
                    "Exhaust fan cover",
                    "Towel rails and toilet roll holder",
                    "Floor tiles and grout",
                    "Mould and mildew removal",
                    "Laundry tub and surfaces",
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
                Tackling Soap Scum, Mould and Limescale
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Soap scum, mould and limescale are the three most common
                bathroom problems that cause bond deductions. Here's how we
                handle each one:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  [
                    "Soap Scum",
                    "We use Shower Power and similar commercial cleaners that dissolve soap scum and watermarks without scratching shower screens and tiles.",
                  ],
                  [
                    "Mould & Mildew",
                    "We apply anti-mould treatments to grout, silicone and ceiling areas to kill mould at the root and leave tiles bright and clean.",
                  ],
                  [
                    "Limescale",
                    "We use acid-based descalers on taps, shower heads and fixtures to remove hard water deposits and restore shine.",
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
                What Makes Our Bathroom Clean Different?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We go beyond the obvious. Many cleaning companies wipe surfaces
                without getting into the details. We clean the areas that get
                missed:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Behind and under the toilet",
                  "Inside toilet rim with brush and spray",
                  "Under vanity cabinet base",
                  "Around tap bases where mould hides",
                  "Grout lines with grout brush",
                  "Shower door tracks and seals",
                  "Exhaust fan cover (removed and washed)",
                  "Ceiling — mould spots and dust",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-background border border-border rounded-lg p-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-display text-2xl text-brand-navy font-bold mb-4">
                Number of Bathrooms and Pricing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bathroom cleaning is included in all our bond clean packages. If
                you need a standalone bathroom clean, contact us for a quote
                based on the number and condition of bathrooms:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  ["1 bathroom & toilet", "Included in bond clean"],
                  ["2 bathrooms & toilets", "Included in bond clean"],
                  ["3+ bathrooms", "Included in bond clean"],
                  ["Ensuite cleaning", "Included in bond clean"],
                ].map(([service, note]) => (
                  <div
                    key={service}
                    className="flex justify-between items-center bg-brand-light rounded-xl px-5 py-4"
                  >
                    <span className="font-medium text-brand-navy text-sm">
                      {service}
                    </span>
                    <span className="text-green-600 font-semibold text-sm">
                      {note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="section-gradient rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-white mb-3">
                Get Spotless Bathrooms for Your Inspection
              </h2>
              <p className="text-white/80 text-sm mb-6">
                Book your bond clean today. Our team handles every bathroom so
                you don't have to worry.
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
