import { MOVIES_VIEW_STORAGE_KEY } from "@/shared/consts";
import { useSyncExternalStore } from "react";

export type MoviesView = "grid" | "list";

export function useMoviesView() {
  const setMoviesView = (newValue: MoviesView) => {
    window.localStorage.setItem(MOVIES_VIEW_STORAGE_KEY, newValue);
    window.dispatchEvent(
      new StorageEvent("storage", { key: MOVIES_VIEW_STORAGE_KEY, newValue })
    );
  };

  const getSnapshot = () =>
    (localStorage.getItem(MOVIES_VIEW_STORAGE_KEY) ?? "grid") as MoviesView;

  const subscribe = (listener: () => void) => {
    window.addEventListener("storage", listener);
    return () => void window.removeEventListener("storage", listener);
  };

  const getServerSnapshot = () => "grid" as MoviesView;

  const view = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return [view, setMoviesView] as const;
}
