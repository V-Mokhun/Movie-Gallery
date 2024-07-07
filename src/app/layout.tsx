import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FavoriteMoviesProvider } from "@/shared/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Gallery",
  description: "A gallery of movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FavoriteMoviesProvider>
          <main className="py-6 h-full">{children}</main>
        </FavoriteMoviesProvider>
      </body>
    </html>
  );
}
