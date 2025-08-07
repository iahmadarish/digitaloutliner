import {
  Phone,
  Mail,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowRight,
  Target,
  DollarSign,
  BarChart2,
  Layers,
  Cpu,
  Cloud,
  Lock,
  Settings,
  MessageSquare,
  Award,
  Cog,
  Lightbulb
} from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import image from "@/assets/bg-elements/transparent_png-randstad_operational_tech_illustration_10_rgb_usebackgroundnavy.png"
import { Link } from 'react-router-dom';
import ServiceModal from "@/components/solutions/ServiceModal"
import { type Service } from '../../types/service'; // Adjust path as needed

import images from "@/assets/bpo/1.jpg"

import ScrollToTop from '@/components/ScrollToTop';


export default function Solutions() {
  const containerRef = useRef(null);
  useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });


  const services = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Reduction",
      shortDescription: "Cut expenses while retaining quality.",
      fullDescription: "Our strategic outsourcing solutions can reduce your operational costs by up to 60% while maintaining or even improving quality standards. We achieve this through optimized processes, competitive labor markets, and eliminating overhead expenses. Our cost-efficient model enables sustainable growth for your business without compromising on deliverables.",
      benefits: [
        "Reduced payroll and infrastructure costs",
        "Pay-as-you-go pricing models",
        "No recruitment or training expenses",
        "Lower operational overhead"
      ],
      useCases: [
        "Startups needing lean operations",
        "Enterprises optimizing budgets",
        "Seasonal businesses requiring flexibility"
      ],
      images: [
        {
          url: "https://i.ibb.co/kVK04N5L/Group-12-1.png",
          caption: "Financial efficiency metrics dashboard"
        },
        {
          url: "https://i.ibb.co/m5YkVxz9/chart.png",
          caption: "Cost savings analysis chart"
        },
        {
          url: "https://i.ibb.co/S7mm6VTd/Group-13-3.png",
          caption: "Cost-effective remote team setup"
        }
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Operations",
      shortDescription: "Support around the clock.",
      fullDescription: "We provide seamless 24/7/365 operations through our global delivery centers across multiple time zones. Our follow-the-sun model ensures your business never stops, with continuous workflows and always-available customer support. Whether you need night shifts, weekend coverage, or holiday support, we've got you covered with consistent quality at all hours.",
      benefits: [
        "Reduced response times for customers",
        "Faster project turnaround",
        "Continuous monitoring and support",
        "Global market coverage"
      ],
      useCases: [
        "Customer support centers",
        "IT operations monitoring",
        "Emergency response services",
        "Global e-commerce businesses"
      ],
      images: [
        {
          url: images,
          caption: "24/7 support team working night shift"
        },
        {
          url: "https://i.ibb.co/G4CJR9c2/Group-15-1.png",
          caption: "Multilingual support agents"
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Tz_world_mp-color.svg",
          caption: "Global timezone coverage"
        }
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Skilled Workforce",
      shortDescription: "Top talent with domain expertise.",
      fullDescription: "Access our curated network of highly trained professionals with deep industry knowledge and specialized skills. We rigorously vet all candidates through technical assessments, language proficiency tests, and cultural fit evaluations. Our talent pool includes experts across IT, healthcare, finance, engineering, and more - ready to integrate with your team and deliver exceptional results.",
      benefits: [
        "Specialized skills on demand",
        "Reduced hiring risks",
        "Faster time-to-productivity",
        "Continuous performance monitoring"
      ],
      useCases: [
        "Technical projects requiring niche expertise",
        "Business process outsourcing",
        "Knowledge-intensive tasks",
        "Specialized customer support"
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1748346674126-8c0df10f2f61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Office Team Collaboration
          caption: "Skilled professionals collaborating"
        },
        {
          url: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg", // Workshop Training
          caption: "Ongoing professional development"
        },
        {
          url: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg", // Interview/HR setting
          caption: "Rigorous vetting process"
        }
      ]

    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      shortDescription: "Grow your team on-demand.",
      fullDescription: "Scale your operations up or down dynamically with our flexible staffing solutions. Respond to market demands, seasonal peaks, or project requirements without the delays and costs of traditional hiring. Our elastic workforce model allows you to maintain optimal staffing levels with no fixed overheads or long-term commitments.",
      benefits: [
        "Rapid team expansion when needed",
        "Right-size during slow periods",
        "No HR administrative burden",
        "Access to multiple skill sets"
      ],
      useCases: [
        "Seasonal businesses",
        "Project-based work",
        "Startups in growth phase",
        "Product launches and campaigns"
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1705234384679-119488a72a2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Growth / Chart / Success
          caption: "Business growth trajectory"
        },
        {
          url: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg", // Team scaling / Office
          caption: "Flexible team scaling"
        },
        {
          url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg", // Workforce / Graphic
          caption: "Elastic workforce model"
        }
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Security",
      shortDescription: "High-standard compliance and safety.",
      fullDescription: "Your sensitive data is protected with our enterprise-grade security protocols. We implement ISO 27001 certified processes, regular penetration testing, and comprehensive staff training. Our facilities feature biometric access controls, encrypted communications, and strict need-to-know policies to ensure complete confidentiality and compliance with GDPR, HIPAA, and other regulations.",
      benefits: [
        "Reduced security risks",
        "Regulatory compliance",
        "Secure data handling",
        "Regular security audits"
      ],
      useCases: [
        "Healthcare data processing",
        "Financial services",
        "Legal document handling",
        "Confidential business operations"
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1740477959006-798042a324aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Security / Data / Protection
          caption: "Data encryption processes"
        },
        {
          url: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg", // Compliance / Audit / Documents
          caption: "Security compliance certification"
        },
        {
          url: "https://images.pexels.com/photos/6044932/pexels-photo-6044932.jpeg", // Cybersecurity / Server / Firewall
          caption: "Network security infrastructure"
        }
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Focus on Core",
      shortDescription: "Let us handle the routine.",
      fullDescription: "Free up your internal resources from time-consuming operational tasks and redirect your energy toward strategic initiatives. We take care of the day-to-day execution so your team can concentrate on innovation, business development, and customer relationships. Our partnership approach ensures alignment with your core objectives while we manage the operational details.",
      benefits: [
        "Increased leadership bandwidth",
        "Higher-value work focus",
        "Reduced operational distractions",
        "Improved strategic outcomes"
      ],
      useCases: [
        "Leadership teams needing focus",
        "Innovation-driven companies",
        "Businesses undergoing transformation",
        "Teams with limited bandwidth"
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1676277757211-ebd7fdeb3d5b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Strategy / Meeting / Planning
          caption: "Executive strategic planning session"
        },
        {
          url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg", // Innovation / Brainstorming / Ideas
          caption: "Core team focusing on innovation"
        },
        {
          url: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg", // Delegation / Teamwork / Success
          caption: "Effective task delegation"
        }
      ]
    }
  ];
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Reduction",
      description: "Reduce operational costs by up to 60% while maintaining quality standards."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Operations",
      description: "Round-the-clock service delivery across different time zones."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Skilled Workforce",
      description: "Access to trained professionals with domain expertise."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Scale operations up or down based on business requirements."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Security",
      description: "Enterprise-grade security protocols and compliance standards."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Focus on Core Business",
      description: "Concentrate on strategic initiatives while we handle routine tasks."
    }
  ];

  const industries = [
    "Healthcare & Medical",
    "Financial Services",
    "E-commerce & Retail",
    "Real Estate",
    "Technology & IT",
    "Insurance",
    "Manufacturing",
    "Education",
    "Travel & Hospitality",
    "Legal Services"
  ];

  const features = [
    "ISO 27001 Certified Security",
    "99.9% Uptime Guarantee",
    "Multi-language Support",
    "Advanced Analytics & Reporting",
    "Dedicated Account Manager",
    "Flexible Pricing Models"
  ];

  const technologies = [
    { name: "Cloud Computing", icon: <Cloud className="w-6 h-6" /> },
    { name: "AI & Automation", icon: <Cpu className="w-6 h-6" /> },
    { name: "Data Analytics", icon: <BarChart2 className="w-6 h-6" /> },
    { name: "CRM Integration", icon: <Layers className="w-6 h-6" /> },
    { name: "Cybersecurity", icon: <Lock className="w-6 h-6" /> },
    { name: "Process Optimization", icon: <Settings className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      quote: "Their BPO services transformed our customer support operations, reducing response times by 40% while improving satisfaction scores.",
      author: "Sarah Johnson",
      role: "COO, FinTech Solutions"
    },
    {
      quote: "The seamless transition to their accounting services saved us over $200k annually in operational costs.",
      author: "Michael Chen",
      role: "CFO, Retail Chain"
    },
    {
      quote: "Their multilingual support team helped us expand into 3 new markets without hiring additional staff.",
      author: "Emma Rodriguez",
      role: "Director of Operations, SaaS Company"
    }
  ];



  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };


  return (
    <div className="text-[#ffffff] min-h-screen mt-30" ref={containerRef}>
      <ScrollToTop />
      {/* Hero Section with Image */}
      <section className="min-h-screen bg-[#06140b] flex items-center justify-center  px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            className="text-[#ffffff]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className=" text-3xl md:text-3xl sm:text-5xl lg:text:3xl xl:text-6xl 2xl:text-5xl font-light font-nunito leading-tight mb-6">
              <span className="block">Empower Your Growth with Scalable Business Support</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">

              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#ffffff] mb-8">
              Streamline operations, optimize performance, and drive innovation with our all-in-one managed business services.
            </p>

            <div className="flex  sm:flex-row gap-2">
              <Link to="/contact">
                <button className="bg-[#021688] hover:bg-blue-700 text-[#ffffff] px-8 py-4 rounded-lg font-semibold text-xs sm:text-lg transition-all duration-300 flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" /> 
                </button>
              </Link>

              <Link to="/contact">
                <button className="border border-[#fffff] hover:bg-white/10 text-[#ffffff] px-8 py-4 rounded-lg font-semibold text-xs sm:text-lg transition-all duration-300">
                  Book a Free Call
                </button>
              </Link>

            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="w-full max-w-md mx-auto"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={image}
              alt="Business Collaboration"
              className="rounded-xl "
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <div className="bg-[#06140b]">

        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto  ">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-semibold mb-4 text-[#ffffff] text-start sm:text-center">Our Solutions </h2>
            <p className="sm:text-xl text-start text-sm text-[#ffffff] max-w-3xl sm:mx-auto">
              Discover our tailored services designed to meet your operational goals. We are new lunch in this sector, but We have extreme experience work with reputed company.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition-all group flex flex-col"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#ffffff] mb-2">{service.title}</h3>
                <p className="text-[#ffffff] text mb-4 flex-grow">{service.shortDescription}</p>
                <div className="mt-auto">
                  <button
                    onClick={() => openModal(service)}
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center group-hover:underline transition-all"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <ServiceModal isOpen={isModalOpen} onClose={closeModal} service={selectedService} />
        </section>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#06140b] py-12">

        <section className=" px-4 md:px-8 max-w-7xl mx-auto  rounded-3xl ">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 sm:text-center text-start">Why Choose Us?</h2>
            <p className="sm::text-xl text-sm text-[#ffffff] text-start max-w-3xl sm:mx-auto">
              Discover the advantages of partnering with us for your business process outsourcing needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-blue-400 mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-[#ffffff] sm:text-lg">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Industries Section */}
      <div className="bg-[#06140b]">
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-[#ffffff] max-w-3xl mx-auto">
              Providing specialized BPO solutions across diverse industry verticals
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-blue-500 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10"
              >
                <Globe className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-medium text-sm">{industry}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      {/* Technology Stack Section */}
      <div className="bg-[#06140b] py-12">
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto rounded-3xl ">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-xl text-[#ffffff] max-w-3xl mx-auto">
              Cutting-edge technologies powering our BPO solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-blue-400 mb-3">
                  {tech.icon}
                </div>
                <p className="font-medium text-sm text-center">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* key features section */}
      <div className="bg-[#06140b] ">
        {/* Features Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-4xl text-start sm:text-center font-bold mb-4">Key Features</h2>
            <p className="sm:text-xl text-sm text-[#ffffff] max-w-3xl text-start sm:mx-auto">
              Advanced capabilities and guarantees that set us apart from the competition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
              >
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>


      {/* Process Section - Redesign */}
      <div className="bg-[#06140b] overflow-x-hidden">
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-blue-400 font-medium mb-2 block">Our Workflow</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Streamlined BPO Process</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-[#ffffff] max-w-3xl mx-auto">
              Our structured approach ensures efficiency and quality at every stage
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 top-0"></div>

            <div className="space-y-12 lg:space-y-0">
              {[
                {
                  title: "Discovery Phase",
                  description: "We conduct a thorough analysis of your business objectives, operational workflows, and market environment to uncover pain points and opportunities. This foundational step ensures we align our strategies with your long-term growth vision.",
                  icon: <TrendingUp className="w-6 h-6" />
                },
                {
                  title: "Solution Design",
                  description: "Our experts craft a tailored digital strategy and workflow solution, specifically engineered to meet your unique business needs. We focus on scalability, cost-efficiency, and innovation to deliver results-driven solutions that support sustainable growth.",
                  icon: <Lightbulb className="w-6 h-6" />
                },
                {
                  title: "Implementation",
                  description: "We ensure a seamless deployment of customized solutions into your existing ecosystem with minimal operational disruption. Our team manages every step — from setup to staff training — to accelerate adoption and maximize return on investment.",
                  icon: <Cog className="w-6 h-6" />
                },
                {
                  title: "Continuous Improvement",
                  description: "Post-launch, we provide continuous monitoring, optimization, and performance tracking to ensure your systems evolve with your business. Through data-driven insights, we fine-tune operations for efficiency, security, and long-term success.",
                  icon: <TrendingUp className="w-6 h-6" />
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative lg:flex items-center ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-gray-900 z-10"></div>

                  <div className={`lg:w-5/12 p-6 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className="flex items-start">
                      <div className="bg-blue-600 p-3 rounded-lg mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <span className="text-blue-400 font-mono mr-2">0{index + 1}</span>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-[#ffffff] text-sm md:text-base">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Testimonials Section */}

      <div className="hidden bg-[#06140b]">
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto  rounded-3xl ">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-[#ffffff] max-w-3xl mx-auto">
              Hear what our clients say about our BPO services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <MessageSquare className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-[#ffffff] italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-[#ffffff]">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <div className="bg-[#06140b]">
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { value: "500+", label: "Projects Delivered", icon: <Award className="w-8 h-8 mx-auto mb-4 text-blue-400" /> },
              { value: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-8 h-8 mx-auto mb-4 text-blue-400" /> },
              { value: "24/7", label: "Support Available", icon: <Clock className="w-8 h-8 mx-auto mb-4 text-blue-400" /> },
              { value: "60%", label: "Cost Reduction", icon: <DollarSign className="w-8 h-8 mx-auto mb-4 text-blue-400" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                {stat.icon}
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <p className="text-[#ffffff]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
      {/* CTA Section */}
      <div className="font-nunito bg-[#06140b]">
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center ">
          <motion.div
            className="bg-[#06140b] rounded-2xl p-12 border border-gray-700 hover:border-blue-500 transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 relative z-10">Ready to Transform Your Business?</h2>
            <p className="sm:text-xl text-[#ffffff] mb-8 max-w-2xl mx-auto relative z-10">
              Partner with us for reliable, cost-effective BPO solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-blue-600 hover:bg-blue-700 text-[#ffffff] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Us Now
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-[#ffffff] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Get Free Quote
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}