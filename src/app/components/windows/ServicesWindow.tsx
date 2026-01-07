import { Code, Paintbrush, Cloud, Smartphone } from 'lucide-react';

export default function ServicesWindow() {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web application development with modern technologies and best practices.',
      features: ['Custom Web Apps', 'API Development', 'Database Design', 'Performance Optimization'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Paintbrush,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces that provide exceptional user experiences.',
      features: ['Responsive Design', 'Prototyping', 'User Research', 'Design Systems'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure setup and management using AWS and other platforms.',
      features: ['AWS Setup', 'DevOps', 'CI/CD Pipelines', 'Monitoring'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native and modern frameworks.',
      features: ['React Native', 'iOS & Android', 'Push Notifications', 'App Store Deployment'],
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Services I Offer</h1>
        <p className="text-gray-600">Professional development services tailored to your needs</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className={`bg-gradient-to-br ${service.color} p-6 text-white`}>
              <service.icon className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold">{service.title}</h3>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium mt-4">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
        <p className="mb-6">Let's discuss how I can help bring your ideas to life</p>
        <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-bold">
          Get In Touch
        </button>
      </div>
    </div>
  );
}
