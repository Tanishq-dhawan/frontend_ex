import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, LogOut, Map, MessageSquare, Heart, Clock } from 'lucide-react';

export default function TravelerDashboard() {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="bg-light min-h-screen pb-12">
      {/* Dashboard Header */}
      <div className="bg-dark text-white py-12">
        <div className="container">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center text-3xl font-black border-4 border-white shadow-lg">
              JS
            </div>
            <div>
              <h1 className="text-3xl font-black mb-1">Jane Smith</h1>
              <p className="text-gray-400">Traveler since 2024</p>
            </div>
            <div className="ml-auto flex gap-4">
              <button className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition">
                <Settings size={20} />
              </button>
              <Link to="/auth" className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition">
                <LogOut size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-8 max-w-6xl flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64">
          <nav className="flex flex-col gap-2">
            <button 
              onClick={() => setActiveTab('upcoming')}
              className={`flex items-center gap-3 p-4 rounded-xl font-bold transition ${activeTab === 'upcoming' ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              <Map size={20} /> Upcoming Trips
            </button>
            <button 
              onClick={() => setActiveTab('past')}
              className={`flex items-center gap-3 p-4 rounded-xl font-bold transition ${activeTab === 'past' ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              <Clock size={20} /> Past Trips
            </button>
            <button 
              onClick={() => setActiveTab('messages')}
              className={`flex items-center gap-3 p-4 rounded-xl font-bold transition ${activeTab === 'messages' ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              <MessageSquare size={20} /> Messages
              <span className="ml-auto bg-yellow-400 text-dark text-xs px-2 py-0.5 rounded-full">2</span>
            </button>
            <button 
              onClick={() => setActiveTab('saved')}
              className={`flex items-center gap-3 p-4 rounded-xl font-bold transition ${activeTab === 'saved' ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              <Heart size={20} /> Saved Buddies
            </button>
          </nav>
        </aside>

        {/* Dashboard Content */}
        <main className="flex-1">
          {activeTab === 'upcoming' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Upcoming Adventures</h2>
              
              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row gap-6 mb-6">
                 <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop" className="w-full md:w-48 h-48 object-cover rounded-2xl" alt="Destination" />
                 <div className="flex-1">
                   <div className="flex justify-between items-start mb-2">
                     <span className="bg-pink-100 text-pink-700 font-bold text-xs px-3 py-1 rounded-full uppercase">Confirmed</span>
                     <p className="font-bold text-gray-500 text-sm">Booking #LB-9482</p>
                   </div>
                   <h3 className="text-2xl font-black mb-1">Mumbai Heritage Tour</h3>
                   <p className="text-gray-600 font-medium mb-4">with Neha P.</p>
                   
                   <div className="grid grid-cols-2 gap-4 mb-4">
                     <div>
                       <p className="text-xs text-gray-500 font-bold uppercase">Date</p>
                       <p className="font-medium">Nov 20, 2024</p>
                     </div>
                     <div>
                       <p className="text-xs text-gray-500 font-bold uppercase">Time</p>
                       <p className="font-medium">9:00 AM (4 Hours)</p>
                     </div>
                   </div>
                   
                   <div className="flex gap-3 mt-4">
                     <button className="btn bg-dark text-white text-sm py-2">MESSAGE NEHA</button>
                     <button className="btn btn-outline-white !text-dark !border-gray-300 text-sm py-2">CANCEL BOOKING</button>
                   </div>
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'past' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Past Trips</h2>
              <div className="bg-white border border-gray-200 rounded-3xl p-6 text-center shadow-sm">
                <Clock className="mx-auto text-gray-300 mb-4" size={48} />
                <h3 className="font-bold text-lg mb-2">No Past Trips</h3>
                <p className="text-gray-500 mb-6">You haven't completed any tours yet. Time to start exploring!</p>
                <Link to="/search" className="btn btn-primary">FIND A BUDDY</Link>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Messages</h2>
              <p className="text-gray-500">Inbox functionality coming soon.</p>
            </div>
          )}

          {activeTab === 'saved' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Saved Buddies</h2>
              <p className="text-gray-500">You haven't saved any buddies to your wishlist yet.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
