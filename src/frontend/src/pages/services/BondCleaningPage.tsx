import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Shield } from "lucide-react";
import { useMetaTags } from "../../hooks/useMetaTags";

const included = [
  "Kitchen — oven, stovetop, rangehood, cupboards inside & out, benchtops, splashbacks, sink",
  "Bathrooms — tiles, grout, shower screens, taps, mirrors, toilet bowl and cistern",
  "Living areas & bedrooms — skirting boards, light switches, spot-clean walls",
  "Ceiling fans, light fittings and air vent covers",
  "All internal windows, window sills and tracks",
  "Vacuum all carpets and mop all hard floors",
  "Laundry — clean tub, wipe surfaces, lint filter",
  "Garage — sweep floor, remove cobwebs",
];

export default function BondCleaningPage() {
  useMetaTags({
    title: "Bond Cleaning Sunshine Coast | End of Lease Cleaning | Tru",
    description:
      "Professional bond cleaning on the Sunshine Coast with a 100% bond back guarantee. We follow the real estate exit checklist. Book online today.",
    ogImage:
      "/assets/generated/hero-bond-cleaning-sunshine-coast.dim_1200x600.jpg",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <img
          src="/assets/generated/hero-bond-cleaning-sunshine-coast.dim_1200x600.jpg"
          alt="Professional bond cleaning and end of lease cleaning service on the Sunshine Coast, QLD — Tru Sunshine Coast Bond Cleaners"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-yellow text-brand-navy text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              Most Popular Service
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
              Bond Cleaning Sunshine Coast
            </h1>
            <p className="text-white/85 text-lg mb-8 leading-relaxed">
              Professional end of lease cleaning with a 100% bond back
              guarantee. We follow the REIQ exit condition checklist so your
              property manager is happy and you get every dollar back.
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
            {/* Intro */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-brand-navy font-bold mb-4">
                What is Bond Cleaning?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Bond cleaning — also called end of lease cleaning or exit
                cleaning — is a thorough, top-to-bottom clean of your rental
                property when you move out. In Queensland, landlords and
                property managers use the REIQ exit condition checklist to
                inspect the property. If the place isn't up to standard, they
                can claim money from your bond to pay for professional cleaning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your bond is usually four weeks' rent — that's a significant
                chunk of money. A professional bond clean from Tru Sunshine
                Coast Bond Cleaners protects that money by making sure every
                single thing on the checklist gets done properly.
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-brand-light rounded-2xl p-8 mb-12">
              <h2 className="font-display text-2xl text-brand-navy font-bold mb-6">
                What's Included in Our Bond Clean?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {included.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-brand-navy font-bold mb-6">
                Why Choose Tru Sunshine Coast Bond Cleaners?
              </h2>
              <div className="space-y-4">
                {[
                  [
                    "100% Bond Back Guarantee",
                    "We back every clean with our satisfaction guarantee. If your property manager raises concerns, we come back within 72 hours and fix it for free.",
                  ],
                  [
                    "REIQ Checklist Compliant",
                    "We follow the Real Estate Institute of Queensland exit condition checklist exactly — the same checklist your property manager uses at inspection.",
                  ],
                  [
                    "Experienced Local Team",
                    "Our cleaners are Sunshine Coast locals who know what regional real estate agents look for. We've completed hundreds of successful bond cleans.",
                  ],
                  [
                    "Fully Insured",
                    "We carry full public liability insurance so you're protected on every job.",
                  ],
                  [
                    "Upfront Fixed Pricing",
                    "We give you a written quote before we start. No hidden fees. No surprise charges.",
                  ],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="flex gap-4 items-start border border-border rounded-xl p-5 bg-background"
                  >
                    <Shield className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-brand-navy mb-1">
                        {title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-brand-navy text-white rounded-2xl p-8 mb-12">
              <h2 className="font-display text-2xl font-bold mb-2">
                Bond Clean Pricing Guide
              </h2>
              <p className="text-white/70 text-sm mb-6">
                Sunshine Coast pricing. All prices are approximate — contact us
                for an exact quote.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  ["Studio / 1-bedroom unit", "From $180"],
                  ["2-bedroom unit or house", "From $280"],
                  ["3-bedroom house", "From $380"],
                  ["4-bedroom house", "From $450"],
                ].map(([size, price]) => (
                  <div
                    key={size}
                    className="flex justify-between items-center bg-white/10 rounded-xl px-5 py-4"
                  >
                    <span className="text-white/90 text-sm">{size}</span>
                    <span className="font-bold text-brand-yellow">{price}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-xs mt-4">
                * Carpet steam cleaning, garage cleaning and wall washing are
                available as add-ons.
              </p>
            </div>

            {/* How it Works */}
            <div className="mb-12">
              <h2 className="font-display text-2xl text-brand-navy font-bold mb-6">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  [
                    "1",
                    "Book Online or Call Us",
                    "Fill in our simple online form or call 0488 841 883. Tell us your property size and preferred cleaning date.",
                  ],
                  [
                    "2",
                    "Get a Free Written Quote",
                    "We'll send you a clear, itemised quote within hours. No hidden fees.",
                  ],
                  [
                    "3",
                    "We Clean to Perfection",
                    "Our experienced team arrives on time and cleans every inch of your property to the REIQ checklist standard.",
                  ],
                  [
                    "4",
                    "Pass Your Inspection",
                    "If your property manager finds anything, we come back within 72 hours and fix it — free of charge.",
                  ],
                ].map(([step, title, desc]) => (
                  <div key={step} className="flex gap-5 items-start">
                    <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center font-display font-bold text-brand-navy shrink-0">
                      {step}
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-navy mb-1">
                        {title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="section-gradient rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-white mb-3">
                Ready to Book Your Bond Clean?
              </h2>
              <p className="text-white/80 text-sm mb-6">
                Get a free, no-obligation quote today. We're available Mon–Sat
                7am–6pm, Sun 8am–4pm.
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
