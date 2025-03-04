import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { communityPosts, users } from '../data/mockData';
import { MessageSquare, Heart, Share2, Filter, Search, Plus } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'trending' | 'recent' | 'following'>('trending');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = communityPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-game-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-orbitron font-bold">Community</h1>
          <button className="btn-primary flex items-center">
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </button>
        </div>
        
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <button 
              className={`px-4 py-2 rounded-full ${activeFilter === 'trending' ? 'bg-game-purple' : 'bg-gray-800'}`}
              onClick={() => setActiveFilter('trending')}
            >
              Trending
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activeFilter === 'recent' ? 'bg-game-purple' : 'bg-gray-800'}`}
              onClick={() => setActiveFilter('recent')}
            >
              Recent
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activeFilter === 'following' ? 'bg-game-purple' : 'bg-gray-800'}`}
              onClick={() => setActiveFilter('following')}
            >
              Following
            </button>
          </div>
          
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-game-black-light border border-gray-700 rounded-full py-2 px-4 pl-10 text-white focus:outline-none focus:border-game-purple"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
        
        {/* Posts */}
        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div key={post.id} className="bg-game-black-light rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={post.userAvatar} 
                      alt={post.username} 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-bold">{post.username}</h4>
                      <p className="text-gray-400 text-sm">{new Date(post.date).toLocaleDateString()}</p>
                    </div>
                    {post.gameTitle && (
                      <Link to={`/game/${post.gameId}`} className="ml-auto bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors duration-300">
                        {post.gameTitle}
                      </Link>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.content}</p>
                  
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-400 hover:text-game-purple transition-colors duration-300">
                      <Heart className="h-5 w-5 mr-1" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center text-gray-400 hover:text-game-purple transition-colors duration-300">
                      <MessageSquare className="h-5 w-5 mr-1" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center text-gray-400 hover:text-game-purple transition-colors duration-300">
                      <Share2 className="h-5 w-5 mr-1" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
                
                {/* Comments Preview (first 2) */}
                <div className="bg-game-black bg-opacity-50 p-4 border-t border-gray-800">
                  <div className="mb-4">
                    <div className="flex items-start mb-3">
                      <img 
                        src={users.currentUser.avatar} 
                        alt={users.currentUser.username} 
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <h5 className="font-bold text-sm">{users.currentUser.username}</h5>
                        <p className="text-gray-300 text-sm">Great find! I'll check this out tonight.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <img 
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                        alt="LegendHunter" 
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <h5 className="font-bold text-sm">LegendHunter</h5>
                        <p className="text-gray-300 text-sm">Thanks for sharing this! I was stuck on this part.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <img 
                      src={users.currentUser.avatar} 
                      alt={users.currentUser.username} 
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <input 
                      type="text" 
                      placeholder="Add a comment..." 
                      className="flex-grow bg-game-black border border-gray-700 rounded-full py-1.5 px-4 text-white focus:outline-none focus:border-game-purple"
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-game-black-light rounded-lg p-8 text-center">
              <p className="text-xl text-gray-400 mb-4">No posts found</p>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="btn-primary"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage