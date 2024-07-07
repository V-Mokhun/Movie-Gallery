import { MoviesList, Sidebar } from "./_ui";

export default function Home() {
  return (
    <section>
      <div className="flex gap-4 container">
        <div className="flex flex-col items-center w-full">
          <h1 className="mb-8 text-3xl font-bold">Movies Gallery</h1>
          <MoviesList />
        </div>
        <Sidebar />
      </div>
    </section>
  );
}
