"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm the AITechPulze AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

    const handleQuickReply = (text) => {
      setInput(text);
      // We need to pass the text directly because setState is async
      submitMessage(text);
    };

    const submitMessage = async (messageText) => {
      if (!messageText.trim() || isLoading) return;

      const userMessage = { role: "user", content: messageText };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: [...messages, userMessage] })
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      } catch (error) {
        console.error("Chat error:", error);
        setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting to my brain right now. Please try again later." }]);
      } finally {
        setIsLoading(false);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      submitMessage(input);
    };

    const quickReplies = [
      "What services do you offer?",
      "How do I get a quote?",
      "Tell me about Academy internships",
      "How do I apply for an internship?"
    ];

    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="mb-4 w-[340px] sm:w-[380px] h-[500px] max-h-[70vh] bg-[#060713]/95 backdrop-blur-2xl border border-[#00F0FF]/30 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.6),_0_0_20px_rgba(0,240,255,0.15)] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 border-b border-white/10 bg-gradient-to-r from-[#7B2CBF]/20 to-[#00F0FF]/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00F0FF]/20 flex items-center justify-center border border-[#00F0FF]/40">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm font-[family-name:var(--font-grotesk)]">ATP Assistant</h3>
                    <p className="text-[10px] text-[#00F0FF] uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse"></span> Online
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white p-1 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth hide-scrollbar">
                {messages.map((m, i) => {
                  let content = m.content;
                  let hasInternshipAction = false;
                  let hasQuoteAction = false;
                  
                  if (m.role === "assistant") {
                    if (content.includes("[ACTION_INTERNSHIP]")) {
                      hasInternshipAction = true;
                      content = content.replace("[ACTION_INTERNSHIP]", "").trim();
                    }
                    if (content.includes("[ACTION_QUOTE]")) {
                      hasQuoteAction = true;
                      content = content.replace("[ACTION_QUOTE]", "").trim();
                    }
                  }
                  
                  return (
                    <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className="flex flex-col gap-2 max-w-[85%]">
                        <div 
                          className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                            m.role === "user" 
                              ? "bg-[#2563EB] text-white rounded-tr-sm" 
                              : "bg-white/10 text-white rounded-tl-sm border border-white/5"
                          }`}
                        >
                          {content}
                        </div>
                        {hasInternshipAction && (
                          <Link href="/academy/internships" className="self-start text-xs font-semibold bg-[#7B2CBF] hover:bg-[#5b3fd6] text-white px-4 py-2 rounded-xl transition-colors shadow-lg flex items-center gap-1.5">
                            Apply for Internship <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          </Link>
                        )}
                        {hasQuoteAction && (
                          <Link href="/get-quote" className="self-start text-xs font-semibold bg-[#00F0FF] hover:bg-[#00F0FF]/80 text-black px-4 py-2 rounded-xl transition-colors shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center gap-1.5">
                            Get a Quote <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 border border-white/5 flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 bg-[#00F0FF] rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-[#00F0FF] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                      <span className="w-1.5 h-1.5 bg-[#00F0FF] rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-3 border-t border-white/10 bg-black/20 flex flex-col gap-3">
                {/* Quick Replies */}
                {messages.length < 3 && !isLoading && (
                  <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
                    {quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickReply(reply)}
                        className="whitespace-nowrap bg-white/5 hover:bg-white/10 border border-white/10 text-[#00F0FF] text-xs px-3 py-1.5 rounded-full transition-colors flex-shrink-0"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00F0FF]/50 focus:ring-1 focus:ring-[#00F0FF]/50 transition-all"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() || isLoading}
                  className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white p-2.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.4)] border border-[#00F0FF]/30 transition-colors ${isOpen ? 'bg-[#060713] text-white' : 'bg-gradient-to-tr from-[#2563EB] to-[#00F0FF] text-white'}`}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
        )}
      </motion.button>
    </div>
  );
}
