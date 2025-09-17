import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-primary-100 py-5">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-neutral-800 group-hover:text-primary-600 transition-colors">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus size={20} className="text-accent-600" />
          ) : (
            <Plus size={20} className="text-accent-600" />
          )}
        </span>
      </button>
      <div 
        className={`mt-2 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-neutral-600">{answer}</p>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "How do you typically work with clients?",
    answer: "Our engagement begins with a thorough assessment of your business needs and challenges. We then develop a customized strategy and implementation plan. Depending on the package, we schedule regular strategy sessions (weekly or monthly) and provide ongoing support through various channels."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have extensive experience across multiple sectors including technology, retail, manufacturing, healthcare, and professional services. Our diverse expertise allows us to bring cross-industry insights and best practices to benefit your business."
  },
  {
    question: "How long does it take to see results?",
    answer: "While every business is unique, our clients typically begin seeing measurable improvements within the first 3-6 months of engagement. We establish clear KPIs at the outset and provide regular progress reports to track and measure success."
  },
  {
    question: "Do you provide implementation support?",
    answer: "Yes, we don't just provide recommendations – we work alongside your team to implement changes effectively. Our Business Transformation and Enterprise Advisory packages include hands-on implementation support and change management guidance."
  },
  {
    question: "Can you help with specific business challenges?",
    answer: "Absolutely! Whether you're facing operational inefficiencies, seeking to scale your business, exploring new markets, or managing organizational change, our team has the expertise to help you overcome these challenges and achieve your goals."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer monthly retainer-based packages starting at $2,499/month for our Growth Advisory service. For Business Transformation and Enterprise Advisory services, we create custom pricing based on the scope and complexity of your needs. All packages include regular strategy sessions and ongoing support."
  },
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Common Questions About Our Consulting</h2>
          <p className="text-lg text-neutral-600">
            Learn more about how we work with businesses to drive growth and transformation
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-primary-100">
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4">Don't see your question?</p>
          <a 
            href="#contact" 
            className="text-accent-600 font-medium hover:text-accent-700 transition-colors"
          >
            Contact us for more information →
          </a>
        </div>
      </div>
    </section>
  );
};