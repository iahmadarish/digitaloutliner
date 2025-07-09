import { useState, useEffect } from 'react';
import { Code, Smartphone, Shield, Users, Zap, Target, Heart } from 'lucide-react';

const MissionAbout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: Users,
      title: "Client-Focused",
      description: "We put our clients first, understanding their unique needs and delivering solutions that exceed expectations.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and modern development practices to build future-ready solutions.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Quality & Security",
      description: "Security and reliability are built into every solution we create, ensuring your data is always protected.",
      color: "from-green-500 to-green-600"
    }
  ];

  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description: "We craft tailored web applications and software solutions that perfectly align with your business goals.",
      color: "border-blue-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Our mobile-first approach ensures your applications perform flawlessly across all devices.",
      color: "border-purple-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Target,
      title: "Digital Strategy",
      description: "We help you define and implement digital strategies that drive growth and market success.",
      color: "border-green-500",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <div className=" min-h-screen py-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Mission &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Vision</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Transforming ideas into powerful digital solutions through innovative technology and exceptional service
          </p>
        </div>

        {/* Mission Statement */}
        <div className={`bg-blue-950 rounded-2xl shadow-xl p-8 md:p-12 mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white text-center mb-6">Our Mission</h2>
          <p className="text-lg text-white text-center leading-relaxed max-w-4xl mx-auto">
            To empower businesses with cutting-edge digital solutions that drive growth, enhance user experiences, 
            and create lasting value. We believe that great software transforms businesses, and every line of code 
            we write is guided by our commitment to quality, innovation, and client success.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={`bg-blue-950 rounded-2xl shadow-lg p-6 border-t-4 ${service.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                <div className="flex items-center mb-4">
                  <div className={`${service.iconBg} p-3 rounded-xl mr-4`}>
                    <Icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-white">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center bg-blue-950 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`bg-gradient-to-r ${value.color} p-4 rounded-full w-16 h-16 mx-aut mb-6 flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center mb-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-lg opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white mb-8">
            Let's discuss how we can help transform your ideas into powerful digital solutions.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionAbout;