
import React from 'react';

const services = [
  {
    title: 'Agentic AI Systems',
    description: 'We deploy autonomous AI agents that handle lead qualification, proactive customer support, and sales outreach without human intervention.',
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    tags: ['Autonomous Workflows', 'AI Agents', 'LLM Infrastructure']
  },
  {
    title: 'Social Media Mastery',
    description: 'High-frequency content engines that build loyal communities. We turn your brand into a viral powerhouse via AI trend prediction.',
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    ),
    tags: ['Short-form Viral', 'Community Management', 'Content AI']
  },
  {
    title: 'Performance Media',
    description: 'Ads that dominate. Managed by advanced neural algorithms to ensure the absolute lowest Customer Acquisition Cost.',
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    tags: ['Meta Ads', 'Search Scaling', 'ROAS Optimization']
  },
  {
    title: 'Conversion Tech',
    description: 'Next-gen Shopify builds and headless stacks optimized for sub-second load times and peak transaction conversion.',
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    tags: ['Shopify Plus', 'Headless Web', 'CRO Focused']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <h2 className="text-emerald-500 font-bold uppercase tracking-[0.4em] text-xs mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter">ELITE GROWTH ENGINE.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-10 rounded-[40px] bg-black border border-white/5 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.08)] flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform group-hover:bg-emerald-500/10">
                {service.icon}
              </div>
              <h4 className="text-3xl font-black mb-6 tracking-tight uppercase">{service.title}</h4>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">
                {service.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-3">
                {service.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="px-4 py-1.5 rounded-full bg-white/5 text-[10px] font-bold text-gray-300 border border-white/10 group-hover:border-emerald-500/30 transition-colors uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
