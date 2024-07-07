import { MovieItem } from "@/widgets";

interface MoviesListProps {}

export const MoviesList = async ({}: MoviesListProps) => {
  const moviesResponse = await fetch(
    "https://my-json-server.typicode.com/moviedb-tech/movies/list",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const movies = await moviesResponse.json();

  console.log(movies);

  return (
    <div className="flex flex-col items-center w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <MovieItem key={index} />
        ))}
      </div>
    </div>
  );
};
