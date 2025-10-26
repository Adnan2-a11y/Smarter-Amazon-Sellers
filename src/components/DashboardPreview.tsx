import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { AlertTriangle, TrendingUp, Shield, Eye } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  const chartData = [
    { name: 'Jan', revenue: 4000, alerts: 2 },
    { name: 'Feb', revenue: 3000, alerts: 1 },
    { name: 'Mar', revenue: 5000, alerts: 4 },
    { name: 'Apr', revenue: 4500, alerts: 1 },
    { name: 'May', revenue: 6000, alerts: 3 },
    { name: 'Jun', revenue: 5500, alerts: 2 }
  ];

  const alerts = [
    {
      type: 'Hijacker Detected',
      asin: 'B07XXXXX',
      time: '2 min ago',
      severity: 'high',
      icon: Shield,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      type: 'Buy Box Lost',
      asin: 'B08YYYYY',
      time: '5 min ago',
      severity: 'medium',
      icon: TrendingUp,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      type: 'Listing Changed',
      asin: 'B09ZZZZZ',
      time: '12 min ago',
      severity: 'low',
      icon: Eye,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
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
            Your Command Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a complete view of your Amazon business with our intuitive dashboard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 relative overflow-hidden"
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Dashboard Overview</h3>
              <p className="text-gray-600">Real-time monitoring and alerts</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 font-medium">Live</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Section */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Revenue Protection</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <AlertTriangle className="w-4 h-4" />
                    <span>6 alerts this month</span>
                  </div>
                </div>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#f97316" 
                        strokeWidth={3}
                        dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#f97316', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Alerts Section */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h4>
              <div className="space-y-4">
                {alerts.map((alert, index) => {
                  const Icon = alert.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className={`${alert.bgColor} border ${alert.borderColor} rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer`}
                    >
                      <div className="flex items-start space-x-3">
                        <Icon className={`w-5 h-5 ${alert.color} mt-0.5`} />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900">
                            {alert.type}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            ASIN: {alert.asin}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {alert.time}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Interactive Hotspots */}
          <div className="absolute top-20 right-20 group">
            <div className="w-4 h-4 bg-orange-500 rounded-full animate-ping"></div>
            <div className="absolute -top-8 -left-16 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Live monitoring
            </div>
          </div>

          <div className="absolute bottom-32 left-20 group">
            <div className="w-4 h-4 bg-teal-500 rounded-full animate-pulse"></div>
            <div className="absolute -top-8 -left-12 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Alert system
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;