import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { useMetaTags } from "../../hooks/useMetaTags";

export default function CarpetCleaningPage() {
  useMetaTags({
    title: "Carpet Steam Cleaning Sunshine Coast | Tru Bond Cleaners",
    description:
      "Get your carpets professionally steam cleaned on the Sunshine Coast. We remove stains, allergens and odours. Book your carpet clean today.",
    ogImage: "/assets/generated/carpet-cleaning-sunshine-coast.dim_800x500.jpg",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <img
          src="/assets/generated/carpet-cleaning-sunshine-coast.dim_800x500.jpg"
          alt="Professional carpet steam cleaning service on the Sunshine Coast by Tru Sunshine Coast Bond Cleaners"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-yellow text-brand-navy text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              Add-On Service
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
              Carpet Steam Cleaning Sunshine Coast
            </h1>
            <p className="text-white/85 text-lg mb-8 leading-relaxed">
              Deep steam cleaning that lifts stains, removes allergens and
              eliminates odours. Bond inspection ready carpets — guaranteed.
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
                  Why Steam Clean Your Carpets?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Carpets are one of the first things a property manager checks
                  at a bond inspection. Stains, pet odours, dirt buildup and
                  matted fibres can cost you hundreds of dollars from your bond.
                  Professional carpet steam cleaning fixes all of that.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use hot-water extraction steam cleaning — the most
                  effective carpet cleaning method available. Hot water is
                  injected deep into the carpet fibres at high pressure,
                  breaking up embedded dirt, allergens and bacteria. Then a
                  powerful vacuum extracts everything out.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The result? Carpets that look and smell fresh — and meet even
                  the strictest property manager's expectations. Our steam
                  cleaning is suitable for all carpet types including wool,
                  nylon, polyester and polypropylene.
                </p>
              </div>
              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-display font-bold text-brand-navy mb-4">
                  What We Clean
                </h3>
                <div className="space-y-3">
                  {[
                    "All bedroom carpets",
                    "Living room and lounge carpets",
                    "Hallway and stair carpets",
                    "Carpet runners",
                    "Pre-treatment for tough stains",
                    "Pet urine and odour treatment",
                    "Deodorising treatment",
                    "All carpet types and colours",
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
                Our Carpet Cleaning Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  [
                    "Step 1: Pre-Inspection",
                    "We check your carpets for stains, damage and areas needing special treatment before we start.",
                  ],
                  [
                    "Step 2: Pre-Spray & Pre-Treatment",
                    "We apply professional pre-spray to break down dirt and treat tough stains like red wine, coffee and pet urine.",
                  ],
                  [
                    "Step 3: Hot-Water Extraction",
                    "Our industrial steam cleaning machine injects hot water deep into the fibres and extracts everything with powerful suction.",
                  ],
                  [
                    "Step 4: Deodorising",
                    "We apply a fresh deodoriser to leave your carpets smelling clean and neutral — perfect for bond inspections.",
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
                Carpet Cleaning Stains We Remove
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We treat a wide variety of carpet stains using
                professional-grade products. Common stains our team successfully
                removes include:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Red wine & juice stains",
                  "Coffee & tea marks",
                  "Pet urine & faeces",
                  "Mud & dirt tracks",
                  "Grease & oil spots",
                  "Ink & pen marks",
                  "Food & sauce stains",
                  "Blood stains",
                  "Rust & mineral stains",
                ].map((stain) => (
                  <div
                    key={stain}
                    className="flex items-center gap-2 bg-background border border-border rounded-lg px-3 py-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-sm">{stain}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <em>
                  Note: Some stains (especially older dye-based stains) may not
                  be fully removable. We'll always advise you on realistic
                  expectations before we start.
                </em>
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-display text-2xl text-brand-navy font-bold mb-4">
                Carpet Cleaning Pricing on the Sunshine Coast
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our carpet steam cleaning prices are based on the size of your
                property. Here are general guidelines for the Sunshine Coast:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  ["1–2 bedrooms", "From $80"],
                  ["3 bedrooms", "From $120"],
                  ["4 bedrooms", "From $160"],
                  ["5+ bedrooms", "From $200"],
                ].map(([size, price]) => (
                  <div
                    key={size}
                    className="flex justify-between items-center bg-brand-light rounded-xl px-5 py-4"
                  >
                    <span className="font-medium text-brand-navy text-sm">
                      {size}
                    </span>
                    <span className="font-bold text-brand-navy">{price}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Bundle carpet steam cleaning with your bond clean and save
                money. Ask us about our combo packages when you get your quote.
              </p>
            </div>

            {/* CTA */}
            <div className="section-gradient rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-white mb-3">
                Book Your Carpet Steam Clean Today
              </h2>
              <p className="text-white/80 text-sm mb-6">
                Available as a standalone service or combined with your bond
                clean. Get a free quote now.
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
