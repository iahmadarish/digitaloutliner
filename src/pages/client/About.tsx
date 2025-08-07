import AboutHero from "@/components/about/aboutHero"
import MissionAbout from "@/components/about/MissionAbout"
import Team from "@/components/about/Team"
import ScrollToTop from "@/components/ScrollToTop"
import type React from "react"


const About: React.FC = () => {
  return (
    <div className="font-family-small   py-16 bg-[#06140b] ">
      <ScrollToTop/>
      <p className="py-16  text-white">
        <AboutHero/>
        <Team/>
        <MissionAbout/>
      </p>
    </div>
  )
}

export default About
