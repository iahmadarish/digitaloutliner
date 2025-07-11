import type React from "react"
import { Link } from "react-router-dom"
import HeroSection from "../../components/home/HeroSection"
import ServiceListingTab from "../../components/home/ServiceListingTab"
import ScrollToTop from "../../components/ScrollToTop"
import STRAccordionWithImages from "../../components/home/STRAccordionWithImages"
// import SocialNavigation3D from "../../components/common/SocialNavigation3D"
import ToolsetComponent from "@/components/home/toolsetData"
import OurBenefit from "@/components/home/OurBenifit"
import FAQAccordion from "@/components/home/FAQAccordion"

const Home: React.FC = () => {
  return (
    <div className="font-family-small bg-gradient-to-tr from-[#0b0f19] via-[#111827] to-[#0b0f19]">
      <ScrollToTop/>
      
      <HeroSection/>


        <STRAccordionWithImages/>
        <ServiceListingTab/>
        <OurBenefit/>
        <FAQAccordion/>
        <ToolsetComponent/>
        {/* <SocialNavigation3D/> */}
      
      {/* CTA Section */}
      <section className="bg-gradient-to-tr from-[#0b0f19] via-[#111827] to-[#0b0f19] text-white section-padding">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team today for a free consultation and detailed project quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get Free Quote
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
