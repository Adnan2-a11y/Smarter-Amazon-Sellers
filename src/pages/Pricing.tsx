import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, X, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individual sellers getting started',
      monthlyPrice: 29,
      annualPrice: 24,
      savings: 17,
      features: {
        asins: '50 ASINs',
        alerts: 'Basic alerts',
        notifications: 'Email notifications',
        monitoring: '24/7 monitoring',
        support: 'Email support',
        api: false,
        whiteLabel: false,
        multiAccount: false,
        prioritySupport: false,
        customIntegrations: false
      },
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Pro',
      description: 'Best for growing businesses and brands',
      monthlyPrice: 79,
      annualPrice: 65,
      savings: 18,
      features: {
        asins: '500 ASINs',
        alerts: 'Advanced alerts',
        notifications: 'Email + SMS + Slack',
        monitoring: '24/7 monitoring',
        support: 'Priority support',
        api: true,
        whiteLabel: false,
        multiAccount: false,
        prioritySupport: true,
        customIntegrations: false
      },
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Agency',
      description: 'For agencies and enterprise clients',
      monthlyPrice: 199,
      annualPrice: 165,
      savings: 17,
      features: {
        asins: 'Unlimited ASINs',
        alerts: 'Enterprise alerts',
        notifications: 'All channels + Webhooks',
        monitoring: '24/7 monitoring',
        support: 'Dedicated support',
        api: true,
        whiteLabel: true,
        multiAccount: true,
        prioritySupport: true,
        customIntegrations: true
      },
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const comparisonFeatures = [
    { name: 'ASINs Monitored', starter: '50', pro: '500', agency: 'Unlimited' },
    { name: 'Hijacker Alerts', starter: true, pro: true, agency: true },
    { name: 'Listing Change Monitor', starter: true, pro: true, agency: true },
    { name: 'Buy Box Monitoring', starter: true, pro: true, agency: true },
    { name: 'Keyword Tracking', starter: false, pro: true, agency: true },
    { name: 'Account Health', starter: false, pro: true, agency: true },
    { name: 'Email Notifications', starter: true, pro: true, agency: true },
    { name: 'SMS Notifications', starter: false, pro: true, agency: true },
    { name: 'Slack Integration', starter: false, pro: true, agency: true },
    { name: 'Webhook Support', starter: false, pro: false, agency: true },
    { name: 'API Access', starter: false, pro: true, agency: true },
    { name: 'White-label Alerts', starter: false, pro: false, agency: true },
    { name: 'Multi-account Management', starter: false, pro: false, agency: true },
    { name: 'Priority Support', starter: false, pro: true, agency: true },
    { name: 'Custom Integrations', starter: false, pro: false, agency: true },
    { name: 'SLA Guarantee', starter: false, pro: false, agency: true }
  ];

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'You get full access to all features for 14 days without providing a credit card. After the trial, you can choose a plan that fits your needs.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'What happens if I exceed my ASIN limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. You can either upgrade your plan or remove some ASINs from monitoring.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, we\'ll refund your payment in full.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees, ever. You only pay for your monthly or annual subscription.'
    },
    {
      question: 'Can I monitor multiple Amazon marketplaces?',
      answer: 'Yes, all plans support monitoring across multiple Amazon marketplaces including US, UK, DE, FR, IT, ES, CA, and more.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simple Pricing —{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Predictable Billing
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Choose the plan that fits your business. Start with a 14-day free trial, no credit card required.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                    isAnnual ? 'bg-orange-500' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isAnnual ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                  Annual
                </span>
                {isAnnual && (
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                    Save up to 20%
                  </span>
                )}
              </div>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-lg ${
                    plan.popular 
                      ? 'border-orange-500 shadow-lg scale-105' 
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-gray-900">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600 ml-1">/month</span>
                    </div>
                    
                    {isAnnual && (
                      <p className="text-sm text-green-600 font-medium">
                        Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{plan.features.asins}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{plan.features.alerts}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{plan.features.notifications}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{plan.features.monitoring}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{plan.features.support}</span>
                    </li>
                    {plan.features.api && (
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">API access</span>
                      </li>
                    )}
                    {plan.features.whiteLabel && (
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">White-label alerts</span>
                      </li>
                    )}
                    {plan.features.multiAccount && (
                      <li className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Multi-account management</span>
                      </li>
                    )}
                  </ul>

                  <button
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      plan.popular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-500'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-500'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compare Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See exactly what's included in each plan.
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Features
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        Starter
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 bg-orange-50">
                        Pro
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        Agency
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {feature.name}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {typeof feature.starter === 'boolean' ? (
                            feature.starter ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-gray-700">{feature.starter}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center bg-orange-50">
                          {typeof feature.pro === 'boolean' ? (
                            feature.pro ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-gray-700">{feature.pro}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {typeof feature.agency === 'boolean' ? (
                            feature.agency ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-gray-700">{feature.agency}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our pricing and plans.
              </p>
            </motion.div>

            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Start Your 14-Day Free Trial
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                No credit card required. Full access to all features. Cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;