
import React from 'react';
import { ElevateLogo } from './Navbar';

const cases = [
  {
    client: 'Maharaja Sizing',
    niche: 'Industrial Textiles',
    metric: '280% Export Growth',
    result: 'Revolutionized B2B outreach with autonomous AI Agents, automating lead qualification and scaling wholesale distribution globally.',
    challenge: 'Stagnant domestic sales and manual procurement cycles.',
    solution: 'End-to-end Agentic AI deployment for global wholesaler identification and automated CRM nurturing.',
    img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1200',
    hasLogo: true
  },
  {
    client: 'pure2port',
    niche: 'Masala Import & Export',
    metric: '140% Supply Efficiency',
    result: 'Digitized global spice trade operations across 12 countries, using AI Agents to automate trade compliance and buyer communication.',
    challenge: 'Manual cross-border documentation causing significant shipping delays and supply chain friction.',
    solution: 'Implementation of an Agentic AI hub for real-time logistics tracking and automated multilingual vendor management.',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1200',
    hasLogo: false
  },
  {
    client: 'WalkInLuxury',
    niche: 'Fashion Dropshipping',
    metric: '410% Sales Boost',
    result: 'Scaled a high-ticket clothing and footwear brand from launch to $1.2M annual run rate using AI-optimized performance media.',
    challenge: 'High competition and trust hurdles in the luxury footwear dropshipping space.',
    solution: 'Deployment of AI-driven creative testing and automated influencer outreach systems to build instant brand authority.',
    img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1200',
    hasLogo: false
  }
];

const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-black relative">
      <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-[20rem] font-black uppercase mx-20">RESULTS</span>
          <span className="text-[20rem] font-black uppercase mx-20">SCALE</span>
          <span className="text-[20rem] font-black uppercase mx-20">VELOCITY</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-emerald-500 font-bold uppercase tracking-[0.5em] text-xs mb-6">Quantifiable Impact</h2>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-4 uppercase">
              PROVEN <br /><span className="text-white/40">RESULTS.</span>
            </h3>
          </div>
          <p className="text-gray-400 max-w-sm text-lg leading-relaxed border-l-2 border-emerald-500/30 pl-6">
            We don't just provide services; we install growth infrastructure that delivers objective, measurable returns across diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cases.map((item, idx) => (
            <div key={idx} className="group flex flex-col bg-zinc-900/40 border border-white/5 rounded-[48px] overflow-hidden hover:border-emerald-500/40 transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(16,185,129,0.2)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.client} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" 
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90"></div>
                
                <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-white/10 opacity-60 group-hover:opacity-100 transition-opacity">
                   <ElevateLogo size={32} />
                </div>

                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-xl text-white font-black text-[10px] tracking-widest uppercase px-3">
                  {item.client === 'Maharaja Sizing' ? 'Industrial' : item.client === 'pure2port' ? 'Logistics' : 'E-Comm'}
                </div>
                
                <div className="absolute bottom-6 left-8">
                  <span className="bg-emerald-600 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl inline-block mb-3">
                    {item.metric}
                  </span>
                  <h4 className="text-3xl font-black uppercase tracking-tighter text-white">{item.client}</h4>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <div className="mb-8">
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full font-black border border-emerald-500/20 uppercase tracking-[0.2em] inline-block mb-6">
                    {item.niche}
                  </span>
                  
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] block mb-2">The Challenge</span>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.challenge}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-[0.2em] block mb-2">Our AI Strategy</span>
                      <p className="text-white text-base leading-relaxed font-bold">{item.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-white/5">
                  <p className="text-gray-400 leading-relaxed text-sm italic">
                    "{item.result}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
