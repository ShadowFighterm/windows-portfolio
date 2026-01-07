import { X, Minus, Square } from 'lucide-react';
import { motion } from 'motion/react';
import Draggable from 'react-draggable';
import { useRef } from 'react';

interface WindowProps {
  id: string;
  title: string;
  minimized: boolean;
  maximized: boolean;
  active: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  children: React.ReactNode;
  icon?: string;
  zIndex?: number;
}

export default function Window({
  id,
  title,
  minimized,
  maximized,
  active,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  children,
  icon = '📁',
  zIndex = 10,
}: WindowProps) {
  const nodeRef = useRef(null);

  if (minimized) return null;

  const windowStyles = maximized
    ? 'fixed inset-0 top-0 left-0 right-0 bottom-10'
    : 'w-[800px] h-[600px]';

  const WindowContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 50 }}
      transition={{ duration: 0.2 }}
      onClick={onFocus}
      className={`${windowStyles} bg-white flex flex-col overflow-hidden`}
      style={{ 
        zIndex: zIndex,
        borderRadius: '8px 8px 0 0',
        border: '1px solid #0054E3',
        boxShadow: active 
          ? '0 0 0 3px rgba(49, 106, 197, 0.4), 0 10px 40px rgba(0,0,0,0.5)' 
          : '0 4px 20px rgba(0,0,0,0.3)'
      }}
    >
      {/* Title Bar - XP Style */}
      <div
        className={`flex items-center justify-between px-2 py-1 drag-handle cursor-move ${
          active
            ? 'bg-gradient-to-r from-[#0054E3] via-[#4B8DF8] to-[#0054E3]'
            : 'bg-gradient-to-r from-[#7A96C6] via-[#B8CCE4] to-[#7A96C6]'
        }`}
        style={{
          height: '30px',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px'
        }}
      >
        <div className="flex items-center gap-2 flex-1">
          {/* Window Icon */}
          <div className="text-base">
            {icon}
          </div>
          <span 
            className={`text-sm font-['Tahoma'] font-bold ${active ? 'text-white' : 'text-[#2D4F7B]'}`}
            style={{
              textShadow: active ? '1px 1px 1px rgba(0,0,0,0.3)' : 'none'
            }}
          >
            {title}
          </span>
        </div>
        
        {/* Window Controls - XP Style */}
        <div className="flex items-center gap-[2px]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className={`w-[21px] h-[21px] flex items-center justify-center transition-colors rounded-sm ${
              active 
                ? 'bg-[#3C7BF6] hover:bg-[#1E5BC6] active:bg-[#0D4DB3]'
                : 'bg-[#D8DFEA] hover:bg-[#B8CCE4] active:bg-[#9BB7DD]'
            }`}
            style={{
              border: '1px solid rgba(255,255,255,0.5)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)'
            }}
          >
            <div className={`w-2 h-[2px] ${active ? 'bg-white' : 'bg-[#2D4F7B]'}`} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMaximize();
            }}
            className={`w-[21px] h-[21px] flex items-center justify-center transition-colors rounded-sm ${
              active 
                ? 'bg-[#3C7BF6] hover:bg-[#1E5BC6] active:bg-[#0D4DB3]'
                : 'bg-[#D8DFEA] hover:bg-[#B8CCE4] active:bg-[#9BB7DD]'
            }`}
            style={{
              border: '1px solid rgba(255,255,255,0.5)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)'
            }}
          >
            <div 
              className={`w-2 h-2 border ${active ? 'border-white border-t-2' : 'border-[#2D4F7B] border-t-2'}`}
            />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-[21px] h-[21px] bg-[#E81123] hover:bg-[#FF1F34] active:bg-[#C4000C] flex items-center justify-center transition-colors rounded-sm"
            style={{
              border: '1px solid rgba(255,255,255,0.5)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)'
            }}
          >
            <X className="w-3 h-3 text-white" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto bg-white">
        {children}
      </div>
    </motion.div>
  );

  if (maximized) {
    return WindowContent;
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".drag-handle"
      defaultPosition={{ x: 100, y: 50 }}
      bounds="parent"
      cancel=".no-drag"
    >
      <div ref={nodeRef} className="fixed">
        {WindowContent}
      </div>
    </Draggable>
  );
}