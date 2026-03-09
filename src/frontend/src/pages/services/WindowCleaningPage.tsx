import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { useMetaTags } from "../../hooks/useMetaTags";

export default function WindowCleaningPage() {
  useMetaTags({
    title: "Window Cleaning Sunshine Coast | Streak-Free Windows | Tru",
    description:
      "Crystal-clear windows for your bond inspection. Professional window cleaning on the Sunshine Coast by Tru Bond Cleaners.",
    ogImage: "/assets/generated/window-cleaning-sunshine-coast.dim_800x500.jpg",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <img
          src="/assets/generated/window-cleaning-sunshine-coast.dim_800x500.jpg"
          alt="Professional streak-free window cleaning for bond inspection on the Sunshine Coast by Tru Bond Cleaners"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-yellow text-brand-navy text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              Available as Add-On
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
              Window Cleaning Sunshine Coast
            </h1>
            <p className="text-white/85 text-lg mb-8 leading-relaxed">
              Crystal-clear, streak-free windows make a huge first impression at
              bond inspection. We clean all internal windows, sills and tracks
              to perfection.
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
                  Why Window Cleaning Matters for Your Bond
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Windows are one of the first things you notice when you walk
                  into a room. Dirty windows, streaky glass and grimy tracks
                  make the whole property look unkempt — even if everything else
                  is spotless.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At bond inspection, property managers check window glass,
                  window tracks and sills for dirt, fingerprints, insect marks
                  and residue. Grimy window tracks filled with dust and dead
                  insects are a common reason for bond deductions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our window cleaning team uses professional squeegees, pure
                  water systems and microfibre cloths to achieve streak-free,
                  crystal-clear glass every time. We also vacuum and wipe all
                  window tracks to remove accumulated grit, dust and grime.
                </p>
              </div>
              <div className="bg-brand-light rounded-2xl p-6">
                <h3 className="font-display font-bold text-brand-navy mb-4">
                  What We Clean
                </h3>
                <div className="space-y-3">
                  {[
                    "All internal window glass",
                    "Window frames and edges",
                    "Window sills (inside)",
                    "Window tracks (vacuumed and wiped)",
                    "Fly screens (removed, cleaned, replaced)",
                    "Sliding door glass and tracks",
                    "Sliding door frames",
                    "Blind dusting (if present)",
                    "Internal door glass panels",
                    "French door glass panels",
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
                Our Window Cleaning Method
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We follow a three-step process to guarantee streak-free results
                on every window:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  [
                    "Step 1: Pre-Clean",
                    "We remove dust, cobwebs and debris from frames and sills using a dry brush and vacuum before applying any liquid.",
                  ],
                  [
                    "Step 2: Wash & Squeegee",
                    "We apply professional window cleaning solution and use a high-quality squeegee to remove all liquid in smooth, overlapping strokes.",
                  ],
                  [
                    "Step 3: Detail & Track Clean",
                    "We detail the edges with a clean microfibre cloth and vacuum window tracks thoroughly to remove all grit and dead insects.",
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
                The Window Cleaning Problems We Solve
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sunshine Coast's coastal location means windows get salt haze,
                insect marks and weather staining more than inland properties.
                We fix all common window cleaning problems including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Salt haze and water spots",
                  "Insect marks and dust",
                  "Fingerprints on glass",
                  "Paint overspray marks",
                  "Sticker residue on glass",
                  "Oxidised window frames",
                  "Grit-filled tracks",
                  "Torn or dirty fly screens",
                  "Mouldy window seals",
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
                Window Cleaning Pricing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Internal window cleaning is included in our full bond clean
                packages. Standalone window cleaning and external window
                cleaning are available as separate services:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  ["Internal windows (1–2 bed)", "Included in bond clean"],
                  ["Internal windows (3–4 bed)", "Included in bond clean"],
                  ["External windows (add-on)", "From $60"],
                  ["Full house internal & external", "From $100"],
                ].map(([service, price]) => (
                  <div
                    key={service}
                    className="flex justify-between items-center bg-brand-light rounded-xl px-5 py-4"
                  >
                    <span className="font-medium text-brand-navy text-sm">
                      {service}
                    </span>
                    <span
                      className={`font-semibold text-sm ${price.includes("Included") ? "text-green-600" : "text-brand-navy font-bold"}`}
                    >
                      {price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="section-gradient rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-white mb-3">
                Get Crystal-Clear Windows for Your Inspection
              </h2>
              <p className="text-white/80 text-sm mb-6">
                Book your bond clean today. We'll make every window sparkle for
                your property manager.
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
