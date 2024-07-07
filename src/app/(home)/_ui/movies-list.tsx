import { getMovies } from "@/shared/api";
import { MovieItem } from "@/widgets";

interface MoviesListProps {}

export const MoviesList = async ({}: MoviesListProps) => {
  const movies = await getMovies();

  return (
    <div className="flex flex-col items-center w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
