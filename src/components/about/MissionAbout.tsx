import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Shield, Users, Zap, Monitor, Rocket } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

const FloatingElement = ({ children, className, delay = 0 }: { children: React.ReactNode; className: string; delay?: number }) => (
  <motion.div
    className={`absolute ${className} hidden lg:block`}
    animate={{
      y: [0, -10, 0],
      rotate: [0, 5, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const MissionAbout = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-8 md:py-16 px-4 relative overflow-hidden">
      {/* Floating Background Elements - Hidden on mobile */}
      <FloatingElement className="top-20 left-10 text-blue-200" delay={0}>
        <Code className="w-12 h-12 xl:w-16 xl:h-16 opacity-30" />
      </FloatingElement>
      <FloatingElement className="top-32 right-20 text-purple-200" delay={1}>
        <Smartphone className="w-10 h-10 xl:w-12 xl:h-12 opacity-40" />
      </FloatingElement>
      <FloatingElement className="bottom-40 left-20 text-green-200" delay={2}>
        <Monitor className="w-12 h-12 xl:w-14 xl:h-14 opacity-15" />
      </FloatingElement>
      <FloatingElement className="bottom-20 right-16 text-red-200" delay={0.5}>
        <Globe className="w-14 h-14 xl:w-18 xl:h-18 opacity-15" />
      </FloatingElement>
      
      {/* Geometric Background Shapes - Responsive sizing */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="absolute top-20 right-1/4 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg opacity-15"
          animate={{ rotate: [0, 45, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Animated Header - Responsive text sizing */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-4 tracking-tight">
            Our <span className="text-blue-600">Vision</span> & Values
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Transforming ideas into powerful digital solutions through cutting-edge technology and innovative development
          </p>
        </motion.div>

        {/* Mission Cards - Responsive grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
        >
          {/* Custom Development Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-6 md:p-8 border-t-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-2 md:p-3 rounded-xl mr-3 md:mr-4">
                <Code className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                Custom <span className="text-blue-600">Development</span>
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We craft <span className="font-semibold text-gray-800">tailored web applications</span> and software solutions 
              that perfectly align with your business needs. From concept to deployment, we deliver 
              <span className="text-blue-600 font-semibold"> scalable, robust systems</span> that drive growth.
            </p>
          </motion.div>

          {/* Mobile Solutions Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-6 md:p-8 border-t-4 border-purple-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-2 md:p-3 rounded-xl mr-3 md:mr-4">
                <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Mobile Excellence</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Our <span className="text-purple-600 font-semibold">mobile-first approach</span> ensures your applications 
              perform flawlessly across all devices. We build <span className="font-semibold">native and cross-platform apps</span> 
              that deliver exceptional user experiences and drive engagement.
            </p>
          </motion.div>

          {/* Technology Stack Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-6 md:p-8 border-t-4 border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-2 md:p-3 rounded-xl mr-3 md:mr-4">
                <Rocket className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Modern Tech Stack</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
              We leverage <span className="font-semibold text-gray-800">cutting-edge technologies</span> and frameworks to build 
              solutions that are <span className="font-semibold">future-ready and maintainable</span>. 
              Our expertise spans:
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <span className="bg-blue-100 text-blue-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold flex items-center">
                <Shield className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                Security
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                Performance
              </span>
              <span className="bg-green-100 text-green-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold flex items-center">
                <Zap className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                Scalability
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Culture Section - Responsive padding and text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12 md:mb-16 bg-gradient-to-r from-gray-50 to-white"
        >
          <div className="flex items-center mb-6">
            <div className="bg-gray-800 p-2 md:p-3 rounded-xl mr-3 md:mr-4">
              <Monitor className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Development Philosophy</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
            We believe that <span className="text-blue-600 font-semibold">great software transforms businesses</span>. 
            Every line of code we write is guided by our commitment to quality, innovation, and client success.
          </p>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-block"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 md:px-6 rounded-lg transition-colors duration-300 flex items-center text-sm md:text-base">
              <span>View Our Portfolio</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Values Highlight - Responsive grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center p-6 md:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 md:p-4 rounded-2xl w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 flex items-center justify-center">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Client-Centered Approach</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We prioritize understanding your unique challenges and goals, delivering solutions that exceed expectations and drive measurable results.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="text-center p-6 md:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-3 md:p-4 rounded-2xl w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 flex items-center justify-center">
              <Zap className="w-8 h-8 md:w-10 md:h-10 text-purple-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Agile Innovation</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We embrace modern development methodologies to deliver solutions faster while maintaining the highest quality standards.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="text-center p-6 md:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 md:p-4 rounded-2xl w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 flex items-center justify-center">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Reliable & Secure</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Security and reliability are built into every solution we create, ensuring your data and users are always protected.
            </p>
          </motion.div>
        </motion.div>

        {/* Closing CTA - Responsive text and button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6 px-4">
            Ready to build something <span className="text-blue-600">amazing</span> together?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionAbout;