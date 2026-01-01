
import React from 'react';

const BrandLogo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center gap-3 px-6">
    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
      <div className="w-5 h-5 rounded-full border-2 border-emerald-500/50 flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
      </div>
    </div>
    <span className="font-bold text-sm tracking-widest text-white/60 group-hover:text-white transition-colors uppercase">{name}</span>
  </div>
);

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-lime-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 mr-2 animate-ping"></span>
          <span className="text-xs font-semibold tracking-widest text-emerald-300 uppercase">Scale Your Empire with Agentic AI</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8">
          The Future of <br />
          <span className="gradient-text">Brand Velocity.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-medium">
          Elevate Creatives engineers autonomous growth ecosystems. We don't just run ads; we deploy AI agents that work 24/7 to scale your revenue.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#contact" 
            onClick={scrollToContact}
            className="group w-full sm:w-auto px-10 py-5 bg-white text-black font-black rounded-full hover:bg-emerald-50 transition-all text-lg shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2"
          >
            Scale My Business
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

        <div className="mt-28 group">
          <p className="text-[10px] font-bold tracking-[0.4em] text-emerald-500 uppercase mb-10">Trusted by Global High-Growth Brands</p>
          <div className="flex flex-wrap items-center justify-center gap-y-8 md:gap-x-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
            <BrandLogo name="Maharaja Sizing" />
            <BrandLogo name="pure2port" />
            <BrandLogo name="WalkInLuxury" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
