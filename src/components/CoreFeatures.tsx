import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Target, TrendingUp, Heart } from 'lucide-react';

const CoreFeatures: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Hijacker Alerts',
      description: 'Detect unauthorized sellers instantly and protect your listings from revenue theft.',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      icon: Eye,
      title: 'Listing Change Monitoring',
      description: 'Track every change to your product listings and get notified immediately.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Target,
      title: 'Buy Box Loss Alerts',
      description: 'Never lose the Buy Box without knowing. Get instant alerts when competitors take over.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: TrendingUp,
      title: 'Keyword & Rank Tracking',
      description: 'Monitor your keyword rankings and track performance across all your products.',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Heart,
      title: 'Account Health',
      description: 'Keep your seller account healthy with proactive monitoring and alerts.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Amazon Sellers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to monitor, protect, and optimize your Amazon business in one platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`bg-white rounded-xl p-6 border ${feature.borderColor} hover:shadow-lg transition-all duration-300 cursor-pointer group`}
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;