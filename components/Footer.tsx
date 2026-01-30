
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white font-black italic">
                D
              </div>
              <span className="text-xl font-bold text-slate-900">Diamond Engineering</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              আপনার স্বপ্নের ভবনকে বাস্তবে রূপ দিতে আমরা প্রতিজ্ঞাবদ্ধ। আধুনিক ডিজাইন এবং নির্ভুল প্রকৌশলী সেবার অনন্য ঠিকানা।
            </p>
            <div className="flex gap-4">
              {['f', 't', 'in', 'y'].map(s => (
                <div key={s} className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 mb-6">সেবা সমূহ</h5>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li>আর্কিটেকচারাল ডিজাইন</li>
              <li>স্ট্রাকচারাল সলিউশন</li>
              <li>রাজউক ও পৌরসভা অনুমোদন</li>
              <li>ইন্টেরিয়র ডিজাইন</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6">অফিস ঠিকানা</h5>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li>মতিঝিল (প্রধান শাখা)</li>
              <li>কেরানীগঞ্জ শাখা</li>
              <li>মুন্সিগঞ্জ শাখা</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Diamond Engineering & Architect (Consultant)</p>
          <p>T-Licence- 003688 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
