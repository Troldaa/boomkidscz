import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-boom-blue pt-20 pb-10 text-white overflow-hidden">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-16 fill-blue-50" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Boom Kids Logo" className="h-12" />
              <span className="text-3xl font-baloo font-bold">BOOM KIDS CZ</span>
            </div>
            <p className="font-fredoka text-blue-50 opacity-90 leading-relaxed mb-6">
              Vytváříme nezapomenutelné zážitky pro děti i dospělé. Jsme tým profesionálních animátorů, který přináší radost na každou akci.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/boomkidscz" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-boom-blue transition-all">FB</a>
              <a href="https://instagram.com/boomkidscz" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-boom-blue transition-all">IG</a>
              <a href="https://youtube.com/@boomkidscz" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-boom-blue transition-all">YT</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-baloo font-bold mb-6">Rychlé odkazy</h3>
            <ul className="space-y-3 font-fredoka font-medium">
              <li><a href="/" className="hover:text-boom-yellow transition-colors">Hlavní stránka</a></li>
              <li><a href="/#sluzby" className="hover:text-boom-yellow transition-colors">Naše služby</a></li>
              <li><a href="/animatori" className="hover:text-boom-yellow transition-colors">Naši animátoři</a></li>
              <li><a href="/#kontakt" className="hover:text-boom-yellow transition-colors">Poptávka</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="kontakt">
            <h3 className="text-2xl font-baloo font-bold mb-6">Kontaktujte nás</h3>
            <ul className="space-y-4 font-fredoka">
              <li className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg"><Phone size={20} /></div>
                <span>+420 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg"><Mail size={20} /></div>
                <span>info@boomkidscz.cz</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg"><MapPin size={20} /></div>
                <span>Česká republika</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center font-fredoka text-blue-100 text-sm">
          <p>© {new Date().getFullYear()} Boom Kids CZ. Všechna práva vyhrazena. Design by Jules Agent.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
