import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Eye, Target, TrendingUp, Heart, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      id: 'hijacker-alerts',
      icon: Shield,
      title: 'Hijacker Alerts',
      subtitle: 'Protect your brand from unauthorized sellers',
      description: 'Detect unauthorized sellers instantly and get notified via email, SMS, Slack, or webhook. Take action before your sales drop and protect your brand reputation.',
      benefits: [
        'Real-time hijacker detection within 3 minutes',
        'Automated seller verification checks',
        'Instant multi-channel notifications',
        'Historical hijacker tracking and patterns',
        'Integration with Amazon Brand Registry'
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      id: 'listing-monitoring',
      icon: Eye,
      title: 'Listing Change Monitor',
      subtitle: 'Track every change to your product listings',
      description: 'Monitor title, description, images, pricing, and other critical listing elements. Get alerted immediately when unauthorized changes occur.',
      benefits: [
        'Monitor all listing elements (title, images, description)',
        'Price change detection and alerts',
        'Bullet point and feature modifications',
        'Image replacement notifications',
        'Category and keyword changes tracking'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'buybox-monitoring',
      icon: Target,
      title: 'Buy Box Monitoring',
      subtitle: 'Never lose the Buy Box without knowing',
      description: 'Get instant alerts when competitors take over your Buy Box. Monitor pricing strategies and win rates to optimize your competitive position.',
      benefits: [
        'Real-time Buy Box ownership tracking',
        'Competitor pricing analysis',
        'Win rate statistics and trends',
        'Price optimization recommendations',
        'Buy Box eligibility monitoring'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      id: 'keyword-tracking',
      icon: TrendingUp,
      title: 'Keyword & Rank Tracking',
      subtitle: 'Monitor your search performance',
      description: 'Track keyword rankings across all your products and get insights into search performance trends and opportunities.',
      benefits: [
        'Track unlimited keywords per ASIN',
        'Ranking history and trend analysis',
        'Competitor keyword monitoring',
        'Search volume and difficulty metrics',
        'Keyword opportunity identification'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'account-health',
      icon: Heart,
      title: 'Account Health',
      subtitle: 'Keep your seller account healthy',
      description: 'Proactive monitoring of your account health metrics, policy violations, and performance indicators to prevent suspensions.',
      benefits: [
        'Account health score monitoring',
        'Policy violation alerts',
        'Performance metric tracking',
        'Suspension risk assessment',
        'Compliance recommendations'
      ],
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
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
                Powerful Features for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Amazon Success
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Comprehensive monitoring and alerting tools designed to protect your revenue and optimize your Amazon business.
              </p>
              
              {/* Quick Navigation */}
              <div className="flex flex-wrap justify-center gap-4">
                {features.map((feature) => (
                  <a
                    key={feature.id}
                    href={`#${feature.id}`}
                    className="bg-white border border-gray-200 hover:border-orange-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    {feature.title}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Sections */}
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isEven = index % 2 === 0;
          
          return (
            <section
              key={feature.id}
              id={feature.id}
              className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}>
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={isEven ? '' : 'lg:col-start-2'}
                  >
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-6">
                      {feature.subtitle}
                    </p>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <div className={`w-2 h-2 ${feature.color.replace('text-', 'bg-')} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                        Start Free Trial
                      </button>
                      <button className="border border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                        View Demo
                      </button>
                    </div>
                  </motion.div>
                  
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}
                  >
                    <div className="relative">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                      
                      {/* Floating Alert */}
                      <div className={`absolute top-4 right-4 ${feature.bgColor} border ${feature.borderColor} rounded-lg p-3 shadow-lg`}>
                        <div className="flex items-center space-x-2">
                          <Bell className={`w-4 h-4 ${feature.color}`} />
                          <span className="text-sm font-medium text-gray-900">Live Alert</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Protect Your Amazon Business?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                Start monitoring your listings today with our 14-day free trial.
              </p>
              <button className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500">
                Start Free Trial
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;