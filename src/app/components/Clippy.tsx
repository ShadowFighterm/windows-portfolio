import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

export default function Clippy() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [currentTip, setCurrentTip] = useState(0);

  const tips = [
    "Hi! I'm Clippy! Need help navigating this portfolio?",
    "Double-click any desktop icon to open it!",
    "Try pressing Ctrl+Alt+M for a special surprise!",
    "Check out the Chrome icon for my main portfolio!",
    "The Command Prompt accepts commands like 'help' and 'projects'!",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setCurrentTip((prev) => (prev + 1) % tips.length);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [visible, tips.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.toLowerCase().includes('project')) {
      alert('Opening Projects window!');
    } else if (message.toLowerCase().includes('contact')) {
      alert('Opening Contact window!');
    } else if (message.toLowerCase().includes('experience')) {
      alert('Opening About Me window!');
    } else {
      alert("I can help you with: projects, contact, experience, or navigation!");
    }
    setMessage('');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: 100 }}
          className="fixed bottom-16 right-4 w-80 bg-[#FFFFcc] border-2 border-black rounded-lg shadow-2xl z-50"
        >
          {/* Clippy Character */}
          <div className="absolute -left-12 -top-8">
            <div className="w-24 h-24 text-6xl">📎</div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-2 right-2 p-1 hover:bg-gray-200 rounded"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="p-4 pt-6">
            <motion.p
              key={currentTip}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-gray-800 mb-4"
            >
              {tips[currentTip]}
            </motion.p>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
