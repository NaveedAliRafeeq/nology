

const MovieCard = (movie) => {

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>Directed by: {movie.director}</p>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
        </div>
    )
}

export default MovieCard;