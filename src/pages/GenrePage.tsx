import React from 'react';
import { useParams, Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { getGenreById, getGamesByGenre } from '../data/mockData';
import { ArrowLeft, Filter } from 'lucide-react';

const GenrePage: React.FC = () => {
  const { genreId } = useParams<{ genreId: string }>();
  const genre = genreId ? getGenreById(genreId) : undefined;
  const games = genreId ? getGamesByGenre(genreId) : [];

  const [sortBy, setSortBy] = React.useState<'rating' | 'releaseDate'>('rating');

  const sortedGames = React.useMemo(() => {
    if (sortBy === 'rating') {
      return [...games].sort((a, b) => b.rating - a.rating);
    } else {
      return [...games].sort((a, b) => 
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
      );
    }
  }, [games, sortBy]);

  if (!genre) {
    return (
      <div className="min-h-screen bg-game-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Genre not found</h2>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-game-black text-white">
      {/* Genre Header */}
      <div className="relative h-80">
        <img 
          src={genre.image} 
          alt={genre.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-game-black via-game-black/70 to-transparent"></div>
        <div className="absolute top-0 left-0 p-6">
          <Link to="/" className="text-white hover:text-game-purple transition-colors duration-300">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-orbitron font-bold mb-2">{genre.name}</h1>
          <p className="text-gray-300 max-w-3xl">{genre.description}</p>
        </div>
      </div>

      {/* Games Grid */}
      <div className="container mx-auto px-6 py-8">
        {/* Filters */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-orbitron font-bold">Games</h2>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'rating' | 'releaseDate')}
              className="bg-game-black-light text-white border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:border-game-purple"
            >
              <option value="rating">Top Rated</option>
              <option value="releaseDate">Recently Added</option>
            </select>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {sortedGames.map((game) => (
            <div key={game.id}>
              <GameCard
                id={game.id}
                title={game.title}
                coverImage={game.coverImage}
                rating={game.rating}
                platforms={game.platforms}
                size="medium"
              />
            </div>
          ))}
        </div>

        {sortedGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No games found in this genre.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenrePage;