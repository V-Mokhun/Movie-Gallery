"use client";

import { XIcon } from "lucide-react";

interface SidebarItemProps {}

export const SidebarItem = ({}: SidebarItemProps) => {
  return (
    <li className="flex items-center justify-between">
      <span>Movie</span>
      <button aria-label="Delete movie from favorites" type="button">
        <XIcon className="w-6 h-6 text-red-600" />
      </button>
    </li>
  );
};
