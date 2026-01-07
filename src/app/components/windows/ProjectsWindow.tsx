import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsWindow() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Designed and developed a multilingual personal portfolio website from scratch with dynamic language switching and responsive UI.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      color: 'from-blue-400 to-blue-600',
      status: 'Live',
      github: 'https://github.com/ShadowFighterm',
    },
    {
      title: 'Airbnb Clone',
      description: 'Built a full-featured Airbnb clone with authentication, listings, and bookings. Integrated RESTful APIs for smooth communication.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      color: 'from-pink-400 to-pink-600',
      status: 'Live',
      github: 'https://github.com/ShadowFighterm',
    },
    {
      title: 'Halloween Spin Wheel',
      description: 'Interactive prize distribution system with spin logic and 24-hour cooldown timer. Full-stack freelance project.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      color: 'from-orange-400 to-orange-600',
      status: 'Live',
      github: 'https://github.com/ShadowFighterm',
    },
    {
      title: 'Squad Splash',
      description: 'Lua-based custom game with engaging mechanics and immersive UI/UX that improved player engagement and retention.',
      tech: ['Lua', 'Game Design', 'UI/UX'],
      color: 'from-purple-400 to-purple-600',
      status: 'In Development',
      github: 'https://github.com/ShadowFighterm',
    },
    {
      title: 'Unity Physics Games',
      description: 'Built 2 Unity-based games in C# featuring realistic physics with colliders, rigid bodies, and triggers for Game Jams.',
      tech: ['Unity', 'C#', 'Physics'],
      color: 'from-green-400 to-green-600',
      status: 'Completed',
      github: 'https://github.com/ShadowFighterm',
    },
    {
      title: 'More Projects',
      description: 'Check out my GitHub for more web development, game development, and open-source projects!',
      tech: ['MERN', 'Unity', 'Docker'],
      color: 'from-cyan-400 to-cyan-600',
      status: 'Ongoing',
      github: 'https://github.com/ShadowFighterm?tab=repositories',
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-gray-600">A collection of my recent work and side projects</p>
        <a 
          href="https://github.com/ShadowFighterm?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
        >
          <Github className="w-4 h-4" />
          View all on GitHub →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className={`h-40 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center text-white`}>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm">
                  {project.status}
                </span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}