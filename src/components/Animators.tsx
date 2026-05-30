import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Dumbbell, Heart, Music, PartyPopper, ShieldCheck, Star, Target, Trophy } from 'lucide-react';

const animators = [
  {
    name: 'Jan Jakubecz',
    age: 18,
    role: 'Hlavní animátor',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800',
    description: 'Hlavní animátor BOOMKIDS.CZ. 1,5 roku trenér juda, zkušenosti s vedením příměstských i klasických táborů, vedení sportovních aktivit a práce s dětmi. Aktivní sportovec – thaibox.',
    icons: [Target, Trophy, PartyPopper, Heart],
    badges: ['Judo', 'Thaibox', 'Sport', 'Zábava'],
    color: 'bg-boom-blue'
  },
  {
    name: 'Ina',
    age: 17,
    role: 'Animátorka',
    image: '/assets/ina.jpg',
    description: 'Ina má zkušenosti s hlídáním dětí ve věku 2–4 let a s tanečními aktivitami pro děti ve věku 4–6 let. Do programu přináší energii, pohyb a citlivý přístup k nejmenším dětem.',
    icons: [Baby, Music, Heart, Star],
    badges: ['Hlídání dětí', 'Tanec', 'Nejmenší děti', 'Energie'],
    color: 'bg-boom-yellow'
  },
  {
    name: 'Tomáš',
    age: 18,
    role: 'Animátor',
    image: '/assets/tomas.jpg',
    description: 'Tomáš se podílel na organizaci tréninků na kempu míčových sportů, trénoval děti v házené, pomáhal jako rozhodčí a se správou skóre. Zkušenosti s dětmi má také z prostředí ordinace.',
    icons: [Dumbbell, Trophy, ShieldCheck, PartyPopper],
    badges: ['Házená', 'Sportovní kemp', 'Rozhodčí', 'Práce s dětmi'],
    color: 'bg-boom-orange'
  }
];

interface AnimatorsProps {
  isFullPage?: boolean;
}

const Animators: React.FC<AnimatorsProps> = ({ isFullPage = false }) => {
  return (
    <section id="animatori" className={`${isFullPage ? 'pt-32 pb-24' : 'py-24'} bg-blue-50 ${isFullPage ? 'min-h-screen' : ''}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {isFullPage ? (
            <h1 className="text-5xl md:text-7xl font-baloo font-bold text-slate-800 mb-6 drop-shadow-sm">
              NAŠI <span className="text-boom-orange">ANIMÁTOŘI</span>
            </h1>
          ) : (
            <h2 className="text-4xl md:text-6xl font-baloo font-bold text-slate-800 mb-6 drop-shadow-sm">
              NAŠI <span className="text-boom-orange">ANIMÁTOŘI</span>
            </h2>
          )}
          <p className="font-fredoka text-xl text-slate-600 max-w-2xl mx-auto">
            Seznamte se s naším týmem, který se stará o to, aby každá akce byla plná energie a radosti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {animators.map((animator, index) => (
            <motion.div
              key={animator.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col border-4 border-white group"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={animator.image}
                  alt={animator.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className={`absolute top-6 left-6 ${animator.color} text-white px-6 py-2 rounded-full font-baloo font-bold shadow-lg`}>
                  {animator.age} let
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className="text-boom-red font-baloo font-bold uppercase tracking-wider text-sm">{animator.role}</span>
                  <h2 className="text-4xl font-baloo font-bold text-slate-800">{animator.name}</h2>
                </div>

                <p className="font-fredoka text-slate-600 leading-relaxed mb-8 flex-grow">
                  {animator.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {animator.badges.map((badge, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 px-4 py-1 rounded-full font-fredoka font-semibold text-sm italic">
                      #{badge}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {animator.icons.map((Icon, i) => (
                    <div
                      key={i}
                      className={`${animator.color} text-white p-3 rounded-2xl shadow-cartoon-hover hover:scale-110 transition-transform cursor-pointer`}
                    >
                      <Icon size={24} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Animators;