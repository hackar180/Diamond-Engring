
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onAdminToggle: () => void;
  isAdminMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onAdminToggle, isAdminMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', href: '#home' },
    { name: 'সেবাসমূহ', href: '#services' },
    { name: 'প্রজেক্টস', href: '#portfolio' },
    { name: 'সিস্টার কনসার্ন', href: '#sisters' },
    { name: 'যোগাযোগ', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center text-white font-black italic shadow-xl shadow-blue-200">
              D
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-slate-900 leading-none">DIAMOND</span>
              <span className="text-[10px] text-blue-600 font-bold tracking-[0.2em]">ENGINEERING & ARCHITECT</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a 
                key={l.name} 
                href={l.href} 
                className="text-slate-600 hover:text-blue-600 font-bold text-sm transition-colors"
              >
                {l.name}
              </a>
            ))}
            <button 
              onClick={onAdminToggle}
              className={`px-6 py-2 rounded-xl font-bold text-sm transition-all ${
                isAdminMode 
                ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100' 
                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg'
              }`}
            >
              {isAdminMode ? 'এডিট মোড বন্ধ' : 'অ্যাডমিন প্যানেল'}
            </button>
          </div>

          {/* Mobile Button */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 absolute top-full left-0 right-0 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map(l => (
              <a 
                key={l.name} 
                href={l.href} 
                className="px-4 py-3 text-slate-600 font-bold rounded-xl hover:bg-slate-50 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {l.name}
              </a>
            ))}
            <button 
              onClick={() => { onAdminToggle(); setIsMobileMenuOpen(false); }}
              className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold"
            >
              {isAdminMode ? 'এডিট মোড বন্ধ করুন' : 'অ্যাডমিন প্যানেল'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
