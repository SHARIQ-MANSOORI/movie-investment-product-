import React, { useState } from 'react';
import { Film, Users, DollarSign, Star, Heart } from 'lucide-react';

// Production houses data, including Indian and international ones
const productionHouses = [
  {
    name: 'Warner Bros. Pictures',
    totalMovies: 48,
    marketCap: '$89.5B',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=200',
    upcoming: 5,
    description:
      'Leading entertainment company with a rich history in filmmaking.',
    upcomingMovies: ['The Batman', 'Dune: Part Two', 'Aquaman 2'],
  },
  {
    name: 'Universal Studios',
    totalMovies: 52,
    marketCap: '$75.2B',
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=200',
    upcoming: 4,
    description: 'One of the oldest film studios in the world.',
    upcomingMovies: [
      'Fast & Furious 10',
      'Jurassic World 3',
      'Minions: Rise of Gru',
    ],
  },
  {
    name: 'Yash Raj Films',
    totalMovies: 100,
    marketCap: '$1.2B',
    rating: 4.7,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/97/Yash_Raj_Films_logo.svg',
    upcoming: 3,
    description: 'One of the leading Bollywood production houses.',
    upcomingMovies: ['Pathaan', 'Dhoom 4', 'Tiger 3'],
  },
  {
    name: 'Dharma Productions',
    totalMovies: 75,
    marketCap: '$1.5B',
    rating: 4.9,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/60/Dharma_Productions_logo.jpg',
    upcoming: 5,
    description: 'A top Bollywood production house founded by Karan Johar.',
    upcomingMovies: ['Rocky Aur Rani Ki Prem Kahani', 'Brahmastra', 'Takht'],
  },
  {
    name: 'Red Chillies Entertainment',
    totalMovies: 80,
    marketCap: '$2.0B',
    rating: 4.8,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/02/Red_Chillies_Entertainment_logo.png',
    upcoming: 4,
    description: 'Shah Rukh Khan’s production company with blockbuster films.',
    upcomingMovies: ['Jawan', 'Chennai Express 2', 'Raees 2'],
  },
  {
    name: 'Suresh Productions',
    totalMovies: 55,
    marketCap: '$900M',
    rating: 4.6,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/Suresh_Productions_logo.png',
    upcoming: 3,
    description: 'A leading Telugu film production house.',
    upcomingMovies: ['Pushpa 2', 'RRR 2', 'Jr. NTR’s New Project'],
  },
  {
    name: 'Hombale Films',
    totalMovies: 15,
    marketCap: '$1.5B',
    rating: 4.9,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/1a/Hombale_Films_logo.jpg',
    upcoming: 4,
    description:
      'South Indian production house known for *KGF* series and pan-Indian hits.',
    upcomingMovies: ['KGF Chapter 3', 'Rocky', 'Vikrant Rona'],
  },
  {
    name: 'Mythri Movie Makers',
    totalMovies: 22,
    marketCap: '$2.0B',
    rating: 4.8,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Mythri_Movie_Makers_logo.jpg',
    upcoming: 6,
    description: 'Famous for movies like *Pushpa* and *RRR*.',
    upcomingMovies: ['Pushpa 2', 'Salaar', 'Sarkaru Vaari Paata'],
  },
  {
    name: 'Fox Star Studios',
    totalMovies: 50,
    marketCap: '$6.3B',
    rating: 4.5,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/7b/Fox_Star_Studios_logo.svg',
    upcoming: 5,
    description:
      'Prominent Indian production house blending Hollywood and Bollywood films.',
    upcomingMovies: ['War 2', 'Thugs of Hindostan', 'The Zoya Factor'],
  },
];

const ProductionHouses = () => {
  const [watchlist, setWatchlist] = useState([]);

  // Toggle watchlist status
  const toggleWatchlist = (house) => {
    if (watchlist.includes(house.name)) {
      setWatchlist(watchlist.filter((item) => item !== house.name));
    } else {
      setWatchlist([...watchlist, house.name]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">Production Houses</h1>
        <button className="btn btn-primary">Add to Watchlist</button>
      </div>

      <div className="grid gap-6">
        {productionHouses.map((house) => (
          <div
            key={house.name}
            className="bg-white rounded-xl shadow-sm p-4 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <img
                src={house.image}
                alt={house.name}
                className="w-full sm:w-24 h-48 sm:h-24 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <div>
                    <h2 className="text-xl font-semibold">{house.name}</h2>
                    <p className="text-gray-600 mt-1">{house.description}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="font-medium">{house.rating}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Film className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-500">Total Movies</p>
                      <p className="font-medium">{house.totalMovies}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500">Market Cap</p>
                      <p className="font-medium">{house.marketCap}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-500">Upcoming</p>
                      <p className="font-medium">{house.upcoming} Movies</p>
                    </div>
                  </div>
                </div>

                {/* Heart Button for Watchlist */}
                <button
                  className={`btn btn-heart mt-4 ${
                    watchlist.includes(house.name) ? 'text-red-500' : ''
                  }`}
                  onClick={() => toggleWatchlist(house)}
                >
                  <Heart className="w-5 h-5" />
                  {watchlist.includes(house.name)
                    ? 'Remove from Watchlist'
                    : 'Add to Watchlist'}
                </button>

                {/* Display upcoming movies */}
                {watchlist.includes(house.name) && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Upcoming Movies</h3>
                    <ul className="list-disc ml-6">
                      {house.upcomingMovies.map((movie, index) => (
                        <li key={index} className="text-gray-600">
                          {movie}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductionHouses;
