import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { url: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&q=80&w=800', title: 'Dětský smích' },
  { url: 'https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?auto=format&fit=crop&q=80&w=800', title: 'Nafukovací hrad' },
  { url: 'https://images.unsplash.com/photo-1566410221056-45373510ce59?auto=format&fit=crop&q=80&w=800', title: 'Malování na obličej' },
  { url: 'https://images.unsplash.com/photo-1537655780520-1e392ead81f2?auto=format&fit=crop&q=80&w=800', title: 'Sportovní soutěže' },
  { url: 'https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?auto=format&fit=crop&q=80&w=800', title: 'Týmové hry' },
  { url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800', title: 'Kreativní dílna' },
];

const Gallery: React.FC = () => {
  return (
    <section id="galerie" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-baloo font-bold text-slate-800 mb-4"
          >
            NAŠE <span className="text-boom-red">GALERIE</span>
          </motion.h2>
          <div className="w-24 h-2 bg-boom-blue mx-auto rounded-full mb-8"></div>
          <p className="font-fredoka text-xl text-slate-600 max-w-2xl mx-auto">
            Podívejte se, jak to vypadá na našich akcích. Radost v očích dětí je pro nás nejlepší odměnou.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square overflow-hidden rounded-[2rem] shadow-lg group cursor-pointer border-4 border-transparent hover:border-boom-blue transition-all"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-boom-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white font-baloo font-bold text-2xl">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
