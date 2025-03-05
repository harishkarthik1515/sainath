import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Trophy } from 'lucide-react';

interface GameCardProps {
  id: string;
  title: string;
  coverImage: string;
  rating: number;
  platforms: string[];
  size?: 'small' | 'medium' | 'large';
  showAchievements?: boolean;
  achievementCount?: number;
  isInList?: boolean;
  onToggleList?: () => void;
  playTime?: string;
}

const GameCard: React.FC<GameCardProps> = ({ 
  id, 
  title, 
  coverImage, 
  rating, 
  platforms,
  size = 'medium',
  showAchievements = false,
  achievementCount = 0,
  isInList = false,
  onToggleList,
  playTime 
}) => {
  const sizeClasses = {
    small: 'w-36 h-52',
    medium: 'w-48 h-64',
    large: 'w-64 h-80'
  };

  return (
    <Link to={`/game/${id}`} className="group">
      <div className={`game-card ${sizeClasses[size]} rounded-lg overflow-hidden bg-game-black-light m-2 relative`}>
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-white font-bold truncate group-hover:text-game-purple transition-colors duration-300">
              {title}
            </h3>
            
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm text-gray-300">{rating.toFixed(1)}</span>
              </div>
              
              {onToggleList && (
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    onToggleList();
                  }}
                  className={`p-1.5 rounded-full transition-colors duration-300 ${
                    isInList ? 'bg-game-purple text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  <Heart className="h-4 w-4" fill={isInList ? 'currentColor' : 'none'} />
                </button>
              )}
            </div>
            
            <div className="flex flex-wrap mt-1">
              {platforms.map((platform, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-game-purple px-1.5 py-0.5 rounded mr-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"
                >
                  {platform}
                </span>
              ))}
            </div>
            
            {(showAchievements || playTime) && (
              <div className="flex items-center justify-between mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {showAchievements && (
                  <div className="flex items-center text-xs text-gray-300">
                    <Trophy className="h-3 w-3 text-yellow-400 mr-1" />
                    <span>{achievementCount}</span>
                  </div>
                )}
                {playTime && (
                  <div className="text-xs text-gray-300">
                    {playTime}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-game-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>
    </Link>
  );
};

export default GameCard;