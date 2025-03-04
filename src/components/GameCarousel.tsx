import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GameCard from './GameCard';
import { Game } from '../types';

interface GameCarouselProps {
  title: string;
  games: Game[];
  cardSize?: 'small' | 'medium' | 'large';
}

const GameCarousel: React.FC<GameCarouselProps> = ({ title, games, cardSize = 'medium' }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === 'left' 
        ? -current.clientWidth * 0.75 
        : current.clientWidth * 0.75;
      
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-orbitron font-bold mb-4 px-6">{title}</h2>
      <div className="relative group">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <div 
          ref={carouselRef}
          className="carousel flex overflow-x-auto py-2 px-6 space-x-4 scrollbar-hide"
        >
          {games.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              coverImage={game.coverImage}
              rating={game.rating}
              platforms={game.platforms}
              size={cardSize}
            />
          ))}
        </div>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default GameCarousel;