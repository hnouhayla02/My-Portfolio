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
    <div className="min-h-screen bg-gradient-to-b from-[#16404D] to-[#A6CDC6] text-[#FBF5DD]">
      <nav className="fixed w-full z-50 backdrop-blur-md bg-[#16404D]/90 border-b border-[#DDA853]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="text-xl font-semibold tracking-wider text-[#DDA853]"
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
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                      ${location.pathname === item.path
                        ? 'bg-[#DDA853]/20 text-[#DDA853] border border-[#DDA853]/40'
                        : 'text-[#FBF5DD]/80 hover:bg-[#A6CDC6]/20 hover:text-[#DDA853]'
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
                className="text-[#FBF5DD]/80 hover:text-[#DDA853] transition-colors"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#16404D]/95 backdrop-blur-md 
              border-b border-[#DDA853]/30">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300
                      ${location.pathname === item.path
                        ? 'bg-[#DDA853]/20 text-[#DDA853] border border-[#DDA853]/40'
                        : 'text-[#FBF5DD]/80 hover:bg-[#A6CDC6]/20 hover:text-[#DDA853]'
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