"use client";
import { useState, useRef, useEffect } from "react";
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from "react-icons/fa";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const QUICK_RESPONSES = [
  "Tell me about your services",
  "What are your prices?",
  "Check availability",
  "Request a quote",
];

const BOT_RESPONSES: { [key: string]: string } = {
  "tell me about your services": "Chef Oscar offers private dinners, cooking classes, micro weddings, and corporate events. Each experience is customized to your preferences. Would you like to know more about a specific service?",
  "what are your prices?": "Our prices vary depending on the service:\n• 3 Course Plated Dinner: From CA$129\n• Cooking Class: CA$300\n• 9 Course Tasting Menu: CA$199\n• Family Style Dinner: From CA$99\n\nWould you like to book a consultation?",
  "check availability": "I'd be happy to check availability for you! Please provide your preferred date and we'll get back to you within 24 hours. You can also fill out our contact form for faster service.",
  "request a quote": "To provide you with an accurate quote, I'll need a few details:\n• Type of event\n• Number of guests\n• Preferred date\n• Dietary requirements\n\nPlease share these details or fill out our contact form.",
  "default": "Thank you for your message! For immediate assistance, please contact us at chef@oscarsilva.com or call +1 (555) 123-4567. We typically respond within 24 hours.",
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm Chef Oscar's assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(BOT_RESPONSES)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return BOT_RESPONSES.default;
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(messageText),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickResponse = (response: string) => {
    handleSendMessage(response);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-40 w-16 h-16 bg-gradient-to-br from-[#1a4d3a] to-[#2d6a4f] hover:from-[#2d6a4f] hover:to-[#1a4d3a] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-bounce-subtle"
          aria-label="Open chat"
        >
          <FaComments className="text-3xl" />
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
            AI
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl flex flex-col animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1a4d3a] to-[#2d6a4f] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <FaRobot className="text-2xl text-[#1a4d3a]" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
              </div>
              <div>
                <h3 className="font-bold">Chef Oscar AI</h3>
                <p className="text-xs text-white/80">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white text-2xl transition-colors"
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, idx) => (
              <div
                key={idx}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"} animate-fade-in-up`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-2xl ${
                    message.isBot
                      ? "bg-white text-gray-800 shadow-md rounded-tl-none"
                      : "bg-[#1a4d3a] text-white shadow-md rounded-tr-none"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isBot ? "text-gray-400" : "text-white/70"}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-tl-none shadow-md">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses */}
          {messages.length === 1 && (
            <div className="p-3 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-2 font-semibold">Quick options:</p>
              <div className="flex flex-wrap gap-2">
                {QUICK_RESPONSES.map((response, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickResponse(response)}
                    className="text-xs bg-white hover:bg-[#1a4d3a] hover:text-white text-gray-700 px-3 py-2 rounded-full border border-gray-300 transition-all duration-200"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-4 bg-white border-t border-gray-200 rounded-b-2xl"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent outline-none text-sm"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-12 h-12 bg-[#1a4d3a] hover:bg-[#2d6a4f] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
