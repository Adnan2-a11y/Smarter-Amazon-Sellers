import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy: React.FC = () => {
  const stats = [
    { label: 'Avg time to detect hijacker', value: '3 min' },
    { label: 'Uptime', value: '99.99%' },
    { label: 'Daily monitored ASINs', value: '150k' }
  ];

  const logos = [
    'Amazon Brand 1',
    'Amazon Brand 2', 
    'Amazon Brand 3',
    'Amazon Brand 4',
    'Amazon Brand 5'
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-gray-600 mb-8">
            Trusted by 2,400+ sellers worldwide
          </p>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 bg-orange-500 rounded-lg"
              >
                <span className="text-sm font-medium text-white">{logo}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;