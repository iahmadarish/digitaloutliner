import AboutHero from "@/components/about/aboutHero"
import MissionAbout from "@/components/about/MissionAbout"
import Team from "@/components/about/Team"
import type React from "react"


const About: React.FC = () => {
  return (
    <div className="font-family-small  mx-auto px-4 sm:px-6 md:xl:2xl:lg:px-18 py-16 bg-gradient-to-tr from-[#0b0f19] via-[#111827] to-[#0b0f19] ">
      <p className="py-16  text-white">
        <AboutHero/>
        <Team/>
        <MissionAbout/>
      </p>
    </div>
  )
}

export default About
