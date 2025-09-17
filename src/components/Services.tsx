import React from 'react';
import { Code, Globe, Server, Cloud, LineChart, LayoutDashboard } from 'lucide-react';
import { Button } from './Button';

const services = [
  {
    icon: <LineChart size={24} />,
    title: 'Strategic Planning',
    description: 'Develop comprehensive business strategies aligned with your goals, market opportunities, and competitive advantages.',
  },
  {
    icon: <LayoutDashboard size={24} />,
    title: 'Operations Excellence',
    description: 'Optimize your business processes, improve efficiency, and implement best practices for sustainable growth.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Market Expansion',
    description: 'Identify and capitalize on new market opportunities with data-driven insights and proven entry strategies.',
  },
  {
    icon: <Server size={24} />,
    title: 'Digital Transformation',
    description: 'Guide your organization through digital transformation with strategic technology adoption and change management.',
  },
  {
    icon: <Code size={24} />,
    title: 'Performance Analytics',
    description: 'Leverage data analytics to measure KPIs, track progress, and make informed business decisions.',
  },
  {
    icon: <Cloud size={24} />,
    title: 'Change Management',
    description: 'Successfully navigate organizational change with structured approaches and employee engagement strategies.',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Strategic Consulting Services</h2>
          <p className="text-lg text-neutral-600">
            Comprehensive business solutions to drive growth, optimize operations, and achieve sustainable success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-item relative bg-white p-8 rounded-xl shadow-sm border border-primary-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-100 text-accent-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">{service.title}</h3>
              <p className="text-neutral-600 mb-6">{service.description}</p>
              <Button 
                variant="text" 
                href="#contact"
                className="text-accent-600 hover:text-accent-700 p-0 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded"
              >
                Learn more →
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="primary" 
            size="lg" 
            href="#contact"
            className="bg-primary-600 hover:bg-primary-700"
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};