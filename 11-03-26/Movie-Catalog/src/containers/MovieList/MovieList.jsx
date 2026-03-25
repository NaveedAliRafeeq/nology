import MovieCard from "../../components/MovieCard/MovieCard"
import movieData from "../../data/movieData"
import ReactDOM from "react-dom";
import { useState } from 'react';

const MovieList = () => {
    
    /* What I did on 11/03/26, before learning about .map() method
    const movieData = [
      {
        id: 1,
        title: "Jurassic Park",
        director: "Steven Spielberg",
        year: 1993,
        rating: 8.2,
      }, {
        id: 2,
        title: "The Matrix",
        director: "The Wachowskis",
        year: 1999,
        rating: 8.7,
      }, {
        id: 3,
        title: "Sharknado",
        director: "Anthony C. Ferrante",
        year: 2013,
        rating: 3.3,
      }, {
        id: 4,
        title: "The Matrix 2",
        director: "The Wachowskis",
        year: 2001,
        rating: 8.1,
      } ];

    const movies = [];

    for (let i = 0; i < movieData.length; i++) {
        movies.push(<MovieCard title={movieData[i].title} director={movieData[i].director} 
            year={movieData[i].year} rating={movieData[i].rating}/>);
    }
    */

   const [movieData, setMovieData] = useState(movieData);

   const handleDelete = (id) => {
        const newMovie = movieData.filter(movie => movie.id !== id);
        setMovieData(newMovie);
   }
   
   // What I did on 12/03/26, after learning about .map() method
   const mappedMovies = movieData.map(item => {
       return <MovieCard movie = {item} handleDelete = {handleDelete} />
   })


    return (
        <div>
            {mappedMovies}
        </div>
    )
}

export default MovieList;