import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingTeaser: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual sellers',
      features: [
        'Up to 50 ASINs',
        'Basic alerts',
        'Email notifications',
        '24/7 monitoring'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$79',
      period: '/month',
      description: 'Best for growing businesses',
      features: [
        'Up to 500 ASINs',
        'Advanced alerts',
        'SMS + Email + Slack',
        'API access',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Agency',
      price: '$199',
      period: '/month',
      description: 'For agencies and enterprises',
      features: [
        'Unlimited ASINs',
        'White-label alerts',
        'Multi-account management',
        'Custom integrations',
        'Dedicated support'
      ],
      popular: false
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business. Start with a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? 'border-orange-500 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-orange-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/signup"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  plan.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-500'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-500'
                }`}
              >
                Start Free Trial
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/pricing"
            className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            View detailed pricing and features →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTeaser;