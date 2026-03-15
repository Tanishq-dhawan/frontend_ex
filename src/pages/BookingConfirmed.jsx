import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Calendar, MapPin, Download } from 'lucide-react';

export default function BookingConfirmed() {
  return (
    <div className="bg-light min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-white max-w-lg w-full rounded-3xl p-8 shadow-xl text-center border-t-8 border-t-pink-500">
        
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
          <CheckCircle2 size={48} />
        </div>
        
        <h1 className="text-3xl font-black mb-2">Booking Confirmed!</h1>
        <p className="text-gray-500 mb-8">You're all set for your next adventure.</p>

        <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8 border border-gray-200">
          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" className="w-16 h-16 rounded-full object-cover" alt="Arjun H." />
            <div>
              <p className="text-sm text-gray-500">Your Buddy</p>
              <h3 className="font-bold text-lg">Arjun H.</h3>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Calendar className="text-gray-400" size={20} />
              <div>
                <p className="font-bold text-sm">Friday, Nov 15, 2024</p>
                <p className="text-xs text-gray-500">10:00 AM (4 Hours)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-gray-400" size={20} />
              <div>
                <p className="font-bold text-sm">New Delhi, India</p>
                <p className="text-xs text-gray-500">Meeting point: Connaught Place</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <Link to="/dashboard/traveler" className="btn btn-primary w-full shadow-lg shadow-pink-200">VIEW IN DASHBOARD</Link>
          <button className="flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-dark font-bold hover:bg-gray-50 transition">
            <Download size={18} /> DOWNLOAD ITINERARY
          </button>
        </div>
        
      </div>
    </div>
  );
}
