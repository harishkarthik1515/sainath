import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { games } from '../data/mockData';
import { Trash2, Clock, Grid, List } from 'lucide-react';

const MyListPage: React.FC = () => {
  // Mock saved games (in a real app, this would come from a user's profile)
  const [savedGames, setSavedGames] = useState(games.slice(0, 5));
  const [recentlyViewed, setRecentlyViewed] = useState(games.slice(5, 10));
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const removeFromSaved = (gameId: string) => {
    setSavedGames(savedGames.filter(game => game.id !== gameId));
  };

  return (
    <div className="min-h-screen bg-game-black text-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-orbitron font-bold mb-8">My List</h1>
        
        {/* Saved Games */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-orbitron font-bold">Saved Games</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-game-purple' : 'bg-gray-800'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-game-purple' : 'bg-gray-800'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {savedGames.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {savedGames.map((game) => (
                  <div key={game.id} className="relative group">
                    <GameCard
                      id={game.id}
                      title={game.title}
                      coverImage={game.coverImage}
                      rating={game.rating}
                      platforms={game.platforms}
                    />
                    <button 
                      onClick={() => removeFromSaved(game.id)}
                      className="absolute top-2 right-2 bg-red-600 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {savedGames.map((game) => (
                  <div key={game.id} className="bg-game-black-light rounded-lg overflow-hidden flex">
                    <img 
                      src={game.coverImage} 
                      alt={game.title} 
                      className="w-24 h-32 object-cover"
                    />
                    <div className="p-4 flex-grow">
                      <div className="flex justify-between">
                        <Link to={`/game/${game.id}`} className="text-xl font-bold hover:text-game-purple">
                          {game.title}
                        </Link>
                        <button 
                          onClick={() => removeFromSaved(game.id)}
                          className="text-red-500 hover:text-red-400"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="flex items-center mt-1 mb-2">
                        <span className="text-yellow-400 mr-2">{game.rating.toFixed(1)}</span>
                        <div className="flex space-x-2">
                          {game.platforms.map((platform, index) => (
                            <span key={index} className="text-xs bg-gray-800 px-2 py-0.5 rounded">
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-2">
                        <Link to={`/game/${game.id}`} className="btn-primary text-sm py-1">
                          Play Now
                        </Link>
                        <Link to={`/game/${game.id}`} className="btn-secondary text-sm py-1">
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="bg-game-black-light rounded-lg p-8 text-center">
              <p className="text-xl text-gray-400 mb-4">Your list is empty</p>
              <Link to="/" className="btn-primary">
                Discover Games
              </Link>
            </div>
          )}
        </div>
        
        {/* Recently Viewed */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-orbitron font-bold flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Recently Viewed
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {recentlyViewed.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                title={game.title}
                coverImage={game.coverImage}
                rating={game.rating}
                platforms={game.platforms}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListPage;