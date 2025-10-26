import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Settings, Bell } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Link2,
      title: 'Connect',
      description: 'Connect your Seller Central account securely via Amazon SP-API.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Settings,
      title: 'Configure',
      description: 'Configure what you want monitored - ASINs, keywords, prices, and more.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: Bell,
      title: 'Get Alerts',
      description: 'Receive instant alerts via email, SMS, Slack, or webhook and take action fast.',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our simple 3-step process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-200 via-orange-200 to-green-200 transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 border-2 ${step.borderColor}`}>
                  <Icon className={`w-8 h-8 ${step.color}`} />
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-sm font-semibold text-gray-500 mb-2">
                    Step {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Ready to protect your Amazon business?
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            Start Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;