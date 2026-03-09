import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { useMetaTags } from "../../hooks/useMetaTags";

export default function KitchenCleaningPage() {
  useMetaTags({
    title: "Kitchen Cleaning Sunshine Coast | Bond Ready Kitchens | Tru",
    description:
      "Deep kitchen cleaning on the Sunshine Coast. Benchtops, cupboards, sink, splashbacks — we make your kitchen spotless for your bond inspection.",
    ogImage:
      "/assets/generated/kitchen-cleaning-sunshine-coast.dim_800x500.jpg",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <img
          src="/assets/generated/kitchen-cleaning-sunshine-coast.dim_800x500.jpg"
          alt="Professional kitchen deep cleaning service on the Sunshine Coast by Tru Sunshine Coast Bond Cleaners"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-yellow text-brand-navy text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              Included in Bond Clean
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
              Kitchen Cleaning Sunshine Coast
            </h1>
            <p className="text-white/85 text-lg mb-8 leading-relaxed">
              The kitchen is the hardest room to clean in a bond situation. We
              tackle every surface, cupboard, drawer and appliance with
              professional degreasers.
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
                  Why the Kitchen is the Hardest Room to Clean
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The kitchen is the most used room in a home — and the one that
                  accumulates the most grease, grime and food residue over time.
                  During a bond inspection, property managers check every
                  surface: inside and outside cupboards, behind the stove, under
                  the range hood and inside drawers.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Splashback grease, sticky cupboard handles, dirty drawer
                  runners and build-up behind the bin are all common reasons
                  tenants lose part of their bond. Our kitchen cleaning team
                  knows exactly where to look and has the professional-grade
                  products to make everything spotless.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We clean every surface methodically — working from the top
                  down so nothing gets re-dirtied. By the time we're done, your
                  kitchen will meet the strictest real estate inspection
                  standard.
                </p>
              </div>
              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-display font-bold text-brand-navy mb-4">
                  What We Clean
                </h3>
                <div className="space-y-3">
                  {[
                    "All cupboards — inside and outside surfaces",
                    "Cupboard handles and door edges",
                    "Benchtops and counters",
                    "Splashback tiles and grout",
                    "Sink and tap descaling",
                    "Dishwasher interior and filter",
                    "Inside pantry shelves",
                    "Drawer runners and interiors",
                    "Rangehood exterior, filters and interior",
                    "Exhaust fan cover",
                    "Window sill in kitchen",
                    "Bin cabinet and surrounds",
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
                Kitchen Cleaning — Our Approach
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We follow a top-down, systematic approach to kitchen cleaning.
                Every cleaner follows the same process to make sure nothing is
                missed:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  [
                    "Top-Down Method",
                    "We clean from ceiling to floor — rangehood, then cupboards, then benchtops, then appliances, then floors — so dust and drips fall down and get cleaned up last.",
                  ],
                  [
                    "Professional Degreasers",
                    "We use commercial degreasers on splashbacks, stovetops and rangehoods to cut through years of built-up cooking grease quickly and effectively.",
                  ],
                  [
                    "Inside Every Cupboard",
                    "Every shelf, drawer and cupboard interior gets wiped down — including the ones you forgot had food spills hiding in them.",
                  ],
                  [
                    "Detailed Check",
                    "After cleaning, we do a final walkthrough against the REIQ checklist to make sure everything is ready for your property manager's inspection.",
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
                Common Kitchen Issues We Fix
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                After years of cooking, kitchens accumulate problems that most
                tenants don't notice until inspection day. We fix all of these:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Greasy rangehood interior",
                  "Blocked rangehood filters",
                  "Sticky cupboard interiors",
                  "Stained benchtops",
                  "Grease on splashbacks",
                  "Grimy sink and drain",
                  "Mould under sink",
                  "Dirty dishwasher seals",
                  "Food residue in drawers",
                ].map((issue) => (
                  <div
                    key={issue}
                    className="flex items-center gap-2 bg-background border border-border rounded-lg px-3 py-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-sm">{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-display text-2xl text-brand-navy font-bold mb-4">
                Kitchen Cleaning — Part of Every Bond Clean Package
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A full kitchen clean is included in all our bond cleaning
                packages. We never cut corners on the kitchen because we know
                it's the most scrutinised room at inspection. From a tiny studio
                to a large family home — we give every kitchen the same thorough
                treatment. When you book a bond clean with Tru Sunshine Coast
                Bond Cleaners, you get a kitchen cleaned to the highest possible
                standard with our 100% satisfaction guarantee backing every job.
              </p>
            </div>

            {/* CTA */}
            <div className="section-gradient rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-white mb-3">
                Ready for a Spotless Kitchen?
              </h2>
              <p className="text-white/80 text-sm mb-6">
                Book your bond clean and let us take care of the kitchen — the
                hardest room — so you don't have to.
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
