import React from 'react';
import { Star } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

const testimonials = [
  {
    content: "Their strategic guidance was instrumental in our company's turnaround. Within six months, we saw a 45% increase in operational efficiency and significant cost savings.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "RetailPro Brands",
    companyUrl: "https://retailprobrands.com",
    linkedinUrl: "https://linkedin.com/in/sarah-johnson",
    rating: 5,
  },
  {
    content: "The transformation program exceeded our expectations. Their team helped us navigate complex organizational changes while maintaining team morale and improving productivity by 60%.",
    author: "Michael Chen",
    role: "COO",
    company: "Global Dynamics",
    companyUrl: "https://globaldynamics.com",
    linkedinUrl: "https://linkedin.com/in/michael-chen",
    rating: 5,
  },
  {
    content: "As a rapidly growing company, we needed expert guidance to scale effectively. Their consulting team provided invaluable insights that helped us expand into three new markets successfully.",
    author: "Emma Rodriguez",
    role: "Managing Director",
    company: "InnovateX Solutions",
    companyUrl: "https://innovatex.com",
    linkedinUrl: "https://linkedin.com/in/emma-rodriguez",
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-primary-100">
            See how our strategic consulting has helped transform businesses and drive remarkable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-item relative bg-primary-800/50 p-8 rounded-xl border border-primary-700 transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:bg-primary-800/70 group"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-primary-400 fill-primary-400" />
                ))}
              </div>
              <p className="text-primary-50 mb-6">"{testimonial.content}"</p>
              <div>
                <div className="flex items-center justify-start gap-3">
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <a 
                    href={testimonial.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-200 hover:text-white transition-colors"
                    aria-label={`Connect with ${testimonial.author} on LinkedIn`}
                  >
                    <LinkedInIcon size={20} />
                  </a>
                </div>
                <p className="text-primary-300 text-sm mt-1">
                  {testimonial.role} at <a href={testimonial.companyUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{testimonial.company}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="testimonial-button relative inline-flex items-center px-6 py-3 rounded-full bg-primary-600 border border-primary-500 transition-all duration-300 hover:transform hover:translate-y-[-2px] hover:bg-primary-500 group">
            <span className="text-white">Ready to transform your business?</span>
            <a href="#contact" className="ml-4 font-medium text-primary-100 hover:text-white transition-colors">
              Schedule a consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};