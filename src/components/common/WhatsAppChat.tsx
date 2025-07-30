import { useState } from "react";
import { FaComment, FaWhatsapp, FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import image from "@/assets/mizan1.jpg";

const MultiPlatformChat = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<"whatsapp" | "messenger" | "instagram" | null>(null);

  // Contact information
  const whatsappNumber = "8801744130027";
  const facebookUsername = "minimoonira";
  const instagramUsername = "we_are_conqueric";

  // Predefined messages
  const messages = [
    "Hello, I would like to know more about your services.",
    "Hi, I'm interested in your pricing plans.",
    "Can I get a free consultation?",
    "Do you provide website design services?",
    "How long does a project usually take?"
  ];

  const handleSendMessage = (message: string) => {
    let url = "";
    
    switch (selectedPlatform) {
      case "whatsapp":
        url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        break;
      case "messenger":
        url = `https://m.me/${facebookUsername}?text=${encodeURIComponent(message)}`;
        break;
      case "instagram":
        url = `https://instagram.com/${instagramUsername}`;
        // Instagram doesn't support pre-filled messages in URLs
        break;
      default:
        return;
    }
    
    window.open(url, "_blank");
    setShowModal(false);
    setSelectedPlatform(null);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main chat button */}
      <button
        onClick={() => setShowModal(!showModal)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
      >
        <FaComment size={24} />
      </button>

      {/* Chat modal */}
      {showModal && (
        <div className="absolute bottom-16 right-0 w-72 bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Modal header */}
          <div className="bg-blue-600 text-white p-3 flex items-center">
            <FaComment className="mr-2" />
            <h3 className="font-medium">Chat with us</h3>
            <button 
              onClick={() => setShowModal(false)}
              className="ml-auto text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>

          {/* Platform selection */}
          {!selectedPlatform ? (
            <div className="p-4">
              <h4 className="text-gray-700 mb-3">Choose a platform:</h4>
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedPlatform("whatsapp")}
                  className="flex items-center w-full p-2 rounded bg-green-50 hover:bg-green-100 text-green-800"
                >
                  <FaWhatsapp className="mr-2 text-green-600" size={20} />
                  WhatsApp
                </button>
                
                <button
                  onClick={() => setSelectedPlatform("messenger")}
                  className="flex items-center w-full p-2 rounded bg-blue-50 hover:bg-blue-100 text-blue-800"
                >
                  <FaFacebookMessenger className="mr-2 text-blue-600" size={20} />
                  Messenger
                </button>
                
                <button
                  onClick={() => setSelectedPlatform("instagram")}
                  className="flex items-center w-full p-2 rounded bg-pink-50 hover:bg-pink-100 text-pink-800"
                >
                  <FaInstagram className="mr-2 text-pink-600" size={20} />
                  Instagram
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4">
              {/* Back button */}
              <button
                onClick={() => setSelectedPlatform(null)}
                className="text-gray-500 hover:text-gray-700 mb-3 flex items-center"
              >
                ← Back
              </button>
              
              {/* Profile info */}
              <div className="flex items-center mb-4">
                <img
                  src={image}
                  alt="Support"
                  className="w-10 h-10 rounded-full mr-3 border-2 border-blue-200"
                />
                <div>
                  <h4 className="font-medium">Support Team</h4>
                  <div className="flex items-center">
                    {selectedPlatform === "whatsapp" && (
                      <FaWhatsapp className="text-green-500 mr-1" size={14} />
                    )}
                    {selectedPlatform === "messenger" && (
                      <FaFacebookMessenger className="text-blue-500 mr-1" size={14} />
                    )}
                    {selectedPlatform === "instagram" && (
                      <FaInstagram className="text-pink-500 mr-1" size={14} />
                    )}
                    <span className="text-xs text-gray-500">
                      {selectedPlatform === "whatsapp" && "Online"}
                      {selectedPlatform === "messenger" && "Active now"}
                      {selectedPlatform === "instagram" && "Typically replies in 1 hour"}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Quick messages */}
              <div className="space-y-2">
                <h5 className="text-sm text-gray-600">Quick messages:</h5>
                {messages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(msg)}
                    className="block w-full text-left text-sm bg-gray-50 hover:bg-gray-100 p-2 rounded border border-gray-200"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiPlatformChat;