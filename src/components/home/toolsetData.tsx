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
    description: "Modern UI/UX development with cutting-edge frameworks and libraries for responsive web applications.",
    icons: [
      { icon: Code, name: "React", color: "bg-blue-500" },
      { icon: Layers, name: "Next.js", color: "bg-gray-700" },
      { icon: Zap, name: "Vite", color: "bg-purple-500" },
      { icon: Settings, name: "Tailwind", color: "bg-cyan-500" },
      { icon: Globe, name: "TypeScript", color: "bg-blue-600" },
      { icon: Monitor, name: "Figma", color: "bg-pink-500" }
    ]
  },
  {
    title: "Back-End",
    description: "Robust server-side solutions with scalable architecture and secure API development.",
    icons: [
      { icon: Server, name: "Node.js", color: "bg-green-500" },
      { icon: Database, name: "Express", color: "bg-gray-600" },
      { icon: Shield, name: "MongoDB", color: "bg-green-600" },
      { icon: Code, name: "Python", color: "bg-yellow-500" },
      { icon: Layers, name: "Django", color: "bg-green-700" },
      { icon: Terminal, name: "FastAPI", color: "bg-teal-500" }
    ]
  },
  {
    title: "Version Control",
    description: "Professional code management and collaboration tools for seamless team development.",
    icons: [
      { icon: GitBranch, name: "Git", color: "bg-orange-500" },
      { icon: Globe, name: "GitHub", color: "bg-gray-800" },
      { icon: Layers, name: "GitLab", color: "bg-orange-600" },
      { icon: Settings, name: "Bitbucket", color: "bg-blue-700" },
      { icon: Code, name: "VS Code", color: "bg-blue-500" },
      { icon: Terminal, name: "CLI Tools", color: "bg-gray-700" }
    ]
  },
  {
    title: "Databases",
    description: "Comprehensive data management solutions with both SQL and NoSQL database systems.",
    icons: [
      { icon: Database, name: "PostgreSQL", color: "bg-blue-600" },
      { icon: Shield, name: "MySQL", color: "bg-orange-500" },
      { icon: Layers, name: "Redis", color: "bg-red-500" },
      { icon: Globe, name: "MongoDB", color: "bg-green-600" },
      { icon: Settings, name: "Firebase", color: "bg-yellow-500" },
      { icon: Server, name: "SQLite", color: "bg-blue-400" }
    ]
  },
  {
    title: "DevOps And Hosting",
    description: "Complete deployment pipeline with cloud infrastructure and continuous integration solutions.",
    icons: [
      { icon: Cloud, name: "AWS", color: "bg-orange-400" },
      { icon: Globe, name: "Vercel", color: "bg-black" },
      { icon: Server, name: "Docker", color: "bg-blue-500" },
      { icon: Settings, name: "Netlify", color: "bg-teal-500" },
      { icon: Shield, name: "Kubernetes", color: "bg-blue-600" },
      { icon: Terminal, name: "CI/CD", color: "bg-green-500" }
    ]
  }
];

interface MousePosition {
  x: number;
  y: number;
}

const ToolsetComponent = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

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

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateParallax = (index: number): React.CSSProperties => {
    const factor = (index % 2 === 0 ? 1 : -1) * 0.02;
    return {
      transform: `translateY(${mousePosition.y * factor}px) translateX(${mousePosition.x * factor * 0.5}px)`
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-gray-600 text-2xl opacity-20 animate-bounce delay-300">&lt;/&gt;</div>
        <div className="absolute top-1/3 right-1/4 text-gray-600 text-xl opacity-20 animate-bounce delay-700">{`{}`}</div>
        <div className="absolute bottom-1/4 left-1/3 text-gray-600 text-lg opacity-20 animate-bounce delay-1000">[]</div>
        <div className="absolute top-1/2 right-1/3 text-gray-600 text-xl opacity-20 animate-bounce delay-1300">&lt;!--</div>
      </div>

      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="text-gray-400 text-lg sm:text-xl font-mono">&lt;!--</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Toolset
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Cutting-edge technologies and frameworks that power our development workflow
          </p>
        </div>

        {/* Toolset Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {toolsetData.map((category, index) => (
     <div
  key={index}
  ref={(el: HTMLDivElement | null) => {
    if (el) {
      cardRefs.current[index] = el;
    }
  }}
  data-index={index}
  className={`group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-2 ${
    visibleCards.has(index) 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-12'
  }`}
  style={{
    ...calculateParallax(index),
    transitionDelay: `${index * 200}ms`
  }}
>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Icons Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {category.icons.map((tool, toolIndex) => {
                    const IconComponent = tool.icon;
                    return (
                      <div
                        key={toolIndex}
                        className={`group/icon relative ${tool.color} rounded-xl p-4 hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto" />
                        
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                          {tool.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Hover Accent */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="inline-block bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Let's discuss how our expertise can bring your vision to life
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-cyan-600">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsetComponent;