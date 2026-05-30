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
        <Link to="/" className="flex items-center gap-3 group order-2 md:order-1">
          <motion.img
            src="/assets/boomkids-logo-transparent.png"
            alt="BOOMKIDS.CZ Logo"
            className="h-14 w-14 object-contain drop-shadow-md"
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
          <span className={`text-2xl font-baloo font-extrabold tracking-tight hidden sm:block ${isScrolled ? 'text-boom-red' : 'text-white drop-shadow-md'}`}>
            BOOMKIDS.CZ
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg order-1 md:order-2 ${isScrolled ? 'text-slate-800' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Otevřít menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 order-3 ml-auto">
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