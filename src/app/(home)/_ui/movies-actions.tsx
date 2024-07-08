"use client";

import { cn, useMoviesView } from "@/shared/lib";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";
import { LayoutGrid, LayoutList } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface MoviesActionsProps {
  genres: string[];
}

export const MoviesActions = ({ genres }: MoviesActionsProps) => {
  const [view, setView] = useMoviesView();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleGenreChange = (genre: string) => {
    const params = new URLSearchParams(searchParams);

    if (genre === "none") {
      params.delete("genre");
    } else {
      params.set("genre", genre);
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex w-full items-center justify-between gap-4 mb-6">
      <Select
        defaultValue={searchParams.get("genre") ?? "none"}
        onValueChange={handleGenreChange}
      >
        <SelectTrigger className="max-w-xs">
          <SelectValue placeholder="Select a genre" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">All Genres</SelectItem>
          {genres.map((genre) => (
            <SelectItem key={genre} value={genre}>
              {genre}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex items-center gap-4">
        <button onClick={() => setView("grid")} type="button">
          <LayoutGrid
            className={cn(
              "w-6 h-6 hover:text-primary transition-colors",
              view === "grid" &&
                "outline-2 outline-offset-2 outline-dashed outline-black"
            )}
          />
        </button>
        <button onClick={() => setView("list")} type="button">
          <LayoutList
            className={cn(
              "w-6 h-6 hover:text-primary transition-colors",
              view === "list" &&
                "outline-2 outline-offset-2 outline-dashed outline-black"
            )}
          />
        </button>
      </div>
    </div>
  );
};
