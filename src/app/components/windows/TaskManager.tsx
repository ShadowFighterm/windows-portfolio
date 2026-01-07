import { Activity, Cpu, HardDrive } from 'lucide-react';

export default function TaskManager() {
  const processes = [
    { name: 'Portfolio Website', status: 'Running', cpu: '45%', memory: '128 MB' },
    { name: 'React Development', status: 'Running', cpu: '32%', memory: '256 MB' },
    { name: 'Node.js Server', status: 'Running', cpu: '18%', memory: '512 MB' },
    { name: 'AWS Services', status: 'Running', cpu: '12%', memory: '64 MB' },
  ];

  const skills = [
    { name: 'React', proficiency: 95 },
    { name: 'TypeScript', proficiency: 90 },
    { name: 'Node.js', proficiency: 85 },
    { name: 'AWS', proficiency: 80 },
    { name: 'Docker', proficiency: 75 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold">CPU Usage</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">28%</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-5 h-5 text-green-600" />
            <h3 className="font-bold">Memory</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">960 MB</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <HardDrive className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold">Disk</h3>
          </div>
          <p className="text-3xl font-bold text-purple-600">42%</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
          <h3 className="font-bold">Running Processes (Active Projects)</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-300">
              <th className="text-left px-4 py-2">Process Name</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">CPU</th>
              <th className="text-left px-4 py-2">Memory</th>
            </tr>
          </thead>
          <tbody>
            {processes.map((process, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2">{process.name}</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                    {process.status}
                  </span>
                </td>
                <td className="px-4 py-2">{process.cpu}</td>
                <td className="px-4 py-2">{process.memory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-lg border border-gray-300 p-6">
        <h3 className="font-bold mb-4">Performance (Skill Proficiency)</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.proficiency}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
