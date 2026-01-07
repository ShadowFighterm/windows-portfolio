export default function SkillsWindow() {
  const skills = {
    'Frontend': [
      { name: 'HTML', level: 95, color: 'bg-orange-500' },
      { name: 'CSS', level: 95, color: 'bg-blue-500' },
      { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
      { name: 'React', level: 90, color: 'bg-cyan-500' },
      { name: 'WordPress', level: 80, color: 'bg-blue-600' },
      { name: 'Elementor', level: 75, color: 'bg-pink-500' },
    ],
    'Backend': [
      { name: 'Node.js', level: 85, color: 'bg-green-600' },
      { name: 'Express.js', level: 85, color: 'bg-gray-700' },
      { name: 'MongoDB', level: 80, color: 'bg-green-500' },
      { name: 'SQL', level: 75, color: 'bg-blue-500' },
      { name: 'Postman', level: 85, color: 'bg-orange-500' },
    ],
    'Dev Tools': [
      { name: 'Git', level: 90, color: 'bg-red-500' },
      { name: 'GitHub', level: 90, color: 'bg-gray-800' },
      { name: 'Docker', level: 70, color: 'bg-blue-500' },
    ],
    'Deployment': [
      { name: 'GitHub Pages', level: 85, color: 'bg-gray-700' },
      { name: 'Vercel', level: 85, color: 'bg-black' },
      { name: 'AWS', level: 75, color: 'bg-orange-600' },
    ],
    'Game Development': [
      { name: 'Unity', level: 75, color: 'bg-gray-800' },
      { name: 'C#', level: 70, color: 'bg-purple-600' },
      { name: 'Lua', level: 80, color: 'bg-blue-600' },
    ],
  };

  return (
    <div className="p-8 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Technical Skills</h1>
        <p className="text-gray-600">My expertise across different technologies</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <h3 className="text-2xl font-bold mb-4">{category}</h3>
            {items.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${skill.color} h-full rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}