import React, { useState } from 'react';
import { BarChart2, Calendar, DollarSign, Heart } from 'lucide-react';

const trendingData = [
  {
    title: 'Inception 2',
    studio: 'Warner Bros',
    releaseDate: '2024-12-25',
    price: 156.78,
    change: 12.34,
    volume: '1.2M',
    marketCap: '$2.3B',
    image:
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=200',
  },
  {
    title: 'Avatar 3',
    studio: '20th Century Studios',
    releaseDate: '2025-06-15',
    price: 234.56,
    change: -5.67,
    volume: '2.5M',
    marketCap: '$4.1B',
    image:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=200',
  },
  {
    title: 'RRR 2',
    studio: 'DVV Entertainment',
    releaseDate: '2024-10-10',
    price: 140.5,
    change: 8.5,
    volume: '3.5M',
    marketCap: '$1.7B',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/c7/RRR_movie_poster.jpg',
  },
  {
    title: 'Jujutsu Kaisen 2',
    studio: 'Toho Co., Ltd',
    releaseDate: '2025-01-20',
    price: 95.99,
    change: 3.25,
    volume: '2.1M',
    marketCap: '$1.5B',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/36/Jujutsu_Kaisen_poster.jpg',
  },
  {
    title: 'Cezmi 2',
    studio: 'BKM Productions',
    releaseDate: '2024-09-05',
    price: 120.0,
    change: 10.34,
    volume: '800K',
    marketCap: '$1.2B',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/ff/Cezmi_2_movie_poster.jpg',
  },
  // More movies can be added here...
];

const TrendingPage = () => {
  const [sortType, setSortType] = useState('Volume');
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movie) => {
    setWatchlist((prev) => {
      const isInWatchlist = prev.some((item) => item.title === movie.title);
      if (isInWatchlist) {
        return prev.filter((item) => item.title !== movie.title);
      }
      return [...prev, movie];
    });
  };

  const sortMovies = (type) => {
    let sortedMovies = [...trendingData];
    switch (type) {
      case 'Price':
        sortedMovies.sort((a, b) => b.price - a.price);
        break;
      case 'Change':
        sortedMovies.sort((a, b) => b.change - a.change);
        break;
      case 'Volume':
      default:
        sortedMovies.sort(
          (a, b) =>
            parseFloat(b.volume.replace(/[^\d.-]/g, '')) -
            parseFloat(a.volume.replace(/[^\d.-]/g, ''))
        );
        break;
    }
    return sortedMovies;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-2">
        <h1 className="text-3xl font-bold text-gray-800">Trending Movies</h1>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <select
            className="btn btn-secondary w-full sm:w-auto"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option>Sort by Volume</option>
            <option>Sort by Price</option>
            <option>Sort by Change</option>
          </select>
          <button className="btn btn-primary w-full sm:w-auto">
            Trade Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortMovies(sortType).map((movie, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full sm:w-32 h-48 sm:h-32 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {movie.title}
                    </h2>
                    <p className="text-gray-600">{movie.studio}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-2xl font-bold text-gray-800">
                      ${movie.price}
                    </p>
                    <p
                      className={
                        movie.change >= 0 ? 'text-green-500' : 'text-red-500'
                      }
                    >
                      {movie.change}%
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Release Date</p>
                      <p className="font-medium">{movie.releaseDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Volume</p>
                      <p className="font-medium">{movie.volume}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Market Cap</p>
                      <p className="font-medium">{movie.marketCap}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleWatchlist(movie)}
                  className={`mt-4 text-lg font-semibold py-2 px-4 rounded-full ${
                    watchlist.some((item) => item.title === movie.title)
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <Heart className="inline mr-2" />
                  {watchlist.some((item) => item.title === movie.title)
                    ? 'Remove from Watchlist'
                    : 'Add to Watchlist'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">My Watchlist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {watchlist.length > 0 ? (
            watchlist.map((movie, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-600">{movie.studio}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              Your watchlist is empty. Add movies to your watchlist!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendingPage;
