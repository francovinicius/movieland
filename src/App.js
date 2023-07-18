import { useEffect  } from 'react';
import './App.css';

const API_URL ='http://www.omdbapi.com?apikey=c032e2d7';

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
    <div className="App">
      <h1>Teste</h1>
    </div>
  );
}

export default App;
