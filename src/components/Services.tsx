import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tent, FerrisWheel, School, CheckCircle2, X } from 'lucide-react';

const services = [
  {
    id: 'tabory',
    title: 'Příměstské tábory',
    icon: Tent,
    color: 'bg-boom-yellow',
    textColor: 'text-amber-900',
    items: ['Termíny po celé léto', 'Věkové skupiny 6-12 let', 'Celodenní program a strava', 'Online přihláška'],
    description: 'Nezapomenutelné léto plné her, sportu a nových kamarádů v našich příměstských táborech.',
    hasFlyer: true,
    actionId: 'rezervace'
  },
  {
    title: 'Akce na festivalech',
    icon: FerrisWheel,
    color: 'bg-boom-orange',
    textColor: 'text-orange-900',
    items: ['Dětské koutky & Family days', 'Stage program & Moderování', 'Kreativní workshopy', 'Maskoti & Atrakce'],
    description: 'Kompletní zajištění dětského programu pro festivaly, městské slavnosti i firemní akce.',
    actionId: 'rezervace'
  },
  {
    title: 'Programy pro školy',
    icon: School,
    color: 'bg-boom-blue',
    textColor: 'text-blue-900',
    items: ['Dny dětí na klíč', 'Školní karnevaly', 'Sportovní dny', 'Pohádkové cesty'],
    description: 'Zábavné a vzdělávací programy přímo ve vaší škole či školce. Profesionální přístup zaručen.',
    actionId: 'rezervace'
  }
];

const Services: React.FC = () => {
  const [showFlyer, setShowFlyer] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sluzby" className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-baloo font-bold text-slate-800 mb-4"
          >
            NAŠE <span className="text-boom-blue">SLUŽBY</span>
          </motion.h2>
          <div className="w-24 h-2 bg-boom-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${service.color} rounded-[3rem] p-8 shadow-cartoon border-4 border-white/50 flex flex-col h-full group`}
            >
              <div className="bg-white/30 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <service.icon size={48} className={service.textColor} />
              </div>

              <h3 className={`text-2xl md:text-3xl font-baloo font-bold mb-4 ${service.textColor}`}>
                {service.title}
              </h3>

              <p className={`font-fredoka mb-6 opacity-90 ${service.textColor}`}>
                {service.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {service.items.map((item, i) => (
                  <li key={i} className={`flex items-center gap-2 font-fredoka font-semibold ${service.textColor}`}>
                    <CheckCircle2 size={20} className="flex-shrink-0 opacity-70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => scrollToSection(service.actionId)}
                  className="bg-white text-slate-800 py-3 rounded-2xl font-baloo font-bold shadow-sm hover:shadow-cartoon-hover hover:scale-105 transition-all"
                >
                  {service.hasFlyer ? 'PŘIHLÁSIT SE' : 'POPTAT AKCI'}
                </button>
                {service.hasFlyer && (
                  <button
                    onClick={() => setShowFlyer(true)}
                    className="text-amber-900/70 font-fredoka font-bold text-sm underline underline-offset-4 hover:text-amber-900 transition-colors"
                  >
                    ZOBRAZIT LETÁK
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Flyer Modal */}
      <AnimatePresence>
        {showFlyer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowFlyer(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowFlyer(false)}
                className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              >
                <X size={24} className="text-slate-800" />
              </button>
              <img
                src="/assets/flyer.png"
                alt="Příměstský tábor leták"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
