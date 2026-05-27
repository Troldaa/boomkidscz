import React from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, Calendar, Users, MessageSquare } from 'lucide-react';

const BookingForm: React.FC = () => {
  return (
    <section id="rezervace" className="py-24 bg-blue-50 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-10 right-10 grid grid-cols-4 gap-4 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-boom-blue rounded-full"></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border-4 border-white">

          {/* Form Info Side */}
          <div className="bg-boom-blue p-12 text-white md:w-1/3 flex flex-col justify-center">
            <h3 className="text-3xl font-baloo font-bold mb-6 text-3d">Chcete akci na klíč?</h3>
            <p className="font-fredoka mb-8 opacity-90">
              Vyplňte formulář a my se vám ozveme s nezávaznou nabídkou přesně podle vašich představ.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg"><Calendar size={20} /></div>
                <span className="text-sm font-semibold">Rychlá odpověď</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg"><Users size={20} /></div>
                <span className="text-sm font-semibold">Individuální přístup</span>
              </div>
            </div>
          </div>

          {/* Actual Form */}
          <div className="p-12 md:w-2/3">
            <h2 className="text-3xl font-baloo font-bold text-slate-800 mb-8">Nezávazná poptávka</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-fredoka font-bold text-slate-700 flex items-center gap-2">
                  <User size={18} className="text-boom-blue" /> Jméno
                </label>
                <input
                  type="text"
                  placeholder="Vaše jméno"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-boom-blue focus:outline-none font-fredoka transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-fredoka font-bold text-slate-700 flex items-center gap-2">
                  <Mail size={18} className="text-boom-blue" /> Email
                </label>
                <input
                  type="email"
                  placeholder="vas@email.cz"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-boom-blue focus:outline-none font-fredoka transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-fredoka font-bold text-slate-700 flex items-center gap-2">
                  <Phone size={18} className="text-boom-blue" /> Telefon
                </label>
                <input
                  type="tel"
                  placeholder="+420 ..."
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-boom-blue focus:outline-none font-fredoka transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-fredoka font-bold text-slate-700 flex items-center gap-2">
                   Typ akce
                </label>
                <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-boom-blue focus:outline-none font-fredoka transition-colors">
                  <option>Příměstský tábor</option>
                  <option>Narozeninová oslava</option>
                  <option>Firemní akce</option>
                  <option>Školní program</option>
                  <option>Jiný typ</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="font-fredoka font-bold text-slate-700 flex items-center gap-2">
                  <MessageSquare size={18} className="text-boom-blue" /> Vaše zpráva
                </label>
                <textarea
                  rows={4}
                  placeholder="Jakou máte představu o akci?"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-boom-blue focus:outline-none font-fredoka transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="md:col-span-2 bg-boom-red text-white py-4 rounded-2xl font-baloo font-bold text-xl shadow-cartoon hover:shadow-cartoon-hover flex items-center justify-center gap-2 transition-all"
              >
                <Send size={24} /> ODESLAT POPTÁVKU
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
