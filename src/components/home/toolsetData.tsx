import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Tool {
  image: string;
  name: string;
  color: string;
  description: string;
}

interface ToolsetCategory {
  title: string;
  description: string;
  icons: Tool[];
}

const toolsetData: ToolsetCategory[] = [
  {
    title: "Web Development",
    description: "Modern and scalable web solutions tailored to your business needs.",
    icons: [
      {
        name: "React",
        color: "from-blue-500 to-blue-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "A JavaScript library for building user interfaces"
      },
      {
        name: "Next.js",
        color: "from-gray-800 to-gray-900",
        image: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png",
        description: "The React framework for production"
      },
      {
        name: "Tailwind CSS",
        color: "from-cyan-500 to-cyan-600",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
        description: "A utility-first CSS framework"
      },
      {
        name: "TypeScript",
        color: "from-gray-900 to-black",
        image: "https://www.svgrepo.com/show/521320/typescript-16.svg",
        description: "Typed JavaScript at any scale"
      },
      {
        name: "Shopify",
        color: "from-green-600 to-green-700",
        image: "https://avatars.githubusercontent.com/u/8085?s=280&v=4",
        description: "E-commerce platform for online stores"
      },
      {
        name: "Vite",
        color: "from-purple-600 to-purple-700",
        image: "https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png",
        description: "Next generation frontend tooling"
      }
    ]
  },
  {
    title: "Back-End Development",
    description: "Robust server-side solutions and database management systems.",
    icons: [
      {
        name: "Python",
        color: "from-yellow-500 to-yellow-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        description: "High-level programming language"
      },
      {
        name: "Express.js",
        color: "from-gray-700 to-gray-800",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        description: "Fast, unopinionated web framework for Node.js"
      },
      {
        name: "MongoDB",
        color: "from-green-500 to-green-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        description: "NoSQL database program"
      },
      {
        name: "PostgreSQL",
        color: "from-blue-700 to-blue-800",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        description: "Powerful open source relational database"
      },
      {
        name: "Docker",
        color: "from-blue-400 to-blue-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        description: "Containerization platform"
      },
      {
        name: "Node.js",
        color: "from-green-600 to-green-700",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        description: "JavaScript runtime built on Chrome's V8 engine"
      }
    ]
  },
  {
    title: "Version Control & DevOps",
    description: "Streamlined development workflows and deployment automation.",
    icons: [
      {
        name: "Git",
        color: "from-red-500 to-red-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        description: "Distributed version control system"
      },
      {
        name: "GitHub",
        color: "from-gray-800 to-gray-900",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        description: "Platform for version control and collaboration"
      },
      {
        name: "GitLab",
        color: "from-orange-600 to-orange-700",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        description: "DevOps platform delivered as a single application"
      },
      {
        name: "Jenkins",
        color: "from-blue-800 to-blue-900",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        description: "Open source automation server"
      },
      {
        name: "Kubernetes",
        color: "from-blue-600 to-blue-700",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        description: "Container orchestration system"
      },
      {
        name: "Linux",
        color: "from-yellow-600 to-yellow-700",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        description: "Open source operating system"
      }
    ]
  },
  {
    title: "Design & UI/UX",
    description: "Crafting visually compelling brand identities and user experiences.",
    icons: [
      {
        name: "Figma",
        color: "from-purple-500 to-purple-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        description: "Collaborative interface design tool"
      },
      {
        name: "Photoshop",
        color: "from-blue-600 to-blue-700",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        description: "Raster graphics editor"
      },
      {
        name: "Illustrator",
        color: "from-orange-500 to-orange-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
        description: "Vector graphics editor"
      },
      {
        name: "Sketch",
        color: "from-yellow-500 to-yellow-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
        description: "Vector graphics editor for macOS"
      },
      {
        name: "Adobe XD",
        color: "from-pink-500 to-pink-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
        description: "User experience design tool"
      },
      {
        name: "Canva",
        color: "from-cyan-400 to-cyan-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        description: "Graphic design platform"
      }
    ]
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications for iOS and Android.",
    icons: [
      {
        name: "React Native",
        color: "from-blue-500 to-blue-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "Framework for building native apps with React"
      },
      {
        name: "Flutter",
        color: "from-blue-400 to-blue-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        description: "UI toolkit for natively compiled apps"
      },
      {
        name: "Swift",
        color: "from-orange-500 to-orange-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        description: "Programming language for Apple platforms"
      },
      {
        name: "Kotlin",
        color: "from-purple-600 to-purple-700",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        description: "Cross-platform programming language"
      },
      {
        name: "Java",
        color: "from-red-600 to-red-700",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        description: "General-purpose programming language"
      },
      {
        name: "Dart",
        color: "from-blue-600 to-blue-700",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        description: "Programming language optimized for UI"
      }
    ]
  }
];

