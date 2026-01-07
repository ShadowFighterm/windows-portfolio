import { useState } from 'react';

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([
    'Microsoft Windows XP [Version 5.1.2600]',
    '(C) Copyright 1985-2001 Microsoft Corp.',
    '',
    'C:\\Users\\Developer>',
  ]);
  const [input, setInput] = useState('');

  const commands: Record<string, string> = {
    help: `Available commands:
- help: Show this help message
- projects: List all projects
- skills: Show technical skills
- contact: Display contact information
- about: Show information about me
- clear: Clear the terminal
- github: Show GitHub profile`,
    
    projects: `My Projects:
1. E-commerce Platform - Full-stack online store
2. Portfolio Website - This XP-themed portfolio
3. Task Manager - Project management tool
4. Chat Application - Real-time messaging app
5. Weather Dashboard - Weather forecasting app`,
    
    skills: `Technical Skills:
Frontend: React, TypeScript, TailwindCSS, Next.js
Backend: Node.js, Express, Python, FastAPI
Database: MongoDB, PostgreSQL, Redis
Cloud: AWS, Docker, Kubernetes
Tools: Git, VS Code, Figma, Postman`,
    
    contact: `Contact Information:
Email: your@email.com
LinkedIn: linkedin.com/in/yourname
GitHub: github.com/yourname
Phone: +1 (555) 123-4567`,
    
    about: `Full Stack Developer with 5+ years of experience building web applications.
Passionate about clean code, beautiful UIs, and solving complex problems.
Currently working at Quantra Links.`,
    
    github: 'Opening GitHub profile: github.com/yourname',
    
    clear: '',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.trim().toLowerCase();
    
    if (command === 'clear') {
      setHistory(['C:\\Users\\Developer>']);
    } else {
      const output = commands[command] || `'${input}' is not recognized as an internal or external command.`;
      setHistory([...history, `C:\\Users\\Developer> ${input}`, output, '']);
    }
    
    setInput('');
  };

  return (
    <div className="h-full bg-black text-green-400 font-mono text-sm p-4 overflow-auto">
      <div className="space-y-1">
        {history.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span>C:\Users\Developer&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-green-400"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
