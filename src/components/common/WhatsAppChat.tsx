import { useState } from "react";
import { FaComment, FaWhatsapp, FaFacebookMessenger, FaInstagram, FaRobot } from "react-icons/fa";

interface ChatMessage {
  role: "user" | "bot";
  content: string;
}

const MultiPlatformChat = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<"ai" | "whatsapp" | "messenger" | "instagram">("ai");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleAskAI = async () => {
    if (!question.trim()) return;

    // Add user message instantly
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setLoading(true);

    try {
      const res = await fetch("https://conquericserver.onrender.com/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      // Add bot reply
      setMessages((prev) => [...prev, { role: "bot", content: data.answer }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "❌ Something went wrong. Please try again." },
      ]);
    }

    setQuestion("");
    setLoading(false);
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
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col" style={{ height: "500px" }}>
          {/* Modal header */}
          <div className="bg-blue-600 text-white p-3 flex items-center">
            {selectedPlatform === "ai" && <FaRobot className="mr-2" />}
            {selectedPlatform === "whatsapp" && <FaWhatsapp className="mr-2" />}
            {selectedPlatform === "messenger" && <FaFacebookMessenger className="mr-2" />}
            {selectedPlatform === "instagram" && <FaInstagram className="mr-2" />}
            
            <h3 className="font-medium">
              {selectedPlatform === "ai" && "AI Assistant"}
              {selectedPlatform === "whatsapp" && "WhatsApp"}
              {selectedPlatform === "messenger" && "Messenger"}
              {selectedPlatform === "instagram" && "Instagram"}
            </h3>
            
            <button 
              onClick={() => setShowModal(false)}
              className="ml-auto text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>

          {/* Platform selection - only shown when not in chat view */}
          {selectedPlatform === "ai" ? (
            <>
              {/* AI Chat messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <FaRobot size={48} className="mb-4 text-blue-200" />
                    <p className="text-center">How can I help you today?</p>
                  </div>
                ) : (
                  messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex mb-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg ${msg.role === "user" 
                          ? "bg-blue-500 text-white rounded-br-none" 
                          : "bg-gray-200 text-gray-800 rounded-bl-none"}`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))
                )}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 text-gray-800 p-3 rounded-lg rounded-bl-none max-w-xs">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* AI Chat input */}
              <div className="p-3 border-t border-gray-200 bg-white">
                <div className="flex">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleAskAI()}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleAskAI}
                    disabled={loading}
                    className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 disabled:opacity-50"
                  >
                    ➤
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 p-4 overflow-y-auto">
              {/* Back button */}
              <button
                onClick={() => setSelectedPlatform("ai")}
                className="text-gray-500 hover:text-gray-700 mb-3 flex items-center text-sm"
              >
                ← Back to AI Assistant
              </button>
              
              {/* Profile info */}
              <div className="flex items-center mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 rounded-full mr-3 bg-blue-100 flex items-center justify-center">
                  {selectedPlatform === "whatsapp" && <FaWhatsapp className="text-green-500" size={20} />}
                  {selectedPlatform === "messenger" && <FaFacebookMessenger className="text-blue-500" size={20} />}
                  {selectedPlatform === "instagram" && <FaInstagram className="text-pink-500" size={20} />}
                </div>
                <div>
                  <h4 className="font-medium">Support Team</h4>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500">
                      {selectedPlatform === "whatsapp" && "Typically replies in minutes"}
                      {selectedPlatform === "messenger" && "Active now"}
                      {selectedPlatform === "instagram" && "Typically replies in 1 hour"}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Quick messages */}
              <div className="space-y-2">
                <h5 className="text-sm text-gray-600 mb-2">Quick messages:</h5>
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(msg)}
                    className="block w-full text-left text-sm bg-gray-50 hover:bg-gray-100 p-3 rounded-lg border border-gray-200 transition-colors"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Platform switcher footer */}
          <div className="flex border-t border-gray-200 bg-gray-50">
            <button
              onClick={() => setSelectedPlatform("ai")}
              className={`flex-1 p-3 flex flex-col items-center ${selectedPlatform === "ai" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}
            >
              <FaRobot size={18} />
              <span className="text-xs mt-1">AI</span>
            </button>
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