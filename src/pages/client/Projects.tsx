import type React from "react"
import ScrollToTop from "../../components/ScrollToTop"

const Projects: React.FC = () => {
  return (
    <div className="section-padding py-50 bg-gradient-to-tr from-[#0b0f19] via-[#111827] to-[#0b0f19]">
      <ScrollToTop/>
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-200 mb-6">Our Projects</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Showcasing our expertise through successful project deliveries.
          </p>
        </div>

        <div className="bg- rounded-lg  p-8">
          <h2 className="text-2xl font-bold text-blue-200 mb-4">Project Portfolio</h2>
          <p className="text-blue-200 leading-relaxed">
            This is the Projects page. Here will be add our project showcase with images, descriptions, categories, and
            project details here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
