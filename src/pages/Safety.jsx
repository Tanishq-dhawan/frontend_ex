import React from 'react';
import { ShieldCheck, MapPin, UserCheck, AlertTriangle } from 'lucide-react';

export default function Safety() {
  return (
    <div className="bg-light min-h-screen">
      <div className="bg-green-50 py-16 text-center border-b border-green-100">
        <div className="container">
          <ShieldCheck size={64} className="text-green-500 mx-auto mb-6" />
          <h1 className="text-5xl font-black text-dark mb-4">Your safety is our priority.</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've built LocalBuddy from the ground up to ensure that every experience is secure, verified, and entirely safe.
          </p>
        </div>
      </div>

      <div className="container py-16 max-w-4xl">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center shrink-0">
              <UserCheck size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">100% Verified Profiles</h3>
              <p className="text-gray-600 leading-relaxed">
                Before anyone can become a Buddy on our platform, they must pass a rigorous identity verification process. This includes uploading a government-issued ID (like Aadhaar or a Passport) which is checked against global databases by our verification partners. We know exactly who our buddies are.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center shrink-0">
              <MapPin size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Live GPS Journey Sharing</h3>
              <p className="text-gray-600 leading-relaxed">
                During your tour, our app provides a secure "Share My Trip" link. You can send this link to friends or family back home, allowing them to track your exact GPS location in real-time as you explore the city with your buddy.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center shrink-0">
              <AlertTriangle size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">In-App SOS Button</h3>
              <p className="text-gray-600 leading-relaxed">
                We hope you never have to use it, but every booking screen features an SOS emergency button. Tapping this immediately alerts our 24/7 trust and safety team, shares your live location with local authorities, and immediately cancels the tour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
