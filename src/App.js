import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import MovieCard from "./components/MovieCards";
import Scrapper from "./components/Scrapper";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/get-coming-soon-movies",
      params: {
        homeCountry: "US",
        purchaseCountry: "US",
        currentCountry: "US",
      },
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "7577630e23msh5e3f19cb7363e31p1f316cjsndcd0b76b24e5",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const fullMovielink = response.data.map(
          (movie) => `http://imdb.com${movie}`
        );
        setMovies(fullMovielink);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  console.log(movies);
  useEffect(() => {
    getMovies();
    // const fullMovieLink = movies.map((movie) => `http://imdb.com${movie}`);
    // setMovies(fullMovieLink);
  }, []);
  return (
    <>
      <MovieCard movies={movies} />
      <Scrapper movies={movies} />
    </>
  );
}

export default App;

// .forEach((element) => {
//   console.log(`http://imdb.com/${element}`);
// });
