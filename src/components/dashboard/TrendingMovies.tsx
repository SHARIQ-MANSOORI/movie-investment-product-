import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const trendingMovies = [
  {
    title: 'Inception 2',
    studio: 'Warner Bros',
    price: 156.78,
    change: 12.34,
    volume: '1.2M',
    image:
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=200',
  },
  {
    title: 'Avatar 3',
    studio: '20th Century',
    price: 234.56,
    change: -5.67,
    volume: '2.5M',
    image:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=200',
  },
  {
    title: 'Dune Part 3',
    studio: 'Legendary',
    price: 189.9,
    change: 8.45,
    volume: '1.8M',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=200',
  },

  {
    title: 'RRR',
    studio: 'DVV Entertainment',
    price: 245.89,
    change: 18.45,
    volume: '2.5M',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg',
  },
  {
    title: 'Ponniyin Selvan 2',
    studio: 'Madras Talkies',
    price: 178.5,
    change: 10.2,
    volume: '1.8M',
    image:
      'https://upload.wikimedia.org/wikipedia/en/4/4c/Ponniyin_Selvan_2_poster.jpg',
  },
  {
    title: 'Kantara',
    studio: 'Hombale Films',
    price: 130.6,
    change: -5.75,
    volume: '1.3M',
    image:
      'https://upload.wikimedia.org/wikipedia/en/f/f9/Kantara_film_poster.jpg',
  },
  {
    title: 'Dangal',
    studio: 'Aamir Khan Productions',
    price: 195.25,
    change: 12.15,
    volume: '2.0M',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg',
  },
  {
    title: 'Baahubali: The Beginning',
    studio: 'Arka Media Works',
    price: 210.4,
    change: 20.8,
    volume: '3.1M',
    image:
      'https://upload.wikimedia.org/wikipedia/en/7/7e/Baahubali_the_Conclusion.jpg',
  },
  {
    title: 'The Avengers',
    studio: 'Marvel Studios',
    price: 310.55,
    change: 25.5,
    volume: '4.5M',
    image:
      'https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg',
  },
  {
    title: 'The Batman',
    studio: 'Warner Bros',
    price: 220.75,
    change: -8.35,
    volume: '1.9M',
    image:
      'https://upload.wikimedia.org/wikipedia/en/e/ed/The_Batman_%28film%29_poster.jpg',
  },
  {
    title: 'Pushpa: The Rise',
    studio: 'Mythri Movie Makers',
    price: 165.9,
    change: 9.1,
    volume: '1.7M',
    image:
      'https://upload.wikimedia.org/wikipedia/en/f/f1/Pushpa_-_The_Rise.png',
  },
  {
    title: 'KGF: Chapter 2',
    studio: 'Hombale Films',
    price: 225.5,
    change: 15.45,
    volume: '2.3M',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d8/K.G.F_Chapter_2.jpg',
  },
  {
    title: 'Top Gun: Maverick',
    studio: 'Paramount Pictures',
    price: 285.75,
    change: 18.0,
    volume: '2.8M',
    image:
      'https://upload.wikimedia.org/wikipedia/en/9/9a/Top_Gun_Maverick_Poster.jpg',
  },
];

export default function TrendingMovies() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Trending Movies</h2>
      </div>
      <div className="divide-y">
        {trendingMovies.map((movie, index) => (
          <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium">{movie.title}</h3>
                <p className="text-sm text-gray-500">{movie.studio}</p>
              </div>
              <div className="text-right">
                <div className="font-medium">${movie.price}</div>
                <div
                  className={`flex items-center gap-1 text-sm ${
                    movie.change >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {movie.change >= 0 ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {Math.abs(movie.change)}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
