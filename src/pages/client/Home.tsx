import type React from "react"
import HeroSection from "../../components/home/HeroSection"
import ServiceListingTab from "../../components/home/ServiceListingTab"
import ScrollToTop from "../../components/ScrollToTop"
import STRAccordionWithImages from "../../components/home/UrAccordionWithImages"
// import SocialNavigation3D from "../../components/common/SocialNavigation3D"
import ToolsetComponent from "@/components/home/toolsetData"
import OurBenefit from "@/components/home/OurBenifit"
import FAQAccordion from "@/components/home/FAQAccordion"
import Testimonial from "@/components/common/Testimonial"
import CustomWeb from "@/components/home/CustomWeb"
import WebSolutions from "@/components/home/WebSolutions"

const Home: React.FC = () => {
  return (
    <div className="font-family-small ">
      <ScrollToTop/>
      
      <HeroSection/>
      <CustomWeb/>
      <WebSolutions/>
        <STRAccordionWithImages/>
        <ServiceListingTab/>
        <OurBenefit/>
        <FAQAccordion/>
        <ToolsetComponent/>

      <Testimonial/>
      

    </div>
  )
}

export default Home
