import { 
  Phone, 
  Mail, 
  Users, 
  Clock, 
  Shield, 
  TrendingUp, 
  Globe, 
  HeadphonesIcon,
  Calculator,
  FileText,
  UserCheck,
  CheckCircle,
  ArrowRight,
  Target,
  DollarSign,
  ChevronDown,
  BarChart2,
  Layers,
  Cpu,
  Cloud,
  Lock,
  Zap,
  Clipboard,
  Settings,
  PieChart,
  MessageSquare,
  Award
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Solutions() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Customer Support Service",
      description: "24/7 multilingual customer support through phone, email, chat, and social media channels."
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Finance & Accounting",
      description: "Bookkeeping, accounts payable/receivable, payroll processing, and financial reporting services."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Data Entry & Processing",
      description: "Accurate data entry, data mining, database management, and document processing solutions."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Human Resources",
      description: "Recruitment, employee onboarding, benefits administration, and HR support services."
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Digital Marketing Support",
      description: "Social media management, content creation, email marketing, and SEO support services."
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Sales & Lead Generation",
      description: "Telemarketing, appointment setting, lead qualification, and sales support services."
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

  return (
    <div className="text-white min-h-screen" ref={containerRef}>
      {/* Hero Section with Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[#06140b]/60 z-0"></div>
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="BPO Services" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Hero Content */}
        <motion.div 
          className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            style={{ y, opacity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <motion.span 
              className="block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Elevate Your Business with 
            </motion.span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Expert BPO Solutions
            </motion.span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Unlock efficiency, cut operational costs, and scale faster with our end-to-end Business Process Outsourcing services.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              Get Started Today <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our BPO Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive business process outsourcing solutions tailored to your industry needs
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
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl my-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our BPO Services?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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

      {/* Technology Stack Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl my-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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

      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our BPO Process</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology to ensure seamless transition and optimal results
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Discovery",
              description: "Understanding your business requirements and processes",
              icon: <Clipboard className="w-8 h-8" />
            },
            {
              title: "Planning",
              description: "Developing customized solutions and implementation roadmap",
              icon: <PieChart className="w-8 h-8" />
            },
            {
              title: "Execution",
              description: "Seamless transition and process implementation",
              icon: <Zap className="w-8 h-8" />
            },
            {
              title: "Optimization",
              description: "Continuous improvement and performance monitoring",
              icon: <TrendingUp className="w-8 h-8" />
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>
              <div className="text-blue-400 mb-4 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl my-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
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
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <motion.div 
          className="bg-[#06140b] rounded-2xl p-12 border border-gray-700 hover:border-blue-500 transition-all duration-300 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
            Partner with us for reliable, cost-effective BPO solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Us Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Get Free Quote
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}