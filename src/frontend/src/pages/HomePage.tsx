import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  DollarSign,
  Leaf,
  Phone,
  Shield,
  Sparkles,
  Star,
} from "lucide-react";
import { useMetaTags } from "../hooks/useMetaTags";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Sunshine Coast Bond Cleaners",
  description:
    "Professional bond cleaning and end of lease cleaning on the Sunshine Coast, QLD",
  url: "https://trubondcleaningbrisbane.com",
  telephone: "0488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sunshine Coast",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  areaServed: "Sunshine Coast",
  serviceType: "Bond Cleaning",
};

const services = [
  {
    title: "Bond Cleaning",
    href: "/services/bond-cleaning",
    image:
      "/assets/generated/hero-bond-cleaning-sunshine-coast.dim_1200x600.jpg",
    alt: "Professional bond cleaning service on the Sunshine Coast by Tru Bond Cleaners",
    desc: "Full end-of-lease clean following the real estate exit checklist. 100% bond back guarantee.",
  },
  {
    title: "Carpet Steam Cleaning",
    href: "/services/carpet-cleaning",
    image: "/assets/generated/carpet-cleaning-sunshine-coast.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Sunshine Coast by Tru Bond Cleaners",
    desc: "Deep steam clean that removes stains, allergens and odours from your carpets.",
  },
  {
    title: "Oven & Appliance Cleaning",
    href: "/services/oven-cleaning",
    image: "/assets/generated/oven-cleaning-sunshine-coast.dim_800x500.jpg",
    alt: "Oven and appliance deep cleaning service Sunshine Coast by Tru Bond Cleaners",
    desc: "We make your oven, stovetop and rangehood sparkle like brand new.",
  },
  {
    title: "Bathroom Cleaning",
    href: "/services/bathroom-cleaning",
    image: "/assets/generated/bathroom-cleaning-sunshine-coast.dim_800x500.jpg",
    alt: "Professional bathroom and toilet cleaning Sunshine Coast by Tru Bond Cleaners",
    desc: "Spotless tiles, grout, shower screens and toilets — bond-inspection ready.",
  },
  {
    title: "Kitchen Cleaning",
    href: "/services/kitchen-cleaning",
    image: "/assets/generated/kitchen-cleaning-sunshine-coast.dim_800x500.jpg",
    alt: "Deep kitchen cleaning service Sunshine Coast by Tru Bond Cleaners",
    desc: "Benchtops, cupboards, sink and splashbacks cleaned to perfection.",
  },
  {
    title: "Window Cleaning",
    href: "/services/window-cleaning",
    image: "/assets/generated/window-cleaning-sunshine-coast.dim_800x500.jpg",
    alt: "Professional window cleaning Sunshine Coast by Tru Bond Cleaners",
    desc: "Streak-free internal windows and tracks — crystal clear for your inspection.",
  },
];

const features = [
  {
    icon: Shield,
    title: "Guaranteed Results",
    desc: "We back every clean with a 100% satisfaction guarantee. If your property manager isn't happy, we come back and fix it for free.",
  },
  {
    icon: Star,
    title: "Experienced Team",
    desc: "Our cleaners know exactly what real estate agents look for. We follow the REIQ exit condition checklist every single time.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "We use professional-grade, eco-conscious cleaning products that are safe for your family, pets and the Sunshine Coast environment.",
  },
  {
    icon: DollarSign,
    title: "Fair, Upfront Pricing",
    desc: "No hidden fees. No nasty surprises. We give you a clear, written quote before we start — so you know exactly what you're paying.",
  },
];

