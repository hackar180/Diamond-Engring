
import React from 'react';
import { Project } from '../types';

interface PortfolioProps {
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">গ্যালারি</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">উল্লেখযোগ্য প্রজেক্ট সমূহ</h3>
          </div>
          <p className="text-slate-500 max-w-sm">
            আমাদের স্থাপত্যশৈলীর কিছু বাস্তব উদাহরণ এখানে তুলে ধরা হলো। প্রতিটি প্রজেক্ট আমাদের দক্ষতার স্বাক্ষর।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.id} className="group bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-video relative overflow-hidden bg-slate-200">
                {p.mediaType === 'image' ? (
                  <img 
                    src={p.mediaUrl} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <video 
                    src={p.mediaUrl} 
                    controls 
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=800&q=80"
                  />
                )}
                {p.mediaType === 'video' && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest animate-pulse">
                    🎥 Video
                  </div>
                )}
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
