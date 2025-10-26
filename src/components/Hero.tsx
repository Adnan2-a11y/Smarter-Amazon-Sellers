import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Shield, TrendingUp, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [counters, setCounters] = useState({
    listings: 0,
    hijackers: 0,
    sellers: 0
  });

  useEffect(() => {
    const targetValues = {
      listings: 12347,
      hijackers: 1234,
      sellers: 2400
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        listings: Math.floor(targetValues.listings * progress),
        hijackers: Math.floor(targetValues.hijackers * progress),
        sellers: Math.floor(targetValues.sellers * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              ASIN Shield —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                The Engine
              </span>{' '}
              Behind Smarter Amazon Sellers
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Real-time hijacker detection, listing change alerts, Buy Box monitoring and sales insights — 
              protect revenue and scale with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/signup"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-orange-500">
                  {counters.listings.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Listings Monitored</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-orange-500">
                  {counters.hijackers.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Hijackers Blocked</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-orange-500">
                  {counters.sellers.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600">Trusted Sellers</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Dashboard Overview</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Live</span>
                </div>
              </div>

              {/* Alert Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3">
                    <Shield className="w-8 h-8 text-red-500" />
                    <div>
                      <div className="text-sm font-medium text-red-900">Hijacker Alert</div>
                      <div className="text-xs text-red-600">3 min ago</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-orange-50 border border-orange-200 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-8 h-8 text-orange-500" />
                    <div>
                      <div className="text-sm font-medium text-orange-900">Buy Box Lost</div>
                      <div className="text-xs text-orange-600">5 min ago</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Mini Chart */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">Revenue Protection</span>
                  <Bell className="w-4 h-4 text-gray-500" />
                </div>
                <div className="h-20 bg-gradient-to-r from-orange-500 to-teal-500 rounded opacity-80"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg"
              >
                <Bell className="w-5 h-5" />
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-teal-500/20 rounded-2xl blur-3xl -z-10 transform scale-110"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;