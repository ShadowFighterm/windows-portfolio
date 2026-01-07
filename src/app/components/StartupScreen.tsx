import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function StartupScreen() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    
    // Play startup sound (if you have an audio file)
    // const audio = new Audio('/sounds/xp-startup.mp3');
    // audio.play().catch(() => {});
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Windows XP Logo */}
        <div className="mb-8">
          <div className="text-6xl font-bold mb-2">
            <span className="text-[#FFA500]">W</span>
            <span className="text-[#00A4EF]">i</span>
            <span className="text-[#7FBA00]">n</span>
            <span className="text-[#FFB900]">d</span>
            <span className="text-[#F25022]">o</span>
            <span className="text-[#00A4EF]">w</span>
            <span className="text-[#7FBA00]">s</span>
          </div>
          <div className="text-4xl font-semibold text-white">
            <span className="text-[#00A4EF]">XP</span>
            <span className="text-gray-400 ml-2 text-2xl">Professional</span>
          </div>
        </div>

        {/* Loading Animation */}
        {showText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8"
          >
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="h-full w-1/3 bg-gradient-to-r from-blue-600 to-blue-400"
              />
            </div>
            <p className="text-white text-sm mt-4">Loading your portfolio...</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
