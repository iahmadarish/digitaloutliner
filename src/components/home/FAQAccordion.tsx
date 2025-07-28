import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we provide ongoing support, maintenance, and updates for websites, apps, and digital campaigns. Whether you need bug fixes, feature updates, or continuous optimization, we offer affordable monthly packages tailored to your needs."
  },
  {
    question: "Can you help launch a new product or startup brand?",
    answer:
      "Definitely! We specialize in startup branding and launch strategies. From logo design and website/app development to full digital marketing campaigns, we help startups go from idea to launch and scale rapidly with data-driven strategies and engaging designs."
  }
];


  return (
<div className="bg-gradient-to-tr from-[#0b0f19] via-[#111827] to-[#0b0f19]">

    <div className="mx-auto max-w-7xl py-16 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-200 mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-300">Everything you need to know about our services and process</p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 ${
              openItem === index 
                ? 'bg-[#03142e] border-lime-300 shadow-lg' 
                : 'bg-white text-white hover:bg-gray-50 hover:border-gray-300'
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-inset"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className={`text-2xl font-bold ${
                    openItem === index ? 'text-white' : 'text-gray-700'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`text-lg font-semibold ${
                    openItem === index ? 'text-white' : 'text-gray-700'
                  }`}>
                    {item.question}
                  </h3>
                </div>
                
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  openItem === index 
                    ? 'bg-white border-gray-300 rotate-180' 
                    : 'bg-gray-200 border-gray-300 hover:bg-gray-300'
                }`}>
                  {openItem === index ? (
                    <Minus className="w-4 h-4 text-gray-900" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-900" />
                  )}
                </div>
              </div>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openItem === index 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-6">
                <div className="border-t border-gray-300 pt-4 ml-12">
                  <p className="text-white leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Still have questions?</p>
        <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
          Contact Us
        </button>
      </div>
    </div>
</div>

  );
};

export default FAQAccordion;