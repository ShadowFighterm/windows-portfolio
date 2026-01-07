import { useState, useRef, useEffect } from 'react';
import DesktopIcon from './DesktopIcon';
import ContextMenu from './ContextMenu';
import { Monitor, Chrome, Trash2, FileText, Gamepad2, Terminal, Download } from 'lucide-react';

interface DesktopProps {
  onOpenWindow: (type: string, title: string) => void;
  devMode: boolean;
}

export default function Desktop({ onOpenWindow, devMode }: DesktopProps) {
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const desktopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = () => setContextMenu(null);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const icons = [
    { id: 'mycomputer', icon: Monitor, label: 'My Computer', type: 'mycomputer', color: '#FFD700', iconType: 'mycomputer' as const },
    { id: 'chrome', icon: Chrome, label: 'Google Chrome', type: 'chrome', color: '#4285F4', iconType: 'chrome' as const },
    { id: 'notepad', icon: FileText, label: 'Notepad', type: 'notepad', color: '#0078D7', iconType: 'notepad' as const },
    { id: 'solitaire', icon: Gamepad2, label: 'Solitaire', type: 'solitaire', color: '#7FBA00', iconType: 'solitaire' as const },
    { id: 'terminal', icon: Terminal, label: 'Command Prompt', type: 'terminal', color: '#000000', iconType: 'terminal' as const },
    { id: 'resume', icon: Download, label: 'Resume.exe', type: 'resume', color: '#00A4EF', iconType: 'resume' as const },
    { id: 'recyclebin', icon: Trash2, label: 'Recycle Bin', type: 'recyclebin', color: '#737373', iconType: 'recyclebin' as const },
  ];

  return (
    <>
      <div
        ref={desktopRef}
        onContextMenu={handleContextMenu}
        className="absolute top-0 left-0 right-0 bottom-10 select-none"
        style={{
          backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZ3JhZCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzRBOEVEOCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzM5NkVBNSIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiLz48L3N2Zz4=)',
          backgroundSize: 'cover',
        }}
      >
        {/* Desktop Icons Grid */}
        <div className="flex flex-col flex-wrap gap-4 p-4 h-full w-fit">
          {icons.map((icon, index) => (
            <DesktopIcon
              key={icon.id}
              icon={icon.icon}
              label={icon.label}
              onDoubleClick={() => onOpenWindow(icon.type, icon.label)}
              style={{ animationDelay: `${index * 50}ms` }}
              iconColor={icon.color}
              iconType={icon.iconType}
            />
          ))}
        </div>

        {/* Developer Mode Badge */}
        {devMode && (
          <div className="absolute top-4 right-4 bg-black/80 text-green-400 px-4 py-2 rounded font-mono text-sm border border-green-400">
            DEVELOPER MODE ACTIVE
          </div>
        )}
      </div>

      {/* Context Menu */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={() => setContextMenu(null)}
        />
      )}
    </>
  );
}