import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Package, TrendingUp } from 'lucide-react';

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: Building2,
      title: 'Private Label Brands',
      description: 'Protect your brand from hijackers and unauthorized sellers while monitoring listing changes.',
      features: ['Brand protection', 'Hijacker detection', 'Listing monitoring'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Users,
      title: 'Agencies',
      description: 'Manage multiple client accounts with white-label alerts and comprehensive reporting.',
      features: ['Multi-account management', 'White-label alerts', 'Client reporting'],
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Package,
      title: 'Wholesale Sellers',
      description: 'Monitor Buy Box performance and track competitor pricing across your product catalog.',
      features: ['Buy Box monitoring', 'Price tracking', 'Competitor analysis'],
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: TrendingUp,
      title: 'Retail Arbitrage',
      description: 'Track keyword rankings and monitor account health to maximize your selling potential.',
      features: ['Keyword tracking', 'Account health', 'Performance insights'],
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
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
            Built for Every Type of Amazon Seller
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a brand owner, agency, or individual seller, ASIN Shield adapts to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white border ${useCase.borderColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer`}
              >
                <div className={`w-12 h-12 ${useCase.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-6 h-6 ${useCase.color}`} />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {useCase.description}
                </p>

                <ul className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 ${useCase.color.replace('text-', 'bg-')} rounded-full mr-2`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;