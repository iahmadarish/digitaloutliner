import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQAccordion = () => {
const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(prev => prev === index ? null : index);
  };

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive digital marketing services including SEO, social media management, content creation, PPC advertising, email marketing, and web development. Our team works closely with clients to develop customized strategies that align with their business goals and target audience."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results vary depending on the service and your specific goals. For SEO, you can expect to see initial improvements within 3-6 months, while social media and PPC campaigns often show results within the first month. We provide regular reports to track progress and adjust strategies as needed."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is tailored to each client's needs and project scope. We offer both project-based and retainer options. After our initial consultation, we'll provide a detailed proposal with transparent pricing that fits your budget and objectives."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We understand that small businesses have unique needs and budget constraints, so we offer flexible packages and scalable solutions that grow with your business."
    },
    {
      question: "How do you measure success?",
      answer: "We use a combination of KPIs tailored to your specific goals, including website traffic, conversion rates, engagement metrics, ROI, and revenue growth. We provide detailed monthly reports and regular strategy sessions to ensure we're meeting your objectives and continuously optimizing for better results."
    },
    {
      question: "What makes you different from other agencies?",
      answer: "Our data-driven approach combined with creative excellence sets us apart. We don't believe in one-size-fits-all solutions. Instead, we take time to understand your business, industry, and competition to create strategies that deliver real, measurable results while maintaining transparent communication throughout the process."
    }
  ];

  return (
    <div className="max-w-4xl  mx-auto p-6 min-h-screen">
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
                ? 'bg-lime-200 border-lime-300 shadow-lg' 
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
                    openItem === index ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`text-lg font-semibold ${
                    openItem === index ? 'text-gray-900' : 'text-gray-700'
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
                    <Minus className="w-4 h-4 text-gray-100" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-600" />
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
                  <p className="text-gray-700 leading-relaxed">
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
  );
};

export default FAQAccordion;