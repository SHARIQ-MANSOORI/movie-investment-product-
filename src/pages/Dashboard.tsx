import React, { useState } from 'react';
import PortfolioStats from '../components/dashboard/PortfolioStats';
import TrendingMovies from '../components/dashboard/TrendingMovies';

export default function Dashboard() {
  // Initial states
  const [stockPrice, setStockPrice] = useState(100); // Stock price
  const [selectedMovie, setSelectedMovie] = useState(''); // Movie selection
  const [notification, setNotification] = useState(''); // Notification message
  const [isNotificationVisible, setIsNotificationVisible] = useState(false); // Notification visibility
  const [totalInvestment, setTotalInvestment] = useState(0); // Track total investment
  const [activePositions, setActivePositions] = useState(0); // Track active positions (stocks)

  // Handle slider changes
  const handleSliderChange = (event) => {
    const newStockPrice = parseFloat(event.target.value);
    setStockPrice(newStockPrice);
  };

  // Buy action handler
  const handleBuyClick = () => {
    const newInvestment = totalInvestment + stockPrice; // Increase total investment by stock price
    const newPositions = activePositions + 1; // Increase active positions (stocks owned)

    setTotalInvestment(newInvestment);
    setActivePositions(newPositions);
    showNotification(`You bought a movie stock at $${stockPrice.toFixed(2)}`);
  };

  // Sell action handler
  const handleSellClick = () => {
    if (activePositions > 0) {
      const newInvestment = totalInvestment - stockPrice; // Decrease total investment by stock price
      const newPositions = activePositions - 1; // Decrease active positions (stocks owned)

      setTotalInvestment(newInvestment);
      setActivePositions(newPositions);
      showNotification(`You sold a movie stock at $${stockPrice.toFixed(2)}`);
    } else {
      showNotification('No active positions to sell.');
    }
  };

  // Handle movie selection
  const handleMovieSelect = (event) => {
    setSelectedMovie(event.target.value);
  };

  // Show notification function
  const showNotification = (message) => {
    setNotification(message);
    setIsNotificationVisible(true);
    setTimeout(() => {
      setIsNotificationVisible(false);
    }, 3000); // Hide notification after 3 seconds
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      {/* PortfolioStats component */}
      <PortfolioStats
        totalInvestment={totalInvestment}
        activePositions={activePositions}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <TrendingMovies />

        {/* Movie Stock Trading Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Movie Stock Trading</h2>

          {/* Movie Selection Dropdown */}
          <div className="mb-4">
            <select
              onChange={handleMovieSelect}
              value={selectedMovie}
              className="bg-gray-100 p-3 rounded-lg w-full"
            >
              <option value="" disabled>
                Select a Movie
              </option>
              <option value="Dilwale Dulhania Le Jayenge">
                Dilwale Dulhania Le Jayenge
              </option>
              <option value="Avengers: Endgame">Avengers: Endgame</option>
              <option value="KGF: Chapter 2">KGF: Chapter 2</option>
              <option value="RRR">RRR</option>
              <option value="Baahubali 2: The Conclusion">
                Baahubali 2: The Conclusion
              </option>
              <option value="The Dark Knight">The Dark Knight</option>
              <option value="Sholay">Sholay</option>
              <option value="Inception">Inception</option>
              <option value="Lagaan">Lagaan</option>
              <option value="Forrest Gump">Forrest Gump</option>
            </select>
          </div>

          {/* Display selected movie */}
          {selectedMovie && (
            <p className="text-gray-700 text-lg mb-4">
              Selected Movie: <strong>{selectedMovie}</strong>
            </p>
          )}

          {/* Stock Price Display */}
          <div className="mb-4">
            <p className="text-gray-700 text-lg">
              Current Stock Price: <strong>${stockPrice.toFixed(2)}</strong>
            </p>
          </div>

          {/* Notification Bar */}
          {isNotificationVisible && (
            <div className="bg-yellow-200 text-gray-900 p-3 w-full rounded-lg shadow-lg mb-4 text-center">
              <p>{notification}</p>
            </div>
          )}

          {/* Slider for stock price */}
          <input
            type="range"
            min="50"
            max="500"
            step="1"
            value={stockPrice}
            onChange={handleSliderChange}
            className="w-full mb-4 bg-green-200 rounded-full cursor-pointer"
          />

          {/* Buttons to Buy and Sell */}
          <div className="flex justify-between">
            <button
              onClick={handleBuyClick}
              className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-400 transition duration-200"
            >
              Buy
            </button>
            <button
              onClick={handleSellClick}
              className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-400 transition duration-200"
            >
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
