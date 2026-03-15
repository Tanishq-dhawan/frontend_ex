import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo footer-logo">
            <div className="logo-icon"><MapPin size={20} /></div>
            <span>LOCALBUDDY</span>
          </Link>
          <p>Redefining urban tourism through authentic local connections and personalized experiences.</p>
        </div>
        
        <div className="footer-links">
          <h4 className="footer-title">QUICK LINKS</h4>
          <ul>
            <li><Link to="/#how">How it Works</Link></li>
            <li><Link to="/search">Find a Buddy</Link></li>
            <li><Link to="/become-a-buddy">Be a Buddy</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h4 className="footer-title">FOLLOW US</h4>
          <div className="social-icons">
            <a href="#"><Phone size={20} /></a>
            <a href="#"><Mail size={20} /></a>
            <a href="#"><Globe size={20} /></a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <p>&copy; 2024 Localbuddy, Inc. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
