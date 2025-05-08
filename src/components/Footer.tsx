import React from 'react';
import { Shield, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-blue-500 mr-2" />
            <span className="text-lg font-semibold">DeepGuard</span>
            <span className="ml-2 text-sm opacity-75">v1.0</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-400">
          <p>© 2025 DeepGuard AI Security. All rights reserved.</p>
          <p className="mt-1">For educational and research purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;