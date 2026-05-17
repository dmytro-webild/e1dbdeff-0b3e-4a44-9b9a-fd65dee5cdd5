"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { CheckCircle, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="floatingGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Showcase",
          id: "products",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Velocity Archives"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Velocity Archives"
      description="Curating legends of the automotive world. Discover the pinnacle of engineering and design."
      buttons={[
        {
          text: "View Collection",
          href: "#products",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cute-small-girl-near-shiny-car-atuo-service-workshop_613910-15243.jpg?_wi=1",
          imageAlt: "Luxury car gallery",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/detail-drive-antique-shiny-headlight_1203-6156.jpg?_wi=1",
          imageAlt: "Vintage detail",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-woman-hat-near-cabriolet_23-2147932185.jpg",
          imageAlt: "Modern supercar",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/headlight-lamp-car_74190-5331.jpg",
          imageAlt: "Classic racing row",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-black-fabric-texture-outdoor-setting-sunlight-background-blurred-product-shot_272375-26448.jpg",
          imageAlt: "Leather interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/car-with-lights-driving-down-road_23-2151850179.jpg",
          imageAlt: "Epic drive",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      tag="Our Heritage"
      title="Decades of automotive perfection, meticulously curated."
      buttons={[
        {
          text: "Learn About Us",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Classic Roadster",
          price: "$125,000",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-old-yellow-vintage-car_181624-46282.jpg",
        },
        {
          id: "p2",
          name: "Modern Supercar",
          price: "$340,000",
          imageSrc: "http://img.b2bpic.net/free-photo/white-mini-coupe-road_114579-5082.jpg",
        },
        {
          id: "p3",
          name: "Grand Tourer",
          price: "$210,000",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-grey-car-front-building_181624-27502.jpg",
        },
        {
          id: "p4",
          name: "Muscle Classic",
          price: "$85,000",
          imageSrc: "http://img.b2bpic.net/free-photo/headlight-lamp-car_74190-5300.jpg",
        },
        {
          id: "p5",
          name: "Sport Convertible",
          price: "$150,000",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-car-driving-city_23-2151674237.jpg",
        },
        {
          id: "p6",
          name: "Track Machine",
          price: "$275,000",
          imageSrc: "http://img.b2bpic.net/free-photo/superhero-car-vintage-style_23-2151636254.jpg",
        },
      ]}
      title="Selected Legends"
      description="An unmatched curation of automotive history."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={true}
      features={[
        {
          title: "Verified Provenance",
          description: "Every car in our collection undergoes strict vetting.",
          bentoComponent: "reveal-icon",
          icon: CheckCircle,
          imageSrc: "http://img.b2bpic.net/free-photo/motorbike-motor_1417-1535.jpg",
          imageAlt: "classic car mechanic engine",
        },
        {
          title: "Performance Tuning",
          description: "Mechanics optimized by masters of the craft.",
          bentoComponent: "reveal-icon",
          icon: Zap,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cute-small-girl-near-shiny-car-atuo-service-workshop_613910-15243.jpg?_wi=2",
          imageAlt: "classic car mechanic engine",
        },
        {
          title: "Secure Shipping",
          description: "Safe global delivery directly to your door.",
          bentoComponent: "reveal-icon",
          icon: Shield,
          imageSrc: "http://img.b2bpic.net/free-photo/detail-drive-antique-shiny-headlight_1203-6156.jpg?_wi=2",
          imageAlt: "classic car mechanic engine",
        },
      ]}
      title="Why Our Collection Stands Out"
      description="Excellence in every curve, engine note, and detail."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Arthur P.",
          role: "Collector",
          company: "AutoWorld",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-elegant-old-man-wearing-suit_23-2148831116.jpg",
        },
        {
          id: "t2",
          name: "Elena V.",
          role: "Architect",
          company: "Design Studio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67131.jpg",
        },
        {
          id: "t3",
          name: "James S.",
          role: "Retired Engineer",
          company: "Self-Employed",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-wise-man-posing-studio_23-2149883493.jpg",
        },
        {
          id: "t4",
          name: "Mia L.",
          role: "Blogger",
          company: "CarLife",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/blond-model-yellow-cap-looks-confident_114579-29588.jpg",
        },
        {
          id: "t5",
          name: "Robert K.",
          role: "CEO",
          company: "Tech Ventures",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-male-wearing-suit-tie-standing-classroom_181624-14287.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "200+",
          label: "Cars Curated",
        },
        {
          value: "15+",
          label: "Countries Served",
        },
        {
          value: "99%",
          label: "Client Satisfaction",
        },
      ]}
      title="Collectors Speak"
      description="Building trust through shared passion."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="By The Numbers"
      tag="Statistical Excellence"
      metrics={[
        {
          id: "m1",
          value: "50+",
          description: "Years of Combined Expertise",
        },
        {
          id: "m2",
          value: "1200",
          description: "Automotive Parts Sourced",
        },
        {
          id: "m3",
          value: "100%",
          description: "Original Parts Guaranteed",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split-description"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How is providence verified?",
          content: "We use original chassis documentation and expert audits.",
        },
        {
          id: "f2",
          title: "Do you offer shipping?",
          content: "Yes, global climate-controlled shipping is included.",
        },
        {
          id: "f3",
          title: "Can I visit the showroom?",
          content: "Private viewings are by appointment only.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Common questions from our collectors."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Let's Talk"
      title="Start your journey today."
      description="Schedule a private consultation for your next collection addition."
      buttons={[
        {
          text: "Inquire Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Resources",
          items: [
            {
              label: "Showcase",
              href: "#products",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
      ]}
      logoText="Velocity Archives"
      copyrightText="© 2025 Velocity Archives | Exclusive Automotive Collection"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
