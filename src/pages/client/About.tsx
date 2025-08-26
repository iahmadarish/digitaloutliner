import AboutHero from "@/components/about/aboutHero"
import MissionAbout from "@/components/about/MissionAbout"
// import Team from "@/components/about/Team"
import ScrollToTop from "@/components/ScrollToTop"
import type React from "react"
import { Helmet } from 'react-helmet-async'


const About: React.FC = () => {
  return (
    <div className="font-family-small   py-16 bg-[#06140b] ">
      <Helmet>
        {/* Title */}
        <title>About Us | CONQUERIC - Web, App & Software Development Experts</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="CONQUERIC is a passionate team of developers, designers, and strategists dedicated to transforming ideas into powerful digital experiences. We specialize in web development, mobile apps, and custom software solutions."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="CONQUERIC, About CONQUERIC, software company, web development, mobile app development, custom software solutions, UI/UX design, Custom Ecommerce development, shopify website development, shopify development, wordpress development, digital strategy."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.conqueric.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="About Us | CONQUERIC" />
        <meta
          property="og:description"
          content="We are a team of developers, designers, and strategists passionate about building impactful digital solutions. Discover more about CONQUERIC."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.conqueric.com/about" />
        <meta property="og:image" content="https://www.conqueric.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | CONQUERIC" />
        <meta
          name="twitter:description"
          content="CONQUERIC builds innovative websites, mobile apps, and custom software solutions. Learn more about our mission and values."
        />
        <meta name="twitter:image" content="https://www.conqueric.com/og-image.jpg" />
      </Helmet>

      <ScrollToTop />
      <p className="py-16  text-white">
        <AboutHero />
        {/* <Team/> */}
        <MissionAbout />
      </p>
    </div>
  )
}

export default About
