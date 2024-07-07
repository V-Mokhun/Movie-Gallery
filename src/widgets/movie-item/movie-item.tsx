"use client";

import { Movie } from "@/shared/api";
import { FAVORITE_MOVIES_STORAGE_KEY } from "@/shared/consts";
import { FavoriteMovie, useFavoriteMovies } from "@/shared/context";
import { Dialog, DialogTrigger } from "@/shared/ui";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { MovieDialogContent } from "./movie-dialog-content";

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = ({ movie }: MovieItemProps) => {
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
        <li className="cursor-pointer relative p-4 bg-gray-200 rounded-lg">
          <div className="relative w-full h-48 mb-4 bg-gray-300">
            <Image
              src={movie.img}
              alt={movie.name}
              className="object-cover w-full h-full rounded-lg"
              width={200}
              height={200}
            />
            <button
              className="absolute z-10 -top-3 -right-3"
              type="button"
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
              onClick={(e) => {
                e.stopPropagation();
                handleFavorite();
              }}
            >
              <StarIcon
                className={`w-6 h-6 text-primary transition-opacity hover:opacity-50 ${
                  isFavorite && "fill-primary"
                }`}
              />
            </button>
          </div>
          <div className="text-center">
            <h3 className="font-bold flex-1">{movie.name}</h3>
            <span className="text-sm text-gray-600">{movie.year}</span>
          </div>
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
