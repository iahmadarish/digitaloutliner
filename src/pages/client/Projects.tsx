import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import ScrollToTop from '../../components/ScrollToTop';
import projects from '../../data/projects.json';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f19] via-[#111827] to-[#070a12] py-50 px-4">
      <ScrollToTop />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm mb-4">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-100 mb-4">
            Innovative Digital Solutions
          </h1>
          <p className="text-xl text-blue-300 max-w-3xl mx-auto">
            Explore our successful projects delivering measurable results
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              key={project.id}
              className="group relative block rounded-xl overflow-hidden border border-blue-900/30 hover:border-blue-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20"
            >
              {/* Image Container */}
              <div className="h-60 overflow-hidden relative">
                <img
                  src={project.images[0].url}
                  alt={project.images[0].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-90" />
              </div>

              {/* Content Container */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-blue-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-blue-300 text-sm mb-4 line-clamp-2">
                  {project.descriptions[0]}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-900/40 text-blue-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  View Details
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold text-blue-200 mb-4">
            Have a project in mind?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-700 hover:bg-blue-600 text-blue-100 rounded-lg transition-colors"
          >
            Let's Discuss Your Project
            <FiExternalLink className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;