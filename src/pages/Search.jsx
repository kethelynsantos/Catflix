import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Falha ao buscar os filmes");
      }
      const data = await res.json();
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
      getSearchedMovies(searchWithQueryURL);
    }
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
      Results for: <span className="query-text">{query}</span>
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : movies.length === 0 ? (
        <p>No results found for "{query}"</p>
      ) : (
        <div className="movies-container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
