import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './Button';

const plans = [
  {
    name: 'Growth Advisory',
    description: 'Perfect for small businesses seeking strategic guidance',
    price: '$2,499/mo',
    features: [
      'Monthly strategy sessions',
      'Business health assessment',
      'Growth roadmap development',
      'KPI tracking & reporting',
      'Market opportunity analysis',
      'Quarterly progress review',
      'Email & phone support',
    ],
    notIncluded: [
      'On-site consulting',
      'Team training',
      'Implementation support',
    ],
    accent: false,
  },
  {
    name: 'Business Transformation',
    description: 'Comprehensive solution for growing businesses',
    price: '$5,999/mo',
    features: [
      'Weekly strategy sessions',
      'Operational excellence program',
      'Change management support',
      'Process optimization',
      'Team training workshops',
      'Digital transformation planning',
      'Priority consulting support',
    ],
    notIncluded: [
      'International expansion',
      'M&A advisory',
    ],
    accent: true,
  },
  {
    name: 'Enterprise Advisory',
    description: 'Full-scale consulting for large organizations',
    price: 'Custom',
    features: [
      'Dedicated consulting team',
      'On-site strategic support',
      'International expansion strategy',
      'M&A advisory services',
      'Board-level presentations',
      'Crisis management support',
      'Custom research & analysis',
      '24/7 executive support',
    ],
    notIncluded: [],
    accent: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Strategic consulting solutions for every stage</h2>
          <p className="text-lg text-neutral-600">
            Choose from our carefully crafted consulting packages designed to drive your business forward.
            From strategic guidance to comprehensive transformation, we offer solutions that scale with your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl bg-white ${
                plan.accent 
                  ? 'border-2 border-primary-500 relative transform translate-y-[-8px]' 
                  : 'border border-primary-100'
              }`}
            >
              {plan.accent && (
                <div className="bg-accent-600 text-white text-center py-2 font-medium text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-neutral-800 mb-2">{plan.name}</h3>
                <p className="text-neutral-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary-600">{plan.price}</span>
                  {!plan.price.includes('Custom') && <span className="text-neutral-600"> / project</span>}
                </div>
                
                <Button 
                  variant={plan.accent ? 'primary' : 'outline'}
                  href="#contact"
                  className={`w-full mb-8 ${
                    plan.accent 
                      ? 'bg-primary-600 hover:bg-primary-700' 
                      : 'border-primary-600 text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  Get Started
                </Button>
                
                <div className="space-y-4">
                  <p className="font-medium text-neutral-800">What's included:</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check size={18} className="text-success-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-medium text-neutral-800 mt-6">Not included:</p>
                      {plan.notIncluded.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <X size={18} className="text-error-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-neutral-500">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-neutral-600 mb-4">Looking for specialized consulting services? Let's discuss your unique needs.</p>
          <Button 
            variant="secondary" 
            size="lg" 
            href="#contact"
            className="bg-accent-600 hover:bg-accent-700"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};