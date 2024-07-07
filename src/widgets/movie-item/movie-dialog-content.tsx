"use client";

import { Movie } from "@/shared/api";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface MovieDialogContentProps {
  movie: Movie;
  isFavorite: boolean;
  handleFavorite: () => void;
}

export const MovieDialogContent = ({
  movie,
  handleFavorite,
  isFavorite,
}: MovieDialogContentProps) => {
  return (
    <DialogContent>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 min-w-48">
          <Image
            src={movie.img}
            alt={movie.name}
            className="object-cover w-full h-auto rounded-md"
            width={300}
            height={500}
          />
          <div className="flex items-center gap-2 justify-between">
            <button
              type="button"
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
              onClick={handleFavorite}
            >
              <StarIcon
                className={`w-10 h-10 text-primary transition-opacity hover:opacity-50 ${
                  isFavorite && "fill-primary"
                }`}
              />
            </button>
            <span className="text-lg">
              Year: <strong>{movie.year}</strong>
            </span>
          </div>
        </div>
        <DialogHeader>
          <DialogTitle>{movie.name}</DialogTitle>
          <DialogDescription>{movie.description}</DialogDescription>
        </DialogHeader>
      </div>
      <div className="flex items-center gap-4">
        <ul className="grid grid-cols-2 gap-4 min-w-48">
          {movie.genres.map((genre) => (
            <li
              className="px-2 py-1 rounded-md text-center bg-gray-300"
              key={genre}
            >
              {genre}
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          <li>
            <strong>Director:</strong> {movie.director}
          </li>
          <li>
            <strong>Starring:</strong> {movie.starring.join(", ")}
          </li>
        </ul>
      </div>
    </DialogContent>
  );
};
