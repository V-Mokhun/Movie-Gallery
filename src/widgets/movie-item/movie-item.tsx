"use client";

import { Movie } from "@/shared/api";
import { FAVORITE_MOVIES_STORAGE_KEY } from "@/shared/consts";
import { FavoriteMovie, useFavoriteMovies } from "@/shared/context";
import { Dialog, DialogTrigger } from "@/shared/ui";
import { MovieDialogContent } from "./movie-dialog-content";
import { MovieItemCard } from "./movie-item-card";
import { MovieItemRow } from "../movie-item-row";
import { cn } from "@/shared/lib";
import { MoviesView } from "@/shared/lib/hooks";

interface MovieItemProps {
  movie: Movie;
  view: MoviesView;
}

export const MovieItem = ({ movie, view }: MovieItemProps) => {
  const { favoriteMovies, setFavoriteMovies } = useFavoriteMovies();
  const isFavorite = favoriteMovies.some((fav) => fav.id === movie.id);

  const handleFavorite = () => {
    let favorites: FavoriteMovie[];
    if (isFavorite) {
      favorites = favoriteMovies.filter((fav) => fav.id !== movie.id);
    } else {
      favorites = [...favoriteMovies, { id: movie.id, name: movie.name }];
    }

    localStorage.setItem(
      FAVORITE_MOVIES_STORAGE_KEY,
      JSON.stringify(favorites)
    );
    setFavoriteMovies(favorites);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <li
          className={cn(
            "cursor-pointer relative p-4 bg-gray-200 rounded-lg",
            view === "list" && "flex gap-4"
          )}
        >
          {view === "grid" ? (
            <MovieItemCard
              movie={movie}
              isFavorite={isFavorite}
              handleFavorite={handleFavorite}
            />
          ) : (
            <MovieItemRow
              movie={movie}
              isFavorite={isFavorite}
              handleFavorite={handleFavorite}
            />
          )}
        </li>
      </DialogTrigger>
      <MovieDialogContent
        isFavorite={isFavorite}
        handleFavorite={handleFavorite}
        movie={movie}
      />
    </Dialog>
  );
};
