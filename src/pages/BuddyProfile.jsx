import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShieldCheck, MapPin, MessageCircle, Heart, Calendar } from 'lucide-react';

export default function BuddyProfile() {
  const { id } = useParams();
  
  return (
    <div className="bg-light min-h-screen pb-20">
      {/* Profile Header (Photo Grid) */}
      <div className="w-full h-[400px] md:h-[500px] overflow-hidden bg-gray-200">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" 
             alt="Profile Cover" 
             className="w-full h-full object-cover" />
      </div>

      <div className="container mt-8 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-10">
          
          {/* Main Info */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-4xl font-black flex items-center gap-3">
                  Arjun H.
                  <ShieldCheck className="text-blue-500 fill-blue-100" size={28} />
                </h1>
                <p className="flex items-center text-gray-600 gap-1 mt-1 text-lg">
                  <MapPin size={18} /> New Delhi, India
                </p>
              </div>
              <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition">
                <Heart size={24} />
              </button>
            </div>

            <div className="flex items-center gap-4 py-4 border-y border-gray-200 mb-8">
              <div className="flex items-center gap-1 font-bold text-lg">
                <Star size={20} className="text-yellow-400 fill-yellow-400" /> 4.98
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              <a href="#reviews" className="underline font-medium">150 Reviews</a>
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              <span className="text-gray-600">Speaks: English, Hindi, Punjabi</span>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700 leading-relaxed">
                Hi! I'm Arjun. I was born and raised in the heart of Old Delhi. My passion is showing travelers the authentic, unspoken side of this chaotic, beautiful city. From hidden street food stalls passed down for generations to quiet temples away from the tourist crowds, I'll tailor our time to exactly what you're looking for.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Areas I Cover</h2>
              <div className="flex flex-wrap gap-2">
                {["Chandni Chowk", "Connaught Place", "Hauz Khas", "South Delhi"].map(area => (
                  <span key={area} className="bg-gray-100 px-4 py-2 rounded-full border border-gray-200 font-medium">{area}</span>
                ))}
              </div>
            </div>

            {/* Mock Reviews Section */}
            <div id="reviews" className="mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Star className="text-dark fill-dark" size={24} /> 4.98 (150 Reviews)
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white border border-gray-200 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Reviewer" className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-bold">David W.</h4>
                      <span className="text-xs text-gray-500">October 2023</span>
                    </div>
                  </div>
                  <p className="text-sm">"Arjun was incredible. He navigated the crazy streets of Old Delhi with ease and showed me the best food I've ever eaten."</p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Reviewer" className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-bold">Sarah T.</h4>
                      <span className="text-xs text-gray-500">September 2023</span>
                    </div>
                  </div>
                  <p className="text-sm">"Felt completely safe as a solo female traveler. We ended up just chatting over chai for hours like old friends."</p>
                </div>
              </div>
              <button className="mt-6 font-bold underline hover:text-pink-500">Show all 150 reviews</button>
            </div>
          </div>

          {/* Booking / Pricing Sidebar */}
          <div className="w-full md:w-[350px]">
            <div className="bg-white border flex flex-col items-stretch border-gray-200 rounded-3xl p-6 shadow-xl sticky top-24">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <span className="text-3xl font-black">$20</span>
                  <span className="text-gray-500 font-medium"> / hour</span>
                </div>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">Available Today</div>
              </div>

              <div className="border border-gray-300 rounded-xl mb-6 overflow-hidden">
                <div className="flex border-b border-gray-300">
                  <div className="flex-1 p-3 border-r border-gray-300">
                    <span className="block text-[10px] font-bold uppercase text-gray-500">Date</span>
                    <span className="font-medium">15 Nov 2024</span>
                  </div>
                  <div className="flex-1 p-3">
                    <span className="block text-[10px] font-bold uppercase text-gray-500">Start Time</span>
                    <span className="font-medium">10:00 AM</span>
                  </div>
                </div>
                <div className="p-3">
                  <span className="block text-[10px] font-bold uppercase text-gray-500">Duration</span>
                  <select className="w-full mt-1 bg-transparent font-medium outline-none">
                    <option>4 Hours (Half Day)</option>
                    <option>8 Hours (Full Day)</option>
                    <option>2 Hours (Quick Tour)</option>
                  </select>
                </div>
              </div>

              <Link to={`/book/${id}`} className="btn btn-primary w-full py-4 text-lg mb-4 text-center">Reserve</Link>
              
              <p className="text-center text-sm text-gray-500 mb-6">You won't be charged yet</p>
              
              <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                <span className="underline">$20 x 4 hours</span>
                <span>$80</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4 pb-4 border-b">
                <span className="underline">Platform fee</span>
                <span>$8</span>
              </div>
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total</span>
                <span>$88</span>
              </div>

              <button className="flex items-center justify-center gap-2 mt-6 py-3 border border-gray-300 rounded-xl font-bold hover:bg-gray-50 transition">
                <MessageCircle size={20} /> Message Arjun
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
