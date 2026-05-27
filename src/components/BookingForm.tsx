import React from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, Calendar, Users, MessageSquare } from 'lucide-react';

const BookingForm: React.FC = () => {
  return (
    <>
      <section id="poptavka" className="py-24 bg-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-baloo font-bold text-slate-800 mb-4">NEZÁVAZNÁ <span className="text-boom-blue">POPTÁVKA</span></h2>
            <p className="font-fredoka text-xl text-slate-600">Máte dotaz nebo chcete zjistit více informací? Napište nám!</p>
          </div>
          <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white h-[800px]">
            <iframe
              src="https://tally.so/embed/A7jXyD?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="100%"
              title="Nezávazná poptávka"
              className="bg-white"
            ></iframe>
          </div>
        </div>
      </section>

      <section id="rezervace" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-baloo font-bold text-slate-800 mb-4">REZERVACE <span className="text-boom-red">TERMÍNU</span></h2>
            <p className="font-fredoka text-xl text-slate-600">Rezervujte si svůj termín pro vaši akci ještě dnes.</p>
          </div>
          <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100 h-[800px]">
            <iframe
              src="https://tally.so/embed/EkN2lr?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="100%"
              title="Rezervace termínu"
              className="bg-white"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingForm;
