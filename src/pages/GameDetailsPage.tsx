import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFeaturedGameById, getReviewsByGameId } from '../data/mockData';
import { ArrowLeft, Play, Plus, Star, Calendar, User, Building, Share2 } from 'lucide-react';

const GameDetailsPage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = gameId ? getFeaturedGameById(gameId) : undefined;
  const reviews = gameId ? getReviewsByGameId(gameId) : [];

  const [isInList, setIsInList] = React.useState(false);

  if (!game) {
    return (
      <div className="min-h-screen bg-game-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Game not found</h2>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-game-black text-white">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <img 
          src={game.backgroundImage} 
          alt={game.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-game-black via-game-black/50 to-transparent"></div>
        <div className="absolute top-0 left-0 p-6">
          <Link to="/" className="text-white hover:text-game-purple transition-colors duration-300">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">{game.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center bg-game-purple px-3 py-1 rounded-full">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="font-bold">{game.rating.toFixed(1)}</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{new Date(game.releaseDate).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <User className="h-4 w-4 mr-1" />
                <span>{game.developer}</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Building className="h-4 w-4 mr-1" />
                <span>{game.publisher}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {game.platforms.map((platform, index) => (
                <span key={index} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  {platform}
                </span>
              ))}
              {game.genres.map((genre, index) => (
                <span key={index} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  {genre}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Play Now
              </button>
              <button 
                className={`flex items-center ${isInList ? 'bg-purple-700' : 'bg-gray-800'} hover:bg-purple-600 text-white rounded-full p-3 transition-colors duration-300`}
                onClick={() => setIsInList(!isInList)}
              >
                <Plus className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 transition-colors duration-300">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Game Details */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-orbitron font-bold mb-4">About</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">{game.description}</p>
            
            {/* Screenshots */}
            <h2 className="text-2xl font-orbitron font-bold mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <img 
                src={`https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80`} 
                alt={`${game.title} screenshot 1`} 
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src={`https://images.unsplash.com/photo-1496979551903-46e46589a88b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80`} 
                alt={`${game.title} screenshot 2`} 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            
            {/* Reviews */}
            <h2 className="text-2xl font-orbitron font-bold mb-4">Reviews</h2>
            {reviews.length > 0 ? (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-game-black-light p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <img 
                        src={review.userAvatar} 
                        alt={review.username} 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-bold">{review.username}</h4>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm">{review.rating.toFixed(1)}</span>
                          <span className="text-gray-400 text-sm ml-2">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300">{review.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No reviews yet. Be the first to review this game!</p>
            )}
            
            {/* Add Review Form */}
            <div className="mt-8 bg-game-black-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Write a Review</h3>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Rating</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="h-6 w-6 text-gray-500 hover:text-yellow-400 cursor-pointer" 
                    />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Review</label>
                <textarea 
                  className="w-full bg-game-black border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-game-purple"
                  rows={4}
                  placeholder="Share your thoughts about this game..."
                ></textarea>
              </div>
              <button className="btn-primary">Submit Review</button>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-game-black-light p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">Game Info</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">Developer:</span>
                  <span className="block">{game.developer}</span>
                </div>
                <div>
                  <span className="text-gray-400">Publisher:</span>
                  <span className="block">{game.publisher}</span>
                </div>
                <div>
                  <span className="text-gray-400">Release Date:</span>
                  <span className="block">{new Date(game.releaseDate).toLocaleDateString()}</span>
                </div>
                <div>
                  <span className="text-gray-400">Platforms:</span>
                  <span className="block">{game.platforms.join(', ')}</span>
                </div>
                <div>
                  <span className="text-gray-400">Genres:</span>
                  <span className="block">{game.genres.join(', ')}</span>
                </div>
              </div>
            </div>
            
            {/* Similar Games */}
            <div className="bg-game-black-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Similar Games</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((index) => {
                  const similarGameId = ((parseInt(game.id) + index) % 10 || 1).toString();
                  const similarGame = getFeaturedGameById(similarGameId);
                  
                  if (!similarGame) return null;
                  
                  return (
                    <Link key={index} to={`/game/${similarGameId}`} className="flex hover:bg-game-black-light/50 p-2 rounded-lg transition-colors duration-300">
                      <img 
                        src={similarGame.coverImage} 
                        alt={similarGame.title} 
                        className="w-16 h-20 object-cover rounded-md mr-3"
                      />
                      <div>
                        <h4 className="font-bold">{similarGame.title}</h4>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 mr-1" />
                          <span className="text-sm text-gray-300">{similarGame.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPage;