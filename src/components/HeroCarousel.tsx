import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, Plus, Star, Calendar, User, Building, Share2, Trophy } from 'lucide-react';
import { FeaturedGame } from '../types';

interface HeroCarouselProps {
  featuredGames: FeaturedGame[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ featuredGames }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === featuredGames.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [featuredGames.length]);

  const currentGame = featuredGames[currentIndex];

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
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
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-4">
            {currentGame.genres.map((genre, index) => (
              <span key={index} className="bg-game-purple/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-game-purple/30">
                {genre}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-7xl font-orbitron font-bold mb-2 text-white">
            {currentGame.title}
          </h1>
          
          <div className="flex items-center space-x-6 mb-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              <span className="text-xl font-bold">{currentGame.rating.toFixed(1)}</span>
              <span className="text-gray-400 ml-1">/ 10</span>
            </div>
            
            <div className="flex items-center text-gray-300">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{new Date(currentGame.releaseDate).toLocaleDateString()}</span>
            </div>
            
            <div className="flex items-center text-gray-300">
              <User className="h-4 w-4 mr-2" />
              <span>{currentGame.developer}</span>
            </div>
            
            <div className="flex items-center text-gray-300">
              <Building className="h-4 w-4 mr-2" />
              <span>{currentGame.publisher}</span>
            </div>
          </div>
          
          <p className="text-gray-300 text-lg mb-8 line-clamp-3 max-w-3xl">
            {currentGame.description}
          </p>
          
          {currentGame.features && (
            <div className="flex flex-wrap gap-3 mb-8">
              {currentGame.features.map((feature, index) => (
                <span key={index} className="bg-gray-800/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {feature}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              to={`/game/${currentGame.id}`} 
              className="btn-primary flex items-center group relative overflow-hidden"
            >
              <Play className="mr-2 h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
              Play Now
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
            
            <Link 
              to={`/game/${currentGame.id}`} 
              className="btn-secondary flex items-center group"
            >
              <Info className="mr-2 h-5 w-5" />
              More Info
            </Link>
            
            <button className="bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700 text-white rounded-full p-3 transition-colors duration-300 group">
              <Plus className="h-5 w-5 transform group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            <button className="bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700 text-white rounded-full p-3 transition-colors duration-300">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Achievements Preview */}
      {currentGame.achievements && (
        <div className="absolute top-1/2 right-16 transform -translate-y-1/2 bg-black/40 backdrop-blur-md rounded-lg p-4 border border-gray-700/30 hidden lg:block">
          <div className="flex items-center mb-3">
            <Trophy className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="font-semibold">Achievements</span>
          </div>
          <div className="space-y-3">
            {currentGame.achievements.slice(0, 3).map((achievement) => (
              <div key={achievement.id} className="flex items-start space-x-3">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center
                  ${achievement.rarity === 'Legendary' ? 'bg-yellow-500/20' : 
                    achievement.rarity === 'Epic' ? 'bg-purple-500/20' : 
                    achievement.rarity === 'Rare' ? 'bg-blue-500/20' : 
                    'bg-gray-500/20'}
                `}>
                  <Trophy className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-sm">{achievement.name}</p>
                  <p className="text-xs text-gray-400">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* System Requirements Preview */}
      {currentGame.systemRequirements && (
        <div className="absolute bottom-0 right-0 max-w-sm bg-black/40 backdrop-blur-md p-4 hidden xl:block">
          <h3 className="font-semibold mb-2">System Requirements</h3>
          <div className="text-sm text-gray-300">
            <p>OS: {currentGame.systemRequirements.recommended.os}</p>
            <p>CPU: {currentGame.systemRequirements.recommended.processor}</p>
            <p>GPU: {currentGame.systemRequirements.recommended.graphics}</p>
          </div>
        </div>
      )}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {featuredGames.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 500);
            }}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-game-purple w-16' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;