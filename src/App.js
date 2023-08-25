import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import AddToFav from "./components/AddToFav";
import RemoveFromFav from "./components/RemoveFromFav";

function App() {
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("avenger");

  async function getMovieList(searchValue) {
    const movieFectUrl = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const responseFromMovieFetchUrl = await fetch(movieFectUrl);
    const JSONresponseFromMovieFetchUrl =
      await responseFromMovieFetchUrl.json();
    console.log("JSONresponseFromMovieFetchUrl", JSONresponseFromMovieFetchUrl);
    if (JSONresponseFromMovieFetchUrl.Search) {
      setMovies(JSONresponseFromMovieFetchUrl.Search);
    }
  }

  useEffect(() => {
    getMovieList(searchValue);
  }, [searchValue]);

  const addMovieToFav = (movie) => {
    const favMovieList = [...favMovies, movie];
    setFavMovies(favMovieList);
  };

  const removeMovieFromFav = (movie) => {
    const removedList = favMovies.filter((ele) => ele.imdbID !== movie.imdbID);
    setFavMovies(removedList)
  };

  return (
    <>
      <div className="App">
        {console.log("favMovies", favMovies)}
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <MovieList
          movies={movies}
          icon={AddToFav}
          whatToDoOnIconClick={addMovieToFav}
        />

        <h1>Favourite Movies</h1>
        <MovieList
          movies={favMovies}
          icon={RemoveFromFav}
          whatToDoOnIconClick={removeMovieFromFav}
        />
      </div>
    </>
  );
}

export default App;
