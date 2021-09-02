import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import MovieCard from "./components/MovieCards";

function App() {
  const [movies, setMovies] = useState([]);
  const [imdblink, setImdblink] = useState("");

  const getMovies = () => {
    const options = {
      method: "GET",
      url: "",
    };

    axios
      .request(options)
      .then(function (response) {
        const fullMovielink = response.data.items.map(
          (movie) => `https://imdb.com/title/${movie.id}`
        );
        setMovies(response.data);
        setImdblink(fullMovielink);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <MovieCard movies={movies} imdblink={imdblink} />
      {/* <Scrapper movies={movies} /> */}
    </>
  );
}

export default App;

// .forEach((element) => {
//   console.log(`http://imdb.com/${element}`);
// });
// const fullMovielink = response.data.map(
//   (movie) => `http://imdb.com${movie}`
// );
// setMovies(fullMovielink);
