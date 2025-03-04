import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import GameCarousel from '../components/GameCarousel';
import { featuredGames, games, genres } from '../data/mockData';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HomePage: React.FC = () => {
  // Filter games by genre
  const getGamesByGenre = (genreName: string) => {
    return games.filter(game => game.genres.includes(genreName));
  };

  // Get recently added games (using the most recent release dates)
  const recentlyAddedGames = [...games].sort((a, b) => 
    new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
  ).slice(0, 10);

  // Get top rated games
  const topRatedGames = [...games].sort((a, b) => b.rating - a.rating).slice(0, 10);

  return (
    <div className="min-h-screen bg-game-black text-white">
      {/* Hero Carousel */}
      <HeroCarousel featuredGames={featuredGames} />
      
      {/* Recently Added Games */}
      <div className="container mx-auto px-4">
        <GameCarousel 
          title="Recently Added" 
          games={recentlyAddedGames} 
        />
        
        {/* Top Rated Games */}
        <GameCarousel 
          title="Top Rated" 
          games={topRatedGames} 
        />
        
        {/* Browse by Genre */}
        <div className="my-12">
          <div className="flex justify-between items-center mb-6 px-6">
            <h2 className="text-2xl font-orbitron font-bold">Browse by Genre</h2>
            <Link to="/genres" className="text-game-purple hover:text-purple-400 flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-6">
            {genres.map((genre) => (
              <Link 
                key={genre.id} 
                to={`/genre/${genre.id}`}
                className="relative overflow-hidden rounded-lg group"
              >
                <img 
                  src={genre.image} 
                  alt={genre.name} 
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg">{genre.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Genre-specific Carousels */}
        {genres.slice(0, 3).map((genre) => (
          <GameCarousel 
            key={genre.id}
            title={genre.name} 
            games={getGamesByGenre(genre.name)} 
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;