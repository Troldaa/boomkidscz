import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, PartyPopper, Rocket, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ctaButtons = [
    { text: 'Nezávazná poptávka', color: 'bg-boom-blue', icon: PartyPopper, delay: 0.1, id: 'poptavka' },
    { text: 'Rezervovat termín', color: 'bg-boom-yellow', icon: Calendar, delay: 0.2, id: 'rezervace' },
    { text: 'Podívat se na programy', color: 'bg-boom-orange', icon: Rocket, delay: 0.3, id: 'sluzby' },
    { text: 'Příměstské tábory', color: 'bg-boom-red', icon: Star, delay: 0.4, id: 'rezervace' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-boom-blue to-blue-300">
      {/* Background Cartoon Elements */}
      <div className="absolute inset-0 z-0">
        {/* Clouds */}
        <motion.div
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 opacity-60"
        >
          <div className="w-48 h-16 bg-white rounded-full relative">
            <div className="absolute -top-10 left-10 w-24 h-24 bg-white rounded-full"></div>
            <div className="absolute -top-6 right-6 w-20 h-20 bg-white rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          animate={{ x: [0, -70, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 opacity-60"
        >
          <div className="w-64 h-20 bg-white rounded-full relative">
            <div className="absolute -top-12 left-12 w-28 h-28 bg-white rounded-full"></div>
            <div className="absolute -top-8 right-10 w-24 h-24 bg-white rounded-full"></div>
          </div>
        </motion.div>

        {/* Splashes / Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-boom-yellow/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-20 w-96 h-96 bg-boom-red/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: [0, -5, 5, -5, 0],
          }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { type: "spring", stiffness: 100 },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="mb-8 flex justify-center"
        >
          <img
            src="/assets/panda-mascot.png"
            alt="Mascot"
            className="h-48 md:h-80 drop-shadow-2xl object-contain"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-8xl font-baloo font-extrabold text-white mb-6 tracking-tighter leading-tight text-3d"
        >
          NEZAPOMENUTELNÉ <br />
          <span className="text-boom-yellow">DĚTSKÉ AKCE</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl font-fredoka font-medium text-white max-w-3xl mx-auto mb-12 drop-shadow-md"
        >
          Profesionální animátoři, programy pro děti, tábory, festivaly a zážitky, na které děti nikdy nezapomenou.
        </motion.p>

        {/* CTA Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {ctaButtons.map((btn, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(btn.id)}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: btn.delay }}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? 2 : -2,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`${btn.color} text-white p-6 rounded-3xl shadow-cartoon border-4 border-white/30 flex flex-col items-center gap-3 transition-all group`}
            >
              <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/40 transition-colors">
                <btn.icon size={32} />
              </div>
              <span className="font-baloo font-bold text-xl leading-tight">{btn.text}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12 md:h-24 fill-blue-50" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
