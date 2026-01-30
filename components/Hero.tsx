
import React from 'react';
import { UserProfile } from '../types';

interface HeroProps {
  profile: UserProfile;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-slate-100 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6 border border-blue-200">
              <span className="mr-2 animate-pulse">💎</span> আধুনিক স্থাপত্যের নির্ভরযোগ্য প্রতিষ্ঠান
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
              আপনার স্বপ্নের বাড়ি <br/> নির্মাণে <span className="text-blue-600 italic">নির্ভুল</span> সাথী
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              ডায়মন্ড ইঞ্জিনিয়ারিং এন্ড আর্কিটেক্ট দিচ্ছি রাজউক ও পৌরসভা অনুমোদিত সকল ডিজাইন সেবা। আমরা আপনার বাজেটের মধ্যে সর্বাধুনিক প্রযুক্তিতে টেকসই অবকাঠামো নিশ্চিত করি।
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contact" className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1">
                ফ্রি কনসালটেশন নিন
              </a>
              <a href="#portfolio" className="px-10 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                প্রজেক্ট দেখুন
              </a>
            </div>

            <div className="flex items-center gap-8 border-t border-slate-100 pt-8">
              <div>
                <p className="text-3xl font-extrabold text-slate-900">৫০০+</p>
                <p className="text-sm text-slate-500 font-medium">সফল প্রজেক্ট</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">১০+</p>
                <p className="text-sm text-slate-500 font-medium">বছরের অভিজ্ঞতা</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-blue-600/5 rounded-[40px] rotate-6 scale-105"></div>
            <div className="relative bg-white p-4 rounded-[40px] shadow-2xl border border-slate-100">
              <div className="relative rounded-[32px] overflow-hidden group">
                <img 
                  src={profile.profilePic} 
                  alt={profile.name}
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/90 to-transparent text-white">
                  <p className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-1">ব্যবস্থাপনা পরিচালক</p>
                  <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
                  <p className="text-sm text-slate-300 italic opacity-90 leading-relaxed">
                    "{profile.bio}"
                  </p>
                  <div className="mt-4 inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-xs font-semibold">
                    লাইসেন্স নং: {profile.licenseNo}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
