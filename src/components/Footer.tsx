import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', path: '/features' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Demo', path: '/demo' },
    ],
    Company: [
      { name: 'About', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '/careers' }
    ],
    Resources: [
      { name: 'Help Center', path: '/help' },
      { name: 'Status', path: '/status' },
      { name: 'Security', path: '/security' }
    ],
    Legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'GDPR', path: '/gdpr' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/asinshield' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/asinshield' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/asinshield' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@amzengine.net' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-xl font-bold">ASIN Shield</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              The engine behind smarter Amazon sellers. Real-time monitoring, alerts, and insights to protect your revenue.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-2">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ASIN Shield — All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <div className="text-xs">
                Built with ❤️ by{' '}
                <a
                  href="https://meku.dev"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Meku.dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;