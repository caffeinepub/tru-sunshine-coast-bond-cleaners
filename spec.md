# Tru Sunshine Coast Bond Cleaners

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full multi-page website for Tru Sunshine Coast Bond Cleaners (bond cleaning company, Sunshine Coast, QLD)
- Pages: Home, Services, About, Contact, individual service pages
- 3000+ words of SEO-optimised, semantically rich, skimmable content in Australian English, active voice, readable by a 10-year-old
- Each service page: ~400 words description
- Home page: comprehensive FAQ section (12 questions as specified)
- FAQ Q5: List of top 5 bond cleaning companies near Sunshine Coast with websites and ~100-word descriptions; Tru Bond Cleaning listed at #5 with website https://trubondcleaningbrisbane.com
- FAQ Q8: Links to carpet cleaning products
- Contact form that submits via user's email client to humptydumptybondcleaning@gmail.com (mailto: action, email NOT displayed on website)
- WhatsApp contact button: 0488841883
- Google Site Verification meta tag: `<meta name="google-site-verification" content="LGBPb31c8y91eig9pACZt2fDChSQQ7xZzPNGeQE7mlU" />`
- Full SEO: title tags, meta descriptions, Open Graph tags, canonical URLs, structured data (LocalBusiness schema)
- Branded images on each page with descriptive alt text for SEO
- Services covered: Bond/End-of-Lease Cleaning, Carpet Steam Cleaning, Oven & Appliance Cleaning, Bathroom & Toilet Cleaning, Kitchen Cleaning, Window Cleaning, Wall Spot Cleaning

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan
1. Generate branded hero image, service images, logo image
2. Select no extra Caffeine components (no backend integrations needed beyond contact form via mailto)
3. Generate Motoko backend with contact form submission storage
4. Build React frontend:
   - App.tsx with React Router: /, /services, /services/:slug, /about, /contact
   - index.html head: Google site verification, title, meta description, OG tags
   - Each page: unique title, meta description, OG tags via react-helmet or head management
   - Home page: hero, trust signals, services grid, FAQ accordion, CTA
   - Services page: all services listed with 400-word descriptions
   - About page: company story, team, values
   - Contact page: form (mailto action to hidden email), WhatsApp button
   - Footer: nav links, WhatsApp, copyright
   - LocalBusiness JSON-LD structured data on home page
   - All images have alt text
   - Responsive, mobile-first design
