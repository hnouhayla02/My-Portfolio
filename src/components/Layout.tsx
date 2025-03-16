import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code, Mail } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: Code },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060930] to-[#333456] text-[#F4ABC4]">
      <nav className="fixed w-full z-50 backdrop-blur-md bg-[#060930]/90 border-b border-[#595B83]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="text-xl font-semibold tracking-wider"
            >
              Portfolio
            </Link>
            
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 transition-all duration-300
                      ${location.pathname === item.path
                        ? 'bg-[#333456]/50 text-[#F4ABC4]'
                        : 'text-[#595B83] hover:bg-[#333456]/30 hover:text-[#F4ABC4]'
                      }`}
                  >
                    <Icon size={16} className="opacity-75" />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#595B83] hover:text-[#F4ABC4] transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#060930]/95 backdrop-blur-md 
              border-b border-[#595B83]/50">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-3 transition-all duration-300
                      ${location.pathname === item.path
                        ? 'bg-[#333456]/50 text-[#F4ABC4]'
                        : 'text-[#595B83] hover:bg-[#333456]/30 hover:text-[#F4ABC4]'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={16} className="opacity-75" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </nav>
      <main className="pt-16">{children}</main>
    </div>
  );
}