"use client";

import { StarIcon } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { useFavoriteMovies } from "@/shared/context";
import { FAVORITE_MOVIES_STORAGE_KEY } from "@/shared/consts";

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const { favoriteMovies, setFavoriteMovies } = useFavoriteMovies();

  const handleDelete = (id: number) => {
    const favorites = favoriteMovies.filter((fav) => fav.id !== id);
    setFavoriteMovies(favorites);
    localStorage.setItem(
      FAVORITE_MOVIES_STORAGE_KEY,
      JSON.stringify(favorites)
    );
  };

  return (
    <aside className="flex-1 w-full sm:flex-[0_1_25%] sm:min-w-48 p-4 mb-4 sm:mb-0 bg-gray-300 rounded-lg">
      <div className="flex items-center mb-4">
        <StarIcon className="w-8 h-8 mr-2" />
        <h2 className="text-xl font-bold">Favorite List</h2>
      </div>
      <ul className="space-y-2">
        {favoriteMovies.map((movie) => (
          <SidebarItem
            key={movie.id}
            movie={movie}
            onDelete={() => handleDelete(movie.id)}
          />
        ))}
      </ul>
    </aside>
  );
};
