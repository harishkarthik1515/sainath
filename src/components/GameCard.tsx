import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface GameCardProps {
  id: string;
  title: string;
  coverImage: string;
  rating: number;
  platforms: string[];
  size?: 'small' | 'medium' | 'large';
}

const GameCard: React.FC<GameCardProps> = ({ 
  id, 
  title, 
  coverImage, 
  rating, 
  platforms,
  size = 'medium' 
}) => {
  const sizeClasses = {
    small: 'w-36 h-52',
    medium: 'w-48 h-64',
    large: 'w-64 h-80'
  };

  return (
    <Link to={`/game/${id}`}>
      <div className={`game-card ${sizeClasses[size]} rounded-lg overflow-hidden bg-game-black-light m-2 relative`}>
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-white font-bold truncate">{title}</h3>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-sm text-gray-300">{rating.toFixed(1)}</span>
            </div>
            <div className="flex flex-wrap mt-1">
              {platforms.map((platform, index) => (
                <span key={index} className="text-xs bg-game-purple px-1.5 py-0.5 rounded mr-1 mt-1">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;