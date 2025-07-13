import { useState, useEffect, useRef } from 'react';

interface Tool {
  image: string;
  name: string;
  color: string;
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
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        name: "Next.js",
        color: "bg-gray-800",
        image: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png"
      },
      {
        name: "Tailwind CSS",
        color: "bg-cyan-500",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
      },
      {
        name: "TypeScript",
        color: "bg-black",
        image: "https://www.svgrepo.com/show/521320/typescript-16.svg"
      },
      {
        name: "Shopify",
        color: "bg-green-600",
        image: "https://avatars.githubusercontent.com/u/8085?s=280&v=4"
      },
      {
        name: "Vite",
        color: "bg-purple-600",
        image: "https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png"
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
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        name: "Express.js",
        color: "bg-gray-700",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      },
      {
        name: "MongoDB",
        color: "bg-green-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      },
      {
        name: "PostgreSQL",
        color: "bg-blue-700",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      },
      {
        name: "Docker",
        color: "bg-blue-400",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      },
      {
        name: "node js",
        color: "bg-orange-500",
        image: "https://avatars.githubusercontent.com/u/8085?s=280&v=4"
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
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        name: "GitHub",
        color: "bg-gray-800",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      },
      {
        name: "GitLab",
        color: "bg-orange-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
      },
      {
        name: "Jenkins",
        color: "bg-blue-800",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
      },
      {
        name: "Kubernetes",
        color: "bg-blue-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
      },
      {
        name: "Linux",
        color: "bg-yellow-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
      }
    ]
  },
  {
    title: "Design & UI/UX",
    description: "Crafting visually compelling brand identities and user experiences.",
    icons: [
      {
        name: "Figma",
        color: "bg-purple-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
      },
      {
        name: "Photoshop",
        color: "bg-blue-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
      },
      {
        name: "Illustrator",
        color: "bg-orange-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
      },
      {
        name: "Sketch",
        color: "bg-yellow-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg"
      },
      {
        name: "Adobe XD",
        color: "bg-pink-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"
      },
      {
        name: "Canva",
        color: "bg-cyan-400",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
      }
    ]
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications for iOS and Android.",
    icons: [
      {
        name: "React Native",
        color: "bg-blue-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        name: "Flutter",
        color: "bg-blue-400",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
      },
      {
        name: "Swift",
        color: "bg-orange-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
      },
      {
        name: "Kotlin",
        color: "bg-purple-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
      },
      {
        name: "Java",
        color: "bg-red-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        name: "Dart",
        color: "bg-blue-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
      }
    ]
  }
];

const ToolsetComponent = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.getAttribute('data-index')) {
            const index = parseInt(entry.target.getAttribute('data-index')!);
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen text-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-4 font-mono">
            &lt;!-- Our Technology Stack --&gt;
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="text-yellow-500">Toolset</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Cutting-edge technologies and tools we use to build exceptional digital experiences
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {toolsetData.map((category, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                if (el) {
                  cardRefs.current[index] = el;
                }
              }}
              data-index={index}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700/50 
                hover:border-gray-600/50 transition-all duration-500 hover:bg-gray-900/70 
                ${visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }`}
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                {category.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                {category.description}
              </p>

              {/* Icons Grid - Responsive 2x3 or 3x2 layout */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {category.icons.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className={`${tool.color} rounded-xl w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                      flex items-center justify-center hover:scale-110 hover:shadow-lg 
                      transition-all duration-300 cursor-pointer group relative`}
                    title={tool.name}
                  >
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain filter brightness-0 invert"
                      onError={(e) => {
                        // Fallback for broken images
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback text */}
                    <span className="hidden text-xs sm:text-sm font-bold text-white text-center px-1">
                      {tool.name.charAt(0)}
                    </span>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                      bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300 pointer-events-none 
                      whitespace-nowrap z-10">
                      {tool.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="text-gray-500 text-xs sm:text-sm font-mono">
            &lt;/-- End of Toolset --&gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsetComponent;