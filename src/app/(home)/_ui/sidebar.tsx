"use client";

import { StarIcon } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  return (
    <aside className="flex-auto min-w-48 p-4 bg-gray-300 rounded-lg">
      <div className="flex items-center mb-4">
        <StarIcon className="w-8 h-8 mr-2" />
        <h2 className="text-xl font-bold">Favorite List</h2>
      </div>
      <ul className="space-y-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <SidebarItem key={index} />
        ))}
      </ul>
    </aside>
  );
};
