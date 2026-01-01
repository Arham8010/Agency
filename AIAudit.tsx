
import React, { useState } from 'react';
import { generateMarketingAudit } from '../services/geminiService';
import { AuditResult } from '../types';

const AIAudit: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', niche: '', goals: '' });
  const [result, setResult] = useState<AuditResult | null>(null);

  const captureLead = async (brand: string, niche: string, goals: string) => {
    try {
      const leadData = new FormData();
      leadData.append('Audit Brand', brand);
      leadData.append('Audit Niche', niche);
      leadData.append('Audit Goal', goals);
      leadData.append('_subject', `🔥 NEW AUDIT LEAD: ${brand}`);
      leadData.append('_captcha', 'false');

      // Background dispatch using the verified code 'bajiwu'
      await fetch("https://formsubmit.co/ajax/bajiwu", {
        method: "POST",
        body: leadData,
        headers: { 
          "Accept": "application/json"
        }
      });
    } catch (e) {
      console.warn('Lead capture skipped but audit continuing.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const audit = await generateMarketingAudit(formData.name, formData.niche, formData.goals);
      setResult(audit);
      
      // Dispatch the lead info in background
      await captureLead(formData.name, formData.niche, formData.goals);
      
    } catch (error) {
      alert("AI Agents are currently processing high load. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="audit" className="py-24 relative">
      <div className="absolute inset-0 bg-emerald-900/10 blur-[100px] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-400 font-bold mb-2 tracking-widest uppercase text-sm">Experience the Agentic Advantage</h2>
          <h3 className="text-4xl font-extrabold mb-4">Get a Free AI Growth Strategy</h3>
          <p className="text-gray-400">See how our proprietary Agentic AI models would scale your brand.</p>
        </div>

        {!result ? (
          <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Brand Name</label>
                <input 
                  required
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none transition-all placeholder:text-zinc-700"
                  placeholder="e.g. Elevate Luxe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Niche</label>
                  <input 
                    required
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none transition-all placeholder:text-zinc-700"
                    placeholder="e.g. High-End Skincare"
                    value={formData.niche}
                    onChange={(e) => setFormData({...formData, niche: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Growth Goal</label>
                  <select 
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none transition-all text-white"
                    value={formData.goals}
                    onChange={(e) => setFormData({...formData, goals: e.target.value})}
                  >
                    <option value="scale_sales">Scale Sales Autonomously</option>
                    <option value="brand_awareness">Dominant Brand Awareness</option>
                    <option value="customer_retention">AI-Driven Retention</option>
                    <option value="new_market">Global Market Expansion</option>
                  </select>
                </div>
              </div>
              <button 
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${loading ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 text-white active:scale-[0.98]'}`}
              >
                {loading ? 'AI Agents Analyzing...' : 'Generate AI Growth Strategy'}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-10 rounded-3xl bg-white text-black animate-in zoom-in duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
               <button onClick={() => setResult(null)} className="text-gray-400 hover:text-black font-bold text-xs uppercase">Reset</button>
            </div>
            <div className="flex items-center gap-2 mb-6">
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Growth Roadmap</span>
            </div>
            <h4 className="text-3xl font-black mb-4">{result.headline}</h4>
            <p className="text-gray-700 mb-8 leading-relaxed italic">{result.summary}</p>
            
            <div className="space-y-4 mb-8">
              {result.recommendations.map((rec, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  <p className="font-medium">{rec}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl flex flex-col items-center border border-emerald-100">
              <span className="text-emerald-600 font-bold text-sm uppercase mb-1">Projected Monthly Revenue Growth</span>
              <span className="text-5xl font-black text-emerald-800">{result.projectedGrowth}</span>
              <p className="text-gray-500 mt-4 text-sm text-center">Calculated using our proprietary performance datasets for {formData.niche}.</p>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView()} className="mt-6 px-8 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-all">
                Execute Growth Plan
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIAudit;
