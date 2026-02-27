import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const navVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent tracking-wider relative">
                PORTFOLIO
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="hidden md:flex space-x-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="relative text-slate-300 hover:text-white px-5 py-2.5 rounded-xl text-base font-bold tracking-wide transition-all duration-300 group uppercase"
                  custom={index}
                  variants={navItemVariants}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    fontFamily: "'Poppins', 'Inter', sans-serif",
                    letterSpacing: '0.05em'
                  }}
                >
                  <span className="relative z-10 bg-gradient-to-r from-white to-purple-200 bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item.label}
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  />
                  <motion.span
                    className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/50 rounded-xl transition-all duration-300"
                  />
                  <motion.span
                    className="absolute -bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 rounded-full group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300 shadow-lg shadow-purple-500/50"
                  />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div 
                  className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-40"
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '100%' }}
                  transition={{ 
                    type: 'spring',
                    damping: 25,
                    stiffness: 200
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        className="text-3xl font-bold tracking-wider uppercase bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent px-8 py-4 rounded-xl transition-all duration-300 relative group"
                        onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.1 * index + 0.2,
                          type: 'spring',
                          stiffness: 300
                        }}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ 
                          fontFamily: "'Poppins', 'Inter', sans-serif"
                        }}
                      >
                        {item.label}
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Header;