import { useState } from "react";
import { FaComment, FaWhatsapp, FaFacebookMessenger, FaInstagram, FaTimes, FaPaperclip, FaMicrophone, FaSmile } from "react-icons/fa";

const MultiPlatformChat = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<"whatsapp" | "messenger" | "instagram">("whatsapp");
  const [message, setMessage] = useState("");

  // Contact information
  const whatsappNumber = "8801511521362";
  const facebookUsername = "conqueric";
  const instagramUsername = "we_are_conqueric";

  // Predefined messages
  const quickMessages = [
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
        break;
      default:
        return;
    }
    
    window.open(url, "_blank");
  };

  // Platform-specific UI configurations
  const platformConfig = {
    whatsapp: {
      primaryColor: "#128C7E",
      secondaryColor: "#25D366",
      background: "#e6ffe6",
      headerBg: "#128C7E",
      messageBg: "#dcf8c6",
      timeColor: "#8696a0",
      icon: <FaWhatsapp />
    },
    messenger: {
      primaryColor: "#0084ff",
      secondaryColor: "#0084ff",
      background: "#f0f2f5",
      headerBg: "#0084ff",
      messageBg: "#e5e7eb",
      timeColor: "#65676b",
      icon: <FaFacebookMessenger />
    },
    instagram: {
      primaryColor: "#8a3ab9",
      secondaryColor: "#e1306c",
      background: "#fafafa",
      headerBg: "linear-gradient(to right, #8a3ab9, #e1306c, #fcaf45)",
      messageBg: "#efefef",
      timeColor: "#8e8e8e",
      icon: <FaInstagram />
    }
  };

  const config = platformConfig[selectedPlatform];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main chat button */}
      <button
        onClick={() => setShowModal(!showModal)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
        style={{ backgroundColor: config.primaryColor }}
      >
        <FaComment size={24} />
      </button>

      {/* Chat modal */}
      {showModal && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col" style={{ height: "500px" }}>
          {/* Modal header */}
          <div 
            className="text-white p-3 flex items-center"
            style={{ 
              background: config.headerBg
            }}
          >
            {config.icon}
            
            <div className="ml-2">
              <h3 className="font-medium text-sm">
                Support Team
              </h3>
              <div className="text-xs opacity-80 flex items-center">
                <span className="w-2 h-2 rounded-full bg-white mr-1"></span>
                {selectedPlatform === "whatsapp" && "Online"}
                {selectedPlatform === "messenger" && "Active now"}
                {selectedPlatform === "instagram" && "Active 1h ago"}
              </div>
            </div>
            
            <button 
              onClick={() => setShowModal(false)}
              className="ml-auto text-white hover:text-gray-200"
            >
              <FaTimes />
            </button>
          </div>

          {/* Chat content */}
          <div 
            className="flex-1 p-4 overflow-y-auto"
            style={{ backgroundColor: config.background }}
          >
            {/* Incoming message */}
            <div className="flex mb-4">
              <div className="w-8 h-8 rounded-full mr-2 overflow-hidden  flex-shrink-0">
                <img src="/index.png" alt="" />
              </div>
              <div>
                <div 
                  className="rounded-lg p-3 max-w-xs"
                  style={{ backgroundColor: config.messageBg }}
                >
                  <p className="text-sm">Hello! How can we help you today?</p>
                </div>
                <span 
                  className="text-xs block mt-1 ml-1"
                  style={{ color: config.timeColor }}
                >10:42 AM</span>
              </div>
            </div>

            {/* Outgoing message */}
            <div className="flex mb-4 justify-end">
              <div>
                <div 
                  className="rounded-lg p-3 max-w-xs"
                  style={{ 
                    backgroundColor: config.primaryColor,
                    color: "white"
                  }}
                >
                  <p className="text-sm">I have a question about your services</p>
                </div>
                <span 
                  className="text-xs block mt-1 mr-1 text-right"
                  style={{ color: config.timeColor }}
                >10:43 AM</span>
              </div>
            </div>

            {/* Quick messages */}
            <div className="mt-6">
              <p className="text-xs text-center mb-2" style={{ color: config.timeColor }}>
                Quick messages
              </p>
              <div className="space-y-2">
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(msg)}
                    className="block w-full text-left text-sm p-3 rounded-lg border transition-colors"
                    style={{ 
                      backgroundColor: "white",
                      borderColor: config.messageBg
                    }}
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Message input area */}
          <div 
            className="p-3 border-t"
            style={{ 
              borderColor: config.messageBg,
              backgroundColor: "white"
            }}
          >
            <div className="flex items-center">
              <button className="p-2 mr-1" style={{ color: config.timeColor }}>
                <FaSmile />
              </button>
              <button className="p-2 mr-1" style={{ color: config.timeColor }}>
                <FaPaperclip />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                className="flex-1 p-2 rounded-lg focus:outline-none"
                style={{ backgroundColor: config.background }}
              />
              <button 
                className="p-2 ml-1 rounded-full"
                style={{ 
                  backgroundColor: config.secondaryColor,
                  color: "white"
                }}
                onClick={() => {
                  if (message.trim()) {
                    handleSendMessage(message);
                    setMessage("");
                  }
                }}
              >
                {message.trim() ? <FaWhatsapp /> : <FaMicrophone />}
              </button>
            </div>
          </div>

          {/* Platform switcher footer */}
          <div className="flex border-t border-gray-200 bg-gray-50">
            <button
              onClick={() => setSelectedPlatform("whatsapp")}
              className={`flex-1 p-3 flex flex-col items-center ${selectedPlatform === "whatsapp" ? "text-green-600" : "text-gray-600 hover:text-green-600"}`}
            >
              <FaWhatsapp size={18} />
              <span className="text-xs mt-1">WhatsApp</span>
            </button>
            <button
              onClick={() => setSelectedPlatform("messenger")}
              className={`flex-1 p-3 flex flex-col items-center ${selectedPlatform === "messenger" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}
            >
              <FaFacebookMessenger size={18} />
              <span className="text-xs mt-1">Messenger</span>
            </button>
            <button
              onClick={() => setSelectedPlatform("instagram")}
              className={`flex-1 p-3 flex flex-col items-center ${selectedPlatform === "instagram" ? "text-pink-600" : "text-gray-600 hover:text-pink-600"}`}
            >
              <FaInstagram size={18} />
              <span className="text-xs mt-1">Instagram</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiPlatformChat;