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
    <div className="bg-black text-white font-sans min-h-screen mt-20 md:p-8">
      <h1 className="text-center text-5xl font-medium mb-5">Movies</h1>

       <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {movies.map((movie) => (
            <div className="rounded-xl overflow-hidden text-current my-8" key={movie.imdbID}>
            <img className="w-3/4 h-70 object-cover" src={movie.Poster} alt={movie.Title} />

            <div className="p-4">
                <h2 className="text-3xl mb-2">{movie.Title}</h2>
                <p className="text-gray-300 my-2">{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesCard;