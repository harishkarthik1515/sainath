export interface Game {
  id: string;
  title: string;
  coverImage: string;
  rating: number;
  platforms: string[];
  genres: string[];
  releaseDate: string;
  developer: string;
  publisher: string;
}

export interface FeaturedGame extends Game {
  backgroundImage: string;
  description: string;
  releaseYear: string;
  trailer: string;
}

export interface Genre {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Review {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  gameId: string;
  rating: number;
  content: string;
  date: string;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  email: string;
  joinDate: string;
  favoriteGenres: string[];
  recentlyPlayed: string[];
}

export interface CommunityPost {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  title: string;
  content: string;
  date: string;
  likes: number;
  comments: number;
  gameId?: string;
  gameTitle?: string;
}