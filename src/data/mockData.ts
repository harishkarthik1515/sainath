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
    trailer: 'https://example.com/trailer1'
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
    trailer: 'https://example.com/trailer2'
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
    trailer: 'https://example.com/trailer3'
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
  },
  {
id: '11',
title: 'Galactic Conquest',
coverImage: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
rating: 9.3,
platforms: ['PC', 'PS5', 'Xbox Series X'],
genres: ['Sci-Fi', 'Strategy', 'Simulation'],
releaseDate: '2024-12-10',
developer: 'Star Command',
publisher: 'Universal Games'
},
{
id: '12',
title: 'Mystic Quest',
coverImage: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
rating: 8.6,
platforms: ['PC', 'PS5', 'Xbox Series X', 'Nintendo Switch'],
genres: ['Fantasy', 'Adventure', 'Puzzle'],
releaseDate: '2024-11-20',
developer: 'Enchanted Studios',
publisher: 'Magic Realm'
},
{
id: '13',
title: 'Shadow Realm',
coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
rating: 8.9,
platforms: ['PC', 'PS5', 'Xbox Series X'],
genres: ['Horror', 'RPG', 'Action'],
releaseDate: '2024-10-15',
developer: 'Dark Visions',
publisher: 'Nightfall Games'
},
{
id: '14',
title: 'Racing Rivals',
coverImage: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
rating: 8.4,
platforms: ['PC', 'PS5', 'Xbox Series X'],
genres: ['Racing', 'Sports'],
releaseDate: '2024-09-30',
developer: 'Speed Kings',
publisher: 'Fast Track Entertainment'
},
{
id: '15',
title: 'Ancient Legends',
coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
rating: 9.0,
platforms: ['PC', 'PS5', 'Xbox Series X', 'Nintendo Switch'],
genres: ['Fantasy', 'RPG', 'Open World'],
releaseDate: '2024-08-05',
developer: 'Mythical Creations',
publisher: 'Legendary Games'
},{
id: '16',
title: 'Cybernetic Uprising',
coverImage: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
rating: 8.7,
platforms: ['PC', 'PS5', 'Xbox Series X'],
genres: ['Cyberpunk', 'Action', 'RPG'],
releaseDate: '2024-12-01',
developer: 'Neon Studios',
publisher: 'Future Vision'
},
{
id: '17',
title: 'Oceanic Adventure',
coverImage: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
rating: 8.5,
platforms: ['PC', 'PS5', 'Xbox Series X', 'Nintendo Switch'],
genres: ['Adventure', 'Simulation', 'Exploration'],
releaseDate: '2024-11-10',
developer: 'Aqua Games',
publisher: 'Blue Horizon'
},
{
id: '18',
title: 'Dungeon Siege',
coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
rating: 9.2,
platforms: ['PC', 'PS5', 'Xbox Series X'],
genres: ['Fantasy', 'RPG', 'Strategy'],
releaseDate: '2024-10-25',
developer: 'Epic Quests',
publisher: 'Heroic Games'
},
{
id: '19',
title: 'Galactic Racer',
coverImage: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
rating: 8.3,
platforms: ['PC', 'PS5', 'Xbox Series X'],
genres: ['Racing', 'Sci-Fi'],
releaseDate: '2024-09-15',
developer: 'Star Racers',
publisher: 'Cosmic Speed'
},
{
id: '20',
title: 'Haunted Manor',
coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
rating: 8.9,
platforms: ['PC', 'PS5', 'Xbox Series X'],
genres: ['Horror', 'Puzzle', 'Adventure'],
releaseDate: '2024-08-31',
developer: 'Ghostly Games',
publisher: 'Phantom Entertainment'
}
];

export const genres: Genre[] = [
  {
    id: 'action',
    name: 'Action',
    image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    description: 'Fast-paced games focused on combat, reflexes, and overcoming physical challenges.'
  },
  {
    id: 'rpg',
    name: 'RPG',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    description: 'Role-playing games where players assume the roles of characters in a fictional setting.'
  },
  {
    id: 'strategy',
    name: 'Strategy',
    image: 'https://images.unsplash.com/photo-1611891487122-207579d67d98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    description: 'Games that emphasize skillful thinking and planning to achieve victory.'
  },
  {
    id: 'adventure',
    name: 'Adventure',
    image: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    description: 'Games that focus on exploration, puzzle-solving, and narrative storytelling.'
  },
  {
    id: 'horror',
    name: 'Horror',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    description: 'Games designed to scare players through atmosphere, sound design, and storytelling.'
  },
  {
    id: 'racing',
    name: 'Racing',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    description: 'Games that emphasize driving and competing in races with various vehicles.'
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
    date: '2025-03-20'
  },
  {
    id: '2',
    userId: 'user2',
    username: 'SpaceExplorer',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    gameId: '1',
    rating: 8.8,
    content: 'An incredible space adventure with stunning visuals and a compelling narrative. The only downside is some minor performance issues on older hardware, but otherwise, it\'s a fantastic experience.',
    date: '2025-03-18'
  },
  {
    id: '3',
    userId: 'user3',
    username: 'CyberNinja',
    userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    gameId: '2',
    rating: 9.0,
    content: 'Neon Shadows perfectly captures the cyberpunk aesthetic with its neon-lit environments and dystopian storyline. The hacking mechanics are innovative, and the combat feels fluid and responsive.',
    date: '2024-11-10'
  }
];

export const users: User[] = {
  currentUser: {
    id: 'user1',
    username: 'GamerPro',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    email: 'gamerpro@example.com',
    joinDate: '2023-05-15',
    favoriteGenres: ['RPG', 'Action', 'Adventure'],
    recentlyPlayed: ['1', '3', '5']
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
    gameTitle: 'Stellar Odyssey'
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
    gameTitle: 'Neon Shadows'
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
    gameTitle: 'Mythic Realms'
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