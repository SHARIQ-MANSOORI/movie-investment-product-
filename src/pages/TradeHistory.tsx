import React, { useState } from 'react';

// Expanded movie list with more entries
const recommendedMovies = [
  { id: 1, name: 'Inception 2' },
  { id: 2, name: 'Avatar 3' },
  { id: 3, name: 'Titanic 2' },
  { id: 4, name: 'The Dark Knight 2' },
  { id: 5, name: 'Jurassic World 3' },
  { id: 6, name: 'The Matrix 4' },
  { id: 7, name: 'Spiderman 3' },
  { id: 8, name: 'Iron Man 4' },
  { id: 9, name: 'Star Wars 9' },
  { id: 10, name: 'The Avengers 5' },
  { id: 11, name: 'Fast and Furious 10' },
  { id: 12, name: 'Mission Impossible 7' },
  { id: 13, name: 'Shazam! 3' },
  { id: 14, name: 'Guardians of the Galaxy 4' },
  { id: 15, name: 'Doctor Strange 3' },
  { id: 16, name: 'Black Panther 3' },
  { id: 17, name: 'Thor 5' },
  { id: 18, name: 'Deadpool 3' },
  { id: 19, name: 'Fantastic Four' },
  { id: 20, name: 'Avatar: The Way of Water' },
];

const MovieTrading = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movieHistory, setMovieHistory] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);

  // Filter movies based on search query
  const filteredMovies = recommendedMovies.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle the trade action
  const handleTrade = (action) => {
    if (!selectedMovie || amount <= 0 || price <= 0) return; // Prevent invalid trades

    const total = amount * price;
    const trade = {
      movie: selectedMovie.name,
      action,
      amount,
      price,
      total,
      timestamp: new Date().toLocaleString(),
    };

    // Add trade to history
    setMovieHistory([trade, ...movieHistory]);

    // Reset state for next trade
    setSelectedMovie(null);
    setAmount(0);
    setPrice(0);
    setSearchQuery('');
  };

  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
        Movie Trading
      </h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-3 w-full rounded-md border border-gray-300 shadow-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Movie Suggestions (Only show if there is a search query and matches are found) */}
      {searchQuery && filteredMovies.length > 0 && (
        <div className="bg-white shadow-md rounded-md mt-2 p-4 max-h-40 overflow-y-auto">
          <ul>
            {filteredMovies.map((movie) => (
              <li
                key={movie.id}
                className="cursor-pointer text-blue-600 hover:text-blue-800"
                onClick={() => setSelectedMovie(movie)}
              >
                {movie.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Selected Movie Details */}
      {selectedMovie && (
        <div className="mt-4 bg-white rounded-lg shadow-sm p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Selected Movie: {selectedMovie.name}
          </h3>
          <div className="mt-2">
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="p-2 border rounded-md mr-2"
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="p-2 border rounded-md"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => handleTrade('BUY')}
              className="bg-green-500 text-white p-3 rounded-md w-full mr-2 hover:bg-green-600 transition"
            >
              Buy
            </button>
            <button
              onClick={() => handleTrade('SELL')}
              className="bg-red-500 text-white p-3 rounded-md w-full hover:bg-red-600 transition"
            >
              Sell
            </button>
          </div>
        </div>
      )}

      {/* Trade History Section */}
      <div className="mt-6 bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Trade History
        </h3>
        {movieHistory.length === 0 ? (
          <p className="text-gray-500">
            No trades yet. Make a trade to see the history.
          </p>
        ) : (
          <div>
            {movieHistory.map((trade, index) => (
              <div key={index} className="border-b py-2">
                <p>
                  <strong>Movie:</strong> {trade.movie}
                </p>
                <p>
                  <strong>Action:</strong> {trade.action}
                </p>
                <p>
                  <strong>Amount:</strong> {trade.amount}
                </p>
                <p>
                  <strong>Price:</strong> ${trade.price}
                </p>
                <p>
                  <strong>Total:</strong> ${trade.total}
                </p>
                <p>
                  <strong>Time:</strong> {trade.timestamp}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieTrading;
