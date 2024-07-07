import { Suspense } from "react";
import { MoviesList, Sidebar } from "./_ui";

export default function Home() {
  return (
    <section className="py-4 md:py-8">
      <div className="flex flex-col-reverse sm:flex-row items-start gap-4 max-w-7xl px-4 mx-auto">
        <div className="flex flex-col items-center w-full">
          <h1 className="mb-8 text-3xl font-bold">Movies Gallery</h1>
          <Suspense fallback={<div>Loading Movies...</div>}>
            <MoviesList />
          </Suspense>
        </div>
        <Sidebar />
      </div>
    </section>
  );
}
