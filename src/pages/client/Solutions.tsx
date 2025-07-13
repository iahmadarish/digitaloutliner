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
  DollarSign} from 'lucide-react';

export default function Solutions() {
  const services = [
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Customer Support Services",
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

  return (
    <div className="text-white min-h-screen font-family-comfort">
      {/* Hero Section */}
      <section className="py-50 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="block text-blue-400 mt-2">BPO Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Streamline operations, reduce costs, and accelerate growth with our comprehensive Business Process Outsourcing services. Focus on what matters most while we handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-2">
              Get Started Today <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-400 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our BPO Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive business process outsourcing solutions tailored to your industry needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300 group">
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our BPO Services?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the advantages of partnering with us for your business process outsourcing needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 border border-gray-700 rounded-lg hover:border-blue-500 transition-all duration-300">
              <div className="text-blue-400 mt-1">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Providing specialized BPO solutions across diverse industry verticals
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <div key={index} className="text-center p-6 border border-gray-700 rounded-lg hover:border-blue-500 transition-all duration-300 group">
              <Globe className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-medium text-sm">{industry}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced capabilities and guarantees that set us apart from the competition
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 border border-gray-700 rounded-lg hover:border-green-500 transition-all duration-300">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our BPO Process</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology to ensure seamless transition and optimal results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Discovery</h3>
            <p className="text-gray-300">Understanding your business requirements and processes</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Planning</h3>
            <p className="text-gray-300">Developing customized solutions and implementation roadmap</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Execution</h3>
            <p className="text-gray-300">Seamless transition and process implementation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Optimization</h3>
            <p className="text-gray-300">Continuous improvement and performance monitoring</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <div className="border border-gray-700 rounded-2xl p-12 hover:border-blue-500 transition-all duration-300">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with us for reliable, cost-effective BPO solutions that drive growth and efficiency. Let's discuss how we can help streamline your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Us Now
            </button>
            <button className="border border-gray-400 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Get Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}