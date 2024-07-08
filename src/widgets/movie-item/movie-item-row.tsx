import { Movie } from "@/shared/api";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface MovieItemRowProps {
  movie: Movie;
  isFavorite: boolean;
  handleFavorite: () => void;
}

export const MovieItemRow = ({
  handleFavorite,
  isFavorite,
  movie,
}: MovieItemRowProps) => {
  return (
    <>
      <Image
        src={movie.img}
        alt={movie.name}
        width={150}
        height={150}
        className="object-cover max-w-24 xs:max-w-32 sm:max-w-full h-full rounded-lg aspect-square"
      />
      <div className="space-y-2 xs:space-y-3">
        <div className="flex items-center gap-2 xs:gap-4">
          <h3 className="xs:text-lg font-bold">{movie.name}</h3>
          <p className="text-sm text-gray-600">{movie.year}</p>
        </div>
        <p className="text-sm xs:text-base line-clamp-2 sm:line-clamp-1 text-gray-500">
          {movie.description}
        </p>
        <ul className="flex gap-2 xs:gap-4 flex-wrap">
          {movie.genres.map((genre) => (
            <li
              className="px-2 py-1 rounded-md text-center bg-gray-300 text-sm xs:text-base"
              key={genre}
            >
              {genre}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="absolute z-10 top-0.5 right-0.5 xs:top-2 xs:right-2"
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
    </>
  );
};
