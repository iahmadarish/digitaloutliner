import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(prev => prev === index ? null : index);
  };

  const faqData = [
    {
      question: "What services does your agency provide?",
      answer:
        "We offer end-to-end digital solutions including website development, mobile app development (iOS and Android), UI/UX and graphic design, 3D modeling and animation, as well as digital marketing services such as SEO, social media marketing, Google Ads (PPC), email marketing, and branding. Our goal is to provide a one-stop solution for businesses looking to grow their online presence in the USA, Canada, Australia, and beyond."
    },
    {
      question: "Do you specialize in any specific industries?",
      answer:
        "While we work with a wide range of industries, we have strong experience with startups, eCommerce brands, real estate, healthcare, education, and tech companies. We tailor our solutions to each industry’s unique audience and goals, ensuring maximum ROI and growth."
    },
    {
      question: "How long does it take to develop a website or app?",
      answer:
        "The timeline depends on the project complexity. A standard business website may take 2–4 weeks, while a custom web application or mobile app can take 6–12 weeks or more. We always provide a detailed project timeline after our initial consultation."
    },
    {
      question: "Can you redesign my existing website or app?",
      answer:
        "Absolutely! Whether you want a complete redesign or just a performance and UI/UX upgrade, our team can refresh your digital assets with modern, responsive, and SEO-optimized design standards to improve engagement and conversions."
    },
    {
      question: "What sets your agency apart from others?",
      answer:
        "We combine technical expertise with creative innovation and a client-first approach. We are not company, We are family member and our another mission is add you to our membership. Unlike many agencies, we focus on delivering custom solutions rather than cookie-cutter packages. We prioritize clear communication, on-time delivery, and measurable results for every client."
    },
  ];

  return (
    <div className="bg-[#06140b] min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-200 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300 text-lg">Everything you need to know about our services and process</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 ">
          {/* FAQ Items - Left Side with fixed height and hidden scrollbar */}
          <div className="lg:w-1/2 h-[600px] overflow-y-auto pr-4 scrollbar-hide ">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${openItem === index
                      ? 'bg-[#000000] border-lime-300 shadow-lg'
                      : 'bg-[#ffffff] border-blue-600 hover:border-lime-400'
                    }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-5 text-left focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-inset"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`text-xl font-bold ${openItem === index ? 'text-lime-300' : 'text-blakc'
                          }`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className={`text-lg font-semibold ${openItem === index ? 'text-white' : 'text-black'
                          }`}>
                          {item.question}
                        </h3>
                      </div>

                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openItem === index
                          ? 'bg-lime-400 text-gray-900 rotate-180'
                          : 'bg-gray-700 text-lime-300 hover:bg-lime-400 hover:text-gray-900'
                        }`}>
                        {openItem === index ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                    }`}>
                    <div className="px-5 pb-5">
                      <div className="border-t border-gray-600 pt-4 ml-12">
                        <p className="text-gray-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-4">Still have questions?</p>
              <Link to="/contact">
                <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section - Right Side with fixed position */}
          <div className="lg:w-1/2 flex  justify-center">
            <div className="sticky  w-full max-w-md">
              <div className="relative bg-gradient-to-br from-[#0a2915] to-[#0c3a1d] rounded-2xl p-2 border border-lime-400/30 shadow-lg">
                
                  <img src="/draft/h.jpg" alt="conqueric web app faq" className='rounded-xl' />

              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS to hide scrollbar */}
        <style>
          {`
            .scrollbar-hide {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;  /* Chrome, Safari and Opera */
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default FAQAccordion;