"use client";

import { Movie } from "@/shared/api";
import { cn } from "@/shared/lib";
import { useMoviesView } from "@/shared/lib/hooks";
import { MovieItem } from "@/widgets";

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList = ({ movies }: MoviesListProps) => {
  const [view] = useMoviesView();

  return (
    <ul
      className={cn(
        "w-full",
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
