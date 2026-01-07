import { motion } from 'motion/react';
import { RefreshCw, Monitor, Palette } from 'lucide-react';

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
}

export default function ContextMenu({ x, y, onClose }: ContextMenuProps) {
  const items = [
    { icon: RefreshCw, label: 'Refresh', action: () => window.location.reload() },
    { divider: true },
    { icon: Monitor, label: 'Properties', action: () => {} },
    { icon: Palette, label: 'Personalize', action: () => {} },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      style={{ left: x, top: y }}
      className="fixed z-[9999] bg-[#ECE9D8] border-2 border-[#0054E3] rounded shadow-xl min-w-[200px]"
      onClick={(e) => e.stopPropagation()}
    >
      {items.map((item, index) => (
        item.divider ? (
          <div key={index} className="h-px bg-gray-400 my-1" />
        ) : (
          <button
            key={index}
            onClick={() => {
              item.action();
              onClose();
            }}
            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#0054E3] hover:text-white transition-colors text-left"
          >
            {item.icon && <item.icon className="w-4 h-4" />}
            <span className="text-sm font-['Tahoma']">{item.label}</span>
          </button>
        )
      ))}
    </motion.div>
  );
}
