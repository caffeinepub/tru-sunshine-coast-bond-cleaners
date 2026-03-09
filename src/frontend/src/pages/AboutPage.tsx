import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, Heart, Shield, Star, Users } from "lucide-react";
import { useMetaTags } from "../hooks/useMetaTags";

export default function AboutPage() {
  useMetaTags({
    title: "About Tru Sunshine Coast Bond Cleaners | Local Cleaning Experts",
    description:
      "Meet the team at Tru Sunshine Coast Bond Cleaners. Local, experienced and trusted by hundreds of Sunshine Coast tenants to deliver spotless bond cleans.",
    ogImage:
      "/assets/generated/team-tru-sunshine-coast-bond-cleaners.dim_900x500.jpg",
  });

  return (
    <>
      {/* Hero */}
      <section className="section-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            About Tru Sunshine Coast Bond Cleaners
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We're a local Sunshine Coast cleaning team that genuinely cares
            about helping tenants get their full bond back.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-sm font-bold text-brand-navy uppercase tracking-wide mb-3 block">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-brand-navy font-bold mb-6">
                Born and Built on the Sunshine Coast
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Tru Sunshine Coast Bond Cleaners was started by locals who
                  understand what it's really like to rent on the Sunshine
                  Coast. Our founders had seen too many tenants lose hundreds of
                  dollars from their bond simply because of poor cleaning — or
                  worse, being let down by a cleaning company that didn't
                  deliver.
                </p>
                <p>
                  We started with a simple mission: be the most reliable, most
                  thorough and most trusted bond cleaning company on the
                  Sunshine Coast. Every single job, big or small, gets the same
                  level of care and attention.
                </p>
                <p>
                  We built our reputation the hard way — by showing up on time,
                  doing outstanding work and standing behind every clean with
                  our satisfaction guarantee. Word spread quickly among Sunshine
                  Coast tenants, property managers and real estate agencies who
                  kept recommending us to their clients.
                </p>
                <p>
                  Today, we've helped hundreds of Sunshine Coast tenants get
                  their full bond back. We cover the entire Sunshine Coast
                  region — Noosa, Caloundra, Maroochydore, Buderim, Kawana and
                  Mooloolaba — and we're still growing.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/assets/generated/team-tru-sunshine-coast-bond-cleaners.dim_900x500.jpg"
                alt="The professional cleaning team at Tru Sunshine Coast Bond Cleaners ready to deliver spotless bond cleans"
                className="w-full h-80 object-cover"
                width={900}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3">
                  <Award className="w-5 h-5 text-brand-navy" />
                  <span className="text-sm font-bold text-brand-navy">
                    500+ Successful Bond Cleans on the Sunshine Coast
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl text-brand-navy font-bold mb-3">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                These four principles guide everything we do at Tru Sunshine
                Coast Bond Cleaners.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Reliability",
                  desc: "We show up on time, every time. When we say we'll be there, we mean it. Sunshine Coast tenants and landlords can count on us.",
                },
                {
                  icon: Heart,
                  title: "Honesty",
                  desc: "We give fair, upfront quotes. No hidden fees, no last-minute surprises. If we can't do something, we'll tell you straight away.",
                },
                {
                  icon: Star,
                  title: "Quality",
                  desc: "We never cut corners. Our REIQ-approved checklist means every inch of your property gets the attention it deserves.",
                },
                {
                  icon: Users,
                  title: "Care",
                  desc: "We understand how stressful moving is. Our team goes the extra mile to make the cleaning part of your move completely stress-free.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="bg-brand-light rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-brand-yellow" />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Satisfaction Guarantee */}
          <div className="bg-brand-navy rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-brand-yellow" />
                  <h2 className="font-display text-2xl md:text-3xl font-bold">
                    Our 100% Satisfaction Guarantee
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  We don't just say we're good — we prove it with our guarantee.
                  Every single clean is backed by our promise:
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "If your property manager is not satisfied, we come back",
                    "We re-clean any areas of concern within 72 hours",
                    "No extra cost to you — it's completely free",
                    "We keep re-cleaning until your property manager approves",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-brand-yellow rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-brand-navy text-xs font-bold">
                          ✓
                        </span>
                      </div>
                      <span className="text-white/85 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/70 text-sm italic">
                  We've never had a tenant lose their bond after booking with
                  us. That's a record we're very proud of.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="font-display text-5xl font-bold text-brand-yellow mb-2">
                    500+
                  </div>
                  <div className="text-white/80 text-sm">
                    Happy Sunshine Coast Tenants
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="font-display text-5xl font-bold text-brand-yellow mb-2">
                    5★
                  </div>
                  <div className="text-white/80 text-sm">
                    Average Google Rating
                  </div>
                </div>
                <Link to="/contact">
                  <Button className="w-full bg-brand-yellow text-brand-navy font-bold hover:bg-brand-yellow/90 py-4 h-auto">
                    Book Your Clean Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-brand-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl text-brand-navy font-bold mb-4">
            We Serve the Entire Sunshine Coast
          </h2>
          <p className="text-muted-foreground mb-6">
            From Noosa to Caloundra and everywhere in between — our team covers
            the whole region.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Noosa Heads",
              "Noosaville",
              "Caloundra",
              "Mooloolaba",
              "Maroochydore",
              "Buderim",
              "Kawana Waters",
              "Sippy Downs",
              "Nambour",
              "Coolum Beach",
              "Peregian Beach",
              "Bli Bli",
            ].map((area) => (
              <span
                key={area}
                className="bg-white border border-border text-brand-navy text-sm font-medium px-4 py-2 rounded-full shadow-xs"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
