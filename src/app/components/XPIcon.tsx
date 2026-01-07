interface XPIconProps {
  type: 'mycomputer' | 'chrome' | 'notepad' | 'solitaire' | 'terminal' | 'resume' | 'recyclebin';
  size?: number;
}

export default function XPIcon({ type, size = 48 }: XPIconProps) {
  const iconStyles = {
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
  };

  switch (type) {
    case 'mycomputer':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={iconStyles}>
          {/* Monitor */}
          <rect x="8" y="10" width="32" height="22" rx="2" fill="url(#monitor-grad)" stroke="#1A5490" strokeWidth="1.5"/>
          <rect x="10" y="12" width="28" height="16" fill="#87CEEB"/>
          {/* Screen highlight */}
          <path d="M11 13 L37 13 L36 17 L12 17 Z" fill="white" opacity="0.3"/>
          {/* Stand */}
          <rect x="20" y="32" width="8" height="4" rx="1" fill="#5A7FA0"/>
          <rect x="16" y="36" width="16" height="2" rx="1" fill="#3D5A7A"/>
          <defs>
            <linearGradient id="monitor-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7DB8D8"/>
              <stop offset="100%" stopColor="#4A90B8"/>
            </linearGradient>
          </defs>
        </svg>
      );

    case 'chrome':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={iconStyles}>
          <circle cx="24" cy="24" r="18" fill="url(#chrome-outer)"/>
          <circle cx="24" cy="24" r="12" fill="url(#chrome-inner)"/>
          <circle cx="24" cy="24" r="8" fill="white"/>
          <circle cx="24" cy="24" r="6" fill="url(#chrome-center)"/>
          <defs>
            <linearGradient id="chrome-outer" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4285F4"/>
              <stop offset="33%" stopColor="#FBBC04"/>
              <stop offset="66%" stopColor="#34A853"/>
              <stop offset="100%" stopColor="#EA4335"/>
            </linearGradient>
            <linearGradient id="chrome-inner" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8F4FF"/>
              <stop offset="100%" stopColor="#B8DAFF"/>
            </linearGradient>
            <radialGradient id="chrome-center">
              <stop offset="0%" stopColor="#4285F4"/>
              <stop offset="100%" stopColor="#1967D2"/>
            </radialGradient>
          </defs>
        </svg>
      );

    case 'notepad':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={iconStyles}>
          <rect x="12" y="8" width="24" height="32" rx="2" fill="url(#notepad-grad)" stroke="#0066CC" strokeWidth="1.5"/>
          <rect x="14" y="10" width="20" height="28" fill="white"/>
          {/* Lines */}
          <line x1="16" y1="14" x2="32" y2="14" stroke="#CCCCCC" strokeWidth="1"/>
          <line x1="16" y1="18" x2="32" y2="18" stroke="#CCCCCC" strokeWidth="1"/>
          <line x1="16" y1="22" x2="32" y2="22" stroke="#CCCCCC" strokeWidth="1"/>
          <line x1="16" y1="26" x2="28" y2="26" stroke="#CCCCCC" strokeWidth="1"/>
          <defs>
            <linearGradient id="notepad-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0078D7"/>
              <stop offset="100%" stopColor="#0054A6"/>
            </linearGradient>
          </defs>
        </svg>
      );

    case 'solitaire':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={iconStyles}>
          {/* Card 1 - Red */}
          <rect x="10" y="12" width="14" height="20" rx="2" fill="white" stroke="#CC0000" strokeWidth="1.5"/>
          <text x="17" y="24" fontSize="12" fill="#CC0000" fontWeight="bold">♥</text>
          {/* Card 2 - Black */}
          <rect x="18" y="16" width="14" height="20" rx="2" fill="white" stroke="#000000" strokeWidth="1.5"/>
          <text x="25" y="28" fontSize="12" fill="#000000" fontWeight="bold">♠</text>
          {/* Card 3 - Green felt */}
          <rect x="26" y="20" width="14" height="20" rx="2" fill="url(#felt-grad)" stroke="#2D6B2D" strokeWidth="1.5"/>
          <defs>
            <linearGradient id="felt-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5CB85C"/>
              <stop offset="100%" stopColor="#449D44"/>
            </linearGradient>
          </defs>
        </svg>
      );

    case 'terminal':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={iconStyles}>
          <rect x="8" y="10" width="32" height="28" rx="2" fill="#000000" stroke="#333333" strokeWidth="1.5"/>
          <rect x="10" y="12" width="28" height="2" fill="#1E88E5"/>
          <text x="12" y="22" fontSize="8" fill="#00FF00" fontFamily="monospace">C:\&gt;</text>
          <rect x="26" y="18" width="6" height="2" fill="#00FF00"/>
          <text x="12" y="30" fontSize="6" fill="#00FF00" fontFamily="monospace">system32</text>
        </svg>
      );

    case 'resume':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={iconStyles}>
          <path d="M14 6 L30 6 L38 14 L38 42 L14 42 Z" fill="url(#doc-grad)" stroke="#0078D7" strokeWidth="1.5"/>
          <path d="M30 6 L30 14 L38 14" fill="#B8D7F5" stroke="#0078D7" strokeWidth="1.5"/>
          <rect x="18" y="18" width="12" height="2" rx="1" fill="#0078D7"/>
          <rect x="18" y="22" width="12" height="2" rx="1" fill="#0078D7"/>
          <rect x="18" y="26" width="8" height="2" rx="1" fill="#0078D7"/>
          <defs>
            <linearGradient id="doc-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF"/>
              <stop offset="100%" stopColor="#E8F4FF"/>
            </linearGradient>
          </defs>
        </svg>
      );

    case 'recyclebin':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={iconStyles}>
          {/* Bin body */}
          <path d="M16 18 L18 40 L30 40 L32 18 Z" fill="url(#bin-grad)" stroke="#4A5F7F" strokeWidth="1.5"/>
          {/* Bin lid */}
          <rect x="14" y="14" width="20" height="4" rx="1" fill="#6B8CAE" stroke="#4A5F7F" strokeWidth="1"/>
          {/* Handle */}
          <path d="M20 14 L20 10 Q24 8 28 10 L28 14" stroke="#4A5F7F" strokeWidth="1.5" fill="none"/>
          {/* Recycle symbol */}
          <circle cx="24" cy="28" r="6" fill="none" stroke="white" strokeWidth="1.5"/>
          <path d="M24 25 L24 31 M22 29 L24 31 L26 29" stroke="white" strokeWidth="1.5" fill="none"/>
          <defs>
            <linearGradient id="bin-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8BACD0"/>
              <stop offset="100%" stopColor="#5A7FA0"/>
            </linearGradient>
          </defs>
        </svg>
      );

    default:
      return <div style={{ width: size, height: size }} />;
  }
}
