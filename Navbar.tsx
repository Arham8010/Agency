
import React, { useState, useEffect } from 'react';

export const ElevateLogo: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Shape 1: Back/Left Dark Peak */}
    <path 
      d="M10 80L45 15L62 35V45L35 80H10Z" 
      fill="url(#gradient-dark)" 
    />
    {/* Shape 2: Middle Emerald Peak */}
    <path 
      d="M32 80L58 42L82 80H32Z" 
      fill="url(#gradient-mid)" 
    />
    {/* Shape 3: Front/Right Lime Peak */}
    <path 
      d="M58 80L80 50L102 80H58Z" 
      fill="url(#gradient-bright)" 
    />
    
    <defs>
      <linearGradient id="gradient-dark" x1="10" y1="15" x2="62" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#006D4E" />
        <stop offset="1" stopColor="#004D36" />
      </linearGradient>
      <linearGradient id="gradient-mid" x1="32" y1="42" x2="82" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00A651" />
        <stop offset="1" stopColor="#007A3C" />
      </linearGradient>
      <linearGradient id="gradient-bright" x1="58" y1="50" x2="102" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8DC63F" />
        <stop offset="1" stopColor="#69962F" />
      </linearGradient>
    </defs>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Results', id: 'results' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'results', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -200 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a 
            href="#home" 
            className="flex-shrink-0 flex items-center gap-2 group transition-transform hover:scale-105"
            onClick={(e) => scrollToSection(e, 'home')}
          >
            <ElevateLogo size={44} />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-[-0.05em] leading-none text-white">
                ELEVATE<span className="text-emerald-400">CREATIVES</span>
              </span>
              <span className="text-[9px] tracking-[0.35em] text-gray-400 font-bold uppercase leading-tight mt-0.5">Marketing Agency</span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-emerald-400 relative py-2 group-nav ${
                  activeSection === link.id ? 'text-emerald-500' : 'text-gray-300'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transition-transform duration-300 origin-left ${
                  activeSection === link.id ? 'scale-x-100' : 'scale-x-0'
                }`}></span>
              </a>
            ))}
            
            <div className="h-6 w-px bg-white/10 mx-2"></div>

            <div className="flex items-center gap-4 mr-4">
               <a href="https://www.linkedin.com/company/elevatecreatives/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </a>
            </div>

            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 shadow-lg shadow-emerald-600/30"
            >
              Initiate Scale
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={`#${link.id}`} 
              onClick={(e) => scrollToSection(e, link.id)}
              className={`block text-lg font-bold transition-colors py-2 border-b border-white/5 uppercase tracking-widest ${
                activeSection === link.id ? 'text-emerald-500' : 'text-gray-300 hover:text-emerald-400'
              }`} 
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="block w-full text-center bg-emerald-600 text-white py-4 rounded-xl font-black text-lg shadow-xl uppercase tracking-widest mt-6"
          >
            Deploy AI Agents →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
