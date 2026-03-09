import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useMetaTags } from "../hooks/useMetaTags";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  bedrooms: string;
  date: string;
  message: string;
};

const RECIPIENT = ["humptydumptybondcleaning", "gmail.com"].join("@");

export default function ContactPage() {
  useMetaTags({
    title: "Contact Tru Sunshine Coast Bond Cleaners | Get a Free Quote",
    description:
      "Get in touch with Tru Sunshine Coast Bond Cleaners for a free, no-obligation bond cleaning quote on the Sunshine Coast. Call or WhatsApp 0488841883.",
  });

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    bedrooms: "",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Bond Cleaning Quote Request — ${form.name} — ${form.address || "Sunshine Coast"}`,
    );

    const body = encodeURIComponent(
      `Hi Tru Sunshine Coast Bond Cleaners,

I'd like to request a quote for bond cleaning.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Service: ${form.service}
Property Address: ${form.address}
Bedrooms: ${form.bedrooms}
Preferred Date: ${form.date}

Message:
${form.message}

Please get back to me with a quote at your earliest convenience.

Thank you,
${form.name}`,
    );

    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="section-gradient py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Get a Free Bond Cleaning Quote
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Fill in the form below or WhatsApp us and we'll get back to you with
            a fast, free, no-obligation quote.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <aside className="lg:col-span-2 space-y-6">
              {/* WhatsApp */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-border">
                <h2 className="font-display font-bold text-brand-navy text-xl mb-4">
                  Prefer to Chat?
                </h2>
                <a
                  href="https://wa.me/61488841883?text=Hi%2C%20I%27d%20like%20a%20bond%20cleaning%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.whatsapp.button"
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-5 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 w-full justify-center"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  WhatsApp Us Now
                </a>
                <p className="text-muted-foreground text-xs mt-3 text-center">
                  Tap to open WhatsApp with a pre-filled message. We usually
                  reply within minutes.
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-brand-navy" />
                  <h3 className="font-bold text-brand-navy">Call Us</h3>
                </div>
                <a
                  href="tel:0488841883"
                  className="text-brand-navy font-bold text-xl hover:text-brand-navy/80 transition-colors"
                >
                  0488 841 883
                </a>
                <p className="text-muted-foreground text-sm mt-1">
                  Available during business hours
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-brand-navy" />
                  <h3 className="font-bold text-brand-navy">Business Hours</h3>
                </div>
                <div className="space-y-2.5">
                  {[
                    ["Monday – Friday", "7:00 AM – 6:00 PM"],
                    ["Saturday", "7:00 AM – 6:00 PM"],
                    ["Sunday", "8:00 AM – 4:00 PM"],
                  ].map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{day}</span>
                      <span className="font-medium text-brand-navy">
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-brand-navy" />
                  <h3 className="font-bold text-brand-navy">Service Area</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Sunshine Coast",
                    "Noosa",
                    "Caloundra",
                    "Maroochydore",
                    "Buderim",
                    "Kawana",
                    "Mooloolaba",
                  ].map((area) => (
                    <span
                      key={area}
                      className="bg-brand-light text-brand-navy text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-card border border-border">
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-2">
                  Request Your Free Quote
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill in your details and we'll send you a personalised quote
                  via your email client.
                </p>

                {submitted ? (
                  <div
                    data-ocid="contact.form.success_state"
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-display font-bold text-brand-navy text-xl mb-2">
                      Your email client should open now!
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                      Your quote request has been prepared. Simply send the
                      email from your email app and we'll get back to you
                      shortly.
                    </p>
                    <Button
                      className="mt-6 bg-brand-navy text-white hover:bg-brand-navy/90"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-sm font-semibold text-brand-navy mb-1.5 block"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          data-ocid="contact.form.name.input"
                          autoComplete="name"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-sm font-semibold text-brand-navy mb-1.5 block"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          data-ocid="contact.form.email.input"
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-semibold text-brand-navy mb-1.5 block"
                      >
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="04XX XXX XXX"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        data-ocid="contact.form.phone.input"
                        autoComplete="tel"
                      />
                    </div>

                    {/* Service & Bedrooms Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-semibold text-brand-navy mb-1.5 block">
                          Service Type *
                        </Label>
                        <Select
                          required
                          value={form.service}
                          onValueChange={(v) => handleChange("service", v)}
                        >
                          <SelectTrigger data-ocid="contact.form.service.select">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bond-cleaning">
                              Bond Cleaning (End of Lease)
                            </SelectItem>
                            <SelectItem value="carpet-cleaning">
                              Carpet Steam Cleaning
                            </SelectItem>
                            <SelectItem value="oven-cleaning">
                              Oven & Appliance Cleaning
                            </SelectItem>
                            <SelectItem value="bathroom-cleaning">
                              Bathroom & Toilet Cleaning
                            </SelectItem>
                            <SelectItem value="kitchen-cleaning">
                              Kitchen Cleaning
                            </SelectItem>
                            <SelectItem value="window-cleaning">
                              Window Cleaning
                            </SelectItem>
                            <SelectItem value="full-package">
                              Full Bond Clean Package
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-brand-navy mb-1.5 block">
                          Number of Bedrooms *
                        </Label>
                        <Select
                          required
                          value={form.bedrooms}
                          onValueChange={(v) => handleChange("bedrooms", v)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select bedrooms" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="studio">Studio</SelectItem>
                            <SelectItem value="1">1 Bedroom</SelectItem>
                            <SelectItem value="2">2 Bedrooms</SelectItem>
                            <SelectItem value="3">3 Bedrooms</SelectItem>
                            <SelectItem value="4">4 Bedrooms</SelectItem>
                            <SelectItem value="5+">5+ Bedrooms</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Property Address */}
                    <div>
                      <Label
                        htmlFor="address"
                        className="text-sm font-semibold text-brand-navy mb-1.5 block"
                      >
                        Property Address *
                      </Label>
                      <Input
                        id="address"
                        type="text"
                        required
                        placeholder="123 Beach Road, Mooloolaba QLD 4557"
                        value={form.address}
                        onChange={(e) =>
                          handleChange("address", e.target.value)
                        }
                        autoComplete="street-address"
                      />
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <Label
                        htmlFor="date"
                        className="text-sm font-semibold text-brand-navy mb-1.5 block"
                      >
                        Preferred Cleaning Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={form.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-semibold text-brand-navy mb-1.5 block"
                      >
                        Additional Notes
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Any special requirements, access instructions, or things we should know..."
                        rows={4}
                        value={form.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        data-ocid="contact.form.message.textarea"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-brand-navy text-white font-bold py-4 h-auto hover:bg-brand-navy/90 text-base"
                      data-ocid="contact.form.submit_button"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Quote Request
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Clicking "Send Quote Request" will open your email client
                      with your details pre-filled. Simply send the email to
                      submit your request.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Guarantee Banner */}
          <div className="mt-10 bg-brand-navy rounded-2xl p-8 text-white text-center">
            <div className="flex justify-center mb-3">
              <CheckCircle2 className="w-8 h-8 text-brand-yellow" />
            </div>
            <h2 className="font-display text-2xl font-bold mb-3">
              100% Bond Back Satisfaction Guarantee
            </h2>
            <p className="text-white/80 text-sm max-w-xl mx-auto">
              If your property manager raises any cleaning concerns after our
              visit, we come back within 72 hours and re-clean — completely free
              of charge. We stand behind every single clean we do.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
