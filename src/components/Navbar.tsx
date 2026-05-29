import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O nás', href: '/#o-nas' },
    { name: 'Služby', href: '/#sluzby' },
    { name: 'Animátoři', href: '/animatori' },
    { name: 'Recenze', href: '/#recenze' },
    { name: 'Kontakt', href: '/#kontakt' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg order-1 ${isScrolled ? 'text-slate-800' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 order-2 md:order-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-fredoka font-semibold transition-colors hover:text-boom-orange ${
                isScrolled ? 'text-slate-700' : 'text-white drop-shadow-md'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/#kontakt"
              className="bg-boom-red text-white px-6 py-2 rounded-full font-baloo font-bold shadow-cartoon hover:shadow-cartoon-hover transition-all inline-block"
            >
              KONTAKT
            </Link>
          </motion.div>
        </div>

        {/* Logo - Moved to Right on Desktop */}
        <Link to="/" className="flex items-center gap-2 group order-1 md:order-2">
          <span className={`text-2xl font-baloo font-bold tracking-tight hidden lg:block ${isScrolled ? 'text-boom-blue' : 'text-white drop-shadow-md'}`}>
            BOOM KIDS CZ
          </span>
          <motion.img
            src="/assets/panda-mascot.png"
            alt="Boom Kids CZ Logo"
            className="h-12 w-12 rounded-full object-contain bg-white border-2 border-white drop-shadow-md filter saturate-[0.8] brightness-[1.05] hue-rotate-[10deg]"
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
        </Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-4 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-slate-800 font-fredoka font-semibold text-lg border-b border-slate-100 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#poptavka"
              className="bg-boom-blue text-white py-3 rounded-xl font-baloo font-bold text-center"
              onClick={() => setIsOpen(false)}
            >
              POPTÁVKA
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
