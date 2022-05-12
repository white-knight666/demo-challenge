
import './App.css';
import {useState, useEffect} from 'react'
import Movie from './Components/Movie'
import Filter from './Components/Filter'
import {AnimatePresence, motion} from "framer-motion"
import Header from './Components/Header';

const App =() =>{

  const [popular, setPopular]= useState([]);
  const [filtered, setFiltered]= useState([]);
  const [activeGenre, setActiveGenre]= useState(0);
  

    useEffect(() => {


  const fetchPopular = async() => {
    const data = await fetch ("https://api.themoviedb.org/3/movie/popular?api_key=85d0e6368d4cefa50aa9f0ce9acd31d0&language=en-US&page=10");
    const movies = await data.json();
    setPopular(movies.results)
    setFiltered(movies.results)
    console.log(movies)

  }
    fetchPopular();
    },[])
  return (
    <div className="App">
    <Header />
    <Filter 
    popular={popular} 
    setFiltered={setFiltered} 
    activeGenre={activeGenre} 
    setActiveGenre={setActiveGenre}/>


      <motion.div layout className="popular-movies">
      <AnimatePresence>
      
          {filtered.map(movie => {
            return <Movie key={movie.id} movie={movie} />;
          })}
          </AnimatePresence>
      </motion.div>
      
    </div>
  );
}

export default App;
