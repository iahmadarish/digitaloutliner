import { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Server, 
  GitBranch, 
  Database, 
  Cloud, 
  Globe,
  Terminal,
  Layers,
  Settings,
  Zap,
  Shield,
  Monitor,
  type LucideIcon
} from 'lucide-react';

interface Tool {
  icon: LucideIcon;
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
    title: "Front-End",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icons: [
      { icon: Code, name: "React", color: "bg-gray-600" },
      { icon: Layers, name: "Next.js", color: "bg-gray-600" },
      { icon: Zap, name: "Vite", color: "bg-gray-600" },
      { icon: Settings, name: "Tailwind", color: "bg-gray-600" },
      { icon: Globe, name: "TypeScript", color: "bg-gray-600" },
      { icon: Monitor, name: "Figma", color: "bg-gray-600" }
    ]
  },
  {
    title: "Back-End",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icons: [
      { icon: Server, name: "Node.js", color: "bg-gray-600" },
      { icon: Database, name: "Express", color: "bg-gray-600" },
      { icon: Shield, name: "MongoDB", color: "bg-gray-600" },
      { icon: Code, name: "Python", color: "bg-gray-600" },
      { icon: Layers, name: "Django", color: "bg-gray-600" },
      { icon: Terminal, name: "FastAPI", color: "bg-gray-600" }
    ]
  },
  {
    title: "Version Control",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icons: [
      { icon: GitBranch, name: "Git", color: "bg-gray-600" },
      { icon: Globe, name: "GitHub", color: "bg-gray-600" },
      { icon: Layers, name: "GitLab", color: "bg-gray-600" },
      { icon: Settings, name: "Bitbucket", color: "bg-gray-600" },
      { icon: Code, name: "VS Code", color: "bg-gray-600" },
      { icon: Terminal, name: "CLI Tools", color: "bg-gray-600" }
    ]
  },
  {
    title: "Databases",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icons: [
      { icon: Database, name: "PostgreSQL", color: "bg-gray-600" },
      { icon: Shield, name: "MySQL", color: "bg-gray-600" },
      { icon: Layers, name: "Redis", color: "bg-gray-600" },
      { icon: Globe, name: "MongoDB", color: "bg-gray-600" },
      { icon: Settings, name: "Firebase", color: "bg-gray-600" },
      { icon: Server, name: "SQLite", color: "bg-gray-600" }
    ]
  },
  {
    title: "DevOps And Hosting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icons: [
      { icon: Cloud, name: "AWS", color: "bg-gray-600" },
      { icon: Globe, name: "Vercel", color: "bg-gray-600" },
      { icon: Server, name: "Docker", color: "bg-gray-600" },
      { icon: Settings, name: "Netlify", color: "bg-gray-600" },
      { icon: Shield, name: "Kubernetes", color: "bg-gray-600" },
      { icon: Terminal, name: "CI/CD", color: "bg-gray-600" }
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
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 text-white py-16 px-4">
      <div className=" mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-gray-500 text-sm mb-4 font-mono">
            &lt;!--
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="text-yellow-500">Toolset</span>
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Row - 3 cards */}
          {toolsetData.slice(0, 3).map((category, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                if (el) {
                  cardRefs.current[index] = el;
                }
              }}
              data-index={index}
              className={`bg-gray-900 rounded-lg p-6 border border-gray-700 transition-all duration-500 ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {category.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Icons Grid - 2 rows of 3 */}
              <div className="grid grid-cols-3 gap-3">
                {category.icons.map((tool, toolIndex) => {
                  const IconComponent = tool.icon;
                  return (
                    <div
                      key={toolIndex}
                      className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {toolsetData.slice(3, 5).map((category, index) => (
            <div
              key={index + 3}
              ref={(el: HTMLDivElement | null) => {
                if (el) {
                  cardRefs.current[index + 3] = el;
                }
              }}
              data-index={index + 3}
              className={`bg-gray-900 rounded-lg p-6 border border-gray-700 transition-all duration-500 ${
                visibleCards.has(index + 3) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {category.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Icons Grid - 2 rows of 3 */}
              <div className="grid grid-cols-3 gap-3">
                {category.icons.map((tool, toolIndex) => {
                  const IconComponent = tool.icon;
                  return (
                    <div
                      key={toolIndex}
                      className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsetComponent;