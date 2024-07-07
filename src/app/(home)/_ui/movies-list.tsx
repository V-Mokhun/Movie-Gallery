"use client";

import { getMovies, Movie } from "@/shared/api";
import { cn } from "@/shared/lib";
import { useMoviesView } from "@/shared/lib/hooks";
import { MovieItem } from "@/widgets";
import { useEffect, useState } from "react";

interface MoviesListProps {}

export const MoviesList = ({}: MoviesListProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [view] = useMoviesView();

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  return (
    <ul
      className={cn(
        view === "grid"
          ? "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          : "flex flex-col gap-4 w-full"
      )}
    >
      {movies.map((movie) => (
        <MovieItem view={view} key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
