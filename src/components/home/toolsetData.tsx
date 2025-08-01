import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
        color: "bg-blue-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "A JavaScript library for building user interfaces"
      },
      {
        name: "Next.js",
        color: "bg-gray-800",
        image: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png",
        description: "The React framework for production"
      },
      {
        name: "Tailwind CSS",
        color: "bg-cyan-500",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
        description: "A utility-first CSS framework"
      },
      {
        name: "TypeScript",
        color: "bg-gray-900",
        image: "https://www.svgrepo.com/show/521320/typescript-16.svg",
        description: "Typed JavaScript at any scale"
      },
      {
        name: "Shopify",
        color: "bg-green-600",
        image: "https://avatars.githubusercontent.com/u/8085?s=280&v=4",
        description: "E-commerce platform for online stores"
      },
      {
        name: "Vite",
        color: "bg-purple-600",
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
        color: "bg-yellow-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        description: "High-level programming language"
      },
      {
        name: "Express.js",
        color: "bg-gray-700",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        description: "Fast, unopinionated web framework for Node.js"
      },
      {
        name: "MongoDB",
        color: "bg-green-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        description: "NoSQL database program"
      },
      {
        name: "PostgreSQL",
        color: "bg-blue-700",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        description: "Powerful open source relational database"
      },
      {
        name: "Docker",
        color: "bg-blue-400",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        description: "Containerization platform"
      },
      {
        name: "Node.js",
        color: "bg-green-600",
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
        color: "bg-red-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        description: "Distributed version control system"
      },
      {
        name: "GitHub",
        color: "bg-gray-800",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        description: "Platform for version control and collaboration"
      },
      {
        name: "GitLab",
        color: "bg-orange-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        description: "DevOps platform delivered as a single application"
      },
      {
        name: "Jenkins",
        color: "bg-blue-800",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        description: "Open source automation server"
      },
      {
        name: "Kubernetes",
        color: "bg-blue-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        description: "Container orchestration system"
      },
      {
        name: "Linux",
        color: "bg-yellow-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        description: "Open source operating system"
      }
    ]
  }
];

const ToolsetComponent = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
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
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-blue-600 text-sm mb-3 font-medium">
            OUR TECHNOLOGICAL ARSENAL
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Expert Tools
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Carousel View */}
        <div className="relative">
          {/* Category Navigation */}
          <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide" ref={containerRef}>
            <div className="flex space-x-2 mx-auto">
              {toolsetData.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap
                  ${activeCategory === index 
                    ? 'bg-blue-600 text-white font-medium' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
            className="bg-white rounded-lg p-6 shadow-md"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {toolsetData[activeCategory].title}
              </h3>
              <p className="text-gray-600">
                {toolsetData[activeCategory].description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {toolsetData[activeCategory].icons.map((tool, toolIndex) => (
                <motion.div
                  key={toolIndex}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className={`${tool.color} rounded-lg aspect-square flex items-center justify-center`}>
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-8 h-8 object-contain filter brightness-0 invert"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <h4 className="text-sm font-medium text-gray-900">{tool.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {tool.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


      </div>
    </div>
  );
};

export default ToolsetComponent;