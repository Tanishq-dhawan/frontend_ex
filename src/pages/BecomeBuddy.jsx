import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ShieldCheck, MapPin, Clock } from 'lucide-react';

export default function BecomeBuddy() {
  const [hours, setHours] = useState(15);
  const [rate, setRate] = useState(25);

  return (
    <div className="bg-light min-h-screen">
      {/* Buddy Hero */}
      <section className="bg-dark text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500 rounded-bl-full opacity-20 transform translate-x-1/4 -translate-y-1/4 blur-3xl"></div>
        <div className="container relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Earn money showing off <span className="text-yellow-400">your city.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Set your own hours, set your own rates, and get paid to share the places you love with travelers from around the world.
            </p>
            <Link to="/register/buddy" className="btn bg-blue-500 text-white hover:bg-blue-600 px-8 py-4 text-lg shadow-xl shadow-blue-500/30">
              Apply Now
            </Link>
          </div>
          
          {/* Earnings Calculator Card */}
          <div className="w-full md:w-[400px]">
            <div className="bg-white rounded-3xl p-8 text-dark shadow-2xl relative border-t-8 border-t-blue-500">
              <div className="absolute -top-6 -right-6 bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center border-4 border-dark">
                <Calculator size={20} className="text-dark" />
              </div>
              
              <h3 className="font-black text-2xl mb-6">Calculate Earnings</h3>
              
              <div className="mb-6">
                <div className="flex justify-between font-bold mb-2">
                  <label>Hours per week</label>
                  <span>{hours} hrs</span>
                </div>
                <input 
                  type="range" 
                  min="5" max="40" step="1" 
                  value={hours} 
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full accent-blue-500" 
                />
              </div>

              <div className="mb-6">
                <div className="flex justify-between font-bold mb-2">
                  <label>Hourly Rate</label>
                  <span>${rate}</span>
                </div>
                <input 
                  type="range" 
                  min="10" max="60" step="5" 
                  value={rate} 
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-blue-500" 
                />
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center mt-8">
                <p className="text-sm font-bold text-gray-500 uppercase mb-1">Estimated Weekly Earnings</p>
                <div className="text-4xl font-black text-blue-500">${(hours * rate).toLocaleString()}</div>
                <p className="text-xs text-gray-400 mt-2">*Based on your inputs minus platform fees.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 container">
        <h2 className="text-3xl font-black text-center mb-16">Why guide with LocalBuddy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <Clock size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Total Flexibility</h3>
            <p className="text-gray-600">You are the boss. Only accept tours when you have free time. Work weekends, evenings, or full-time.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <Calculator size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Control Your Rates</h3>
            <p className="text-gray-600">Set your own hourly rate based on your expertise and language skills. Change it anytime.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Safe & Verified</h3>
            <p className="text-gray-600">Every traveler is verified and you have full control over who you accept. 24/7 support is always a tap away.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
