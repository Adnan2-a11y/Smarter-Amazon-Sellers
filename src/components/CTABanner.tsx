import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';

const CTABanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 rounded-full p-4">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Protect Your Listings Today
          </h2>
          
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join thousands of Amazon sellers who trust ASIN Shield to protect their revenue. 
            Start your free trial and see the difference in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/signup"
              className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500 shadow-lg flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
            >
              Watch Demo
            </Link>
          </div>

          <div className="mt-8 text-orange-100 text-sm">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Setup in 5 minutes</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default CTABanner;