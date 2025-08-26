import { useState, useEffect } from 'react';
import { ShoppingCart, Smartphone, Globe, Zap, Shield, BarChart2, Package, CreditCard, Headphones, Cloud, Database, Cpu } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';
import { Helmet } from 'react-helmet-async';

const EcommerceWebSolutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Scale Your Business Beyond Limits",
      subtitle: "Smart E-commerce That Grows With You",
      description:
        "From startups to enterprises, our solutions are built to handle high traffic, secure payments, and seamless order management—so you can focus on scaling.",
      image: "/hero/esl.jpg",
      video: "/videos/scale-business.mp4",
      color: "from-[#03140b] to-[#03140b]",
    },
    {
      title: "Convert Visitors Into Loyal Customers",
      subtitle: "Personalized Shopping Experiences",
      description:
        "Boost conversions with AI-driven recommendations, loyalty programs, and user-friendly navigation designed to keep customers coming back.",
      image: "/hero/esl2.jpg",
      video: "/videos/personalized-experience.mp4",
      color: "from-[#03140b] to-[#03140b]",
    },
    {
      title: "Fast, Secure & Optimized Checkout",
      subtitle: "Reduce Abandonment, Increase Sales",
      description:
        "Our one-click checkout and advanced fraud protection make transactions smoother and safer—helping you maximize revenue instantly.",
      image: "/hero/esl3.jpg",
      video: "/videos/secure-checkout.mp4",
      color: "from-[#03140b] to-[#03140b]",
    },
    {
      title: "Sell Everywhere, Manage From One Place",
      subtitle: "Omnichannel Made Easy",
      description:
        "Unify your online store, mobile app, and physical shop into a single dashboard—track inventory, sales, and customers in real time.",
      image: "https://a.storyblok.com/f/165154/1280x720/20af23f693/02_leverage-print-on-demand.jpg/m/",
      video: "/videos/omnichannel.mp4",
      color: "from-[#03140b] to-[#03140b]",
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
      title: "Best Product Discovery",
      description: "Best Product discovery with AI-driven recommendations and advanced search capabilities. User can easyly find what they need with personalized suggestions and smart filters."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "In the era of AI and mobile apps, our web solutions empower you to manage every type of user with ease. Our websites are fully optimized for smartphones and tablets, ensuring a flawless shopping experience on any device."
    },
    {
      icon: Globe,
      title: "Ready for Global Expansion",
      description: "Seamlessly sell worldwide with multi-language (বাংলা/English/ Others) support, multi-currency pricing, and localized checkout options."
    },
    {
      icon: Zap,
      title: "Ultra-Fast Performance",
      description: "Blazing-fast load times and optimized performance for a smooth and responsive experience. Lightning-Fast Performance — Experience instant loading and seamless responsiveness on every device."
    },
    {
      icon: Shield,
      title: "Secure & Trustworthy Payments",
      description: "Fully PCI-DSS compliant with robust fraud protection and support for global payment gateways. Secure & Trustworthy Payments — Fully PCI-DSS compliant with advanced fraud protection and support for global payment gateways."
    },
    {
      icon: BarChart2,
      title: "Actionable Analytics",
      description: "Track performance in real time and make data-driven decisions with built-in reporting tools. Actionable Analytics — Track performance in real time and make data-driven decisions with powerful built-in reporting tools."
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
    <main>
      <Helmet>
        {/* Title */}
        <title>Ecommerce Solutions | CONQUERIC - Scalable Online Store Development</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="CONQUERIC builds powerful ecommerce solutions including custom online stores, Shopify, WooCommerce, and mobile commerce apps. Drive sales with secure, scalable, and user-friendly ecommerce platforms."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="ecommerce solutions, CONQUERIC ecommerce, online store development, Shopify development, WooCommerce, custom ecommerce website, mobile commerce apps, secure ecommerce, scalable ecommerce platforms"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.conqueric.com/global-ecommere-web-solutions-with-conqueric" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Ecommerce Solutions | CONQUERIC" />
        <meta
          property="og:description"
          content="Launch and scale your online business with CONQUERIC’s ecommerce solutions. We specialize in custom online stores, Shopify, WooCommerce, and mobile commerce apps."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.conqueric.com/global-ecommere-web-solutions-with-conqueric" />
        <meta property="og:image" content="https://www.conqueric.com/bd-ecommere-web-solutions-with-conqueric" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ecommerce Solutions | CONQUERIC" />
        <meta
          name="twitter:description"
          content="Build scalable online stores with CONQUERIC. From Shopify & WooCommerce to custom ecommerce platforms, we deliver secure and user-friendly ecommerce solutions."
        />
        <meta name="twitter:image" content="https://www.conqueric.com/og-ecommerce.jpg" />
      </Helmet>

      <div className="bg-[#03140b] font-nunito">
        <ScrollToTop />
        {/* Hero Slider */}
        <div className="relative h-screen max-h-[800px] overflow-hidden ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-90`}></div>
              <div className="container mx-auto px-6 relative z-10 sm:mt-50 sm:mb-30 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-white ">
                    <h1 className="text-xl md:text-4xl lg:text-5xl font-light mt-10 mb-4 sm:leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="text-xl md:text-4xl lg:text-5xl font-light mb-6">
                      {slide.subtitle}
                    </h2>
                    <p className="sm:text-xl text-sm mb-8 sm:max-w-lg">
                      {slide.description}
                    </p>
                    <div className="flex   gap-x-3 sm:gap-4">
                      <button className="bg-white text-gray-900 px-3 sm:px-8 py-1 sm:py-3 sm:rounded-xl rounded-lg font-light sm:font-bold hover:bg-gray-100 transition duration-300">
                        Get Started
                      </button>
                    </div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-auto object-cover"
                    />

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
        <section className="py-20 bg-]">
          <div className="bg-">

            <div className=" bg-">
              <div className="max-w-4xl px-4 mx-auto sm:text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Sell seamlessly both in-store and online with confidence
                </h2>
                <p className="sm:text-xl text-base text-white">
                  CONQUERIC's custom e-commerce solutions ensure your offline and online sales stay perfectly in sync—so you can manage your entire business from one place, serve customers better, and scale faster.
                </p>
              </div>

              <div className="container mx-auto">
                <div className="bg-[#03140b] grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
                  <div>
                    <img
                      src="/hero/globe.png"
                      alt="Omnichannel ecommerce"
                      className="rounded-xl shadow-xl w-full"
                    />
                  </div>
                  <div className="h-full absolute top-5 right-[760px] w-px bg-white"></div>
                  <div>
                    <div className="bg-[#03140b] rounded-xl shadow-lg p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                        Why Choose <span className="text-blue-400">CONQUERIC?</span>
                      </h3>
                      <ul className="space-y-8">
                        {/* Unified Payments */}
                        <li className="flex items-start">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <CreditCard className="text-blue-600 w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">Unified Payments</h4>
                            <p className="text-gray-300">
                              Accept every major payment method in one seamless system —
                              including SSL, Stripe, AmarPay, PayPal, bKash, and Nagad.
                            </p>
                          </div>
                        </li>

                        {/* Cloud Hosting */}
                        <li className="flex items-start">
                          <div className="bg-purple-100 p-3 rounded-full mr-4">
                            <Cloud className="text-purple-600 w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">Cloud Hosting</h4>
                            <p className="text-gray-300">
                              99.9% uptime powered by scalable, secure cloud infrastructure —
                              so your business never slows down.
                            </p>
                          </div>
                        </li>

                        {/* Dedicated Support */}
                        <li className="flex items-start">
                          <div className="bg-green-100 p-3 rounded-full mr-4">
                            <Headphones className="text-green-600 w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">Dedicated 24/7 Support</h4>
                            <p className="text-gray-300">
                              We don’t just build your store — we stay by your side around the
                              clock until your online sales are growing successfully.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* Features Section */}
        <section className="py-20 bg-[#fff8f8] ">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Everything You Need to Sell Online
              </h2>
              <p className="text-xl text-black max-w-3xl mx-auto">
                Our eCommerce solutions are crafted with industry-leading features that empower you to launch, grow, and scale your online business with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-[#ffffff] p-8 rounded-xl border hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="text-black w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-black">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50 font-barlow">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive E-commerce Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored packages to meet your specific business requirements
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-8 gap-5">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white sm:p-8 p-3 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="sm:flex items-start mb-6">
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
    </main>
  );
};

export default EcommerceWebSolutions;