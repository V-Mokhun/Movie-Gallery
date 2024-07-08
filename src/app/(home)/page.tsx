"use client";

import { getMovies, Movie } from "@/shared/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MoviesActions, MoviesList, Sidebar } from "./_ui";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<string[]>([]);

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        const data = await getMovies();
        setMovies(data);
        const formattedGenres = data
          .map((movie) => {
            return movie.genres.map(
              (genre) => genre[0].toUpperCase() + genre.slice(1)
            );
          })
          .flat();

        setGenres([...new Set(formattedGenres)]);
        setError("");
      } catch (error) {
        setMovies([]);

        if (error instanceof Error) {
          setError(error.message);
        } else if (typeof error === "string") {
          setError(error);
        } else {
          setError("Something went wrong...");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const genre = searchParams.get("genre");

    if (!genre) {
      setFilteredMovies(movies);
      return;
    }

    const filteredMovies = movies.filter((movie) =>
      movie.genres.map((g) => g.toLowerCase()).includes(genre.toLowerCase())
    );
    setFilteredMovies(filteredMovies);
  }, [searchParams, movies]);

  let content = <p className="sm:text-lg">Loading...</p>;

  if (error) {
    content = <p className="text-red-500 sm:text-lg">{error}</p>;
  } else if (!isLoading) {
    content = <MoviesList movies={filteredMovies} />;
  }

  return (
    <section className="py-4 md:py-8">
      <div className="flex flex-col-reverse sm:flex-row items-start gap-4 max-w-7xl px-4 mx-auto">
        <div className="flex flex-col items-center w-full">
          <h1 className="mb-4 text-3xl font-bold">Movies Gallery</h1>
          <MoviesActions genres={genres} />
          {content}
        </div>
        <Sidebar />
      </div>
    </section>
  );
}
