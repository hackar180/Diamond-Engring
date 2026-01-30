
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import SisterConcerns from './components/SisterConcerns';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import { Project, UserProfile } from './types';

const App: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  
  // Persistent State for Projects
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('diamond_projects_v2');
    return saved ? JSON.parse(saved) : [
      {
        id: '1',
        title: 'আধুনিক ডুপ্লেক্স ডিজাইন',
        description: 'রাজকীয় কারুকার্য খচিত আধুনিক ডুপ্লেক্স বাড়ির আর্কিটেকচারাল নকশা।',
        mediaUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        mediaType: 'image'
      },
      {
        id: '2',
        title: 'বাণিজ্যিক কমপ্লেক্স প্রজেক্ট',
        description: 'মতিঝিল বাণিজ্যিক এলাকার জন্য পরিকল্পিত ১৫ তলা আধুনিক ভবন।',
        mediaUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        mediaType: 'image'
      },
      {
        id: '3',
        title: '৩ডি অ্যানিমেশন ওয়াকথ্রু',
        description: 'নির্মাণের আগেই ভবনের প্রতিটি অংশ দেখে নিন আমাদের হাই-কোয়ালিটি অ্যানিমেশনে।',
        mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        mediaType: 'video'
      }
    ];
  });

  // Persistent State for Profile
  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('diamond_profile_v2');
    return saved ? JSON.parse(saved) : {
      name: 'Engr. Shah Alam (Moeen)',
      designation: 'ব্যবস্থাপনা পরিচালক',
      bio: 'একজন পেশাদার ইঞ্জিনিয়ার হিসেবে আমরা আপনার জমির সর্বোচ্চ ব্যবহার এবং ভবনের স্থায়িত্ব নিশ্চিত করি। আমাদের ডিজাইন মানেই নতুনত্বের ছোঁয়া।',
      profilePic: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      licenseNo: 'T-Licence- 003688'
    };
  });

  useEffect(() => {
    localStorage.setItem('diamond_projects_v2', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('diamond_profile_v2', JSON.stringify(profile));
  }, [profile]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onAdminToggle={() => setIsAdminMode(!isAdminMode)} isAdminMode={isAdminMode} />
      
      {isAdminMode ? (
        <div className="pt-28 pb-12 bg-slate-50 min-h-screen">
          <AdminDashboard 
            projects={projects} 
            setProjects={setProjects}
            profile={profile}
            setProfile={setProfile}
          />
        </div>
      ) : (
        <main>
          <Hero profile={profile} />
          <Services />
          <Portfolio projects={projects} />
          <SisterConcerns />
          <Contact />
        </main>
      )}

      <Footer />
      
      {/* Floating Call Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a 
          href="https://wa.me/8801676767767" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.994 9.994 0 004.773 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.927-7.067A7.061 7.061 0 0012.012 2z"/>
          </svg>
        </a>
        <a 
          href="tel:01676767767" 
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all transform hover:scale-110 animate-pulse"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
