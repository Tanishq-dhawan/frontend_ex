import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Checkout() {
  const params = useParams();

  return (
    <div className="bg-light min-h-screen py-12">
      <div className="container max-w-4xl">
        <h1 className="text-3xl font-black mb-8">Confirm and Pay</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Checkout Form */}
          <div className="flex-1">
            
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
              <h2 className="text-xl font-bold mb-4">Your Trip Info</h2>
              <div className="flex justify-between mb-4">
                <div>
                  <p className="font-bold">Dates</p>
                  <p className="text-sm text-gray-600">Nov 15, 2024</p>
                </div>
                <button className="underline font-bold text-sm">Edit</button>
              </div>
              <div className="flex justify-between mb-4">
                <div>
                  <p className="font-bold">Time</p>
                  <p className="text-sm text-gray-600">10:00 AM - 2:00 PM (4 hours)</p>
                </div>
                <button className="underline font-bold text-sm">Edit</button>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">Travelers</p>
                  <p className="text-sm text-gray-600">1 Guest</p>
                </div>
                <button className="underline font-bold text-sm">Edit</button>
              </div>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 border-pink-500 bg-pink-50">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="accent-pink-500 w-4 h-4" defaultChecked />
                    <span className="font-bold">Credit / Debit Card</span>
                  </div>
                  <CreditCard className="text-gray-400" />
                </label>
                
                <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="accent-pink-500 w-4 h-4" />
                    <span className="font-bold">UPI (GPay, PhonePe)</span>
                  </div>
                </label>
              </div>

              {/* Card Details Mock */}
              <div className="mt-4 p-4 border border-gray-200 rounded-xl bg-gray-50">
                <input type="text" placeholder="Card Number" className="w-full p-3 mb-3 border border-gray-300 rounded-lg outline-none" />
                <div className="flex gap-3">
                  <input type="text" placeholder="MM/YY" className="w-1/2 p-3 border border-gray-300 rounded-lg outline-none" />
                  <input type="text" placeholder="CVV" className="w-1/2 p-3 border border-gray-300 rounded-lg outline-none" />
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
              <h2 className="text-xl font-bold mb-2">Cancellation Policy</h2>
              <p className="text-sm text-gray-600">
                Cancel before Nov 13 for a full refund. After that, cancel before the tour starts for a 50% refund, minus the platform fee.
              </p>
            </section>
            
            <Link to="/booking/confirmed" className="btn btn-primary w-full py-4 text-lg">Confirm and Pay • $88.00</Link>
          </div>
          
          {/* Order Summary Sidebar */}
          <div className="w-full md:w-[350px]">
            <div className="bg-white border flex flex-col items-stretch border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
              <div className="flex gap-4 mb-6 pb-6 border-b border-gray-200">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" className="w-20 h-20 rounded-xl object-cover" alt="Buddy" />
                <div>
                  <h3 className="font-bold">Tour with Arjun H.</h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" /> 4.98 (150 reviews)
                  </p>
                  <p className="text-xs text-gray-500 mt-1">New Delhi, India</p>
                </div>
              </div>

              <h3 className="font-bold mb-4">Price Details</h3>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                <span>$20 x 4 hours</span>
                <span>$80.00</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4 pb-4 border-b">
                <span>Platform fee</span>
                <span>$8.00</span>
              </div>
              <div className="flex justify-between items-center font-black text-lg mb-6">
                <span>Total (USD)</span>
                <span>$88.00</span>
              </div>
              
              <div className="bg-green-50 text-green-800 p-4 rounded-xl flex gap-3 items-start">
                 <ShieldCheck className="shrink-0 mt-0.5" size={20} />
                 <p className="text-xs font-medium">Your payment is secure. LocalBuddy holds your payment and only releases it to the buddy after your tour is completed successfully.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
