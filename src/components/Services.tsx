import React from 'react';
import { motion } from 'framer-motion';
import { Tent, FerrisWheel, School, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Příměstské tábory',
    icon: Tent,
    color: 'bg-boom-yellow',
    textColor: 'text-amber-900',
    items: ['Termíny po celé léto', 'Věkové skupiny 4-12 let', 'Celodenní program a strava', 'Online přihláška'],
    description: 'Nezapomenutelné léto plné her, sportu a nových kamarádů v našich příměstských táborech.'
  },
  {
    title: 'Akce na festivalech',
    icon: FerrisWheel,
    color: 'bg-boom-orange',
    textColor: 'text-orange-900',
    items: ['Dětské koutky & Family days', 'Stage program & Moderování', 'Kreativní workshopy', 'Maskoti & Atrakce'],
    description: 'Kompletní zajištění dětského programu pro festivaly, městské slavnosti i firemní akce.'
  },
  {
    title: 'Programy pro školy',
    icon: School,
    color: 'bg-boom-blue',
    textColor: 'text-blue-900',
    items: ['Dny dětí na klíč', 'Školní karnevaly', 'Sportovní dny', 'Pohádkové cesty'],
    description: 'Zábavné a vzdělávací programy přímo ve vaší škole či školce. Profesionální přístup zaručen.'
  }
];

const Services: React.FC = () => {
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

              <button className="bg-white text-slate-800 py-3 rounded-2xl font-baloo font-bold shadow-sm hover:shadow-cartoon-hover hover:scale-105 transition-all">
                VÍCE INFORMACÍ
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
