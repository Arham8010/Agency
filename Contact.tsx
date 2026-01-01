
import React, { useState } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'needs_verification';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    link: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const submissionData = new FormData();
      submissionData.append('Client Name', formData.name);
      submissionData.append('Client Email', formData.email);
      submissionData.append('Brand URL', formData.link);
      submissionData.append('Briefing', formData.message);
      submissionData.append('_subject', `🚀 NEW ELEVATE LEAD: ${formData.name}`);
      submissionData.append('_captcha', 'false');
      submissionData.append('_template', 'table');

      // Using the unique code 'bajiwu' provided by the user
      const response = await fetch("https://formsubmit.co/ajax/bajiwu", {
        method: "POST",
        body: submissionData,
        headers: { 
          "Accept": "application/json"
        }
      });

      const result = await response.json();

      if (response.ok && (result.success === true || result.success === "true")) {
        setStatus('success');
      } else {
        // Handle verification or submission errors
        setStatus('needs_verification');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter uppercase italic">
              TIME TO <br /><span className="text-emerald-500">DOMINATE.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-md">
              Ready to automate your growth? Submit your brand brief and we'll deploy a custom strategy for your empire.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] mb-1">Direct HQ Line</div>
                  <div className="font-bold text-white text-lg">mominarham39@gmail.com</div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-zinc-900/50 border border-white/5 rounded-[32px] backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                 <span className="text-xs font-black uppercase tracking-widest text-emerald-500">Live Delivery Active</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our encrypted transmission protocol ensures your data is delivered directly to Arham's desk in under 60 seconds.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
            
            {status !== 'success' ? (
              <div className="bg-black border border-white/10 p-8 md:p-12 rounded-[48px] shadow-3xl relative z-10 transition-all">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'needs_verification' && (
                    <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-2xl mb-4 animate-in fade-in slide-in-from-top-4">
                      <h4 className="text-emerald-400 font-bold mb-2">Almost there!</h4>
                      <p className="text-xs text-emerald-300/70 mb-4">
                        One-time setup: You need to verify your email destination. Click the button below, then check your inbox at mominarham39@gmail.com.
                      </p>
                      <a 
                        href="https://formsubmit.co/el/bajiwu" 
                        target="_blank" 
                        className="inline-block bg-emerald-500 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
                      >
                        Verify Submission Link Now
                      </a>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-xs font-bold text-center">
                      Network disruption. Please email us directly or try again.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Full Name</label>
                      <input 
                        required
                        className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-emerald-500 focus:bg-zinc-900 outline-none transition-all placeholder:text-gray-700 font-medium" 
                        placeholder="Arham Momin"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Corporate Email</label>
                      <input 
                        required
                        type="email"
                        className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-emerald-500 focus:bg-zinc-900 outline-none transition-all placeholder:text-gray-700 font-medium" 
                        placeholder="arham@agency.com" 
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Brand / Store URL</label>
                    <input 
                      required
                      type="url"
                      className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-emerald-500 focus:bg-zinc-900 outline-none transition-all placeholder:text-gray-700 font-medium" 
                      placeholder="https://elevatecreatives.com" 
                      value={formData.link}
                      onChange={e => setFormData({...formData, link: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Current Hurdles & Goals</label>
                    <textarea 
                      required
                      rows={4} 
                      className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-emerald-500 focus:bg-zinc-900 outline-none transition-all resize-none placeholder:text-gray-700 font-medium" 
                      placeholder="Tell us about your current MRR and scaling targets."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    disabled={status === 'submitting'}
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-800 disabled:cursor-not-allowed text-white py-6 rounded-2xl font-black text-xl transition-all hover:scale-[1.02] shadow-[0_20px_40px_rgba(16,185,129,0.2)] uppercase tracking-[0.2em] flex items-center justify-center gap-3 active:scale-95"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-3">
                        <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Deploying...
                      </span>
                    ) : 'Initiate Scale Protocol'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-emerald-600 p-16 rounded-[48px] shadow-3xl text-center flex flex-col items-center justify-center min-h-[550px] animate-in zoom-in-95 duration-700 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-8 animate-bounce relative z-10">
                   <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-4xl font-black text-white mb-4 uppercase italic tracking-tighter relative z-10">Success.</h3>
                <p className="text-emerald-50 mb-12 max-w-xs leading-relaxed font-medium relative z-10">
                  Your transmission is received. Our agents are analyzing your brand data. Expect a response in under 24 hours.
                </p>
                <button onClick={() => setStatus('idle')} className="bg-black/20 hover:bg-black/30 text-white px-10 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all relative z-10">
                  New Brief
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
