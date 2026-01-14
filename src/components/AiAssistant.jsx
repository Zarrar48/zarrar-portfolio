import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PORTFOLIO_CONTEXT } from "../data/portfolioData";

const AiAssistant = ({
  isOpen,
  setIsOpen,
  triggerMessage,
  setTriggerMessage,
}) => {
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hi! I'm Zarrar's AI Assistant. ✨\n\nI can answer questions about his resume, check if he fits your job description, or draft a cover letter for you. How can I help?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [limitReached, setLimitReached] = useState(false);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const AVAILABLE_MODELS = [
    "gemini-2.5-flash-lite",
    "gemini-2.5-flash",
    "gemini-3-flash",
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      setInput(''); 
    }
  }, [isOpen]);
  useEffect(() => {
    if (triggerMessage) {
      setInput(triggerMessage);
      if (isOpen) {
        setTimeout(() => inputRef.current?.focus(), 300);
      }
      setTriggerMessage("");
    }
  }, [triggerMessage, isOpen, setTriggerMessage]);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const setPrompt = (text) => {
    setInput(text);
    inputRef.current?.focus();
  };

  const handleSend = async () => {
    if (!input.trim() || limitReached) return;

    const userText = input;
    const userMsg = { role: "user", text: userText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) throw new Error("API_KEY_MISSING");

      const genAI = new GoogleGenerativeAI(apiKey);

      let responseText = null;

      for (const modelName of AVAILABLE_MODELS) {
        try {
          const model = genAI.getGenerativeModel({
            model: modelName,
            systemInstruction: PORTFOLIO_CONTEXT,
          });

          const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: userText }] }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 800,
            },
          });

          const response = await result.response;
          responseText = response.text();

          if (responseText) break;
        } catch (err) {
          console.warn(`Failed on ${modelName}, switching...`, err);
          continue;
        }
      }

      if (!responseText) {
        throw new Error("ALL_MODELS_EXHAUSTED");
      }

      setMessages((prev) => [...prev, { role: "model", text: responseText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      let errorMessage = "Sorry, I encountered an error. Please try again.";

      if (error.message === "API_KEY_MISSING") {
        errorMessage = "⚠️ **Error: Missing API Key.** Check your .env file.";
      } else if (error.message === "ALL_MODELS_EXHAUSTED") {
        setLimitReached(true);
        errorMessage =
          "⚠️ **Daily Limit Reached.** \nI have exhausted all available AI models for today. Please try again later.";
      }

      setMessages((prev) => [...prev, { role: "model", text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end pointer-events-auto">
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-[400px] h-[500px] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right animate-in fade-in zoom-in-95">
          <div className="p-4 bg-gradient-to-r from-brand to-brand-dark flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-2">
              <i className="ph-fill ph-sparkle text-yellow-300"></i>
              <h3 className="font-bold text-sm">Ask Zarrar AI</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <i className="ph-bold ph-x text-lg"></i>
            </button>
          </div>

          <div className="p-3 bg-slate-100 dark:bg-slate-800/50 flex gap-2 overflow-x-auto border-b border-slate-200 dark:border-slate-700 no-scrollbar shrink-0">
            <button
              onClick={() =>
                setPrompt("Tell me about your experience with .NET")
              }
              disabled={limitReached}
              className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-sky-600 dark:text-sky-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition disabled:opacity-50"
            >
              Experience
            </button>
            <button
              onClick={() => setPrompt("What are your top 3 skills?")}
              disabled={limitReached}
              className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-purple-600 dark:text-purple-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition disabled:opacity-50"
            >
              Skills
            </button>
            <button
              onClick={() =>
                setPrompt(
                  "Write a cover letter for a Senior Developer role at Google"
                )
              }
              disabled={limitReached}
              className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-green-600 dark:text-green-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition disabled:opacity-50"
            >
              Draft Cover Letter
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${
                    msg.role === "user"
                      ? "bg-brand text-white rounded-tr-none"
                      : "bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-tl-none"
                  }`}
                >
                  {msg.role === "model" ? (
                    <div className="prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-slate-100 dark:prose-pre:bg-slate-900 prose-pre:rounded-lg">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-tl-none p-4 border border-slate-100 dark:border-slate-700 flex gap-1.5 items-center w-16 h-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 shrink-0">
            {limitReached ? (
              <div className="text-center p-2 text-red-500 text-xs bg-red-50 dark:bg-red-900/20 rounded-lg">
                <p className="font-bold">Daily Limit Reached</p>
                <p>Please email Zarrar directly.</p>
              </div>
            ) : (
              <div className="relative flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  disabled={limitReached || isLoading}
                  placeholder="Ask anything or paste a JD..."
                  className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-transparent pr-10 disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim() || limitReached}
                  className="absolute right-2 top-1.5 p-1 text-brand hover:text-brand-dark dark:hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i className="ph-bold ph-paper-plane-right text-lg"></i>
                </button>
              </div>
            )}
            <div className="text-[10px] text-slate-400 text-center mt-2 flex justify-center items-center gap-1">
              Powered by <i className="ph-fill ph-google-logo"></i> Gemini
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-brand to-brand-dark text-white shadow-lg shadow-brand/30 hover:shadow-brand/50 transition-all hover:scale-110 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span
            className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
              limitReached ? "bg-red-400" : "bg-green-400 animate-ping"
            }`}
          ></span>
          <span
            className={`relative inline-flex rounded-full h-3 w-3 ${
              limitReached ? "bg-red-500" : "bg-green-500"
            }`}
          ></span>
        </span>
        <i
          className={`text-2xl transition-transform duration-300 ${
            isOpen ? "ph-bold ph-x rotate-90" : "ph-fill ph-chat-circle-text"
          }`}
        ></i>
      </button>
    </div>
  );
};

export default AiAssistant;
