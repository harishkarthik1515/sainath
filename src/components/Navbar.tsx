import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TowerControl as GameController, Search, User, Menu, X, Heart, Users, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="bg-game-black py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <GameController className="h-8 w-8 text-game-purple" />
            <span className="text-2xl font-orbitron font-bold text-white">GameFlix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              <Home className="inline-block mr-1 h-4 w-4" />
              Home
            </Link>
            <Link to="/my-list" className={`nav-link ${isActive('/my-list')}`}>
              <Heart className="inline-block mr-1 h-4 w-4" />
              My List
            </Link>
            <Link to="/community" className={`nav-link ${isActive('/community')}`}>
              <Users className="inline-block mr-1 h-4 w-4" />
              Community
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link to="/profile" className="text-gray-300 hover:text-white transition-colors duration-300">
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games..."
                className="w-full bg-game-black-light border border-gray-700 rounded-full py-2 px-4 pl-10 text-white focus:outline-none focus:border-game-purple"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-game-black-light rounded-lg p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-white py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="inline-block mr-2 h-5 w-5" />
                Home
              </Link>
              <Link 
                to="/my-list" 
                className="text-gray-300 hover:text-white py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="inline-block mr-2 h-5 w-5" />
                My List
              </Link>
              <Link 
                to="/community" 
                className="text-gray-300 hover:text-white py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="inline-block mr-2 h-5 w-5" />
                Community
              </Link>
              <Link 
                to="/profile" 
                className="text-gray-300 hover:text-white py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="inline-block mr-2 h-5 w-5" />
                Profile
              </Link>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search games..."
                  className="w-full bg-game-black border border-gray-700 rounded-full py-2 px-4 pl-10 text-white focus:outline-none focus:border-game-purple"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;