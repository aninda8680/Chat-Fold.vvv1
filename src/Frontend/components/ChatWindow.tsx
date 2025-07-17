import React, { useState } from "react";
import { SendHorizonal } from "lucide-react";

const modelOptions = ["ChatGPT", "Claude", "Gemini", "DeepSeek"];

const ChatWindow = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "ai" }[]>([]);
  const [selectedModel, setSelectedModel] = useState("ChatGPT");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input.trim(), sender: "user" as const };
    const aiMessage = { text: `Mock response from ${selectedModel}`, sender: "ai" as const };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setInput("");
  };

  return (
    <div className="flex flex-col flex-1 bg-[#111] text-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-semibold">New Chat</h2>
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="bg-gray-800 text-white px-3 py-1 rounded-md border border-gray-600"
        >
          {modelOptions.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-md p-3 rounded-lg ${
              msg.sender === "user" ? "bg-blue-600 self-end ml-auto" : "bg-gray-700 self-start mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Send a message..."
            className="flex-1 bg-transparent px-4 py-2 outline-none text-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-2 hover:bg-gray-700 transition"
          >
            <SendHorizonal className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
