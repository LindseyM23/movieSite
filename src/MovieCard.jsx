import React from "react";

const MovieCard = ({movie}) =>{
    return(
        <div className="movie">
    <div>
        <p>{movie.Year}</p>
    </div>
    <div>
      <  img src={movie.Poster} alt={movie.Title}/>
    </div>
    <div>
        <span>{movie.Type}</span>
        <h1>{movie.Title}</h1>
    </div>
</div>
    )
}

export default MovieCard;