
import React from 'react';
import { ElevateLogo } from './Navbar';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <ElevateLogo size={40} />
              <div className="flex flex-col -space-y-1">
                <span className="font-black text-xl tracking-tight uppercase leading-none">
                  ELEVATE <span className="text-emerald-500">CREATIVES</span>
                </span>
                <span className="text-[8px] tracking-[0.4em] text-gray-600 font-black uppercase">Marketing Agency</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 max-w-xs mt-2">
              Engineering autonomous growth ecosystems for high-velocity brands since 2021.
            </p>
          </div>
          
          <div className="text-xs text-gray-600 md:text-right">
            © {new Date().getFullYear()} Elevate Creatives Agency.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
