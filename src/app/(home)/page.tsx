"use client";

import { useEffect, useState } from "react";
import { MoviesActions, MoviesList, Sidebar } from "./_ui";
import { getMovies, Movie } from "@/shared/api";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
      const formattedGenres = data
        .map((movie) => {
          return movie.genres.map(
            (genre) => genre[0].toUpperCase() + genre.slice(1)
          );
        })
        .flat();

      setGenres([...new Set(formattedGenres)]);
    });
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

  return (
    <section className="py-4 md:py-8">
      <div className="flex flex-col-reverse sm:flex-row items-start gap-4 max-w-7xl px-4 mx-auto">
        <div className="flex flex-col items-center w-full">
          <h1 className="mb-4 text-3xl font-bold">Movies Gallery</h1>
          <MoviesActions genres={genres} />
          <MoviesList movies={filteredMovies} />
        </div>
        <Sidebar />
      </div>
    </section>
  );
}
