import React, { useState, useEffect } from 'react';
import { Play, Info, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeaturedGame } from '../types';

interface HeroCarouselProps {
  featuredGames: FeaturedGame[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ featuredGames }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredGames.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [featuredGames.length]);

  const currentGame = featuredGames[currentIndex];

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <img 
          src={currentGame.backgroundImage} 
          alt={currentGame.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-game-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-game-black via-transparent to-transparent opacity-70"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-2 text-white">{currentGame.title}</h1>
          
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-game-purple px-2 py-1 rounded text-sm font-medium">{currentGame.releaseYear}</span>
            <div className="flex items-center">
              <span className="text-yellow-400 font-bold">{currentGame.rating.toFixed(1)}</span>
              <span className="text-gray-400 ml-1">/ 10</span>
            </div>
            <div className="flex space-x-2">
              {currentGame.platforms.map((platform, index) => (
                <span key={index} className="text-gray-300 text-sm">{platform}</span>
              ))}
            </div>
          </div>
          
          <p className="text-gray-300 text-lg mb-6 line-clamp-3">{currentGame.description}</p>
          
          <div className="flex flex-wrap gap-4">
            <Link to={`/game/${currentGame.id}`} className="btn-primary flex items-center">
              <Play className="mr-2 h-5 w-5" />
              Play Now
            </Link>
            <Link to={`/game/${currentGame.id}`} className="btn-secondary flex items-center">
              <Info className="mr-2 h-5 w-5" />
              More Info
            </Link>
            <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 transition-colors duration-300">
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex space-x-2">
        {featuredGames.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-game-purple' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;