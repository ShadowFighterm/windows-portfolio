import { HardDrive } from 'lucide-react';

export default function MyComputer() {
  const drives = [
    { name: 'C: Drive', label: 'Skills', color: 'bg-blue-500', items: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'] },
    { name: 'D: Drive', label: 'Projects', color: 'bg-green-500', items: ['E-commerce Platform', 'Portfolio Website', 'Task Manager', 'Chat Application'] },
    { name: 'E: Drive', label: 'Tools', color: 'bg-purple-500', items: ['VS Code', 'Git', 'Figma', 'Postman', 'MongoDB', 'PostgreSQL'] },
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">My Computer</h2>
      <div className="grid grid-cols-3 gap-6">
        {drives.map((drive, index) => (
          <div
            key={index}
            className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-blue-500 cursor-pointer transition-colors"
          >
            <div className={`w-16 h-16 ${drive.color} rounded flex items-center justify-center mb-4`}>
              <HardDrive className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">{drive.name}</h3>
            <p className="text-gray-600 mb-4">{drive.label}</p>
            <ul className="space-y-1">
              {drive.items.map((item, i) => (
                <li key={i} className="text-sm text-gray-700">• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
