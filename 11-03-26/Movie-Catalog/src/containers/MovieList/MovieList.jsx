import MovieCard from "../../components/MovieCard/MovieCard"

const MovieList = () => {
    
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
      } ];

    const movies = [];

    for (let i = 0; i < movieData.length; i++) {
        movies.push(<MovieCard title={movieData[i].title} director={movieData[i].director} 
            year={movieData[i].year} rating={movieData[i].rating}/>);
    }

    return (
        <div>
            {movies}
        </div>
    )
}

export default MovieList;