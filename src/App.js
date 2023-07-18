import { useEffect } from 'react';
import './App.css';

import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const movie1 =
{
  "Title": "Miles Morales Ultimate Spiderman",
  "Year": "2021",
  "imdbID": "tt14311386",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNmMzODkwNDktMTkyMy00MmU5LWE4MGMtYzIzZjdjNmJiZDRiXkEyXkFqcGdeQXVyNDU1NDQ0NzE@._V1_SX300.jpg"
}


function App() {


  const searchMovies = async (tittle) => {
    const response = await fetch(`${API_URL}&S=${tittle}`);
    const data = await response.json();

    console.log(data.Search)
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
          value='Superman'
          onChange={() => { }}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => { }}
        />

      </div>

      <div className='container'>
        <div className='movie'>

          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img
              src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placheholder.com/400'}
              alt={movie1.Title}
            />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
