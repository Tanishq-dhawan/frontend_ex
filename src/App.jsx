import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Search from './pages/Search';
import BuddyProfile from './pages/BuddyProfile';
import Checkout from './pages/Checkout';
import BookingConfirmed from './pages/BookingConfirmed';
import TravelerDashboard from './pages/TravelerDashboard';
import BecomeBuddy from './pages/BecomeBuddy';
import BuddyRegistration from './pages/BuddyRegistration';
import BuddyDashboard from './pages/BuddyDashboard';
import Safety from './pages/Safety';

import './index.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/buddy/:id" element={<BuddyProfile />} />
            <Route path="/book/:id" element={<Checkout />} />
            <Route path="/booking/confirmed" element={<BookingConfirmed />} />
            <Route path="/dashboard/traveler" element={<TravelerDashboard />} />
            <Route path="/become-a-buddy" element={<BecomeBuddy />} />
            <Route path="/register/buddy" element={<BuddyRegistration />} />
            <Route path="/dashboard/buddy" element={<BuddyDashboard />} />
            
            {/* Informational */}
            <Route path="/safety" element={<Safety />} />
            {/* Placeholders for others */}
            <Route path="/pricing" element={<div className="container py-24 text-center"><h1 className="text-4xl font-black mb-4">Pricing</h1><p>Under Construction</p></div>} />
            <Route path="/about" element={<div className="container py-24 text-center"><h1 className="text-4xl font-black mb-4">About Us</h1><p>Under Construction</p></div>} />
            <Route path="/faq" element={<div className="container py-24 text-center"><h1 className="text-4xl font-black mb-4">FAQ</h1><p>Under Construction</p></div>} />
            <Route path="/contact" element={<div className="container py-24 text-center"><h1 className="text-4xl font-black mb-4">Contact</h1><p>Under Construction</p></div>} />
            <Route path="/terms" element={<div className="container py-24 text-center"><h1 className="text-4xl font-black mb-4">Terms</h1><p>Under Construction</p></div>} />
            <Route path="/privacy" element={<div className="container py-24 text-center"><h1 className="text-4xl font-black mb-4">Privacy Policy</h1><p>Under Construction</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
