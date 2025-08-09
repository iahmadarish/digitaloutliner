import React, { useState } from "react";

interface ChatMessage {
  role: "user" | "bot";
  content: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    // Add user message instantly
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chatbot", {
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
        { role: "bot", content: "❌ কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।" },
      ]);
    }

    setQuestion("");
    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        height: "500px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Chat Header */}
      <div
        style={{
          background: "#007bff",
          color: "#fff",
          padding: "10px",
          textAlign: "center",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        💬 Chatbot
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          padding: "10px",
          overflowY: "auto",
          background: "#f9f9f9",
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent:
                msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                padding: "8px 12px",
                borderRadius: "15px",
                background: msg.role === "user" ? "#007bff" : "#e4e6eb",
                color: msg.role === "user" ? "#fff" : "#000",
                maxWidth: "70%",
                wordBreak: "break-word",
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <p style={{ fontStyle: "italic", color: "#888" }}>Typing...</p>
        )}
      </div>

      {/* Input */}
      <div
        style={{
          display: "flex",
          padding: "10px",
          borderTop: "1px solid #ccc",
          background: "#fff",
        }}
      >
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            marginRight: "5px",
          }}
        />
        <button
          onClick={handleAsk}
          disabled={loading}
          style={{
            padding: "8px 12px",
            borderRadius: "20px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
