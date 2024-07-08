"use client";

import { FAVORITE_MOVIES_STORAGE_KEY } from "@/shared/consts";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export interface FavoriteMovie {
  id: number;
  name: string;
}

interface FavoriteMoviesContextProps {
  favoriteMovies: FavoriteMovie[];
  setFavoriteMovies: Dispatch<SetStateAction<FavoriteMovie[]>>;
}

const FavoriteMoviesContext = createContext<
  FavoriteMoviesContextProps | undefined
>(undefined);

export const FavoriteMoviesProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<FavoriteMovie[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITE_MOVIES_STORAGE_KEY);
    if (storedFavorites) {
      setFavoriteMovies(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <FavoriteMoviesContext.Provider
      value={{ favoriteMovies, setFavoriteMovies }}
    >
      {children}
    </FavoriteMoviesContext.Provider>
  );
};

export const useFavoriteMovies = () => {
  const context = useContext(FavoriteMoviesContext);
  if (context === undefined) {
    throw new Error(
      "useFavoriteMovies must be used within a FavoriteMoviesProvider"
    );
  }
  return context;
};
