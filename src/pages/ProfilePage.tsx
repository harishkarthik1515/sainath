import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { users, games } from '../data/mockData';
import { Edit, LogOut, Award, Clock, Heart, Settings, User as UserIcon } from 'lucide-react';
import GameCard from '../components/GameCard';

const ProfilePage: React.FC = () => {
  const user = users.currentUser;
  const recentlyPlayed = games.filter(game => user.recentlyPlayed.includes(game.id));
  
  const [activeTab, setActiveTab] = useState<'overview' | 'games' | 'settings'>('overview');

  return (
    <div className="min-h-screen bg-game-black text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Profile Header */}
        <div className="bg-game-black-light rounded-lg overflow-hidden mb-8">
          <div className="h-40 bg-gradient-to-r from-purple-900 to-indigo-900"></div>
          <div className="p-6 relative">
            <div className="absolute -top-16 left-6 border-4 border-game-black-light rounded-full overflow-hidden">
              <img 
                src={user.avatar} 
                alt={user.username} 
                className="w-32 h-32 object-cover"
              />
            </div>
            <div className="ml-40">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-orbitron font-bold">{user.username}</h1>
                <button className="btn-secondary flex items-center">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </button>
              </div>
              <p className="text-gray-400">Member since {new Date(user.joinDate).toLocaleDateString()}</p>
              <div className="flex space-x-4 mt-4">
                <div>
                  <span className="text-gray-400">Favorite Genres:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {user.favoriteGenres.map((genre, index) => (
                      <span key={index} className="bg-game-purple px-2 py-1 rounded text-sm">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-800 mb-8">
          <button 
            className={`py-3 px-6 font-medium ${activeTab === 'overview' ? 'text-game-purple border-b-2 border-game-purple' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('overview')}
          >
            <UserIcon className="inline-block mr-2 h-4 w-4" />
            Overview
          </button>
          <button 
            className={`py-3 px-6 font-medium ${activeTab === 'games' ? 'text-game-purple border-b-2 border-game-purple' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('games')}
          >
            <Heart className="inline-block mr-2 h-4 w-4" />
            My Games
          </button>
          <button 
            className={`py-3 px-6 font-medium ${activeTab === 'settings' ? 'text-game-purple border-b-2 border-game-purple' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings className="inline-block mr-2 h-4 w-4" />
            Settings
          </button>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-game-black-light rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-yellow-400 mr-2" />
                  <h3 className="text-xl font-bold">Achievements</h3>
                </div>
                <p className="text-3xl font-bold">247</p>
                <p className="text-gray-400">Across all games</p>
              </div>
              <div className="bg-game-black-light rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-400 mr-2" />
                  <h3 className="text-xl font-bold">Play Time</h3>
                </div>
                <p className="text-3xl font-bold">186h</p>
                <p className="text-gray-400">Last 30 days</p>
              </div>
              <div className="bg-game-black-light rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-6 w-6 text-red-400 mr-2" />
                  <h3 className="text-xl font-bold">Collection</h3>
                </div>
                <p className="text-3xl font-bold">42</p>
                <p className="text-gray-400">Games in library</p>
              </div>
            </div>
            
            {/* Recently Played */}
            <h2 className="text-2xl font-orbitron font-bold mb-4">Recently Played</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
              {recentlyPlayed.map((game) => (
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
            
            {/* Activity Feed */}
            <h2 className="text-2xl font-orbitron font-bold mb-4">Activity</h2>
            <div className="bg-game-black-light rounded-lg p-6">
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-game-purple flex items-center justify-center">
                      <Award className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">You earned the "Space Explorer" achievement in Stellar Odyssey</p>
                    <p className="text-gray-400 text-sm">2 days ago</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">You played Mythic Realms for 3 hours</p>
                    <p className="text-gray-400 text-sm">4 days ago</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                      <Heart className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">You added Neon Shadows to your collection</p>
                    <p className="text-gray-400 text-sm">1 week ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'games' && (
          <div>
            <h2 className="text-2xl font-orbitron font-bold mb-4">My Games</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {games.slice(0, 10).map((game) => (
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
        )}
        
        {activeTab === 'settings' && (
          <div className="bg-game-black-light rounded-lg p-6">
            <h2 className="text-2xl font-orbitron font-bold mb-6">Account Settings</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-1">Username</label>
                    <input 
                      type="text" 
                      value={user.username}
                      className="w-full bg-game-black border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-game-purple"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Email</label>
                    <input 
                      type="email" 
                      value={user.email}
                      className="w-full bg-game-black border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-game-purple"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-3">Password</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-1">Current Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full bg-game-black border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-game-purple"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">New Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full bg-game-black border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-game-purple"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-3">Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="emailNotifications" 
                      className="mr-2 h-4 w-4 accent-game-purple"
                      defaultChecked
                    />
                    <label htmlFor="emailNotifications">Email notifications</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="gameUpdates" 
                      className="mr-2 h-4 w-4 accent-game-purple"
                      defaultChecked
                    />
                    <label htmlFor="gameUpdates">Game updates and news</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="friendActivity" 
                      className="mr-2 h-4 w-4 accent-game-purple"
                      defaultChecked
                    />
                    <label htmlFor="friendActivity">Friend activity</label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between pt-4 border-t border-gray-800">
                <button className="btn-primary">Save Changes</button>
                <button className="flex items-center text-red-500 hover:text-red-400">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;