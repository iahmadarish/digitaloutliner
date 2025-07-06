import { useState, useEffect } from "react";
import { ArrowRight, Code, Zap, Shield, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MatchingHeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [codeContent, setCodeContent] = useState("");
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fullHeading = "Build, Scale, and Succeed — with URSOFTS";
  
  const allCodeLines = [
    // First code snippet - Business Growth Formula
    [
      { text: "/*", color: "text-emerald-400" },
      { text: " Business Growth Formula ", color: "text-gray-400" },
      { text: "*/", color: "text-emerald-400" },
      { text: "\nconst", color: "text-purple-400" },
      { text: " success", color: "text-cyan-400" },
      { text: " = ", color: "text-gray-400" },
      { text: "TailoredSolution", color: "text-yellow-400" },
      { text: " + ", color: "text-gray-400" },
      { text: "\n(", color: "text-gray-400" },
      { text: "Marketing", color: "text-pink-400" },
      { text: " × ", color: "text-gray-400" },
      { text: "UltimateSpeed", color: "text-emerald-400" },
      { text: ") +", color: "text-gray-400" },
      { text: "\nSecurity", color: "text-blue-400" },
      { text: " = ", color: "text-gray-400" },
      { text: "ConstantGrowth", color: "text-yellow-400" },
      { text: " ", color: "text-gray-400" },
      { text: "📈", color: "text-red-400" },
    ],
    
    // Second code snippet - Development Approach
    [
      { text: "//", color: "text-gray-500" },
      { text: " Our Development Process ", color: "text-gray-400" },
      { text: "\nfunction", color: "text-purple-400" },
      { text: " buildSolution", color: "text-cyan-400" },
      { text: "() {", color: "text-gray-400" },
      { text: "\n  const", color: "text-purple-400" },
      { text: " techStack", color: "text-cyan-400" },
      { text: " = ", color: "text-gray-400" },
      { text: "[", color: "text-gray-400" },
      { text: "\n    'React'", color: "text-yellow-400" },
      { text: ", ", color: "text-gray-400" },
      { text: "'Node.js'", color: "text-yellow-400" },
      { text: ", ", color: "text-gray-400" },
      { text: "\n    'TypeScript'", color: "text-yellow-400" },
      { text: ", ", color: "text-gray-400" },
      { text: "'MongoDB'", color: "text-yellow-400" },
      { text: "\n  ];", color: "text-gray-400" },
      { text: "\n  return", color: "text-purple-400" },
      { text: " ", color: "text-gray-400" },
      { text: "techStack", color: "text-cyan-400" },
      { text: " + ", color: "text-gray-400" },
      { text: "' + Innovation'", color: "text-yellow-400" },
      { text: ";", color: "text-gray-400" },
      { text: "\n}", color: "text-gray-400" },
    ],
    
    // Third code snippet - Project Success Metrics
    [
      { text: "/*", color: "text-emerald-400" },
      { text: " Project Success Metrics ", color: "text-gray-400" },
      { text: "*/", color: "text-emerald-400" },
      { text: "\nconst", color: "text-purple-400" },
      { text: " metrics", color: "text-cyan-400" },
      { text: " = {", color: "text-gray-400" },
      { text: "\n  performance", color: "text-blue-400" },
      { text: ": ", color: "text-gray-400" },
      { text: "'98%'", color: "text-yellow-400" },
      { text: ",", color: "text-gray-400" },
      { text: "\n  security", color: "text-blue-400" },
      { text: ": ", color: "text-gray-400" },
      { text: "'A+'", color: "text-yellow-400" },
      { text: ",", color: "text-gray-400" },
      { text: "\n  scalability", color: "text-blue-400" },
      { text: ": ", color: "text-gray-400" },
      { text: "'Unlimited'", color: "text-yellow-400" },
      { text: ",", color: "text-gray-400" },
      { text: "\n  support", color: "text-blue-400" },
      { text: ": ", color: "text-gray-400" },
      { text: "'24/7'", color: "text-yellow-400" },
      { text: "\n};", color: "text-gray-400" },
    ]
  ];

  useEffect(() => {
    if (!inView) return;

    let timeoutId: string | number | NodeJS.Timeout | undefined;
    let currentIndex = 0;
    let currentLine = 0;
    let currentText = "";
    let isTyping = true;

    const typeCode = () => {
      const currentCode = allCodeLines[currentCodeIndex];
      
      if (currentLine < currentCode.length) {
        const line = currentCode[currentLine];
        if (currentIndex < line.text.length) {
          currentText += line.text[currentIndex];
          currentIndex++;
          setCodeContent(currentText);
          timeoutId = setTimeout(typeCode, 30);
        } else {
          currentLine++;
          currentIndex = 0;
          timeoutId = setTimeout(typeCode, 30);
        }
      } else {
        // Typing completed, wait 3 seconds and move to next code
        isTyping = false;
        timeoutId = setTimeout(() => {
          currentIndex = 0;
          currentLine = 0;
          currentText = "";
          setCodeContent("");
          setCurrentCodeIndex((prevIndex) => 
            prevIndex === allCodeLines.length - 1 ? 0 : prevIndex + 1
          );
          isTyping = true;
          typeCode();
        }, 3000);
      }
    };

    typeCode();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inView, currentCodeIndex]);

  // Function to render colored code
  const renderColoredCode = () => {
    // Split the typed content into lines to match the original structure
    let remainingContent = codeContent;
    const renderedLines = [];
    const currentCode = allCodeLines[currentCodeIndex];
    
    for (const line of currentCode) {
      if (remainingContent.length === 0) break;
      
      const lineLength = line.text.length;
      const currentLineContent = remainingContent.substring(0, lineLength);
      remainingContent = remainingContent.substring(lineLength);
      
      renderedLines.push(
        <span key={renderedLines.length} className={line.color}>
          {currentLineContent}
        </span>
      );
    }

    return (
      <div className="font-mono text-sm md:text-base">
        {renderedLines}
        <motion.span 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="ml-1 inline-block w-2 h-6 bg-emerald-400 align-middle"
        ></motion.span>
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-cover bg-no-repeat bg-gradient-to-br from-[#000] via-[#1d0303] to-[#000000] relative overflow-hidden"
      ref={ref}
    >
      {/* Background geometric patterns with enhanced effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-60 right-40 w-48 h-48 border border-purple-400/20 rotate-12"></div>
        <div className="absolute bottom-40 left-60 w-24 h-24 border border-emerald-400/25 -rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-cyan-400/20 rotate-45"></div>
      </motion.div>

      {/* Floating grid pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute inset-0"
      >
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </motion.div>

      {/* Hero Section */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 md:xl:2xl:lg:px-40 py-16 pt-20 sm:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              {/* Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-sm font-medium text-gray-300"
              >
                <Sparkles className="h-4 w-4 mr-2 text-cyan-400" />
                <span className="text-cyan-400">URSOFTS </span>
                <span className="mx-2 text-gray-600">•</span>
                <span>Since 2025</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                {fullHeading}
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="ml-1 inline-block w-2 h-12 bg-cyan-400 align-middle"
                ></motion.span>
              </h1>
            </div>

            {/* Code-style description */}
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/50 overflow-x-auto"
              >
                {renderColoredCode()}
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-cyan-400">5</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-purple-400">5</div>
                <div className="text-sm text-gray-400">Clients</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-emerald-400">24/7</div>
                <div className="text-sm text-gray-400">life time Support</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Enhanced CTA Card */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div 
              className="relative group max-w-md w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Glow effect */}
              <motion.div 
                initial={{ opacity: 0.2 }}
                whileHover={{ opacity: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-xl"
              ></motion.div>
              
              {/* Main card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 md:p-8 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      whileHover={{ rotate: 10 }}
                      className="p-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                    >
                      <Code className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-white text-xl font-semibold">
                        Ready to Start?
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Get your custom quote today
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed">
                    Tell us about your project and get a tailored solution that drives real business results.
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <Zap className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-300">Lightning Fast Development</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <Shield className="h-4 w-4 text-emerald-400" />
                      <span className="text-gray-300">Enterprise-Grade Security</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <Star className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Premium Support Included</span>
                    </motion.div>
                  </div>

                  {/* CTA Button */}
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>Get Custom Quote</span>
                    <motion.span
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MatchingHeroSection;