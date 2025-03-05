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

export interface Achievement {
  id: string;
  name: string;
  description: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Ultra Rare';
}

export interface SystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface FeaturedGame extends Game {
  backgroundImage: string;
  description: string;
  releaseYear: string;
  trailer: string;
  achievements?: Achievement[];
  features?: string[];
  systemRequirements?: {
    minimum: SystemRequirements;
    recommended: SystemRequirements;
  };
}

export interface Genre {
  id: string;
  name: string;
  image: string;
  description: string;
  popularTags?: string[];
  featuredGames?: string[];
  totalGames?: number;
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
  likes?: number;
  helpful?: number;
  totalPlayTime?: string;
  achievements?: number;
  platform?: string;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  notifications: {
    friendRequests: boolean;
    achievements: boolean;
    gameUpdates: boolean;
    communityPosts: boolean;
  };
  privacy: {
    profile: 'public' | 'friends' | 'private';
    gameLibrary: 'public' | 'friends' | 'private';
    activityFeed: 'public' | 'friends' | 'private';
  };
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  email: string;
  joinDate: string;
  favoriteGenres: string[];
  recentlyPlayed: string[];
  level?: number;
  totalPlayTime?: string;
  achievements?: {
    total: number;
    rare: number;
    ultraRare: number;
  };
  friends ?: number;
  gamesOwned?: number;
  status?: 'online' | 'offline' | 'away' | 'busy';
  customStatus?: string;
  badges?: Badge[];
  preferences?: UserPreferences;
}

export interface MediaItem {
  type: 'image' | 'video';
  url: string;
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
  tags?: string[];
  media?: MediaItem[];
  pinned?: boolean;
}