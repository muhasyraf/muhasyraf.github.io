import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="p-4 flex flex-col justify-center gap-6 w-full bg-gradient-to-br from-[#173041b4] via-transparent to-[#173041b4] h-[50dvh]">
      <h1 className="font-bold text-fun-pink-light text-3xl">
        Will be updated very soon, stay tuned!
      </h1>
      <Link href="/">
        <span className="text-fun-gray-light hover:text-fun-pink-light">
          Go back to home
        </span>
      </Link>
    </div>
  );
}
