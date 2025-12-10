import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/chatService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Chào chủ tịch! Chủ tịch muốn hỏi tao ăn mì tôm vị gì hôm nay không?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(messages, input);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      // Error handled in service
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-slate-800 border border-slate-700 w-80 sm:w-96 h-[450px] rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-white flex items-center gap-2">
                Hotline 24/7 (Đói meo)
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </h3>
              <p className="text-xs text-emerald-100 opacity-80">Trả lời nhanh hơn người yêu cũ</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                    msg.role === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-none'
                      : 'bg-slate-700 text-slate-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 rounded-2xl rounded-bl-none p-3 flex items-center gap-2">
                  <Loader2 className="animate-spin text-emerald-400" size={16} />
                  <span className="text-xs text-slate-300">Đang gõ (vừa ăn vừa gõ)...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Hỏi tao ăn gì..."
              className="flex-1 bg-slate-900 text-white text-sm rounded-full px-4 py-2 border border-slate-700 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white p-2 rounded-full transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-slate-700' : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:scale-105'
        } text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium">
            Tâm sự mỏng?
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;