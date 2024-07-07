import { Movie } from "./types";

export const getMovies = async () => {
  return fetch("https://my-json-server.typicode.com/moviedb-tech/movies/list", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    return response.json() as Promise<Movie[]>;
  });
};
