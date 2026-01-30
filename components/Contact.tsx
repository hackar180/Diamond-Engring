
import React from 'react';

const Contact: React.FC = () => {
  const offices = [
    { 
      type: "প্রধান শাখা", 
      address: "10, Rajuk Avenue (3rd Floor), Motijheel, Dhaka." 
    },
    { 
      type: "অফিস ১", 
      address: "Stand Bazar, South Keraniganj, Dhaka." 
    },
    { 
      type: "অফিস ২", 
      address: "Baluchar Bazar, Shirajdekhan, Munshiganj." 
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">যোগাযোগ</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">সরাসরি আমাদের সাথে কথা বলুন</h3>
            
            <div className="space-y-10">
              {offices.map((o, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">{o.type}</h5>
                    <p className="text-slate-800 font-semibold leading-relaxed">{o.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-[48px] shadow-2xl border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-900 mb-8">জরুরি প্রয়োজনে কল করুন</h4>
            <div className="space-y-6">
              <a href="tel:01676767767" className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 hover:bg-blue-600 hover:text-white transition-all group">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-white/20 group-hover:text-white">
                  📞
                </div>
                <div>
                  <p className="text-xs uppercase font-bold opacity-60">হটলাইন ১</p>
                  <p className="text-xl font-extrabold">01676-767767</p>
                </div>
              </a>
              <a href="tel:01893816131" className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 hover:bg-slate-800 hover:text-white transition-all group">
                <div className="w-12 h-12 bg-white text-slate-600 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-white/20 group-hover:text-white">
                  📱
                </div>
                <div>
                  <p className="text-xs uppercase font-bold opacity-60">অফিস লাইন ২</p>
                  <p className="text-xl font-extrabold">01893-816131</p>
                </div>
              </a>
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50">
                <div className="w-12 h-12 bg-white text-slate-600 rounded-2xl flex items-center justify-center shadow-sm">
                  📠
                </div>
                <div>
                  <p className="text-xs uppercase font-bold opacity-60">টিএনটি / অন্যান্য</p>
                  <p className="text-xl font-extrabold">096 96467767</p>
                </div>
              </div>
              <a href="mailto:eng.shahalam0167@gmail.com" className="flex items-center gap-6 p-6 rounded-3xl bg-blue-50 text-blue-900 hover:bg-blue-100 transition-all">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center shadow-sm">
                  ✉️
                </div>
                <div>
                  <p className="text-xs uppercase font-bold opacity-60">ইমেইল ঠিকানা</p>
                  <p className="text-sm font-bold truncate">eng.shahalam0167@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
