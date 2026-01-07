import Window from './Window';
import ChromeBrowser from './windows/ChromeBrowser';
import MyComputer from './windows/MyComputer';
import Notepad from './windows/Notepad';
import Solitaire from './windows/Solitaire';
import Terminal from './windows/Terminal';
import TaskManager from './windows/TaskManager';
import RecycleBin from './windows/RecycleBin';
import ResumeDownload from './windows/ResumeDownload';
import AboutWindow from './windows/AboutWindow';
import ProjectsWindow from './windows/ProjectsWindow';
import SkillsWindow from './windows/SkillsWindow';
import ServicesWindow from './windows/ServicesWindow';
import ContactWindow from './windows/ContactWindow';

interface WindowData {
  id: string;
  title: string;
  type: string;
  minimized: boolean;
  maximized: boolean;
  active: boolean;
}

interface WindowManagerProps {
  windows: WindowData[];
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  onMaximize: (id: string) => void;
  onFocus: (id: string) => void;
}

export default function WindowManager({
  windows,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
}: WindowManagerProps) {
  const getWindowIcon = (type: string): string => {
    const iconMap: Record<string, string> = {
      chrome: '🌐',
      mycomputer: '💻',
      notepad: '📝',
      solitaire: '🎮',
      terminal: '⌨️',
      taskmanager: '📊',
      recyclebin: '🗑️',
      resume: '📄',
      about: '👤',
      projects: '📁',
      skills: '⚡',
      services: '💼',
      contact: '📧',
    };
    return iconMap[type] || '📁';
  };

  const renderWindowContent = (window: WindowData) => {
    switch (window.type) {
      case 'chrome':
        return <ChromeBrowser />;
      case 'mycomputer':
        return <MyComputer />;
      case 'notepad':
        return <Notepad />;
      case 'solitaire':
        return <Solitaire />;
      case 'terminal':
        return <Terminal />;
      case 'taskmanager':
        return <TaskManager />;
      case 'recyclebin':
        return <RecycleBin />;
      case 'resume':
        return <ResumeDownload />;
      case 'about':
        return <AboutWindow />;
      case 'projects':
        return <ProjectsWindow />;
      case 'skills':
        return <SkillsWindow />;
      case 'services':
        return <ServicesWindow />;
      case 'contact':
        return <ContactWindow />;
      default:
        return <div className="p-4">Content not found</div>;
    }
  };

  return (
    <>
      {windows.map((window, index) => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          minimized={window.minimized}
          maximized={window.maximized}
          active={window.active}
          onClose={() => onClose(window.id)}
          onMinimize={() => onMinimize(window.id)}
          onMaximize={() => onMaximize(window.id)}
          onFocus={() => onFocus(window.id)}
          icon={getWindowIcon(window.type)}
          zIndex={10 + index}
        >
          {renderWindowContent(window)}
        </Window>
      ))}
    </>
  );
}