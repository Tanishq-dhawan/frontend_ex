import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

export default function BuddyRegistration() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else navigate('/dashboard/buddy'); // on complete, go to dashboard
  };

  return (
    <div className="bg-light min-h-screen py-12">
      <div className="container max-w-2xl">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-bold text-gray-500 mb-2 uppercase">
            <span className={step >= 1 ? "text-blue-500" : ""}>Basic Info</span>
            <span className={step >= 2 ? "text-blue-500" : ""}>Details</span>
            <span className={step >= 3 ? "text-blue-500" : ""}>Verification</span>
            <span className={step >= 4 ? "text-blue-500" : ""}>Pricing</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex">
             <div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${(step / 4) * 100}%`}}></div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
          
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-black mb-2">Let's get started</h2>
              <p className="text-gray-500 mb-8">Basic info so travelers know who you are.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Legal Name (as on ID)</label>
                  <input type="text" className="w-full border p-3 rounded-xl outline-none focus:border-blue-500" placeholder="Arjun Haris" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email Address</label>
                  <input type="email" className="w-full border p-3 rounded-xl outline-none focus:border-blue-500" placeholder="arjun@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">City You Want to Guide In</label>
                  <select className="w-full border p-3 rounded-xl outline-none focus:border-blue-500">
                    <option>New Delhi</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                    <option>Varanasi</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-black mb-2">Your Profile Details</h2>
              <p className="text-gray-500 mb-8">What makes you a great local buddy?</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Languages Spoken</label>
                  <input type="text" className="w-full border p-3 rounded-xl outline-none focus:border-blue-500" placeholder="e.g. English, Hindi, French" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Short Bio (About Me)</label>
                  <textarea className="w-full border p-3 rounded-xl outline-none focus:border-blue-500 h-32" placeholder="Tell travelers about your background and what you love about your city..."></textarea>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-black mb-2">Identity Verification</h2>
              <p className="text-gray-500 mb-8">For the safety of our community, all buddies must be verified.</p>
              
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center bg-gray-50">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border mx-auto mb-4">
                  <Check className="text-green-500" />
                </div>
                <h3 className="font-bold mb-2">Upload Profile Photo</h3>
                <p className="text-sm text-gray-500 mb-4">Make sure your face is clearly visible.</p>
                <button className="btn bg-gray-200 text-dark mx-auto">Choose File</button>
              </div>

              <div className="mt-6 border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center bg-gray-50">
                  <h3 className="font-bold mb-2">Upload Government ID (Aadhaar/Passport)</h3>
                  <button className="btn bg-gray-200 text-dark mx-auto mt-2">Choose File</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-black mb-2">Set Your Pricing</h2>
              <p className="text-gray-500 mb-8">You can change this at any time later.</p>
              
              <div className="space-y-6">
                <div className="p-4 border border-gray-200 rounded-2xl bg-blue-50">
                  <label className="block text-sm font-bold mb-2 text-blue-900">Your Hourly Rate ($)</label>
                  <div className="flex items-center text-3xl font-black text-blue-600">
                    $ <input type="number" defaultValue="20" className="bg-transparent border-none outline-none w-24 ml-2" />
                  </div>
                  <p className="text-xs text-blue-700 mt-2">Note: LocalBuddy takes a 10% platform fee from bookings.</p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 flex justify-between items-center border-t border-gray-100 pt-6">
            {step > 1 ? (
              <button 
                onClick={() => setStep(step - 1)} 
                className="font-bold text-gray-500 hover:text-dark px-4 py-2"
              >
                Back
              </button>
            ) : <div></div>}
            
            <button 
              onClick={handleNext}
              className="btn bg-blue-500 text-white flex items-center gap-2 hover:bg-blue-600"
            >
              {step === 4 ? 'Submit Application' : 'Next Step'} <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
