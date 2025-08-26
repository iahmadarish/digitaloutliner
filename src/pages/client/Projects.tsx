"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight } from 'lucide-react'
import ScrollToTop from "../../components/ScrollToTop"
import projects from "../../data/projects.json"
import type { Variants } from "framer-motion"
import { Helmet } from "react-helmet-async"


const Projects: React.FC = () => {
  const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4,
    },
  },
}


  return (
      <main>
        <Helmet>
        <title>Our Projects | My Company</title>
        <meta 
          name="description" 
          content="Explore our latest projects showcasing web development, design, and digital solutions." 
        />
        <meta 
          name="keywords" 
          content="projects, portfolio, web development, design, digital solutions" 
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Our Projects | My Company" />
        <meta 
          property="og:description" 
          content="Explore our latest projects showcasing web development, design, and digital solutions." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.conqueric.com/projects" />
        <meta property="og:image" content="https://www.conqueric.com/images/projects-og.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

    <div className="min-h-screen py-50 px-4" style={{ background: "transparent" }}>
      <ScrollToTop />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={headerVariants} initial="hidden" animate="visible">
          <motion.span
            className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm mb-4 border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Portfolio
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Innovative Digital Solutions
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore our successful projects delivering measurable results
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group cursor-pointer"
            >
              <Link to={`/projects/${project.slug}`}>
                {/* Card Container */}
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5">
                  {/* Image Container */}
                  <div className="relative sm:h-80 overflow-hidden">
                    <motion.img
                      src={project.images[0].url}
                      alt={project.images[0].alt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content Container */}
                  <div className="p-8">
                    {/* Title with Arrow */}
                    <div className="sm:flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white leading-tight flex-1 pr-4 group-hover:text-white/90 transition-colors">
                        {project.title}
                      </h3>
                      <motion.div
                        className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-base mb-6 leading-relaxed">
                      {project.descriptions[0]}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm border border-white/20 hover:bg-white/15 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-4 py-2 bg-white/5 text-white/60 rounded-full text-sm border border-white/10">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div className="text-center mt-20" variants={ctaVariants} initial="hidden" animate="visible">
          <motion.h3
            className="text-2xl font-semibold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Have a project in mind?
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/15 text-white rounded-full transition-all duration-300 border border-white/20 hover:border-white/30 group"
            >
              <span className="mr-2">Let's Discuss Your Project</span>
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </main>
)
}

export default Projects
