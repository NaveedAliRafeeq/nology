

const MovieCard = (props, handleDelete) => {

    const {id, title, director, year, rating} = props.movie;

    return (
        <div>
            <h2>{title}</h2>
            <p>Directed by: {director}</p>
            <p>Year: {year}</p>
            <p>Rating: {rating}</p>
            <button onClick={() => handleDelete(id)}>Delete Movie</button>
        </div>
    )
}

export default MovieCard;