import React, { useState } from 'react';

export default function Analytics() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = {
    Bollywood: [
      {
        title: 'Gully Boy',
        rating: '8.0',
        budget: '$5M',
        cast: 'Ranveer Singh, Alia Bhatt',
        genre: 'Drama, Music',
        recommended: true,
      },
      {
        title: '3 Idiots',
        rating: '8.4',
        budget: '$10M',
        cast: 'Aamir Khan, R. Madhavan',
        genre: 'Comedy, Drama',
      },
      {
        title: 'Dangal',
        rating: '8.4',
        budget: '$12M',
        cast: 'Aamir Khan, Sakshi Tanwar',
        genre: 'Biography, Drama, Sport',
      },
      {
        title: 'Lagaan',
        rating: '8.1',
        budget: '$5M',
        cast: 'Aamir Khan, Gracy Singh',
        genre: 'Drama, Musical, Sport',
      },
      {
        title: 'Jab We Met',
        rating: '7.9',
        budget: '$3M',
        cast: 'Shahid Kapoor, Kareena Kapoor',
        genre: 'Romance, Comedy',
      },
    ],
    Hollywood: [
      {
        title: 'The Dark Knight',
        rating: '9.0',
        budget: '$185M',
        cast: 'Christian Bale, Heath Ledger',
        genre: 'Action, Crime',
        recommended: true,
      },
      {
        title: 'Inception',
        rating: '8.8',
        budget: '$160M',
        cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt',
        genre: 'Action, Sci-Fi',
      },
      {
        title: 'The Avengers',
        rating: '8.0',
        budget: '$220M',
        cast: 'Robert Downey Jr., Chris Evans',
        genre: 'Action, Adventure',
      },
      {
        title: 'Titanic',
        rating: '7.8',
        budget: '$200M',
        cast: 'Leonardo DiCaprio, Kate Winslet',
        genre: 'Drama, Romance',
      },
      {
        title: 'Jurassic Park',
        rating: '8.1',
        budget: '$63M',
        cast: 'Sam Neill, Laura Dern',
        genre: 'Adventure, Sci-Fi',
      },
    ],
    Regional: [
      {
        title: 'Kantara',
        rating: '8.6',
        budget: '$3M',
        cast: 'Rishab Shetty, Sapthami Gowda',
        genre: 'Action, Thriller',
        recommended: true,
      },
      {
        title: 'Baahubali: The Beginning',
        rating: '8.0',
        budget: '$20M',
        cast: 'Prabhas, Anushka Shetty',
        genre: 'Action, Drama',
      },
      {
        title: 'Vikram',
        rating: '8.5',
        budget: '$10M',
        cast: 'Kamal Haasan, Vijay Sethupathi',
        genre: 'Action, Thriller',
      },
      {
        title: 'Super Deluxe',
        rating: '8.4',
        budget: '$4M',
        cast: 'Vijay Sethupathi, Fahadh Faasil',
        genre: 'Drama, Thriller',
      },
      {
        title: 'Kabali',
        rating: '6.5',
        budget: '$15M',
        cast: 'Rajinikanth, Radhika Apte',
        genre: 'Action, Drama',
      },
    ],
    Malayalam: [
      {
        title: 'Drishyam',
        rating: '8.8',
        budget: '$1.8M',
        cast: 'Mohanlal, Meena',
        genre: 'Thriller, Drama',
        recommended: true,
      },
      {
        title: 'Kumbalangi Nights',
        rating: '8.5',
        budget: '$1.3M',
        cast: 'Soubin Shahir, Fahadh Faasil',
        genre: 'Drama, Comedy',
      },
      {
        title: 'Premam',
        rating: '8.3',
        budget: '$2M',
        cast: 'Nivin Pauly, Sai Pallavi',
        genre: 'Romance, Drama',
      },
      {
        title: 'Maheshinte Prathikaaram',
        rating: '8.2',
        budget: '$1.5M',
        cast: 'Fahadh Faasil, Sreenivasan',
        genre: 'Drama, Comedy',
      },
      {
        title: 'Angamaly Diaries',
        rating: '8.2',
        budget: '$1M',
        cast: 'Antony Varghese, Sarath Kumar',
        genre: 'Drama, Thriller',
      },
    ],
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie((prev) => (prev?.title === movie.title ? null : movie));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Movie Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.keys(movies).map((category) => (
          <div
            key={category}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6"
          >
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              {category}
            </h2>
            <ul>
              {movies[category].map((movie) => (
                <li
                  key={movie.title}
                  onClick={() => handleMovieClick(movie)}
                  className={`cursor-pointer block bg-blue-500 text-white text-center py-2 px-4 rounded-lg mb-4 hover:bg-blue-400 transition duration-300 ${
                    movie.recommended ? 'border-2 border-yellow-400' : ''
                  }`}
                >
                  {movie.title}
                  {selectedMovie?.title === movie.title && (
                    <div className="mt-2 bg-gray-800 text-white p-4 rounded-md">
                      <p>
                        <strong>Rating:</strong> {movie.rating}
                      </p>
                      <p>
                        <strong>Budget:</strong> {movie.budget}
                      </p>
                      <p>
                        <strong>Cast:</strong> {movie.cast}
                      </p>
                      <p>
                        <strong>Genre:</strong> {movie.genre}
                      </p>
                      {movie.recommended && (
                        <p className="text-yellow-400 font-semibold">
                          Recommended!
                        </p>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
