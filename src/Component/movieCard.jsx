import { useState, useEffect } from "react";

const API_KEY = "b18838e9&s";
const input = "Batman";

function MoviesCard() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${input}&type=movie`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        if (data.Response === "False") {
          throw new Error(data.Error);
        }

        console.log(data);
        setMovies(data.Search || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Movies</h1>

      {movies.map((movie) => (
        <div className="movie-card" key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />

          <div className="movie-info">
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesCard;