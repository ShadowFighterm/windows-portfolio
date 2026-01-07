import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import XPIcon from './XPIcon';

interface DesktopIconProps {
  icon: LucideIcon;
  label: string;
  onDoubleClick: () => void;
  style?: React.CSSProperties;
  iconColor?: string;
  iconType?: 'mycomputer' | 'chrome' | 'notepad' | 'solitaire' | 'terminal' | 'resume' | 'recyclebin';
}

export default function DesktopIcon({
  icon: Icon,
  label,
  onDoubleClick,
  style,
  iconColor = '#0066CC',
  iconType
}: DesktopIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={style}
      onDoubleClick={onDoubleClick}
      className="group flex flex-col items-center cursor-pointer p-2 w-20"
    >
      {/* Unified hover selection background */}
      <div className="relative flex flex-col items-center gap-1 px-1 py-1">
        {/* Selection highlight (icon + label together) */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-sm"
          style={{
            backgroundColor: 'rgba(49, 106, 197, 0.6)',
            border: '1px dotted rgba(255,255,255,0.7)'
          }}
        />

        {/* Icon */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          {iconType ? (
            <XPIcon type={iconType} size={48} />
          ) : (
            <Icon
              className="w-12 h-12"
              style={{ color: iconColor }}
              strokeWidth={1.5}
            />
          )}
        </div>

        {/* Label */}
        <span
          className="relative text-xs text-white text-center whitespace-nowrap font-['Tahoma'] px-1 leading-tight"
          style={{
            textShadow:
              '1px 1px 2px rgba(0,0,0,0.9), -1px -1px 2px rgba(0,0,0,0.9)'
          }}
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
}
