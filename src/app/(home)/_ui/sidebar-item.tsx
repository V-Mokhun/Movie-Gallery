"use client";

import { FavoriteMovie } from "@/shared/context";
import { XIcon } from "lucide-react";

interface SidebarItemProps {
  movie: FavoriteMovie;
  onDelete: () => void;
}

export const SidebarItem = ({ movie, onDelete }: SidebarItemProps) => {
  return (
    <li className="flex items-center justify-between">
      <span>{movie.name}</span>
      <button
        aria-label="Delete movie from favorites"
        type="button"
        onClick={onDelete}
      >
        <XIcon className="w-6 h-6 text-red-600" />
      </button>
    </li>
  );
};
