

const MovieCard = (props) => {

    const {title, director, year, rating} = props.movie;

    return (
        <div>
            <h2>{title}</h2>
            <p>Directed by: {director}</p>
            <p>Year: {year}</p>
            <p>Rating: {rating}</p>
        </div>
    )
}

export default MovieCard;