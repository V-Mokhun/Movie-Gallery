"use client";

import { StarIcon } from "lucide-react";
import Image from "next/image";

interface MovieItemProps {}

export const MovieItem = ({}: MovieItemProps) => {
  return (
    <li className="relative p-4 bg-gray-200 rounded-lg">
      <div className="relative w-full h-48 mb-4 bg-gray-300">
        <Image
          src="/placeholder.svg"
          alt="Movie Thumbnail"
          className="object-cover w-full h-full rounded-lg"
          width={300}
          height={200}
        />
        <StarIcon className="absolute -top-2 -right-2 w-6 h-6" />
      </div>
      <div className="text-center">
        <h3 className="font-bold">Movie Name</h3>
        <span className="text-sm text-gray-600">Year</span>
      </div>
    </li>
  );
};
