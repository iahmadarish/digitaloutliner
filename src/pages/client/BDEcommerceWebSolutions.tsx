import { useState, useEffect } from 'react';
import { ShoppingCart, Smartphone, Globe, Zap, Shield, BarChart2, Package, CreditCard, Headphones, Cloud, Database, Cpu } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';

const EcommerceWebSolutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Seamless Omnichannel Selling",
      subtitle: "Unify your online and offline sales",
      description: "Integrate your physical store with your e-commerce platform for real-time inventory and sales synchronization.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      video: "/videos/ecommerce-demo.mp4",
      color: "from-[#03140b] to-[#03140b]"
    },
    {
      title: "Reach customers anywhere.",
      subtitle: "Build loyalty everywhere",
      description: "Our responsive designs ensure flawless shopping experiences on any device, increasing conversions by up to 70%.",
      image: "https://adacted.com/wp-content/uploads/2022/05/ecommerce-marketing-solutions.png",
      video: "/videos/mobile-commerce.mp4",
      color: "from-[#03140b] to-[#03140b]"
    },
    {
      title: "Lightning Fast Checkout",
      subtitle: "Reduce cart abandonment",
      description: "Our optimized checkout process loads in under 2 seconds and converts 35% better than industry average.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      video: "/videos/fast-checkout.mp4",
      color: "from-[#03140b] to-[#03140b]"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: ShoppingCart,
      title: "Conversion Optimized",
      description: "Designed to maximize sales with strategic CTAs and seamless flows"
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Perfect shopping experience on any device with responsive design"
    },
    {
      icon: Globe,
      title: "Global Ready",
      description: "Multi-currency, multi-language support for international sales"
    },
    {
      icon: Zap,
      title: "Blazing Fast",
      description: "Lightning fast load times with optimized performance"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "PCI compliant with multiple secure payment gateways"
    },
    {
      icon: BarChart2,
      title: "Built-in Analytics",
      description: "Real-time sales tracking and customer insights"
    }
  ];

  const solutions = [
    {
      title: "Custom E-commerce Development",
      description: "Tailored online stores built to your exact specifications and business needs.",
      icon: Package,
      benefits: [
        "Unique brand identity",
        "Scalable architecture",
        "Advanced product filtering",
        "Custom checkout flows"
      ]
    },
    {
      title: "Headless Commerce Solutions",
      description: "Future-proof architecture that separates frontend and backend for maximum flexibility.",
      icon: Cpu,
      benefits: [
        "Omnichannel ready",
        "API-first approach",
        "Lightning performance",
        "Easy integrations"
      ]
    },
    {
      title: "Shopify & WooCommerce Experts",
      description: "Professional setup, customization, and optimization for leading platforms.",
      icon: ShoppingCart,
      benefits: [
        "Quick deployment",
        "500+ plugin options",
        "SEO optimized",
        "Payment gateway setup"
      ]
    },
    {
      title: "Enterprise E-commerce",
      description: "High-volume solutions for businesses with complex needs and large catalogs.",
      icon: Database,
      benefits: [
        "High availability",
        "Enterprise security",
        "B2B features",
        "Custom ERP integration"
      ]
    }
  ];

  return (
    <div className="bg-[#03140b] font-nunito">
      <ScrollToTop/>
      {/* Hero Slider */}
      <div className="relative h-screen max-h-[800px] overflow-hidden ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-90`}></div>
            <div className="container mx-auto px-6 relative z-10 sm:mt-40 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white pt-">
                  <h1 className="text-xl md:text-5xl lg:text-6xl font-bold mt-10 mb-4 sm:leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-3xl font-medium mb-6">
                    {slide.subtitle}
                  </h2>
                  <p className="sm:text-xl text-sm mb-8 sm:max-w-lg">
                    {slide.description}
                  </p>
                  <div className="flex   gap-x-3 sm:gap-4">
                    <button className="bg-white text-gray-900 px-3 sm:px-8 py-1 sm:py-3 sm:rounded-full rounded-lg font-light sm:font-bold hover:bg-gray-100 transition duration-300">
                      Get Started
                    </button>
                    <button className="border-2 border-white text-white px-3 sm:px-8 py-1 sm:py-3 sm:rounded-full rounded-lg font-light sm:font-bold hover:bg-white hover:text-gray-900 transition duration-300">
                      View Demo
                    </button>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <button className="bg-white/90 text-gray-900 rounded-full p-4 hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto sm:text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Sell seamlessly both in-store and online with confidence
            </h2>
            <p className="sm:text-xl text-sm text-gray-600">
              CONQUERIC's custom e-commerce solutions ensure your offline and online sales stay perfectly in sync—so you can manage your entire business from one place, serve customers better, and scale faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5-1280x720.png"
                alt="Omnichannel ecommerce"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose CONQUERIC?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <CreditCard className="text-blue-600 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Unified Payments</h4>
                      <p className="text-gray-600">Accept all payment methods with one integrated system</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4">
                      <Cloud className="text-purple-600 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Cloud Hosting</h4>
                      <p className="text-gray-600">99.9% uptime with scalable cloud infrastructure</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <Headphones className="text-green-600 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dedicated Support</h4>
                      <p className="text-gray-600">24/7 expert assistance for your e-commerce needs</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Sell Online
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our e-commerce solutions come packed with powerful features designed to maximize your sales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="text-blue-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive E-commerce Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored packages to meet your specific business requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-6">
                    <solution.icon className="text-indigo-600 w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Online Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Schedule a free consultation with our e-commerce experts to discuss your project
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition duration-300 text-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition duration-300 text-lg">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceWebSolutions;