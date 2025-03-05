import { Game, FeaturedGame, Genre, Review, User, CommunityPost } from '../types';

export const featuredGames: FeaturedGame[] = [
  {
    id: '1',
    title: 'Stellar Odyssey',
    coverImage: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    backgroundImage: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    rating: 9.2,
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['Sci-Fi', 'Action', 'RPG'],
    releaseDate: '2025-03-15',
    developer: 'Cosmic Studios',
    publisher: 'Galaxy Games',
    description: 'Embark on an epic journey across the stars in this groundbreaking space RPG. Explore uncharted planets, encounter alien civilizations, and shape the fate of the galaxy through your choices.',
    releaseYear: '2025',
    trailer: 'https://example.com/trailer1',
    achievements: [
      { id: '1', name: 'Space Pioneer', description: 'Complete your first interstellar journey', rarity: 'Common' },
      { id: '2', name: 'Galactic Hero', description: 'Save an alien civilization', rarity: 'Rare' },
      { id: '3', name: 'Master Explorer', description: 'Discover all planets in the Andromeda sector', rarity: 'Legendary' }
    ],
    features: [
      'Procedurally generated galaxies',
      'Dynamic faction system',
      'Real-time space combat',
      'Advanced character customization',
      'Multiple story paths'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-8400',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GTX 1660',
        storage: '100 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-12700K',
        memory: '32 GB RAM',
        graphics: 'NVIDIA RTX 4070',
        storage: '100 GB SSD'
      }
    }
  },
  {
    id: '2',
    title: 'Neon Shadows',
    coverImage: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    backgroundImage: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    rating: 8.7,
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['Cyberpunk', 'Action', 'Adventure'],
    releaseDate: '2024-11-05',
    developer: 'Digital Dreams',
    publisher: 'Future Entertainment',
    description: 'Dive into a dystopian cyberpunk world where corporations rule and technology has transformed humanity. Navigate the neon-lit streets as a rogue hacker fighting against the system.',
    releaseYear: '2024',
    trailer: 'https://example.com/trailer2',
    achievements: [
      { id: '1', name: 'Digital Ghost', description: 'Complete a mission without being detected', rarity: 'Rare' },
      { id: '2', name: 'Master Hacker', description: 'Breach all types of security systems', rarity: 'Epic' },
      { id: '3', name: 'Revolution Leader', description: 'Unite all resistance factions', rarity: 'Legendary' }
    ],
    features: [
      'Dynamic hacking system',
      'Branching narrative',
      'Customizable cybernetic implants',
      'Reactive world state',
      'Multiple endings'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'AMD Ryzen 5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 2060',
        storage: '120 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'AMD Ryzen 7 7800X',
        memory: '32 GB RAM',
        graphics: 'NVIDIA RTX 4080',
        storage: '120 GB SSD'
      }
    }
  },
  {
    id: '3',
    title: 'Mythic Realms',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    backgroundImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    rating: 9.5,
    platforms: ['PC', 'PS5', 'Xbox Series X', 'Nintendo Switch'],
    genres: ['Fantasy', 'RPG', 'Open World'],
    releaseDate: '2024-08-22',
    developer: 'Ancient Forge Studios',
    publisher: 'Legend Games',
    description: 'Enter a vast fantasy world inspired by ancient mythology. Forge your destiny as a hero chosen by the gods, battle legendary creatures, and uncover the secrets of a forgotten civilization.',
    releaseYear: '2024',
    trailer: 'https://example.com/trailer3',
    achievements: [
      { id: '1', name: 'Divine Champion', description: 'Defeat your first god', rarity: 'Epic' },
      { id: '2', name: 'Mythic Scholar', description: 'Discover all ancient artifacts', rarity: 'Legendary' },
      { id: '3', name: 'Legend of the Realms', description: 'Complete all side quests', rarity: 'Ultra Rare' }
    ],
    features: [
      'Vast open world',
      'Dynamic weather system',
      'Advanced combat mechanics',
      'Deep crafting system',
      'Mythological creatures'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-9600K',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GTX 2070',
        storage: '150 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i9-13900K',
        memory: '32 GB RAM',
        graphics: 'NVIDIA RTX 4090',
        storage: '150 GB SSD'
      }
    }
  }
];

export const games: Game[] = [
  ...featuredGames,
  {
    id: '4',
    title: 'Velocity Rush',
    coverImage: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    rating: 8.3,
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['Racing', 'Sports'],
    releaseDate: '2024-06-10',
    developer: 'Speed Demons',
    publisher: 'Turbo Entertainment'
  },
  {
    id: '5',
    title: 'Phantom Protocol',
    coverImage: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    rating: 9.0,
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['Stealth', 'Action', 'Adventure'],
    releaseDate: '2024-05-18',
    developer: 'Shadow Works',
    publisher: 'Covert Operations'
  },
  {
    id: '6',
    title: 'Eternal Siege',
    coverImage: 'https://images.unsplash.com/photo-1496979551903-46e46589a88b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    rating: 8.5,
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['Strategy', 'War', 'Simulation'],
    releaseDate: '2024-04-22',
    developer: 'Tactical Minds',
    publisher: 'Victory Games'
  },
  {
    id: '7',
    title: 'Crimson Depths',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    rating: 8.8,
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['Horror', 'Survival', 'Action'],
    releaseDate: '2024-10-31',
    developer: 'Nightmare Studios',
    publisher: 'Terror Entertainment'
  },
  {
    id: '8',
    title: 'Quantum Break',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    rating: 9.1,
    platforms: ['PC', 'PS5'],
    genres: ['Sci-Fi', 'Puzzle', 'Adventure'],
    releaseDate: '2024-07-15',
    developer: 'Paradox Interactive',
    publisher: 'Dimension Games'
  },
  {
    id: '9',
    title: 'Wild Frontier',
    coverImage: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    rating: 8.9,
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['Open World', 'Adventure', 'Western'],
    releaseDate: '2024-09-05',
    developer: 'Frontier Studios',
    publisher: 'Horizon Games'
  },
  {
    id: '10',
    title: 'Urban Legends',
    coverImage: 'https://images.unsplash.com/photo-1569701813229-33284b643e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    rating: 8.2,
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['Action', 'Adventure', 'Open World'],
    releaseDate: '2024-03-28',
    developer: 'City Works',
    publisher: 'Metropolitan Games'
  }
];

export const genres: Genre[] = [
  {
    id: 'action',
    name: 'Action',
    image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    description: 'Fast-paced games focused on combat, reflexes, and overcoming physical challenges.',
    popularTags: ['Combat', 'Fast-Paced', 'Intense'],
    featuredGames: ['1', '2', '5'],
    totalGames: 150
  },
  {
    id: 'rpg',
    name: 'RPG',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    description: 'Role-playing games where players assume the roles of characters in a fictional setting.',
    popularTags: ['Story-Rich', 'Character Development', 'Choices Matter'],
    featuredGames: ['1', '3', '8'],
    totalGames: 200
  },
  {
    id: 'strategy',
    name: 'Strategy',
    image: 'https://images.unsplash.com/photo-1611891487122-207579d67d98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    description: 'Games that emphasize skillful thinking and planning to achieve victory.',
    popularTags: ['Tactical', 'Resource Management', 'Planning'],
    featuredGames: ['6', '8', '9'],
    totalGames: 100
  },
  {
    id: 'adventure',
    name: 'Adventure',
    image: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    description: 'Games that focus on exploration, puzzle-solving, and narrative storytelling.',
    popularTags: ['Exploration', 'Story', 'Puzzle'],
    featuredGames: ['2', '9', '10'],
    totalGames: 180
  },
  {
    id: 'horror',
    name: 'Horror',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    description: 'Games designed to scare players through atmosphere, sound design, and storytelling.',
    popularTags: ['Atmospheric', 'Survival', 'Dark'],
    featuredGames: ['7', '5', '2'],
    totalGames: 75
  },
  {
    id: 'racing',
    name: 'Racing',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    description: 'Games that emphasize driving and competing in races with various vehicles.',
    popularTags: ['Competition', 'Vehicles', 'Speed'],
    featuredGames: ['4', '8', '9'],
    totalGames: 50
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    userId: 'user1',
    username: 'GamerPro',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    gameId: '1',
    rating: 9.5,
    content: 'Stellar Odyssey is a masterpiece! The graphics are breathtaking, and the story kept me engaged for hours. The character development is top-notch, and the gameplay mechanics are innovative. Highly recommended!',
    date: '2025-03-20',
    likes: 245,
    helpful: 189,
    totalPlayTime: '120h',
    achievements: 28,
    platform: 'PC'
  },
  {
    id: '2',
    userId: 'user2',
    username: 'SpaceExplorer',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    gameId: '1',
    rating: 8.8,
    content: 'An incredible space adventure with stunning visuals and a compelling narrative. The only downside is some minor performance issues on older hardware, but otherwise, it\'s a fantastic experience.',
    date: '2025-03-18',
    likes: 156,
    helpful: 120,
    totalPlayTime: '85h',
    achievements: 15,
    platform: 'PS5'
  },
  {
    id: '3',
    userId: 'user3',
    username: 'CyberNinja',
    userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    gameId: '2',
    rating: 9.0,
    content: 'Neon Shadows perfectly captures the cyberpunk aesthetic with its neon-lit environments and dystopian storyline. The hacking mechanics are innovative, and the combat feels fluid and responsive.',
    date: '2024-11-10',
    likes: 189,
    helpful: 145,
    totalPlayTime: '95h',
    achievements: 22,
    platform: 'PC'
  }
];

export const users: User = {
  currentUser: {
    id: 'user1',
    username: 'GamerPro',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    email: 'gamerpro@example.com',
    joinDate: '2023-05-15',
    favoriteGenres: ['RPG', 'Action', 'Adventure'],
    recentlyPlayed: ['1', '3', '5'],
    level: 42,
    totalPlayTime: '1250h',
    achievements: {
      total: 523,
      rare: 89,
      ultraRare: 12
    },
    friends: 156,
    gamesOwned: 84,
    status: 'online',
    customStatus: 'Exploring the cosmos in Stellar Odyssey',
    badges: [
      { id: '1', name: 'Early Adopter', icon: '🌟' },
      { id: '2', name: 'Achievement Hunter', icon: '🏆' },
      { id: '3', name: 'Social Butterfly', icon: '🦋' }
    ],
    preferences: {
      theme: 'dark',
      notifications: {
        friendRequests: true,
        achievements: true,
        gameUpdates: true,
        communityPosts: true
      },
      privacy: {
        profile: 'public',
        gameLibrary: 'friends',
        activityFeed: 'public'
      }
    }
  }
} as unknown as User;

export const communityPosts: CommunityPost[] = [
  {
    id: '1',
    userId: 'user2',
    username: 'SpaceExplorer',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    title: 'Hidden Easter Egg in Stellar Odyssey!',
    content: 'I found an amazing Easter egg in Stellar Odyssey! If you go to the abandoned space station in the Andromeda sector and interact with the old computer terminal using the hacking skill, you\'ll unlock a secret mission that reveals more about the mysterious alien artifacts.',
    date: '2025-03-25',
    likes: 128,
    comments: 45,
    gameId: '1',
    gameTitle: 'Stellar Odyssey',
    tags: ['Guide', 'Easter Egg', 'Secret'],
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-4.0.3'
      }
    ],
    pinned: true
  },
  {
    id: '2',
    userId: 'user3',
    username: 'CyberNinja',
    userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    title: 'Best Build for Neon Shadows',
    content: 'After 50+ hours of gameplay, I\'ve found the most overpowered build in Neon Shadows. Focus on the Netrunner skill tree, especially the Neural Interface and Code Injection perks. Combine this with the Quantum Processor implant, and you\'ll be able to hack any system in seconds!',
    date: '2024-11-15',
    likes: 95,
    comments: 32,
    gameId: '2',
    gameTitle: 'Neon Shadows',
    tags: ['Guide', 'Build', 'Tips'],
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3'
      }
    ]
  },
  {
    id: '3',
    userId: 'user4',
    username: 'LegendHunter',
    userAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    title: 'Mythic Realms: Legendary Weapons Guide',
    content: 'I\'ve compiled a comprehensive guide to all legendary weapons in Mythic Realms, including their locations and special abilities. The Sword of Aeons in the Forgotten Temple is particularly powerful for warrior builds, while the Staff of Elements in the Elemental Sanctum is perfect for mage characters.',
    date: '2024-09-05',
    likes: 156,
    comments: 67,
    gameId: '3',
    gameTitle: 'Mythic Realms',
    tags: ['Guide', 'Weapons', 'Locations'],
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3'
      }
    ]
  }
];

export const getGamesByGenre = (genreId: string): Game[] => {
  return games.filter(game => game.genres.includes(genres.find(g => g.id === genreId)?.name || ''));
};

export const getGameById = (gameId: string): Game | undefined => {
  return games.find(game => game.id === gameId);
};

export const getFeaturedGameById = (gameId: string): FeaturedGame | undefined => {
  return featuredGames.find(game => game.id === gameId);
};

export const getReviewsByGameId = (gameId: string): Review[] => {
  return reviews.filter(review => review.gameId === gameId);
};

export const getGenreById = (genreId: string): Genre | undefined => {
  return genres.find(genre => genre.id === genreId);
};