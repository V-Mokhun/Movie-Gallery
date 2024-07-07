import { Movie } from "@/shared/api";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface MovieItemCardProps {
  movie: Movie;
  isFavorite: boolean;
  handleFavorite: () => void;
}

export const MovieItemCard = ({
  movie,
  isFavorite,
  handleFavorite,
}: MovieItemCardProps) => {
  return (
    <>
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
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
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
    </>
  );
};
