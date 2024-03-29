import { useState, useEffect } from 'react';
import './App.css';

import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt38&96198&apikey=38ff8a24';

const movie1 =
{
  "Title": "Miles Morales Ultimate Spiderman",
  "Year": "2021",
  "imdbID": "tt14311386",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNmMzODkwNDktMTkyMy00MmU5LWE4MGMtYzIzZjdjNmJiZDRiXkEyXkFqcGdeQXVyNDU1NDQ0NzE@._V1_SX300.jpg"
}


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const searchMovies = async (tittle) => {
    const response = await fetch(`${API_URL}&S=${tittle}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>

        <input
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />

      </div>

      {
        movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div>
              <h2>No movies found</h2>
            </div>
          )
      }
    </div >
  );
}

export default App;
