function MovieCard({ movies }) {
  console.log("TEST", movies);

  return (
    <div className="wrapper">
      {movies.items.map((movie) => {
        return (
          <div className="card">
            <img src={movie.image}></img>
            <div className="descriptions">
              <h1>{movie.title}</h1>
              <p>{movie.plot}</p>
              <a href={`https://imdb.com/title/${movie.id}`}>
                <button>IMDb</button>
              </a>
              <h3>Release Date: {movie.releaseState}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieCard;

// <div className="card">
//   <div className="box">
//     <div
//       style={{ backgroundImage: `url(${movies.image})` }}
//       className="content"
//     >
//       <h3>{movie.title}</h3>
//       <p>{movie.plot}</p>
//       <a href={`https://imdb.com/title/${movie.id}`}>IMDB</a>
//       <p>{movie.releaseState}</p>
//     </div>
//   </div>
// </div>
