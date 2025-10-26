import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Play, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Demo: React.FC = () => {
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
                See AMZEngine in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Action
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch our product walkthrough or request a personalized demo to see how AMZEngine can protect your Amazon business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Product Walkthrough
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get a complete overview of AMZEngine's features in just 5 minutes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop"
                  alt="AMZEngine Dashboard Demo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-6 transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                    <Play className="w-12 h-12 ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Complete Overview
                </h3>
                <p className="text-gray-600">
                  See all features and how they work together to protect your business.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Play className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Real Examples
                </h3>
                <p className="text-gray-600">
                  Watch real hijacker alerts and see how quickly you'll be notified.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quick Setup
                </h3>
                <p className="text-gray-600">
                  Learn how to get started and protect your listings in minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Request Demo Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Request a Live Demo
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Get a personalized walkthrough tailored to your specific needs. Perfect for agencies and enterprise clients.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">30-minute personalized demo</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Custom use case examples</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Q&A with our experts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Custom pricing discussion</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="asins" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of ASINs
                    </label>
                    <select
                      id="asins"
                      name="asins"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="1-50">1-50 ASINs</option>
                      <option value="51-500">51-500 ASINs</option>
                      <option value="501-1000">501-1000 ASINs</option>
                      <option value="1000+">1000+ ASINs</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="What specific challenges are you facing with your Amazon business?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Request Demo
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Teaser */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Try Our Interactive Demo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Explore AMZEngine's dashboard with sample data. No signup required.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Launch Interactive Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl p-8 text-center"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Interactive Demo Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-red-500" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Live Alerts</h4>
                    <p className="text-sm text-gray-600">See how hijacker alerts appear in real-time</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-blue-500" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Dashboard</h4>
                    <p className="text-sm text-gray-600">Navigate through all dashboard features</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Settings</h4>
                    <p className="text-sm text-gray-600">Configure alerts and notification preferences</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                Start protecting your Amazon business today with our 14-day free trial.
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

export default Demo;