export default function HomePage() {
  useMetaTags({
    title: "Bond Cleaning Sunshine Coast | Tru Sunshine Coast Bond Cleaners",
    description:
      "Need a bond clean on the Sunshine Coast? Tru Sunshine Coast Bond Cleaners delivers spotless end of lease cleaning with a 100% bond back guarantee. Get a free quote today!",
    ogTitle: "Bond Cleaning Sunshine Coast | Tru Sunshine Coast Bond Cleaners",
    ogDescription:
      "Sunshine Coast's most trusted bond cleaners. 100% bond back guarantee. Same-day bookings available. Call 0488 841 883.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img
          src="/assets/generated/hero-bond-cleaning-sunshine-coast.dim_1200x600.jpg"
          alt="Professional bond cleaning service on the Sunshine Coast, Queensland — Tru Sunshine Coast Bond Cleaners"
          className="absolute inset-0 w-full h-full object-cover"
          width={1200}
          height={600}
        />
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/40 text-brand-yellow px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Sunshine Coast's #1 Bond Cleaning Service
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
              Sunshine Coast's Most Trusted{" "}
              <span className="text-brand-yellow">Bond Cleaners</span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl">
              Get your full bond back —{" "}
              <strong className="text-white">guaranteed</strong>. We clean every
              corner so you don't have to worry. Professional end of lease
              cleaning backed by our satisfaction guarantee.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "✓ 100% Bond Back Guarantee",
                "✓ Fully Insured",
                "✓ Same-Day Bookings",
                "✓ Sunshine Coast Local",
              ].map((badge) => (
                <span
                  key={badge}
                  className="bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full border border-white/25"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-brand-yellow text-brand-navy font-bold text-base px-8 py-4 h-auto hover:bg-brand-yellow/90 shadow-navy"
                  data-ocid="hero.book.primary_button"
                >
                  Book Your Clean
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:0488841883">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white/10 text-base px-8 py-4 h-auto font-bold"
                  data-ocid="hero.call.secondary_button"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-brand-navy font-bold mb-4">
              Why Sunshine Coast Tenants Choose Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've helped hundreds of Sunshine Coast tenants get their full
              bond back. Here's what makes us different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-background rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border"
              >
                <div className="w-12 h-12 bg-brand-navy/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-brand-navy" />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-brand-navy font-bold mb-4">
              Our Bond Cleaning Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We cover every part of your rental property — from the oven to the
              windows — so nothing gets missed at inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-brand-navy text-xl mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  <span className="text-brand-navy font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-brand-navy text-white hover:bg-brand-navy/90 font-bold px-8"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-gradient py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Happy Tenants" },
              { value: "100%", label: "Bond Back Guarantee" },
              { value: "5★", label: "Google Rating" },
              { value: "72hr", label: "Free Re-Clean Window" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-brand-yellow mb-2">
                  {stat.value}
                </div>
                <div className="text-white/75 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-brand-navy font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Got questions about bond cleaning on the Sunshine Coast? We've got
              the answers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {/* FAQ 1 */}
              <AccordionItem
                value="faq-1"
                data-ocid="faq.item.1"
                className="border border-border rounded-xl px-6 shadow-xs"
              >
                <AccordionTrigger className="font-display font-bold text-brand-navy text-left hover:no-underline py-5">
                  What is Bond Cleaning and Why is it Required?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-5 space-y-3">
                  <p>
                    Bond cleaning — also called end of lease cleaning — is a
                    super thorough clean of a rental property when a tenant
                    moves out. Landlords and property managers need the place to
                    look just as clean as when the tenant first moved in.
                  </p>
                  <p>
                    If the property isn't cleaned to a high standard, the
                    landlord can keep part of your bond money to pay for
                    professional cleaning. Your bond is usually four weeks' rent
                    — that's a lot of money!
                  </p>
                  <p>
                    By getting a professional bond clean done, you make sure
                    everything is spotless and meet all the requirements in your
                    lease agreement. Bond cleaning covers everything — kitchens,
                    bathrooms, carpets, windows, walls, light fittings and more.
                  </p>
                  <p>
                    It's required by almost every rental agreement in
                    Queensland. At Tru Sunshine Coast Bond Cleaners, we tick
                    every box on the real estate checklist so you get your full
                    bond back, stress-free.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 2 */}
              <AccordionItem
                value="faq-2"
                data-ocid="faq.item.2"
                className="border border-border rounded-xl px-6 shadow-xs"
              >
                <AccordionTrigger className="font-display font-bold text-brand-navy text-left hover:no-underline py-5">
                  Why is Bond Cleaning Important?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-5 space-y-3">
                  <p>
                    Bond cleaning is super important because it protects your
                    money. In Queensland, landlords can claim money from your
                    bond if the property isn't returned in a clean and tidy
                    condition.
                  </p>
                  <p>
                    A professional bond clean makes sure every part of the home
                    — from the oven grease to the bathroom tiles — is spotless.
                    A clean handover also protects your rental history. If you
                    leave a property in poor condition, your landlord or
                    property manager might give you a bad reference, which makes
                    it hard to rent another home in the future.
                  </p>
                  <p>
                    Bond cleaning also saves you time. Moving house is already
                    stressful — packing, organising utilities, managing kids and
                    pets. Letting the pros handle the cleaning takes that stress
                    away.
                  </p>
                  <p>
                    At Tru Sunshine Coast Bond Cleaners, we use a real
                    estate–approved checklist so nothing gets missed. We back
                    every clean with a satisfaction guarantee — if your property
                    manager isn't happy, we come back and fix it for free.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 3 */}
              <AccordionItem
                value="faq-3"
                data-ocid="faq.item.3"
                className="border border-border rounded-xl px-6 shadow-xs"
              >
                <AccordionTrigger className="font-display font-bold text-brand-navy text-left hover:no-underline py-5">
                  How Much Does a Bond Clean Cost?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-5 space-y-3">
                  <p>
                    The cost of a bond clean depends on the size of your
                    property. Here's a rough guide for the Sunshine Coast:
                  </p>
                  <ul className="space-y-2">
                    {[
                      ["Studio or 1-bedroom unit", "$180 – $280"],
                      ["2-bedroom unit or house", "$280 – $380"],
                      ["3-bedroom house", "$380 – $500"],
                      ["4-bedroom house", "$450 – $600"],
                    ].map(([size, price]) => (
                      <li
                        key={size}
                        className="flex items-center justify-between bg-brand-light px-4 py-3 rounded-lg"
                      >
                        <span className="font-medium text-brand-navy">
                          {size}
                        </span>
                        <span className="font-bold text-brand-navy">
                          {price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Carpet steam cleaning, garage cleaning and wall washing can
                    cost extra. Extra services like inside the oven, window
                    tracks and blinds may also add to the total.
                  </p>
                  <p>
                    The price is well worth it — your bond is usually four
                    weeks' rent, so paying $300–$500 for a professional clean
                    could save you $1,500 or more. At Tru Sunshine Coast Bond
                    Cleaners, we give you a clear, upfront quote with no hidden
                    fees.
                  </p>
                  <p>
                    <Link
                      to="/contact"
                      className="text-brand-navy font-semibold underline hover:text-brand-navy/80"
                    >
                      Contact us today
                    </Link>{" "}
                    for a free, obligation-free quote.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 4 */}
              <AccordionItem
                value="faq-4"
                data-ocid="faq.item.4"
                className="border border-border rounded-xl px-6 shadow-xs"
              >
                <AccordionTrigger className="font-display font-bold text-brand-navy text-left hover:no-underline py-5">
                  What is a Full Bond Clean?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-5 space-y-3">
                  <p>
                    A full bond clean is a top-to-bottom, room-by-room clean of
                    your entire rental property. It's not just a regular tidy-up
                    — it's a deep clean of every single surface.
                  </p>
                  <p className="font-semibold text-brand-navy">
                    Here's what's included:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        area: "Kitchen",
                        items:
                          "Oven, stovetop, rangehood, benchtops, cupboards inside and out, sink, splashbacks",
                      },
                      {
                        area: "Bathrooms & Toilets",
                        items:
                          "Scrub tiles, grout, shower screens, taps, mirrors, toilet",
                      },
                      {
                        area: "Living Areas & Bedrooms",
                        items:
                          "Dust ceiling fans and light fittings, wipe skirting boards, spot-clean walls, window sills",
                      },
                      {
                        area: "Floors",
                        items: "Vacuum all carpets, mop hard floors",
                      },
                      {
                        area: "Windows",
                        items: "Clean all internal windows and tracks",
                      },
                      { area: "Garage", items: "Sweep and remove cobwebs" },
                    ].map((item) => (
                      <div
                        key={item.area}
                        className="bg-brand-light rounded-lg p-4"
                      >
                        <h4 className="font-bold text-brand-navy text-sm mb-1">
                          {item.area}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {item.items}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p>
                    A full bond clean follows the Real Estate Institute of
                    Queensland (REIQ) exit condition checklist. This is the
                    standard your property manager uses to inspect the property.
                    At Tru Sunshine Coast Bond Cleaners, we follow this
                    checklist every single time so you never have to worry about
                    re-cleans or losing your bond.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 5 */}
              <AccordionItem
                value="faq-5"
                data-ocid="faq.item.5"
                className="border border-border rounded-xl px-6 shadow-xs"
              >
                <AccordionTrigger className="font-display font-bold text-brand-navy text-left hover:no-underline py-5">
                  Which Are the Top-Rated Bond Cleaning Companies Near Me?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-5 space-y-4">
                  <p>
                    Here are five of the most trusted bond cleaning companies
                    near the Sunshine Coast and Brisbane:
                  </p>

                  {[
                    {
                      num: 1,
                      name: "Sunshine Eco Cleaning Services",
                      website: "sunshineecocleaning.com.au",
                      url: "https://sunshineecocleaning.com.au",
                      desc: "A highly rated eco-friendly cleaning company serving the Sunshine Coast region. They offer bond cleaning, carpet steam cleaning and general house cleaning. Known for their green cleaning products and reliable service, Sunshine Eco has earned strong reviews from tenants and property managers. Their professional team follows a detailed exit-condition checklist, helping tenants get their full bond back without stress.",
                    },
                    {
                      num: 2,
                      name: "Electrodry Carpet & Tile Cleaning Sunshine Coast",
                      website: "electrodry.com.au",
                      url: "https://www.electrodry.com.au",
                      desc: "Electrodry is a well-established Australian cleaning franchise offering professional carpet and tile cleaning. Their Sunshine Coast team uses dry-cleaning technology to deliver fast-drying, deep-clean results. They are popular with tenants needing carpet steam cleaning as part of their bond clean. Their national brand reputation gives customers confidence in the quality of their work.",
                    },
                    {
                      num: 3,
                      name: "Jim's Cleaning Sunshine Coast",
                      website: "jimscleaning.com.au",
                      url: "https://www.jimscleaning.com.au",
                      desc: "Jim's Cleaning is one of Australia's most recognised cleaning franchises. They offer bond cleaning, regular house cleaning and commercial cleaning across the Sunshine Coast. Jim's franchisees are police-checked, insured and trained to follow a comprehensive bond cleaning checklist. Their national brand and satisfaction guarantee make them a popular choice for end of lease cleaning.",
                    },
                    {
                      num: 4,
                      name: "End of Lease Cleaning Brisbane & Sunshine Coast",
                      website: "endofleasecleaningbrisbane.com.au",
                      url: "https://www.endofleasecleaningbrisbane.com.au",
                      desc: "This company specialises entirely in end of lease and bond cleaning across South East Queensland. They offer fixed-price packages, real estate–approved checklists and a free re-clean guarantee. Their dedicated focus on bond cleaning means they understand exactly what property managers expect. A solid option for tenants who want specialists, not generalists.",
                    },
                    {
                      num: 5,
                      name: "Tru Bond Cleaning",
                      website: "trubondcleaningbrisbane.com",
                      url: "https://trubondcleaningbrisbane.com",
                      desc: "Tru Bond Cleaning is a trusted name in professional bond and end of lease cleaning across Brisbane and the Sunshine Coast. They offer comprehensive cleaning packages that cover kitchens, bathrooms, carpets, windows and more. Their team follows a strict real estate–approved checklist and backs every job with a satisfaction guarantee. Tru Bond Cleaning is known for its honest pricing, reliable team and outstanding results that help tenants get their full bond back.",
                      highlight: true,
                    },
                  ].map((company) => (
                    <div
                      key={company.num}
                      className={`rounded-xl p-5 border ${company.highlight ? "border-brand-yellow bg-brand-yellow/5" : "border-border bg-background"}`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${company.highlight ? "bg-brand-yellow text-brand-navy" : "bg-brand-navy text-white"}`}
                        >
                          {company.num}
                        </span>
                        <div>
                          <h4 className="font-bold text-brand-navy mb-0.5">
                            {company.name}
                            {company.highlight && (
                              <span className="ml-2 text-xs bg-brand-yellow text-brand-navy px-2 py-0.5 rounded-full">
                                Our Pick
                              </span>
                            )}
                          </h4>
                          <a
                            href={company.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-brand-navy/70 hover:text-brand-navy underline mb-2 block"
                          >
                            {company.website}
                          </a>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {company.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 6 */}
              <AccordionItem
                value="faq-6"
                data-ocid="faq.item.6"
                className="border border-border rounded-xl px-6 shadow-xs"
              >
                <AccordionTrigger className="font-display font-bold text-brand-navy text-left hover:no-underline py-5">
                  Which Cleaning Products Are Best for Bond Cleaning?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-5 space-y-3">
                  <p>
                    The best cleaning products for bond cleaning need to be
                    tough on grease, soap scum and stains but safe for surfaces
                    and people. Here are some top picks that professionals use:
                  </p>
                  <ul className="space-y-2">
                    {[
                      [
                        "Shower Power",
                        "Brilliant for dissolving soap scum and watermarks on glass and tiles.",
                      ],
                      [
                        "Easy-Off BAM!",
                        "Great for cutting through grease on ovens and stovetops.",
                      ],
                      [
                        "Exit Mould",
                        "Removes mould and mildew from bathroom grout and silicone.",
                      ],
                      [
                        "Sugar Soap",
                        "Ideal for washing walls and removing fingerprints, marks and crayon.",
                      ],
                      [
                        "Selleys Oven Brite",
                        "A powerful oven cleaner that lifts baked-on carbon with minimal scrubbing.",
                      ],
                      [
                        "White King Bleach",
                        "Perfect for whitening grout and disinfecting toilets.",
                      ],
                      [
                        "Orange Power Carpet Stain Remover",
                        "Breaks down organic carpet stains.",
                      ],
                    ].map(([product, use]) => (
                      <li key={product} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                        <span className="text-sm">
                          <strong className="text-brand-navy">{product}</strong>{" "}
                          — {use}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="bg-brand-navy/5 rounded-lg p-4 text-sm font-medium text-brand-navy">
                    💡 At Tru Sunshine Coast Bond Cleaners, we supply all our
                    own professional-grade products. You don't need to buy a
                    thing — just book us and we bring everything.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 7 */}
              <AccordionItem
                value="faq-7"
                data-ocid="faq.item.7"
                className="border border-border rounded-xl px-6 shadow-xs"
              >
                <AccordionTrigger className="font-display font-bold text-brand-navy text-left hover:no-underline py-5">
                  How Much Does a Professional Bond Clean Typically Cost?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-5 space-y-3">
                  <p>
                    The typical cost of a professional bond clean in Australia
                    ranges from $200 to $700, depending on the size and
                    condition of the property. Here is a general breakdown:
                  </p>
                  <ul className="space-y-2">
                    {[
                      ["1-bedroom unit", "$200 – $280"],
                      ["2-bedroom unit", "$280 – $380"],
                      ["3-bedroom house", "$380 – $500"],
                      ["4-bedroom house", "$500 – $700+"],
                    ].map(([size, price]) => (
                      <li
                        key={size}
                        className="flex items-center justify-between bg-brand-light px-4 py-3 rounded-lg"
                      >
                        <span className="font-medium text-brand-navy text-sm">
                          {size}
                        </span>
                        <span className="font-bold text-brand-navy text-sm">
                          {price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm">
                    Extra services such as carpet steam cleaning ($80–$200),
                    oven cleaning ($50–$80), flea treatment or external window
                    cleaning will add to the price. Properties in poor condition
                    may also cost more.
                  </p>
                  <p className="text-sm">
                    The investment is worth it — your bond is typically worth
                    four weeks of rent, so a professional clean protects a
                    significant sum of money. At Tru Sunshine Coast Bond
                    Cleaners, we offer transparent, fixed pricing. No nasty
                    surprises.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 8 */}
              <AccordionItem
                value="faq-8"
                data-ocid="faq.item.8"
                className="border border-border rounded-xl px-6 shadow-xs"
              >
                <AccordionTrigger className="font-display font-bold text-brand-navy text-left hover:no-underline py-5">
                  What Products Are Best for Bond Cleaning Carpets?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-5 space-y-3">
                  <p>
                    Carpets are one of the most closely inspected areas during a
                    bond inspection. Here are the best products for getting
                    carpets clean:
                  </p>
                  <ul className="space-y-3">
                    {[
                      {
                        product: "Britex Carpet Cleaner",
                        use: "Great for lifting stains and refreshing fibres.",
                        link: "https://www.woolworths.com.au/shop/browse/cleaning/floor-cleaning/carpet-cleaners",
                        store: "Woolworths",
                      },
                      {
                        product: "Vanish Carpet & Upholstery Stain Remover",
                        use: "Works quickly on food and drink spills.",
                        link: "https://www.coles.com.au/product/vanish-stain-remover-oxi-action-carpet-upholstery-with-brush-450ml/7295880",
                        store: "Coles",
                      },
                      {
                        product: "Rug Doctor Carpet Detergent",
                        use: "Commercial-grade formula for deep cleaning carpets.",
                        link: "https://www.bunnings.com.au/rug-doctor-1l-carpet-detergent_p4441009",
                        store: "Bunnings",
                      },
                      {
                        product: "Orange Power Carpet & Fabric Stain Remover",
                        use: "Eco-friendly, works on organic stains like pet urine and food.",
                        link: "https://www.chemistwarehouse.com.au",
                        store: "Chemist Warehouse",
                      },
                      {
                        product: "Bicarb Soda + White Vinegar",
                        use: "A natural combo that deodorises and lifts lighter stains.",
                        link: null,
                        store: null,
                      },
                    ].map((item) => (
                      <li
                        key={item.product}
                        className="flex gap-3 items-start bg-background rounded-lg p-3 border border-border"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-brand-navy text-sm block">
                            {item.product}
                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-xs bg-brand-navy/10 text-brand-navy px-2 py-0.5 rounded-full hover:bg-brand-navy/20 transition-colors"
                              >
                                Buy at {item.store}
                              </a>
                            )}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {item.use}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm bg-brand-navy/5 rounded-lg p-4 font-medium text-brand-navy">
                    💡 For the best results, always use a carpet steam cleaner
                    after applying products. At Tru Sunshine Coast Bond
                    Cleaners, we include professional carpet steam cleaning as
                    an add-on service. Ask us about it when you get your free
                    quote!
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 9 */}
              <AccordionItem
                value="faq-9"
                data-ocid="faq.item.9"
                className="border border-border rounded-xl px-6 shadow-xs"
              >
                <AccordionTrigger className="font-display font-bold text-brand-navy text-left hover:no-underline py-5">
                  How Do You Choose a Reliable Bond Cleaner?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-5 space-y-3">
                  <p>
                    Choosing the right bond cleaner is really important because
                    your bond money is on the line. Here's what to look for:
                  </p>
                  <ul className="space-y-2">
                    {[
                      [
                        "Check Reviews",
                        "Look at Google Reviews and read what past customers say. A good bond cleaner will have lots of 4 and 5-star reviews from happy tenants.",
                      ],
                      [
                        "Ask About Their Checklist",
                        "A professional bond cleaner uses the real estate–approved exit condition checklist. Ask them to confirm they follow this exactly.",
                      ],
                      [
                        "Look for a Re-Clean Guarantee",
                        "If the property manager isn't satisfied after the clean, a good company will come back and fix it for free.",
                      ],
                      [
                        "Make Sure They're Insured",
                        "Accidents happen. A fully insured cleaner protects you and your property.",
                      ],
                      [
                        "Get a Written Quote",
                        "Never accept a verbal estimate. A trustworthy bond cleaner gives you a written, itemised quote so you know exactly what you're paying for.",
                      ],
                      [
                        "Check Their Experience",
                        "An experienced team knows what real estate agents look for and won't miss the tricky spots.",
                      ],
                    ].map(([title, desc]) => (
                      <li key={title} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                        <span className="text-sm">
                          <strong className="text-brand-navy">{title}</strong> —{" "}
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm">
                    At Tru Sunshine Coast Bond Cleaners, we tick every one of
                    these boxes. We've helped hundreds of Sunshine Coast tenants
                    get their full bond back.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 10 */}
              <AccordionItem
                value="faq-10"
                data-ocid="faq.item.10"
                className="border border-border rounded-xl px-6 shadow-xs"
              >
                <AccordionTrigger className="font-display font-bold text-brand-navy text-left hover:no-underline py-5">
                  Can I Book a Bond Cleaning Company Online with a Satisfaction
                  Guarantee?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-5 space-y-3">
                  <p>
                    Yes! You can book Tru Sunshine Coast Bond Cleaners directly
                    through our website. Our online booking form takes just a
                    few minutes to fill out — tell us your property size,
                    location, preferred date and any special requests, and we'll
                    get back to you with a confirmed quote.
                  </p>
                  <p>
                    We back every single clean with our{" "}
                    <strong className="text-brand-navy">
                      100% Satisfaction Guarantee
                    </strong>
                    . Here's what that means:
                  </p>
                  <div className="bg-brand-yellow/10 border border-brand-yellow/30 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-brand-navy shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-brand-navy mb-1">
                          Our Re-Clean Promise
                        </p>
                        <p className="text-sm text-muted-foreground">
                          If your property manager or landlord raises any
                          cleaning concerns after our service, we come back
                          within 72 hours and re-clean the areas in question —
                          at no extra charge to you. We want you to get your
                          full bond back, and we stand behind our work to make
                          that happen.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    Booking online is fast, easy and stress-free.{" "}
                    <Link
                      to="/contact"
                      className="text-brand-navy font-semibold underline hover:text-brand-navy/80"
                    >
                      Click here to get started.
                    </Link>
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 11 */}
              <AccordionItem
                value="faq-11"
                data-ocid="faq.item.11"
                className="border border-border rounded-xl px-6 shadow-xs"
              >
                <AccordionTrigger className="font-display font-bold text-brand-navy text-left hover:no-underline py-5">
                  How Much Is a Cleaner Per Hour on the Sunshine Coast?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-5 space-y-3">
                  <p>
                    On the Sunshine Coast, professional cleaners typically
                    charge between $35 and $65 per hour for general house
                    cleaning. For specialised services like bond cleaning, the
                    pricing is usually based on the property size rather than an
                    hourly rate, as this gives you more certainty about the
                    total cost.
                  </p>
                  <p>
                    For casual hourly cleaning (like regular house cleaning),
                    you'll usually pay:
                  </p>
                  <ul className="space-y-2">
                    {[
                      ["Regular house cleaner", "$35 – $45 per hour"],
                      ["Professional cleaning company", "$45 – $65 per hour"],
                    ].map(([type, rate]) => (
                      <li
                        key={type}
                        className="flex items-center justify-between bg-brand-light px-4 py-3 rounded-lg"
                      >
                        <span className="font-medium text-brand-navy text-sm">
                          {type}
                        </span>
                        <span className="font-bold text-brand-navy text-sm">
                          {rate}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm">
                    Keep in mind that bond cleaning is a fixed-scope job — not
                    just a timed clean. A bond cleaner needs to meet the real
                    estate checklist standard, which means the job takes as long
                    as it needs to, not just an hour or two. At Tru Sunshine
                    Coast Bond Cleaners, we charge per property (not per hour)
                    so you always know your exact cost upfront.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* FAQ 12 */}
              <AccordionItem
                value="faq-12"
                data-ocid="faq.item.12"
                className="border border-border rounded-xl px-6 shadow-xs"
              >
                <AccordionTrigger className="font-display font-bold text-brand-navy text-left hover:no-underline py-5">
                  How Much Is End of Lease Cleaning in Australia?
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-5 space-y-4">
                  <div>
                    <h4 className="font-bold text-brand-navy mb-2">
                      How much is end of lease cleaning in Australia?
                    </h4>
                    <p className="text-sm mb-3">
                      Across Australia, end of lease cleaning prices range from
                      $200 for a small unit to $700+ for a large family home. In
                      Queensland and on the Sunshine Coast, prices are
                      generally:
                    </p>
                    <ul className="space-y-2">
                      {[
                        ["Studio", "$180 – $250"],
                        ["1-bedroom unit", "$220 – $280"],
                        ["2-bedroom home", "$280 – $380"],
                        ["3-bedroom home", "$380 – $500"],
                        ["4-bedroom home", "$500 – $650+"],
                      ].map(([size, price]) => (
                        <li
                          key={size}
                          className="flex items-center justify-between bg-brand-light px-4 py-3 rounded-lg"
                        >
                          <span className="font-medium text-brand-navy text-sm">
                            {size}
                          </span>
                          <span className="font-bold text-brand-navy text-sm">
                            {price}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm mt-3">
                      These prices usually include all rooms, kitchen,
                      bathrooms, windows and floors. Carpet steam cleaning and
                      garage cleaning are usually add-ons.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-navy mb-2">
                      How much do you pay a cleaner for 3 hours?
                    </h4>
                    <p className="text-sm">
                      If you hire a casual cleaner at an hourly rate, expect to
                      pay $35–$65 per hour. For 3 hours, that's roughly
                      $105–$195. However, for bond cleaning purposes, you need a
                      result-based service — not just someone cleaning until
                      time runs out. Bond cleaning requires meeting a real
                      estate checklist standard, which takes as long as needed
                      (often 4–10+ hours for a team).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-navy mb-2">
                      What is the 20-minute rule in cleaning?
                    </h4>
                    <p className="text-sm">
                      The 20-minute rule is a popular productivity technique for
                      cleaning your home. The idea is simple: set a timer for 20
                      minutes, focus entirely on cleaning one area, and stop
                      when the timer goes off. It makes cleaning feel less
                      overwhelming because it's broken into short, manageable
                      bursts.
                    </p>
                    <p className="text-sm mt-2">
                      When you clean in focused 20-minute blocks, you get a lot
                      done without burning out. It's especially helpful for
                      keeping a home tidy day-to-day. However, for bond cleaning
                      purposes, you definitely can't use the 20-minute rule — a
                      full bond clean requires several hours of focused,
                      professional work to meet real estate standards. That's
                      where Tru Sunshine Coast Bond Cleaners comes in!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <Clock className="w-10 h-10 text-brand-yellow" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Your Bond Back?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Join hundreds of happy Sunshine Coast tenants. Book your bond
              clean today and get a free, no-obligation quote within minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-brand-yellow text-brand-navy font-bold text-base px-10 py-4 h-auto hover:bg-brand-yellow/90 shadow-navy"
                >
                  Book Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a
                href="https://wa.me/61488841883?text=Hi%2C%20I%27d%20like%20a%20bond%20cleaning%20quote"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white/10 text-base px-10 py-4 h-auto font-bold"
                >
                  WhatsApp Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
