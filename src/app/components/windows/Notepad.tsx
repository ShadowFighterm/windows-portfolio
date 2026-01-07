export default function Notepad() {
  const bioText = `=====================================
ABOUT ME - Bio.txt
=====================================

Name: Mannan Tariq
Title: Web Developer | Frontend Specialist (MERN)
Location: Lahore, Pakistan
Email: mannantariq33@gmail.com
Phone: +92 337 4650881

SUMMARY:
----------------
Aspiring Web Developer with hands-on experience in the MERN stack and a 
passion for building responsive, scalable, and user-friendly applications. 
Skilled in frontend development with strong knowledge of modern frameworks, 
deployment tools, and UI/UX principles. Seeking opportunities to contribute 
to dynamic development teams while continuously enhancing skills in web 
technologies.

PROFESSIONAL EXPERIENCE:
----------------
Business Development Associate @ Mavericks United (June 2025 – Present)
• Conducted global lead generation and client prospecting
• Built outreach lists using LinkedIn, Apollo, and other platforms
• Supported email campaigns, messaging, and client follow-ups

Game Designer & Developer @ Squad Splash (March 2025 – Present)
• Designed and developed Lua-based custom game with engaging mechanics
• Designed and implemented immersive UI/UX improving player engagement

Freelance Web Developer @ Upwork (June 2024 – Present)
• Developed and deployed 3+ cross-platform web apps using the MERN stack
• Built Halloween Spin Wheel with 24-hour cooldown system using MongoDB

Game Developer @ Mindstorm Studio (June 2024 – Aug 2024)
• Built 2 Unity-based games in C# featuring realistic physics
• Contributed to team projects for Winter and Rookie Game Jams

EDUCATION:
----------------
BS (Hons.) Computer Science
Information Technology University (ITU), Lahore
CGPA: 3.19 | 2022 – Present

FSc (Pre-engineering)
Govt. College University, Lahore
2020 – 2022

CERTIFICATIONS:
----------------
• Meta Frontend Development – Coursera (Jan 2025)
• Google Cybersecurity Professional – Coursera (Feb 2025)

KEY PROJECTS:
----------------
1. Portfolio Website (HTML, CSS, JavaScript)
   - Multilingual personal portfolio with dynamic language switching
   
2. Airbnb Clone (MERN Stack)
   - Full-featured clone with authentication, listings, and bookings
   
3. Halloween Spin Wheel (MERN Stack - Freelance)
   - Interactive prize distribution with 24-hour cooldown timer
   
4. Squad Splash (Lua Game Development)
   - Custom game with immersive UI/UX and engaging mechanics

SKILLS:
----------------
Frontend: HTML, CSS, JavaScript, React, WordPress, Elementor
Backend: Node.js, Express.js, MongoDB, SQL, Postman
Dev Tools: Git, GitHub, Docker
Deployment: GitHub Pages, Vercel, AWS
Game Dev: Unity, C#, Lua

INTERESTS:
----------------
• Web Development
• Frontend Engineering
• Application Security
• Ethical Hacking
• Game Development

CONTACT:
----------------
Email: mannantariq33@gmail.com
LinkedIn: linkedin.com/in/mannan-tariq
GitHub: github.com/ShadowFighterm
Phone: +92 337 4650881

=====================================
Last Modified: ${new Date().toLocaleDateString()}
=====================================`;

  return (
    <div className="h-full bg-white">
      {/* Notepad Menu Bar */}
      <div className="bg-[#ECE9D8] border-b border-gray-400 px-2 py-1 text-sm">
        <span className="px-2 hover:bg-blue-500 hover:text-white cursor-pointer">File</span>
        <span className="px-2 hover:bg-blue-500 hover:text-white cursor-pointer">Edit</span>
        <span className="px-2 hover:bg-blue-500 hover:text-white cursor-pointer">Format</span>
        <span className="px-2 hover:bg-blue-500 hover:text-white cursor-pointer">View</span>
        <span className="px-2 hover:bg-blue-500 hover:text-white cursor-pointer">Help</span>
      </div>

      {/* Notepad Content */}
      <textarea
        readOnly
        value={bioText}
        className="w-full h-full p-4 font-mono text-sm resize-none focus:outline-none"
      />
    </div>
  );
}