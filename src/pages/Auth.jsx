import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { SignIn, SignUp } from '@clerk/clerk-react';

export default function Auth() {
  const [role, setRole] = useState('traveler');
  const [isLogin, setIsLogin] = useState(true);

  const redirectUrl = role === 'traveler' ? '/dashboard/traveler' : '/dashboard/buddy';

  return (
    <div className="min-h-screen bg-light flex flex-col">
      <header className="p-6">
        <Link to="/" className="logo text-dark">
          <div className="logo-icon !bg-dark"><MapPin size={20} /></div>
          <span>LOCALBUDDY</span>
        </Link>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-4 pb-12">
        {/* Role Toggle */}
        <div className="flex bg-white shadow-sm border border-gray-200 rounded-xl mb-8 w-full max-w-sm p-1">
          <button 
            className={`flex-1 py-2 text-sm font-bold uppercase rounded-lg transition ${role === 'traveler' ? 'bg-gray-100 text-pink-500' : 'text-gray-500 hover:bg-gray-50'}`}
            onClick={() => setRole('traveler')}
          >
            I'm a Traveler
          </button>
          <button 
            className={`flex-1 py-2 text-sm font-bold uppercase rounded-lg transition ${role === 'buddy' ? 'bg-gray-100 text-blue-500' : 'text-gray-500 hover:bg-gray-50'}`}
            onClick={() => setRole('buddy')}
          >
            I'm a Buddy
          </button>
        </div>

        {/* Clerk Auth Component */}
        <div className="w-full max-w-md flex justify-center">
          {isLogin ? (
            <SignIn routing="hash" forceRedirectUrl={redirectUrl} />
          ) : (
            <SignUp routing="hash" forceRedirectUrl={redirectUrl} />
          )}
        </div>

        <button 
           onClick={() => setIsLogin(!isLogin)} 
           className="mt-6 font-bold underline text-gray-500 hover:text-dark"
        >
           {isLogin ? "Need an account? Sign up instead" : "Already have an account? Log in instead"}
        </button>
      </div>
    </div>
  );
}
