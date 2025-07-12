import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import projects from "../../data/projects.json";

const ProjectDetails: React.FC = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] text-red-400">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Project Not Found</h2>
          <Link
            to="/projects"
            className="text-blue-400 hover:underline inline-flex items-center"
          >
            <FiArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-[#0b0f19] text-blue-100 py-50 px-4"
      >
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
            >
              <FiArrowLeft className="mr-2" /> All Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-100 mb-4">
              {project.title}
            </h1>
            {project.client && (
              <p className="text-lg text-blue-300 mb-6">
                <span className="font-semibold">Client:</span> {project.client}
              </p>
            )}
            {project.projectBudget && (
              <p className="text-lg text-blue-300 mb-6">
                <span className="font-semibold">Budget:</span> {project.projectBudget}
              </p>
            )}
          </motion.div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg overflow-hidden border border-blue-900/30"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
                {image.caption && (
                  <p className="text-sm text-blue-400 p-3 bg-blue-900/10">
                    {image.caption}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-blue-200 mb-6">Project Overview</h2>
              <div className="space-y-4">
                {project.descriptions.map((desc, i) => (
                  <p key={i} className="text-blue-200 leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>

              {/* Solution Overview */}
              {project.solution && (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-blue-200 mb-6">Our Solution</h2>
                  <p className="text-blue-200 mb-6">{project.solution.overview}</p>
                  
                  <div className="space-y-6">
                    {project.solution.features.map((feature, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ scale: 1.01 }}
                        className="bg-blue-900/20 p-5 rounded-lg border border-blue-900/30"
                      >
                        <h3 className="text-xl font-semibold text-blue-200 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-blue-300">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Summary */}
              {project.summary && (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-blue-200 mb-6">{project.summary.title}</h2>
                  <p className="text-blue-200">{project.summary.details}</p>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-900/30">
                <h3 className="text-xl font-semibold text-blue-200 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-300 font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-blue-900/40 text-blue-200 rounded-full text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {project.launchDate && (
                    <div>
                      <h4 className="text-blue-300 font-medium mb-2">Launch Date</h4>
                      <p className="text-blue-200">
                        {new Date(project.launchDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-900/30">
                  <h3 className="text-xl font-semibold text-blue-200 mb-4">Key Features</h3>
                  <div className="space-y-4">
                    {project.features.map((feature, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start gap-4"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-blue-200 font-medium">{feature.title}</h4>
                          <p className="text-blue-300 text-sm">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Client Feedback */}
          {project.clientFeedback && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-blue-900/20 p-8 rounded-lg border border-blue-900/30 mb-12"
            >
              <h2 className="text-2xl font-bold text-blue-200 mb-6">Client Feedback</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={project.clientFeedback.image}
                    alt={project.clientFeedback.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-blue-700"
                  />
                </div>
                <div>
                  <blockquote className="text-blue-200 italic mb-4">
                    "{project.clientFeedback.feedback}"
                  </blockquote>
                  <div>
                    <p className="text-blue-300 font-semibold">{project.clientFeedback.name}</p>
                    <p className="text-blue-400 text-sm">{project.clientFeedback.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Project Navigation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-between border-t border-blue-900/30 pt-8 gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-900/30 hover:bg-blue-900/50 text-blue-300 rounded-lg transition-colors"
            >
              <FiArrowLeft className="mr-2" /> Back to Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 hover:bg-blue-600 text-blue-100 rounded-lg transition-colors"
            >
              Start Your Project <FiExternalLink className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetails;