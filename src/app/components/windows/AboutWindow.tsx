import { User, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function AboutWindow() {
  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-6xl">
          👨‍💻
        </div>
        <h1 className="text-4xl font-bold">Hi, I'm Mannan Tariq</h1>
        <p className="text-xl text-gray-600">Web Developer | Frontend Specialist (MERN)</p>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
          <span>📞 +92 337 4650881</span>
          <span>✉️ mannantariq33@gmail.com</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-bold">Current Role</h3>
          </div>
          <p className="text-gray-700 mb-2"><strong>Mavericks United</strong></p>
          <p className="text-gray-600 text-sm">Business Development Associate (June 2025 – Present)</p>
          <p className="text-gray-700 mt-2">Global lead generation and client prospecting for tech staff augmentation.</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-green-600" />
            <h3 className="text-xl font-bold">Certifications</h3>
          </div>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>✓ Meta Frontend Development</li>
            <li>✓ Google Cybersecurity Professional</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-purple-600" />
            <h3 className="text-xl font-bold">Education</h3>
          </div>
          <p className="text-gray-700 mb-1"><strong>Information Technology University (ITU)</strong></p>
          <p className="text-gray-600 text-sm">BS (Hons.) Computer Science</p>
          <p className="text-gray-600 text-sm">CGPA: 3.19 | 2022 – Present</p>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-8 h-8 text-orange-600" />
            <h3 className="text-xl font-bold">Interests</h3>
          </div>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>• Web Development</li>
            <li>• Frontend Engineering</li>
            <li>• Application Security</li>
            <li>• Ethical Hacking</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Summary</h3>
        <p className="text-gray-700 leading-relaxed">
          Aspiring Web Developer with hands-on experience in the MERN stack and a passion for building responsive, 
          scalable, and user-friendly applications. Skilled in frontend development with strong knowledge of modern 
          frameworks, deployment tools, and UI/UX principles. Currently working on full-stack projects as a freelancer 
          while pursuing my degree at ITU Lahore. I've developed multiple projects including an Airbnb clone, 
          Halloween Spin Wheel system, and custom game experiences. Seeking opportunities to contribute to dynamic 
          development teams while continuously enhancing skills in web technologies.
        </p>
      </div>
    </div>
  );
}