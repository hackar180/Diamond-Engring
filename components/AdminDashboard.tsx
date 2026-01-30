
import React, { useState } from 'react';
import { Project, UserProfile } from '../types';

interface AdminDashboardProps {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ projects, setProjects, profile, setProfile }) => {
  const [newProject, setNewProject] = useState<Partial<Project>>({ mediaType: 'image' });

  const handleAddProject = () => {
    if (newProject.title && newProject.mediaUrl) {
      const p: Project = {
        id: Date.now().toString(),
        title: newProject.title,
        description: newProject.description || '',
        mediaUrl: newProject.mediaUrl,
        mediaType: newProject.mediaType as 'image' | 'video',
      };
      setProjects([p, ...projects]);
      setNewProject({ mediaType: 'image', title: '', description: '', mediaUrl: '' });
      alert('প্রজেক্ট সফলভাবে যুক্ত হয়েছে!');
    } else {
      alert('অনুগ্রহ করে টাইটেল এবং মিডিয়া ইউআরএল প্রদান করুন।');
    }
  };

  const deleteProject = (id: string) => {
    if (window.confirm('আপনি কি নিশ্চিত যে এই প্রজেক্টটি ডিলিট করতে চান?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Profile Editing Section */}
        <div className="md:w-1/3">
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-blue-100 sticky top-28">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-blue-600">👤</span> প্রোফাইল এডিট করুন
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col items-center mb-6">
                <img 
                  src={profile.profilePic} 
                  alt="Preview" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-50 shadow-md mb-2"
                />
                <p className="text-xs text-slate-400">প্রোফাইল ছবির প্রিভিউ</p>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">এমডি'র নাম</label>
                <input 
                  type="text"
                  value={profile.name}
                  onChange={e => setProfile({...profile, name: e.target.value})}
                  className="w-full px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">পদবী</label>
                <input 
                  type="text"
                  value={profile.designation}
                  onChange={e => setProfile({...profile, designation: e.target.value})}
                  className="w-full px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">লাইসেন্স নং</label>
                <input 
                  type="text"
                  value={profile.licenseNo}
                  onChange={e => setProfile({...profile, licenseNo: e.target.value})}
                  className="w-full px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">বায়ো / বার্তা</label>
                <textarea 
                  rows={3}
                  value={profile.bio}
                  onChange={e => setProfile({...profile, bio: e.target.value})}
                  className="w-full px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">প্রোফাইল পিকচার URL</label>
                <input 
                  type="text"
                  value={profile.profilePic}
                  onChange={e => setProfile({...profile, profilePic: e.target.value})}
                  className="w-full px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>
              <div className="bg-blue-50 p-4 rounded-xl text-xs text-blue-700">
                তথ্যগুলো অটোমেটিক সেভ হয়ে যাবে।
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Management Section */}
        <div className="md:w-2/3 space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-blue-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-blue-600">🏗️</span> নতুন প্রজেক্ট/ভিডিও যোগ করুন
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">প্রজেক্ট টাইটেল</label>
                <input 
                  type="text"
                  value={newProject.title}
                  onChange={e => setNewProject({...newProject, title: e.target.value})}
                  placeholder="উদাঃ আধুনিক ভিলা ডিজাইন"
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">মিডিয়া টাইপ</label>
                <select 
                  value={newProject.mediaType}
                  onChange={e => setNewProject({...newProject, mediaType: e.target.value as 'image' | 'video'})}
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="image">ছবি (Image)</option>
                  <option value="video">ভিডিও (Video)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-1">ইউআরএল (URL)</label>
                <input 
                  type="text"
                  value={newProject.mediaUrl}
                  onChange={e => setNewProject({...newProject, mediaUrl: e.target.value})}
                  placeholder="https://..."
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-1">বিবরণ</label>
                <textarea 
                  rows={2}
                  value={newProject.description}
                  onChange={e => setNewProject({...newProject, description: e.target.value})}
                  placeholder="প্রজেক্ট সম্পর্কে বিস্তারিত লিখুন..."
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button 
              onClick={handleAddProject}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1"
            >
              প্রজেক্ট পাবলিশ করুন
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">বর্তমান প্রজেক্ট সমূহ ({projects.length})</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {projects.map(p => (
                <div key={p.id} className="bg-white p-4 rounded-2xl border border-slate-200 flex gap-4 items-center group">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                    {p.mediaType === 'image' ? (
                      <img src={p.mediaUrl} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xl">🎬</div>
                    )}
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="font-bold text-slate-800 truncate">{p.title}</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">{p.mediaType}</p>
                  </div>
                  <button 
                    onClick={() => deleteProject(p.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
