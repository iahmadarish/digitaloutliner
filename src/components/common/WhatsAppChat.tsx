import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import image from "@/assets/mizan1.jpg"

const WhatsAppChat = () => {
  const phoneNumber = "8801744130027"

  const messages = [
    "Hello, I would like to know more about your services.",
    "Hi, I'm interested in your pricing plans.",
    "Can I get a free consultation?",
    "Do you provide website design services?",
    "How long does a project usually take?"
  ];

  const [showOptions, setShowOptions] = useState(false);

  const handleSendMessage = (message: string) => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    setShowOptions(false);
  };

  return (
    <div className="fixed overflow-hidden bottom-4 right-4 z-50 flex flex-col items-end space-y-2">

      {/* মেসেজ অপশন */}
      {showOptions && (
        <div className="bg-white text-base rounded shadow-md p-2 space-y-1 max-w-[280px]">
          {messages.map((msg, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(msg)}
              className="text-sm text-left w-full hover:bg-green-100 px-2 py-1 rounded transition"
            >
              {msg}
            </button>
          ))}
        </div>
      )}

      {/* প্রোফাইল ইমেজ + হোয়াটসঅ্যাপ আইকন */}
      <div className="flex items-center space-x-2">
        {showOptions && (
          <img
            className="w-13 h-13 rounded-full border-2 border-green-500 shadow"
            src={image}
            alt="Active Person"
          />
        )}
        <button
          onClick={() => setShowOptions(prev => !prev)}
          className="bg-[#3bb91c] text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="" size={28} />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppChat;