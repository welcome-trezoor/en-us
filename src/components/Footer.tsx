import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: '#' },
    { icon: <Twitter className="w-6 h-6" />, href: '#' },
    { icon: <Facebook className="w-6 h-6" />, href: '#' },
    { icon: <Youtube className="w-6 h-6" />, href: '#' }
  ];

  return (
    <footer className="bg-black/90 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Trezor Suite
            </h3>
            <p className="text-gray-400">
              Secure your digital assets with the most trusted hardware wallet.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trezor One</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trezor Model T</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Trezor Suite. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;