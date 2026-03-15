import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Map, Filter, Star, StarHalf, MapPin } from 'lucide-react';

const mockBuddies = [
  { id: 1, name: "Arjun H.", price: 20, rating: 4.5, reviews: 150, img: "1507003211169-0a1dd7228f2d", tags: ["History", "Food"], lang: "English, Hindi" },
  { id: 2, name: "Sara M.", price: 25, rating: 5.0, reviews: 89, img: "1494790108377-be9c29b29330", tags: ["Nightlife", "Shopping"], lang: "English, French" },
  { id: 3, name: "Rohan S.", price: 18, rating: 4.8, reviews: 214, img: "1500648767791-00dcc994a43e", tags: ["Tech", "Pubs"], lang: "English, Kannada" },
  { id: 4, name: "Priya N.", price: 15, rating: 4.9, reviews: 307, img: "1534528741775-53994a69daeb", tags: ["Culture", "Local Areas"], lang: "English, Tamil" },
  { id: 5, name: "Vikram K.", price: 22, rating: 4.7, reviews: 112, img: "1506794778202-cad84cf45f1d", tags: ["Photography", "Architecture"], lang: "English" },
  { id: 6, name: "Neha P.", price: 28, rating: 4.6, reviews: 45, img: "1544005313-94ddf0286df2", tags: ["Luxury", "Shopping"], lang: "English, Hindi" },
];

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialLoc = searchParams.get('loc') || 'Mumbai';
  
  const [location, setLocation] = useState(initialLoc);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const popularCities = ["Mumbai", "Delhi", "Bangalore", "Goa", "Varanasi", "Jaipur", "Kochi", "Agra", "Udaipur"];
  const filteredCities = popularCities.filter(city => city.toLowerCase().includes(location.toLowerCase()));

  const handleSearch = () => {
    setSearchParams(location ? { loc: location } : {});
    setShowSuggestions(false);
  };
  
  const displayLocation = searchParams.get('loc') || 'Mumbai';

  return (
    <div className="search-page bg-light min-h-screen pb-12">
      {/* Search Header */}
      <div className="bg-dark text-white py-8">
        <div className="container">
          <div className="search-bar-wrapper mx-auto mt-0 max-w-3xl">
            <div className="search-bar relative">
              
              <div className="flex-1 relative border-r border-gray-200 pr-4 flex items-center h-full">
                <input 
                  type="text" 
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
                  className="font-bold w-full outline-none bg-transparent text-dark" 
                  placeholder="Where to?"
                />
                
                {showSuggestions && filteredCities.length > 0 && (
                  <div className="absolute top-full left-0 w-full min-w-[250px] bg-white mt-4 rounded-xl shadow-xl border border-gray-100 overflow-hidden text-left z-[100]">
                    {filteredCities.map((city) => (
                      <div 
                        key={city} 
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-dark font-medium border-b border-gray-50 last:border-b-0 flex items-center gap-2"
                        onClick={() => {
                          setLocation(city);
                          setShowSuggestions(false);
                        }}
                      >
                        <MapPin size={16} className="text-pink-500" />
                        {city}, India
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <input type="date" className="flex-1 px-4 border-none outline-none text-dark bg-transparent" />
              <button onClick={handleSearch} className="btn btn-primary px-6 rounded-r-pill ml-2">SEARCH</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">14 Buddies found in {displayLocation}</h1>
          <button 
            onClick={() => setShowMap(!showMap)} 
            className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-full font-bold hover:bg-gray-50 transition"
          >
            {showMap ? <Filter size={18} /> : <Map size={18} />}
            {showMap ? "Show List" : "Show Map"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-fit">
            <h3 className="font-heading font-bold mb-4 border-b pb-2">FILTERS</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-sm mb-3">Price Range (per hour)</h4>
              <input type="range" className="w-full accent-pink-500" min="10" max="100" />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$10</span>
                <span>$100+</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-sm mb-3">Languages</h4>
              {["English", "Hindi", "French", "Spanish"].map(lang => (
                <label key={lang} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input type="checkbox" className="rounded accent-pink-500 w-4 h-4" />
                  <span className="text-sm">{lang}</span>
                </label>
              ))}
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-sm mb-3">Interests</h4>
              {["Food & Dining", "History", "Nightlife", "Shopping"].map(int => (
                <label key={int} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input type="checkbox" className="rounded accent-pink-500 w-4 h-4" />
                  <span className="text-sm">{int}</span>
                </label>
              ))}
            </div>
          </aside>

          {/* Grid Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockBuddies.map(buddy => (
                <Link to={`/buddy/${buddy.id}`} key={buddy.id} className="buddy-card bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 transition duration-300 border border-transparent hover:border-pink-200">
                  <div className="relative h-48 p-2">
                    <span className="absolute top-4 right-4 bg-yellow-400 text-dark font-bold text-xs px-3 py-1 rounded-full z-10">${buddy.price}/hr</span>
                    <img src={`https://images.unsplash.com/photo-${buddy.img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`} alt={buddy.name} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{buddy.name}</h3>
                      <div className="flex items-center text-sm font-bold gap-1 bg-gray-50 px-2 py-1 rounded-md">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" /> 
                        {buddy.rating}
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-500 mb-3">{buddy.lang}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {buddy.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase bg-pink-50 text-pink-600 px-2 py-1 rounded-md">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Pagination Placeholder */}
            <div className="flex justify-center mt-12 gap-2">
              <button className="w-10 h-10 rounded-full bg-dark text-white font-bold">1</button>
              <button className="w-10 h-10 rounded-full bg-white text-dark font-bold hover:bg-gray-100">2</button>
              <button className="w-10 h-10 rounded-full bg-white text-dark font-bold hover:bg-gray-100">3</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
