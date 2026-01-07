import { Mail, Linkedin, Github, Twitter, MapPin, Phone } from 'lucide-react';

export default function ContactWindow() {
  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="text-gray-600">Let's build something amazing together</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            alert('For demo purposes only. Please contact via email: mannantariq33@gmail.com');
          }}>
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <a href="mailto:mannantariq33@gmail.com" className="font-medium text-blue-600 hover:underline">
                  mannantariq33@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <a href="tel:+923374650881" className="font-medium">+92 337 4650881</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-medium">Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://www.linkedin.com/in/mannan-tariq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/ShadowFighterm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a 
                href="mailto:mannantariq33@gmail.com"
                className="col-span-2 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
            <h4 className="text-lg font-bold mb-2">Currently Available</h4>
            <p className="text-sm">
              I'm currently available for freelance projects and full-time opportunities in web development.
              Let's chat about your next project!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}