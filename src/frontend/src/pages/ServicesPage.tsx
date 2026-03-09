import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useMetaTags } from "../hooks/useMetaTags";

const services = [
  {
    title: "Bond Cleaning",
    href: "/services/bond-cleaning",
    image:
      "/assets/generated/hero-bond-cleaning-sunshine-coast.dim_1200x600.jpg",
    alt: "Professional bond cleaning and end of lease cleaning on the Sunshine Coast by Tru Bond Cleaners",
    badge: "Most Popular",
    desc: "Our comprehensive end-of-lease bond clean follows the REIQ exit condition checklist exactly. We cover every room, surface and appliance so you walk out with your full bond in hand.",
    includes: [
      "Kitchen deep clean",
      "Bathroom & toilet scrub",
      "Carpet vacuuming",
      "Window cleaning",
      "Skirting boards",
      "Ceiling fans & lights",
    ],
  },
  {
    title: "Carpet Steam Cleaning",
    href: "/services/carpet-cleaning",
    image: "/assets/generated/carpet-cleaning-sunshine-coast.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning service Sunshine Coast by Tru Bond Cleaners",
    badge: "Add-On Available",
    desc: "We use professional hot-water extraction steam cleaning to lift deep stains, allergens and odours from your carpets. Perfect as a bond clean add-on or standalone service.",
    includes: [
      "Hot-water extraction",
      "Stain pre-treatment",
      "Deodorising",
      "Fast-drying",
      "All carpet types",
      "Pet stain removal",
    ],
  },
  {
    title: "Oven & Appliance Cleaning",
    href: "/services/oven-cleaning",
    image: "/assets/generated/oven-cleaning-sunshine-coast.dim_800x500.jpg",
    alt: "Oven and kitchen appliance deep cleaning Sunshine Coast by Tru Bond Cleaners",
    badge: "Included in Bond Clean",
    desc: "Baked-on grease doesn't stand a chance. We deep clean ovens, stovetops, rangehoods and dishwashers using professional-grade degreasers so they sparkle like new.",
    includes: [
      "Oven interior & racks",
      "Stovetop burners",
      "Rangehood filters",
      "Dishwasher interior",
      "Microwave inside/out",
      "All grease removed",
    ],
  },
  {
    title: "Bathroom & Toilet Cleaning",
    href: "/services/bathroom-cleaning",
    image: "/assets/generated/bathroom-cleaning-sunshine-coast.dim_800x500.jpg",
    alt: "Professional bathroom and toilet deep cleaning Sunshine Coast by Tru Bond Cleaners",
    badge: "Included in Bond Clean",
    desc: "Our bathroom specialists tackle soap scum, mould, limescale and grime. We scrub every tile, grout line, shower screen and toilet until everything sparkles.",
    includes: [
      "Tile & grout scrub",
      "Shower screen polish",
      "Mould removal",
      "Tap descaling",
      "Mirror shine",
      "Toilet disinfection",
    ],
  },
  {
    title: "Kitchen Cleaning",
    href: "/services/kitchen-cleaning",
    image: "/assets/generated/kitchen-cleaning-sunshine-coast.dim_800x500.jpg",
    alt: "Deep kitchen cleaning service Sunshine Coast by Tru Bond Cleaners",
    badge: "Included in Bond Clean",
    desc: "The kitchen is the toughest room in a bond clean. We tackle every surface — benchtops, cupboards inside and out, splashbacks, sink and more — with professional degreasers.",
    includes: [
      "Cupboards inside & out",
      "Benchtops & splashbacks",
      "Sink & taps",
      "Inside pantry",
      "Drawer runners",
      "Exhaust fan",
    ],
  },
  {
    title: "Window Cleaning",
    href: "/services/window-cleaning",
    image: "/assets/generated/window-cleaning-sunshine-coast.dim_800x500.jpg",
    alt: "Professional window cleaning service Sunshine Coast by Tru Bond Cleaners",
    badge: "Add-On Available",
    desc: "Streak-free, crystal-clear internal windows make a huge difference at inspection. We clean all internal window glass, sills and tracks to impress your property manager.",
    includes: [
      "All internal windows",
      "Window tracks & sills",
      "Fly screens",
      "Streak-free finish",
      "Blind dusting",
      "Sliding door tracks",
    ],
  },
];

export default function ServicesPage() {
  useMetaTags({
    title:
      "Bond Cleaning Services Sunshine Coast | Tru Sunshine Coast Bond Cleaners",
    description:
      "Explore our full range of bond cleaning services on the Sunshine Coast — end of lease cleaning, carpet steam cleaning, oven cleaning, bathroom cleaning and more.",
  });

  return (
    <>
      {/* Page Header */}
      <section className="section-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our Bond Cleaning Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            From full bond cleans to carpet steam cleaning — we cover every part
            of your rental property so nothing gets missed at inspection.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-brand-yellow text-brand-navy font-bold px-8 hover:bg-brand-yellow/90"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, idx) => (
              <div
                key={service.href}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-card h-72 ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-brand-yellow text-brand-navy text-xs font-bold px-3 py-1.5 rounded-full">
                    {service.badge}
                  </span>
                </div>
                <div
                  className={
                    idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <h2 className="font-display text-2xl md:text-3xl text-brand-navy font-bold mb-3">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {service.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.includes.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={service.href}>
                    <Button className="bg-brand-navy text-white hover:bg-brand-navy/90 font-bold">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-navy mb-4">
            Need All of the Above?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book our complete bond cleaning package and we'll take care of
            everything. One quote. One team. One guaranteed result.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-brand-navy text-white font-bold px-10 hover:bg-brand-navy/90"
            >
              Get Your Free Quote Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
