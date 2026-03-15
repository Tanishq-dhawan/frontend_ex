import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Menu, X } from 'lucide-react';
import { Show, UserButton, SignInButton, SignUpButton } from "@clerk/react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <div className="logo-icon"><MapPin size={20} /></div>
          <span>LOCALBUDDY</span>
        </Link>
        
        <nav className={`desktop-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/#how" onClick={() => setIsMobileMenuOpen(false)}>HOW IT WORKS</Link>
          <Link to="/#buddies" onClick={() => setIsMobileMenuOpen(false)}>MEET OUR BUDDIES</Link>
          <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>PRICING</Link>
          
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="text-white hover:text-yellow-400 font-bold text-sm uppercase mr-4" onClick={() => setIsMobileMenuOpen(false)}>LOG IN</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="btn btn-primary btn-signup" onClick={() => setIsMobileMenuOpen(false)}>SIGN UP</button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </nav>

        <button 
          className="mobile-toggle" 
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
