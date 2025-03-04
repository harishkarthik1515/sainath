import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TowerControl as GameController, Mail, Lock, User, Github, ToggleLeft as Google, Facebook } from 'lucide-react';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle authentication
    console.log('Form submitted:', { email, password, username });
  };

  return (
    <div className="min-h-screen bg-game-black flex items-center justify-center p-6">
      <div className="bg-game-black-light rounded-lg shadow-xl overflow-hidden w-full max-w-md">
        <div className="p-8">
          <div className="flex justify-center mb-8">
            <Link to="/" className="flex items-center space-x-2">
              <GameController className="h-10 w-10 text-game-purple" />
              <span className="text-3xl font-orbitron font-bold text-white">GameFlix</span>
            </Link>
          </div>

          <h2 className="text-2xl font-orbitron font-bold text-center mb-6">
            {isLogin ? 'Sign In to Your Account' : 'Create Your Account'}
          </h2>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-300 mb-2">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-game-black border border-gray-700 rounded-md py-3 px-4 pl-10 text-white focus:outline-none focus:border-game-purple"
                    placeholder="Choose a username"
                    required
                  />
                </div>
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-game-black border border-gray-700 rounded-md py-3 px-4 pl-10 text-white focus:outline-none focus:border-game-purple"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-game-black border border-gray-700 rounded-md py-3 px-4 pl-10 text-white focus:outline-none focus:border-game-purple"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {!isLogin && (
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-300 mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-game-black border border-gray-700 rounded-md py-3 px-4 pl-10 text-white focus:outline-none focus:border-game-purple"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex justify-end mb-6">
                <Link to="/forgot-password" className="text-game-purple hover:text-purple-400 text-sm">
                  Forgot Password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-game-purple hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-game-purple hover:text-purple-400"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-game-black-light text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex justify-center items-center py-2 px-4 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors duration-300">
                <Google className="h-5 w-5 text-red-500" />
              </button>
              <button className="flex justify-center items-center py-2 px-4 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors duration-300">
                <Facebook className="h-5 w-5 text-blue-500" />
              </button>
              <button className="flex justify-center items-center py-2 px-4 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors duration-300">
                <Github className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;