const ToolsetComponent = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [isGridMode, setIsGridMode] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active category
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const activeCard = container.children[activeCategory] as HTMLElement;
      
      if (activeCard) {
        container.scrollTo({
          left: activeCard.offsetLeft - container.offsetWidth / 2 + activeCard.offsetWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f19] via-[#111827] to-[#0b0f19] text-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-yellow-400 text-sm sm:text-base mb-3 font-mono tracking-wider">
            OUR TECHNOLOGICAL ARSENAL
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Expert Tools
            </span>
          </h1>
          <p className="text-gray-400 sm:text-lg text-sm max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies to build exceptional digital experiences that drive results.
          </p>
        </motion.div>

        {/* Toggle View Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsGridMode(!isGridMode)}
            className="px-6 py-2 rounded bg-gray-800 hover:bg-gray-700 transition-all duration-300 
            border border-gray-700 text-sm font-medium flex items-center gap-2"
          >
            {isGridMode ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                List View
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Grid View
              </>
            )}
          </button>
        </div>

        {isGridMode ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-nunito">
            {toolsetData.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-md rounded p-6 border border-gray-700/30 
                hover:border-yellow-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-500/10"
                onMouseEnter={() => setActiveCategory(index)}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-2 mr-4">
                    <div className="text-yellow-400 text-xl font-bold">{index + 1}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  {category.icons.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      whileHover={{ scale: 1.1 }}
                      className={`relative bg-gradient-to-br ${tool.color} rounded aspect-square 
                      flex items-center justify-center cursor-pointer transition-all duration-300`}
                      onMouseEnter={() => setHoveredTool(index * 6 + toolIndex)}
                      onMouseLeave={() => setHoveredTool(null)}
                    >
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-8 h-8 object-contain filter brightness-0 invert"
                      />
                      
                      <AnimatePresence>
                        {hoveredTool === index * 6 + toolIndex && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 
                            bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap 
                            border border-gray-700 shadow-lg z-10"
                          >
                            {tool.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Carousel View */
          <div className="relative font-nunito">
            {/* Category Navigation */}
            <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide" ref={containerRef}>
              <div className="flex space-x-2 mx-auto">
                {toolsetData.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 whitespace-nowrap
                    ${activeCategory === index 
                      ? 'bg-yellow-500 text-gray-900 font-bold' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Category Content */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/30"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {toolsetData[activeCategory].title}
                </h3>
                <p className="text-gray-400">
                  {toolsetData[activeCategory].description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {toolsetData[activeCategory].icons.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    whileHover={{ scale: 1.05 }}
                    className="group relative"
                  >
                    <div className={`bg-gradient-to-br ${tool.color} rounded-xl aspect-square 
                      flex items-center justify-center cursor-pointer transition-all duration-300`}
                    >
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-8 h-8 object-contain filter brightness-0 invert"
                      />
                    </div>
                    <div className="mt-2 text-center">
                      <h4 className="text-sm font-medium text-white">{tool.name}</h4>
                      <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300">
                        {tool.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* Decorative Elements */}
        <Link to="/contact">
        <div className="mt-16 text-center">
          <div className="inline-block bg-yellow-500/0 border border-yellow-500/20 rounded px-6 py-3">
            <span className="text-blue-400 text-sm font-mono tracking-wider">
              READY TO BUILD SOMETHING AMAZING?
            </span>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ToolsetComponent;