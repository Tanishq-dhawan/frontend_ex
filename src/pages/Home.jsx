import React, { useState } from 'react';
import { MapPin, Search, UserPlus, CalendarCheck, ThumbsUp, Globe, ShieldHalf, Languages, Wallet, Star, StarHalf } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const [location, setLocation] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  
  const popularCities = ["Mumbai", "Delhi", "Bangalore", "Goa", "Varanasi", "Jaipur", "Kochi", "Agra", "Udaipur"];
  const filteredCities = popularCities.filter(city => city.toLowerCase().includes(location.toLowerCase()));

  const handleSearch = () => {
    navigate(location ? `/search?loc=${encodeURIComponent(location)}` : '/search');
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-bg-curve"></div>
        <div className="container hero-content">
          <div className="badge-pill">
            <span className="badge-icon">✈</span> NEW REGION: GLOBAL ADVENTURE
          </div>
          
          <h1>TRAVEL ANYWHERE,<br/><span className="highlight">WITH A LOCAL</span><br/><span className="highlight">FRIEND</span></h1>
          
          <p className="hero-subtitle">
            Book trusted local guides by the hour in cities across India.<br/>
            Verified, rated, and ready when you are.
          </p>

          <div className="search-bar-wrapper relative z-50">
            <div className="search-bar">
              <MapPin className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Enter your destination" 
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setShowSuggestions(e.target.value.length > 0);
                }}
                onFocus={() => {
                  if (location.length > 0) setShowSuggestions(true);
                }}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button onClick={handleSearch} className="btn btn-primary btn-search">FIND BUDDY</button>
            </div>
            
            {showSuggestions && filteredCities.length > 0 && (
              <div className="absolute top-full left-0 w-full max-w-xl mx-auto bg-white mt-2 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden text-left">
                {filteredCities.map((city) => (
                  <div 
                    key={city} 
                    className="px-5 py-3 hover:bg-gray-50 cursor-pointer text-dark font-bold border-b border-gray-50 last:border-b-0 flex items-center gap-3 transition-colors"
                    onClick={() => {
                      setLocation(city);
                      setShowSuggestions(false);
                    }}
                  >
                    <div className="bg-pink-100 p-2 rounded-full text-pink-500">
                      <MapPin size={16} />
                    </div>
                    {city}, India
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="how-it-works padding-block">
        <div className="container">
          <h2 className="section-title text-center">HOW IT WORKS</h2>
          <div className="decorative-line"></div>
          
          <div className="steps-container">
            <div className="progress-line"></div>

            <div className="step-box">
              <div className="step-icon step-icon-pink">
                <UserPlus size={32} />
              </div>
              <h3>SUBSCRIBE</h3>
              <p>Join our community of travelers and get instant access to hundreds of verified guides.</p>
            </div>

            <div className="step-box">
              <div className="step-icon step-icon-yellow">
                <CalendarCheck size={32} />
              </div>
              <h3>REQUEST</h3>
              <p>Choose your buddy based on interests, languages, and ratings for your destination.</p>
            </div>

            <div className="step-box">
              <div className="step-icon step-icon-blue">
                <ThumbsUp size={32} />
              </div>
              <h3>REVIEW</h3>
              <p>Enjoy your tour and share your amazing experience with the community.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* MEET OUR TOP BUDDIES */}
      <section id="buddies" className="buddies-section padding-block">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="sub-label">EXPERT GUIDES</span>
              <h2 className="section-title text-white">MEET OUR TOP BUDDIES</h2>
            </div>
            <Link to="/search" className="btn btn-outline-white">VIEW ALL GUIDES</Link>
          </div>

          <div className="buddies-grid">
            {/* Cards */}
            {[
              { name: "ARJUN H.", img: "1507003211169-0a1dd7228f2d", price: "$20/HR", color: "yellow", desc: "Showing you the real Delhi, one alley at a time.", reviews: 150 },
              { name: "SARA M.", img: "1494790108377-be9c29b29330", price: "$25/HR", color: "pink", desc: "Culture, history, and the best cafe ops in town.", reviews: 89 },
              { name: "ROHAN S.", img: "1500648767791-00dcc994a43e", price: "BILINGUAL", color: "blue", desc: "Tech hubs to microbreweries - I've got you covered.", reviews: 214 },
              { name: "PRIYA N.", img: "1534528741775-53994a69daeb", price: "$18/HR", color: "yellow", desc: "Local bazaars and the most colorful haats.", reviews: 307 }
            ].map((buddy, i) => (
              <div className="buddy-card" key={i}>
                <div className="card-img-wrapper">
                  <span className={`badge badge-${buddy.color}`}>{buddy.price}</span>
                  <img src={`https://images.unsplash.com/photo-${buddy.img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`} alt={buddy.name} />
                </div>
                <div className="card-content">
                  <h3>{buddy.name}</h3>
                  <p className="card-quote">"{buddy.desc}"</p>
                  <div className="card-rating">
                    <span className="stars">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      {i === 0 ? <StarHalf size={14} fill="currentColor" /> : <Star size={14} fill="currentColor" />}
                    </span>
                    <span className="reviews">({buddy.reviews} Tours)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE LOCALBUDDY */}
      <section className="features-section padding-block">
        <div className="container features-grid">
          <div className="feature-image">
            <div className="orange-circle-badge">
              <div className="dashed-border"></div>
              <Globe className="globe-icon" size={96} />
              <Search className="search-zoom-icon" size={64} />
              <div className="safe-checked-badge">100%<br/>SAFE CHECKED</div>
            </div>
          </div>
          
          <div className="feature-content">
            <h2 className="section-title">WHY CHOOSE<br/><span className="text-pink">LOCALBUDDY?</span></h2>
            
            <ul className="feature-list">
              <li>
                <div className="feature-icon icon-yellow"><ShieldHalf size={24} /></div>
                <div className="feature-text">
                  <h3>VERIFIED PROFILES</h3>
                  <p>Every buddy undergoes a rigorous background check and identity verification process.</p>
                </div>
              </li>
              <li>
                <div className="feature-icon icon-pink"><Languages size={24} /></div>
                <div className="feature-text">
                  <h3>LANGUAGE SPECIALISTS</h3>
                  <p>Find buddies who speak your language, ensuring no cultural nuances are lost.</p>
                </div>
              </li>
              <li>
                <div className="feature-icon icon-blue"><Wallet size={24} /></div>
                <div className="feature-text">
                  <h3>TRANSPARENT PRICING</h3>
                  <p>Pay by the hour with no hidden fees. All transactions are securely handled inside our app.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* STORIES FROM OUR TRAVELERS */}
      <section className="testimonials-section padding-block">
        <div className="container">
          <h2 className="section-title text-center">STORIES FROM OUR TRAVELERS</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card border-blue">
              <div className="stars mb-1">
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
              </div>
              <p className="testimonial-quote">"My trip to Varanasi couldn't have been the same without Arjun; he took me to hidden temples and local eateries that no guidebook mentioned."</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="David Wilson" />
                <div className="author-info">
                  <h4>David Wilson</h4>
                  <span>Traveler from UK</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card border-pink">
              <div className="stars mb-1">
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
              </div>
              <p className="testimonial-quote">"As a solo female traveler, safety was my priority. Sara was not just a guide but felt like a friend who kept an eye on my back throughout Mumbai."</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Elena Rossi" />
                <div className="author-info">
                  <h4>Elena Rossi</h4>
                  <span>Traveler from Italy</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card border-yellow">
              <div className="stars mb-1">
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
                <Star size={16} fill="var(--color-yellow)" className="text-yellow" />
              </div>
              <p className="testimonial-quote">"The booking process was seamless. In Bangalore, Rohan showed me the best tech hubs and curated breweries. 10/10 experience!"</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Gary Thompson" />
                <div className="author-info">
                  <h4>Gary Thompson</h4>
                  <span>Traveler from Australia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section padding-block">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-content">
              <h2>READY FOR THE<br/>NEXT ADVENTURE?</h2>
              <p>Stop traveling like a tourist. Start exploring like a buddy.</p>
              <div className="cta-buttons">
                <Link to="/become-a-buddy" className="btn btn-dark">APPLY AS BUDDY</Link>
                <Link to="/search" className="btn btn-white">LEARN MORE</Link>
              </div>
            </div>
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
