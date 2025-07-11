"use client"

import type React from "react"
import { Linkedin } from "lucide-react"
import sifat from "@/assets/shifat.jpg"
import mizan from "@/assets/taison.jpg"
import ishaq from "@/assets/ishaq.png"

interface TeamMember {
  name: string
  role: string
  image: string
  experience: string
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Solaiman Islam",
      role: "Senior Full Stack Developer",
      image: sifat,
      experience:
        "5+ years of experience in full-stack development. Expertise in React, Node.js, and modern web technologies",
    },
    {
      name: "Mizanur Rahman",
      role: "Leader & Senior Consultant",
      image: mizan,
      experience:
        "8+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      name: "Emily Rivera",
      role: "Lead Front-End Developer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      experience:
        "6+ years of experience in front-end development. Proficient in React, Vue.js, and modern CSS frameworks",
    },
    {
      name: "Jordan Cross",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "Ahmad Ishaq",
      role: "UI/UX Designer",
      image: ishaq,
      experience: "7+ years of experience in UI/UX design. Skilled in Figma, Adobe illustrator, and user research",
    },
    {
      name: "Sarah Wilson",
      role: "Digital Marketing Specialist",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/12/IB/LR/QN/35897240/women-specs.jpg",
      experience:
        "3+ years of experience in digital marketing. Proficient in social media marketing and content creation",
    },
  ]

  return (
    <section className="bg- py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-green-500 text-black px-4 py-2 rounded-lg font-bold text-lg mb-6">Team</div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
            Meet the skilled and experienced team behind our successful digital marketing strategies
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* LinkedIn Icon */}
              <div className="flex justify-end mb-4">
                <div className="bg-black rounded-full p-2 cursor-pointer hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Profile Image with Blob Shape */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-44 h-44 bg-black rounded-full relative overflow-hidden">
                    {/* Blob shape overlay */}
                    <div
                      className="absolute inset-0 bg-black"
                      style={{
                        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                      }}
                    >
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        style={{
                          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-4">{member.role}</p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-200 mb-4"></div>

              {/* Experience Description */}
              <p className="text-gray-700 text-sm leading-relaxed">{member.experience}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TeamSection
