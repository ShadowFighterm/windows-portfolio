import { useState, useEffect } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import WindowManager from './components/WindowManager';
import StartupScreen from './components/StartupScreen';
import Clippy from './components/Clippy';

interface WindowData {
  id: string;
  title: string;
  type: string;
  minimized: boolean;
  maximized: boolean;
  active: boolean;
}

export default function App() {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [showStartup, setShowStartup] = useState(true);
  const [devMode, setDevMode] = useState(false);

  useEffect(() => {
    // Hide startup screen after animation
    const timer = setTimeout(() => {
      setShowStartup(false);
    }, 3000);

    // Listen for Ctrl+Alt+M for developer mode
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key === 'm') {
        e.preventDefault();
        setDevMode(!devMode);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [devMode]);

  const openWindow = (type: string, title: string) => {
    const id = `${type}-${Date.now()}`;
    const newWindow: WindowData = {
      id,
      title,
      type,
      minimized: false,
      maximized: false,
      active: true,
    };

    // Set all other windows to inactive
    setWindows(prev => [
      ...prev.map(w => ({ ...w, active: false })),
      newWindow
    ]);
    setShowStartMenu(false);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, minimized: true, active: false } : w
    ));
  };

  const maximizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, maximized: !w.maximized } : w
    ));
  };

  const restoreWindow = (id: string) => {
    setWindows(prev => {
      // Find the window to restore
      const windowToRestore = prev.find(w => w.id === id);
      if (!windowToRestore) return prev;
      
      // Remove it from its current position and add it to the end (on top)
      const otherWindows = prev.filter(w => w.id !== id);
      return [
        ...otherWindows.map(w => ({ ...w, active: false })),
        { ...windowToRestore, minimized: false, active: true }
      ];
    });
  };

  const focusWindow = (id: string) => {
    setWindows(prev => {
      // Find the window to focus
      const windowToFocus = prev.find(w => w.id === id);
      if (!windowToFocus) return prev;
      
      // Remove it from its current position and add it to the end
      const otherWindows = prev.filter(w => w.id !== id);
      return [
        ...otherWindows.map(w => ({ ...w, active: false })),
        { ...windowToFocus, active: true }
      ];
    });
  };

  if (showStartup) {
    return <StartupScreen />;
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#3A6EA5] relative">
      {/* Desktop Background */}
      <Desktop onOpenWindow={openWindow} devMode={devMode} />

      {/* Windows */}
      <WindowManager
        windows={windows}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onMaximize={maximizeWindow}
        onFocus={focusWindow}
      />

      {/* Clippy Assistant */}
      <Clippy />

      {/* Start Menu */}
      {showStartMenu && (
        <StartMenu
          onClose={() => setShowStartMenu(false)}
          onOpenWindow={openWindow}
        />
      )}

      {/* Taskbar */}
      <Taskbar
        windows={windows}
        onStartClick={() => setShowStartMenu(!showStartMenu)}
        onWindowClick={restoreWindow}
        showStartMenu={showStartMenu}
      />
    </div>
  );
}