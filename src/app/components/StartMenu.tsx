import { motion } from 'motion/react';
import { 
  MonitorDot, 
  Power, 
  User, 
  Folder, 
  Code, 
  Briefcase, 
  Mail,
  FileText,
  HardDrive,
  Search,
  Settings,
  HelpCircle,
  LogOut,
  Image,
  Music,
  Video,
  Calculator
} from 'lucide-react';

interface StartMenuProps {
  onClose: () => void;
  onOpenWindow: (type: string, title: string) => void;
}

export default function StartMenu({ onClose, onOpenWindow }: StartMenuProps) {
  const handleOpenWindow = (type: string, title: string) => {
    onOpenWindow(type, title);
    onClose();
  };

  const frequentPrograms = [
    { icon: '🌐', label: 'Internet Explorer', color: 'text-blue-500' },
    { icon: '✉️', label: 'Outlook Express', color: 'text-blue-600' },
    { icon: '🎵', label: 'Windows Media Player', color: 'text-orange-500' },
    { icon: '🎮', label: 'Solitaire', type: 'solitaire', color: 'text-green-600' },
  ];

  const allPrograms = [
    { icon: Code, label: 'My Computer', type: 'mycomputer', color: 'text-blue-600' },
    { icon: FileText, label: 'Notepad', type: 'notepad', color: 'text-gray-600' },
    { icon: Calculator, label: 'Calculator', color: 'text-gray-700' },
    { icon: Image, label: 'Paint', color: 'text-red-500' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Start Menu */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-10 left-0 z-50 w-[420px] bg-white rounded-tr-lg rounded-br-lg shadow-2xl border border-[#0054E3] overflow-hidden"
        style={{
          boxShadow: '0 0 0 1px rgba(0,84,227,0.3), 0 10px 40px rgba(0,0,0,0.5)'
        }}
      >
        <div className="flex h-[500px]">
          {/* Left Panel - User Profile */}
          <div className="w-[180px] bg-gradient-to-b from-[#3C5BC7] via-[#5478D4] to-[#3C5BC7] flex flex-col justify-between py-6 px-3">
            {/* User Section */}
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white/20 rounded-sm flex items-center justify-center mb-2 border-2 border-white/40">
                  <User className="w-10 h-10 text-white" />
                </div>
                <p className="text-white font-bold text-sm text-center font-['Tahoma']">Mannan Tariq</p>
              </div>
            </div>

            {/* XP Logo */}
            <div className="flex flex-col items-center opacity-90">
              <div className="text-white text-4xl font-bold italic mb-1" style={{ fontFamily: 'Franklin Gothic Medium, sans-serif' }}>
                Windows
              </div>
              <div className="text-white text-xs font-semibold tracking-wider">XP Professional</div>
            </div>
          </div>

          {/* Right Panel - Programs */}
          <div className="flex-1 flex flex-col">
            {/* Frequent Programs */}
            <div className="flex-1 bg-white pt-2">
              {frequentPrograms.map((item, index) => (
                <button
                  key={index}
                  onClick={() => item.type && handleOpenWindow(item.type, item.label)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#3169EF] hover:text-white transition-colors group text-left"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-['Tahoma'] font-bold">{item.label}</span>
                </button>
              ))}

              <div className="mx-4 my-2 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

              {/* My Portfolio Items */}
              <div className="px-2 space-y-1">
                <button
                  onClick={() => handleOpenWindow('about', 'About Me')}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#3169EF] hover:text-white transition-colors group text-left rounded"
                >
                  <User className="w-5 h-5" />
                  <span className="text-sm font-['Tahoma']">About Me</span>
                </button>
                <button
                  onClick={() => handleOpenWindow('projects', 'Projects')}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#3169EF] hover:text-white transition-colors group text-left rounded"
                >
                  <Folder className="w-5 h-5" />
                  <span className="text-sm font-['Tahoma']">Projects</span>
                </button>
                <button
                  onClick={() => handleOpenWindow('skills', 'Skills')}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#3169EF] hover:text-white transition-colors group text-left rounded"
                >
                  <Code className="w-5 h-5" />
                  <span className="text-sm font-['Tahoma']">Skills</span>
                </button>
                <button
                  onClick={() => handleOpenWindow('services', 'Services')}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#3169EF] hover:text-white transition-colors group text-left rounded"
                >
                  <Briefcase className="w-5 h-5" />
                  <span className="text-sm font-['Tahoma']">Services</span>
                </button>
                <button
                  onClick={() => handleOpenWindow('contact', 'Contact')}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#3169EF] hover:text-white transition-colors group text-left rounded"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-['Tahoma']">Contact</span>
                </button>
              </div>
            </div>

            {/* Footer with All Programs and Log Off */}
            <div className="bg-[#5478D4] border-t border-[#3169EF]">
              <button 
                onClick={() => handleOpenWindow('mycomputer', 'My Computer')}
                className="w-full flex items-center gap-2 px-4 py-2.5 hover:bg-[#3169EF] transition-colors"
              >
                <HardDrive className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-['Tahoma'] font-bold">All Programs</span>
              </button>
              <button
                onClick={() => window.location.reload()}
                className="w-full flex items-center gap-2 px-4 py-2.5 hover:bg-[#3169EF] transition-colors border-t border-[#3169EF]"
              >
                <LogOut className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-['Tahoma'] font-bold">Log Off</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}