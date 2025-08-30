import type React from "react"
import HeroSection from "../../components/home/HeroSection"
import ServiceListingTab from "../../components/home/ServiceListingTab"
import ScrollToTop from "../../components/ScrollToTop"
// import SocialNavigation3D from "../../components/common/SocialNavigation3D"
import ToolsetComponent from "@/components/home/toolsetData"
import OurBenefit from "@/components/home/OurBenifit"
import FAQAccordion from "@/components/home/FAQAccordion"
import Testimonial from "@/components/common/Testimonial"
import CustomWeb from "@/components/home/CustomWeb"
import WebSolutions from "@/components/home/WebSolutions"
import { Helmet } from "react-helmet-async"

const Home: React.FC = () => {
  return (
    <div className="font-family-small ">
      <Helmet>
        {/* Title */}
        <title>CONQUERIC | Web Development, Mobile Apps & Custom Software Solutions</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="CONQUERIC is a leading software company delivering world-class web development, mobile app development, ecommerce solutions, and custom software tailored for your business growth."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="CONQUERIC, software company, web development, mobile app development, ecommerce solutions, custom software development, IT services, digital solutions, UI/UX design, business growth technology"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.conqueric.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="CONQUERIC | Web, App & Software Development Experts" />
        <meta
          property="og:description"
          content="Transform your ideas into impactful digital experiences with CONQUERIC. We specialize in web development, mobile apps, ecommerce platforms, and scalable custom software solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.conqueric.com/" />
        <meta property="og:image" content="https://conqueric.com/assets/logo-DcXsJPrF.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CONQUERIC | Web Development, Mobile Apps & Software Solutions" />
        <meta
          name="twitter:description"
          content="CONQUERIC provides web development, mobile apps, ecommerce, and custom software solutions to help businesses grow with modern digital technology."
        />
        <meta name="twitter:image" content="https://conqueric.com/hero/hero.png" />

        {/* ✅ JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CONQUERIC",
            "url": "https://www.conqueric.com",
            "logo": "https://conqueric.com/assets/logo-DcXsJPrF.png",
            "foundingDate": "2023",
            "founder": {
              "@type": "Person",
              "name": "Md Ishaq ahmad"
            },
            "sameAs": [
              "https://www.facebook.com/conqueric",
              "www.linkedin.com/in/con-queric",
              "https://www.instagram.com/we_are_conqueric/"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+8801568202839",
              "contactType": "customer service",
              "areaServed": "BD",
              "availableLanguage": "en"
            }
          }
          `}
        </script>
      </Helmet>

      <ScrollToTop />
      <HeroSection />
      <CustomWeb />
      <WebSolutions />
      <ServiceListingTab />
      <OurBenefit />
      <FAQAccordion />
      <ToolsetComponent />
      <Testimonial />
    </div>
  )
}

export default Home
