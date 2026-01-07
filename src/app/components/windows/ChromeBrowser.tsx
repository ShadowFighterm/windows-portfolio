import { useState } from 'react';
import { Home, Folder, Award, Mail, ArrowLeft, ArrowRight, RotateCw, Lock, Star, MoreVertical, Search } from 'lucide-react';

export default function ChromeBrowser() {
  const [activeTab, setActiveTab] = useState('home');
  const [url, setUrl] = useState('portfolio.mannan.com/home');

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setUrl(`portfolio.mannan.com/${tabId}`);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Mannan Tariq | Web Developer | Frontend Specialist (MERN)
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <span>📞 +92 337 4650881</span>
              <span>✉️ mannantariq33@gmail.com</span>
              <span>📍 Lahore, Pakistan</span>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-2">💻</div>
                <h3 className="text-xl font-bold mb-2">MERN Stack</h3>
                <p className="text-gray-600">Building full-stack applications with React, Node.js, Express & MongoDB</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl mb-2">🎨</div>
                <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
                <p className="text-gray-600">Creating beautiful, mobile-first user interfaces</p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <div className="text-4xl mb-2">⚡</div>
                <h3 className="text-xl font-bold mb-2">Fast Deployment</h3>
                <p className="text-gray-600">Expert in Vercel, AWS, and GitHub Pages</p>
              </div>
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-500" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                  <p className="text-gray-600 mb-4">
                    Multilingual personal portfolio with dynamic language switching and responsive UI
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded text-sm">HTML</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">CSS</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded text-sm">JavaScript</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 bg-gradient-to-br from-pink-400 to-red-500" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Airbnb Clone</h3>
                  <p className="text-gray-600 mb-4">
                    Full-featured clone with authentication, listings, and booking system
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-cyan-100 text-cyan-600 rounded text-sm">React</span>
                    <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-sm">Node.js</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">MongoDB</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 bg-gradient-to-br from-orange-400 to-red-500" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Halloween Spin Wheel</h3>
                  <p className="text-gray-600 mb-4">
                    Interactive prize system with 24-hour cooldown timer
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-cyan-100 text-cyan-600 rounded text-sm">MERN</span>
                    <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-sm">MongoDB</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 bg-gradient-to-br from-purple-400 to-blue-500" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Squad Splash</h3>
                  <p className="text-gray-600 mb-4">
                    Lua-based custom game with engaging mechanics and immersive UI/UX
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">Lua</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-sm">Game Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'certifications':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Certifications & Education</h2>
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-3xl">
                    🎓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">BS (Hons.) Computer Science</h3>
                    <p className="text-gray-600">Information Technology University (ITU), Lahore</p>
                    <p className="text-sm text-gray-500">CGPA: 3.19 | 2022 – Present</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl">
                    🏆
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Meta Frontend Development</h3>
                    <p className="text-gray-600">Coursera</p>
                  </div>
                  <span className="text-2xl font-bold text-gray-400">2025</span>
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center text-3xl">
                    🔒
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Google Cybersecurity Professional</h3>
                    <p className="text-gray-600">Coursera</p>
                  </div>
                  <span className="text-2xl font-bold text-gray-400">2025</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl">📧</div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:mannantariq33@gmail.com" className="font-medium text-blue-600 hover:underline">
                      mannantariq33@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl">📱</div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href="tel:+923374650881" className="font-medium">+92 337 4650881</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl">📍</div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-medium">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/ShadowFighterm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-center font-medium"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/mannan-tariq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chrome Tab Bar */}
      <div className="bg-[#DEE1E6] pt-2 px-2">
        <div className="flex gap-[2px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`relative flex items-center gap-2 px-4 py-2 min-w-[180px] transition-all group ${
                activeTab === tab.id
                  ? 'bg-white'
                  : 'bg-[#C5C8CC] hover:bg-[#D4D7DC]'
              }`}
              style={{
                clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 100%, 0 100%)',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px'
              }}
            >
              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                activeTab === tab.id ? 'bg-blue-500' : 'bg-gray-400'
              }`}>
                <tab.icon className="w-2.5 h-2.5 text-white" />
              </div>
              <span className={`text-sm flex-1 text-left truncate ${
                activeTab === tab.id ? 'text-gray-800' : 'text-gray-600'
              }`}>
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <button className="w-5 h-5 rounded-full hover:bg-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-gray-600 text-xs">×</span>
                </button>
              )}
            </button>
          ))}
          <button className="w-8 h-8 ml-1 rounded-full hover:bg-[#D4D7DC] flex items-center justify-center text-gray-600 text-lg">
            +
          </button>
        </div>
      </div>

      {/* Chrome Navigation Bar */}
      <div className="bg-white px-3 py-2 flex items-center gap-2 border-b border-gray-200">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400">
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600">
            <RotateCw className="w-4 h-4" />
          </button>
        </div>

        {/* Address Bar */}
        <div className="flex-1 flex items-center bg-white border border-gray-300 rounded-full px-4 py-1.5 hover:shadow-md transition-shadow">
          <Lock className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 outline-none text-sm text-gray-700"
          />
          <Star className="w-4 h-4 text-gray-400 ml-2" />
        </div>

        {/* Profile & Menu */}
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
            Y
          </div>
        </div>
      </div>

      {/* Chrome Bookmarks Bar (optional) */}
      <div className="bg-white px-3 py-1 flex items-center gap-3 text-xs border-b border-gray-100">
        <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 text-gray-700">
          <Folder className="w-3 h-3" />
          <span>Portfolio</span>
        </button>
        <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 text-gray-700">
          <Star className="w-3 h-3" />
          <span>Projects</span>
        </button>
        <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 text-gray-700">
          <Mail className="w-3 h-3" />
          <span>Contact</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-8 bg-[#F8F9FA]">
        {renderContent()}
      </div>
    </div>
  );
}