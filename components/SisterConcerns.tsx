
import React from 'react';

const sisters = [
  { name: "Diamond Construction Chemical", icon: "🧪" },
  { name: "S.AM CC Camera Bazar", icon: "📹" },
  { name: "S. Alam Air Travels", icon: "✈️" },
  { name: "SAM Education Consultancy", icon: "🎓" }
];

const SisterConcerns: React.FC = () => {
  return (
    <section id="sisters" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">অঙ্গ প্রতিষ্ঠানসমূহ</h2>
          <h3 className="text-3xl font-bold">Sister Concerns of Diamond Group</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sisters.map((s, idx) => (
            <div 
              key={idx}
              className="p-10 bg-white/5 border border-white/10 rounded-[32px] text-center hover:bg-white/10 hover:border-blue-500/50 transition-all group"
            >
              <div className="text-4xl mb-6 transform group-hover:scale-125 transition-transform duration-300">
                {s.icon}
              </div>
              <h4 className="font-bold text-lg leading-snug">{s.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SisterConcerns;
