import React, { useState } from 'react';
import { Settings, LogOut, DollarSign, Calendar, MessageSquare, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BuddyDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-light min-h-screen pb-12">
      <div className="bg-dark text-white py-12">
        <div className="container">
          <div className="flex items-center gap-6">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg" alt="Arjun" />
              <div className="absolute bottom-0 right-0 bg-blue-500 w-6 h-6 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-3xl font-black mb-1">Arjun H.</h1>
              <p className="text-gray-400">Buddy in New Delhi • Joined 2023</p>
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
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-3 p-4 rounded-xl font-bold transition ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              <TrendingUp size={20} /> Earnings
            </button>
            <button 
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center gap-3 p-4 rounded-xl font-bold transition ${activeTab === 'calendar' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              <Calendar size={20} /> Calendar
              <span className="ml-auto bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">New</span>
            </button>
            <button 
              onClick={() => setActiveTab('messages')}
              className={`flex items-center gap-3 p-4 rounded-xl font-bold transition ${activeTab === 'messages' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              <MessageSquare size={20} /> Messages
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`flex items-center gap-3 p-4 rounded-xl font-bold transition ${activeTab === 'reviews' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              <Star size={20} /> Reviews
            </button>
          </nav>

          <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100">
             <h4 className="font-bold text-sm mb-2 text-blue-800">Profile Completeness</h4>
             <div className="w-full h-2 bg-blue-200 rounded-full mb-2 overflow-hidden">
               <div className="h-full bg-blue-600 w-[90%] font-bold text-center"></div>
             </div>
             <p className="text-xs text-blue-700">Add a video intro to reach 100% and get more bookings!</p>
          </div>
        </aside>

        {/* Dashboard Content */}
        <main className="flex-1">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Earnings Dashboard</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full flex items-center justify-center">
                    <DollarSign className="text-blue-500 mr-2 mb-2" />
                  </div>
                  <p className="text-sm font-bold text-gray-500 uppercase">This Month</p>
                  <h3 className="text-3xl font-black mt-2 text-dark">$1,240</h3>
                  <p className="text-xs text-green-500 font-bold mt-2">+15% vs last month</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <p className="text-sm font-bold text-gray-500 uppercase">Pending Payout</p>
                  <h3 className="text-3xl font-black mt-2 text-dark">$320</h3>
                  <p className="text-xs text-gray-500 font-medium mt-2">Releases in 2 days</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <p className="text-sm font-bold text-gray-500 uppercase">Completed Tours</p>
                  <h3 className="text-3xl font-black mt-2 text-dark">62</h3>
                  <p className="text-xs text-yellow-500 font-bold mt-2 flex items-center gap-1"><Star size={12} className="fill-yellow-500"/> 4.98 Avg Rating</p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Payout History</h3>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                    <tr>
                      <th className="p-4 font-bold border-b">Date</th>
                      <th className="p-4 font-bold border-b">Traveler</th>
                      <th className="p-4 font-bold border-b">Amount</th>
                      <th className="p-4 font-bold border-b">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 h-16 hover:bg-gray-50 transition">
                      <td className="p-4 font-medium text-sm">Nov 12, 2024</td>
                      <td className="p-4 text-sm font-bold">David W.</td>
                      <td className="p-4 text-sm font-bold">$72.00</td>
                      <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Paid</span></td>
                    </tr>
                    <tr className="border-b border-gray-100 h-16 hover:bg-gray-50 transition">
                      <td className="p-4 font-medium text-sm">Nov 08, 2024</td>
                      <td className="p-4 text-sm font-bold">Sarah T.</td>
                      <td className="p-4 text-sm font-bold">$45.00</td>
                      <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Paid</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'calendar' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Manage Availability</h2>
              <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm">
                <Calendar className="mx-auto text-gray-300 mb-4" size={48} />
                <h3 className="font-bold text-lg mb-2">Calendar Editor</h3>
                <p className="text-gray-500">Integration with Google Calendar coming soon.</p>
              </div>
            </div>
          )}
          
          {/* Other tabs intentionally omitted for brevity in mock */}
          {(activeTab === 'messages' || activeTab === 'reviews') && (
            <div>
              <h2 className="text-2xl font-bold mb-6 capitalize">{activeTab}</h2>
              <p className="text-gray-500">This section is currently under construction.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
