import { MonitorDot, Volume2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface TaskbarProps {
  windows: Array<{ id: string; title: string; minimized: boolean; active: boolean }>;
  onStartClick: () => void;
  onWindowClick: (id: string) => void;
  showStartMenu: boolean;
}

export default function Taskbar({ windows, onStartClick, onWindowClick, showStartMenu }: TaskbarProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 h-10 flex items-center px-1 gap-2 z-30"
      style={{
        background: 'linear-gradient(180deg, #245EDC 0%, #1941A5 100%)',
        borderTop: '1px solid #5478D4',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)'
      }}
    >
      {/* Start Button - XP Style */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStartClick}
        className={`flex items-center gap-2 px-3 h-8 font-['Tahoma'] ${
          showStartMenu 
            ? 'shadow-inner' 
            : 'shadow-md hover:brightness-110'
        } transition-all`}
        style={{
          background: showStartMenu 
            ? 'linear-gradient(180deg, #2D9B3A 0%, #3AB54A 100%)'
            : 'linear-gradient(180deg, #3AB54A 0%, #2D9B3A 100%)',
          borderRadius: '3px',
          border: '1px solid rgba(255,255,255,0.3)',
          boxShadow: showStartMenu 
            ? 'inset 0 2px 4px rgba(0,0,0,0.3)'
            : '0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
        }}
      >
        <div className="flex items-center justify-center w-5 h-5">
          <img 
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0yIDJIMTJWMTJIMloiIGZpbGw9IiNGRjVDNUMiLz4KPHBhdGggZD0iTTEzIDJIMjJWMTJIMTNaIiBmaWxsPSIjNENCQzRCIi8+CjxwYXRoIGQ9Ik0yIDEzSDEyVjIySDJaIiBmaWxsPSIjNENCQzRCIi8+CjxwYXRoIGQ9Ik0xMyAxM0gyMlYyMkgxM1oiIGZpbGw9IiNGRkQ3MDAiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjEyIiB5MT0iMCIgeDI9IjEyIiB5Mj0iMjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFMEUwRTAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
            alt="Windows"
            className="w-5 h-5"
          />
        </div>
        <span 
          className="text-white text-sm font-bold italic"
          style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.4)' }}
        >
          start
        </span>
      </motion.button>

      {/* Quick Launch Divider */}
      <div className="h-6 w-px bg-blue-700/50" />

      {/* Window Buttons */}
      <div className="flex-1 flex items-center gap-1 overflow-x-auto">
        {windows.map((window) => (
          <motion.button
            key={window.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => onWindowClick(window.id)}
            className={`px-3 h-7 flex items-center gap-2 max-w-[200px] text-sm font-['Tahoma'] transition-all ${
              window.active && !window.minimized
                ? 'text-white'
                : 'text-white/90'
            }`}
            style={{
              background: window.active && !window.minimized
                ? 'linear-gradient(180deg, #1941A5 0%, #0F2D7C 100%)'
                : 'linear-gradient(180deg, #3A7DE1 0%, #245EDC 100%)',
              borderRadius: '3px',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: window.active && !window.minimized
                ? 'inset 0 1px 3px rgba(0,0,0,0.4)'
                : '0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
          >
            <span className="truncate">{window.title}</span>
          </motion.button>
        ))}
      </div>

      {/* System Tray */}
      <div 
        className="flex items-center gap-2 px-3 h-7"
        style={{
          background: 'linear-gradient(180deg, rgba(18,111,227,0.6) 0%, rgba(12,89,185,0.6) 100%)',
          borderRadius: '3px',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)'
        }}
      >
        <div className="flex items-center gap-2">
          {/* Volume Icon */}
          <Volume2 className="w-4 h-4 text-white" />
        </div>
        <div className="h-4 w-px bg-blue-400/40" />
        <span 
          className="text-white text-xs font-['Tahoma']"
          style={{ textShadow: '0 1px 1px rgba(0,0,0,0.5)' }}
        >
          {formatTime(time)}
        </span>
      </div>
    </div>
  );
}

