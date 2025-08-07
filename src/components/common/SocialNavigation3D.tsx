import { useState } from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

interface SocialCard {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  textColor: string;
}

const GoogleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const socialCards: SocialCard[] = [
  {
    name: 'Facebook',
    icon: Facebook,
    color: '#000000',
    bgColor: '#4267B2',
    textColor: 'white'
  },
  {
    name: 'Twitter', 
    icon: Twitter,
    color: '#000000',
    bgColor: '#ffffff',
    textColor: 'black'
  },
  {
    name: 'Google',
    icon: GoogleIcon,
    color: '#fcba03',
    bgColor: '#0303fc',
    textColor: 'black'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    color: '#ffffff',
    bgColor: '#e820db',
    textColor: 'black'
  }
];

const IsometricSocialCards: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getSideColor = (bgColor: string): string => {
    if (bgColor === '#ffffff') return '#e5e5e5';
    if (bgColor === '#4267B2') return '#365899';
    return '#d1d1d1';
  };

  return (
    <div className="py-2 bg-[#06140b]  relative overflow-hidden">

      {/* Cards Container */}
      <div className="relative z-10 px-4">
        {/* Desktop and Tablet View */}
        <div className="hidden md:flex items-center justify-center">
          <div 
            className="flex space-x-4 lg:space-x-8"
            style={{
              perspective: '1000px',
              perspectiveOrigin: 'center center'
            }}
          >
            {socialCards.map((card, index) => {
              const IconComponent = card.icon;
              const isHovered = hoveredIndex === index;
              
              return (
                <div
                  key={card.name}
                  className="relative cursor-pointer group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    transform: `translateZ(${isHovered ? '40px' : '6px'})`,
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Card Container */}
                  <div 
                    className="relative"
                    style={{
                      transform: 'rotateX(60deg) rotateY(-14deg) rotateZ(14deg)',
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    {/* Main Card Face */}
                    <div
                      className="w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 rounded-lg shadow-2xl flex items-center justify-between px-3 md:px-4 lg:px-6 relative overflow-hidden"
                      style={{
                        backgroundColor: card.bgColor,
                        color: card.textColor,
                        transform: 'translateZ(8px)'
                      }}
                    >
                      {/* Hover Glow Effect */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${isHovered ? 'animate-pulse' : ''}`}
                        style={{ transform: 'translateX(-100%)' }}
                      />
                      
                      {/* Icon */}
                      <div 
                        className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: card.color }}
                      >
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1 text-right">
                        <h3 className="text-xs md:text-sm lg:text-lg font-semibold">
                          {card.name}
                        </h3>
                      </div>
                    </div>

                    {/* Right Side Face */}
                    <div
                      className="absolute top-0 left-full w-2 md:w-3 lg:w-4 h-20 md:h-24 lg:h-28 rounded-r-lg"
                      style={{
                        backgroundColor: getSideColor(card.bgColor),
                        transform: 'rotateY(90deg)',
                        transformOrigin: 'left center',
                        filter: 'brightness(0.8)'
                      }}
                    />

                    {/* Bottom Face */}
                    <div
                      className="absolute top-full left-0 w-32 h-2 md:w-40 md:h-3 lg:w-48 lg:h-4 rounded-b-lg"
                      style={{
                        backgroundColor: getSideColor(card.bgColor),
                        transform: 'rotateX(-90deg)',
                        transformOrigin: 'center top',
                        filter: 'brightness(0.7)'
                      }}
                    />
                  </div>

                  {/* Drop Shadow */}
                  <div
                    className="absolute -bottom-6 md:-bottom-8 left-4 md:left-6 lg:left-8 w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 bg-[#06140b] opacity-20 rounded-lg blur-sm"
                    style={{
                      transform: 'rotateX(90deg) translateZ(-40px)',
                      filter: 'blur(8px)'
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View - Horizontal Scroll */}
        <div className="md:hidden">
          <div 
            className="flex space-x-6 overflow-x-auto pb-8 px-4 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              perspective: '800px',
              perspectiveOrigin: 'center center'
            }}
          >
            {socialCards.map((card, index) => {
              const IconComponent = card.icon;
              const isHovered = hoveredIndex === index;
              
              return (
                <div
                  key={card.name}
                  className="relative cursor-pointer group flex-shrink-0"
                  onTouchStart={() => setHoveredIndex(index)}
                  onTouchEnd={() => setHoveredIndex(null)}
                  onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                  style={{
                    transform: `translateZ(${isHovered ? '20px' : '3px'})`,
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Card Container */}
                  <div 
                    className="relative"
                    style={{
                      transform: 'rotateX(45deg) rotateY(-10deg) rotateZ(10deg)',
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    {/* Main Card Face */}
                    <div
                      className="w-36 h-24 rounded-lg shadow-xl flex items-center justify-between px-4 relative overflow-hidden"
                      style={{
                        backgroundColor: card.bgColor,
                        color: card.textColor,
                        transform: 'translateZ(6px)'
                      }}
                    >
                      {/* Hover Glow Effect */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 ${isHovered ? 'opacity-20 animate-pulse' : ''} transition-opacity duration-300`}
                      />
                      
                      {/* Icon */}
                      <div 
                        className="flex-shrink-0 transition-transform duration-300"
                        style={{ 
                          color: card.color,
                          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                        }}
                      >
                        <IconComponent className="w-7 h-7" />
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1 text-right">
                        <h3 className="text-sm font-semibold">
                          {card.name}
                        </h3>
                      </div>
                    </div>

                    {/* Right Side Face */}
                    <div
                      className="absolute top-0 left-full w-3 h-24 rounded-r-lg"
                      style={{
                        backgroundColor: getSideColor(card.bgColor),
                        transform: 'rotateY(90deg)',
                        transformOrigin: 'left center',
                        filter: 'brightness(0.8)'
                      }}
                    />

                    {/* Bottom Face */}
                    <div
                      className="absolute top-full left-0 w-36 h-3 rounded-b-lg"
                      style={{
                        backgroundColor: getSideColor(card.bgColor),
                        transform: 'rotateX(-90deg)',
                        transformOrigin: 'center top',
                        filter: 'brightness(0.7)'
                      }}
                    />
                  </div>

                  {/* Drop Shadow */}
                  <div
                    className="absolute -bottom-6 left-6 w-36 h-24 bg-[#06140b] opacity-15 rounded-lg blur-sm"
                    style={{
                      transform: 'rotateX(90deg) translateZ(-30px)',
                      filter: 'blur(6px)'
                    }}
                  />
                </div>
              );
            })}
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {socialCards.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    hoveredIndex === index ? 'bg-white scale-125' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default IsometricSocialCards;