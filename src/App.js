import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";


// 69f9e7d
import './App.css';
import searchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=69f9e7d'

// const movie1 ={

// "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
// "Title": "Superman, Spiderman or Batman",
// "Type": "movie",
// "Year": "2011",
// "imdbID": "tt2084949",
// }

const App = () => {

    const [searchTerm, setSearchTerm] = useState([]);
    const [movies, setMovies] = useState([])

    const searchMovies = async (title)=>{
                const response = await fetch(`${API_URL}&s=${title}`);
                const data = await response.json();
                setMovies(data.Search)
    }
   

    useEffect(()=>{
searchMovies('Spiderman')
    }, []);

    return(
        <div className="app">
            <h1>MovieMingle</h1>
<div className="search">
    <input
    placeholder="Search for movies"
    value = {searchTerm}
    onChange={(e)=> setSearchTerm(e.target.value)}
    />
    <img
    src={searchIcon}
    alt= 'search'
    onClick={()=>searchMovies(searchTerm)}
    />
</div>

{
    movies ?.length>0
    ?(
<div className="container">
  {movies.map((movie)=>(
    <MovieCard movie={movie}/>
  ))}      
</div>
    ):
    (
        <div className="empty">
            <h2>No movies Found</h2>
        </div>
    )
}
</div>
     );
}

export default App;