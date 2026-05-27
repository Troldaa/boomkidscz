import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Jana Nováková",
    text: "Děti byly naprosto nadšené, nejlepší program na festivalu! Animátoři jsou energičtí a dokážou zaujmout i ty nejmenší.",
    stars: 5,
    role: "Maminka dvou dětí"
  },
  {
    name: "Petr Svoboda",
    text: "Skvělý přístup animátorů a perfektní organizace. Vše proběhlo bez problémů, doporučuji všem rodičům.",
    stars: 5,
    role: "Tatínek"
  },
  {
    name: "Lucie Králová",
    text: "Syn nechtěl domů. Určitě objednáme znovu na další rodinnou oslavu. Děkujeme celému týmu Boom Kids!",
    stars: 5,
    role: "Maminka"
  },
  {
    name: "Marek Kučera",
    text: "Nejlepší příměstský tábor v okolí. Děti se každý den vracely plné zážitků a nových dovedností.",
    stars: 5,
    role: "Rodič"
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="recenze" className="py-24 bg-gradient-to-br from-blue-400 to-boom-blue relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-boom-yellow rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 text-white">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-baloo font-bold mb-4 drop-shadow-lg"
          >
            ŘEKLI O <span className="text-boom-yellow">NÁS</span>
          </motion.h2>
          <p className="font-fredoka text-xl opacity-90 max-w-2xl mx-auto">
            Spokojenost rodičů a úsměv dětí je pro nás to nejdůležitější.
          </p>
        </div>

        {/* Carousel / Slider - Using Framer Motion for a simple auto-scroll effect */}
        <div className="overflow-hidden py-10">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-8 w-max"
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="w-[350px] md:w-[450px] glass p-8 rounded-[2.5rem] relative shadow-xl border-white/40 flex flex-col"
              >
                <div className="absolute -top-6 -right-4 bg-boom-yellow text-slate-800 p-4 rounded-full shadow-lg rotate-12">
                  <Quote size={24} />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={20} fill="#FFD100" color="#FFD100" />
                  ))}
                </div>

                <p className="font-fredoka text-lg text-white mb-6 italic leading-relaxed">
                  "{review.text}"
                </p>

                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center font-baloo font-bold text-white text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-baloo font-bold text-white text-xl leading-none">{review.name}</h4>
                    <span className="font-fredoka text-blue-100 text-sm opacity-80">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
