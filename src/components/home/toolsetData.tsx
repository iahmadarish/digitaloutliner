import { useState, useEffect, useRef } from 'react';
interface Tool {
  image: string; // image url
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
        color: "bg-gray-800",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
      },
      {
        name: "Next.js",
        color: "bg-teal-500",
        image: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png"
      },
      {
        name: "Tailwind CSS",
        color: "bg-black",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
      },
      {
        name: "TypeScript",
        color: "bg-blue-700",
        image: "/images/typescript.png"
      },
      {
        name: "Node.js",
        color: "bg-green-700",
        image: "/images/nodejs.png"
      },
      {
        name: "Vite",
        color: "bg-purple-700",
        image: "/images/vite.png"
      }
    ]
  },
  {
    title: "Back-End",
    description: "Crafting visually compelling brand identities and UI/UX designs.",
    icons: [
      {
        name: "Node js",
        color: "bg-pink-500",
        image: "/images/figma.png"
      },
      {
        name: "Photoshop",
        color: "bg-blue-600",
        image: "/images/photoshop.png"
      },
      {
        name: "Illustrator",
        color: "bg-orange-500",
        image: "/images/illustrator.png"
      },
      {
        name: "Canva",
        color: "bg-green-500",
        image: "/images/canva.png"
      },
      {
        name: "Framer",
        color: "bg-black",
        image: "/images/framer.png"
      },
      {
        name: "Adobe XD",
        color: "bg-purple-600",
        image: "/images/xd.png"
      }
    ]
  }
  ,
  {
    title: "Version Control",
    description: "Crafting visually compelling brand identities and UI/UX designs.",
    icons: [
      {
        name: "Node js",
        color: "bg-pink-500",
        image: "/images/figma.png"
      },
      {
        name: "Photoshop",
        color: "bg-blue-600",
        image: "/images/photoshop.png"
      },
      {
        name: "Illustrator",
        color: "bg-orange-500",
        image: "/images/illustrator.png"
      },
      {
        name: "Canva",
        color: "bg-green-500",
        image: "/images/canva.png"
      },
      {
        name: "Framer",
        color: "bg-black",
        image: "/images/framer.png"
      },
      {
        name: "Adobe XD",
        color: "bg-purple-600",
        image: "/images/xd.png"
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
              className={`bg-gray-900 rounded-lg p-6 border border-gray-700 transition-all duration-500 ${visibleCards.has(index)
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
              {category.icons.map((tool, toolIndex) => (
                <div
                  key={toolIndex}
                  className={`${tool.color} rounded-full w-12 h-12 flex items-center flex-col justify-center hover:opacity-80 transition duration-200`}
                >
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              ))}
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
              className={`bg-gray-900 rounded-lg p-6 border border-gray-700 transition-all duration-500 ${visibleCards.has(index + 3)
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
              {category.icons.map((tool, toolIndex) => (
                <div
                  key={toolIndex}
                  className={`${tool.color} rounded-full w-12 h-12 flex items-center justify-center hover:opacity-80 transition duration-200`}
                >
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsetComponent;