import React from "react";
import Link from "next/link";
import dayjs from "dayjs";

export default function BlogPage({ posts }) {
  return (
    <div className="flex flex-col gap-3">
      {posts.map((frontMatter, index) => {
        return (
          <div
            className="flex flex-col gap-1 text-start shadow-xl bg-gradient-to-br from-fun-card via-transparent to-fun-card backdrop-blur-sm border-fun-border border-2 rounded-xl p-4"
            key={index}
          >
            <Link href={`/blog/${frontMatter.slug}`}>
              <h1 className="text-2xl sm:text-4xl font-bold text-fun-pink-light italic">
                {frontMatter.title}
              </h1>
            </Link>
            <p className="text-xs sm:text-sm text-fun-pink">
              {dayjs(frontMatter.date).format("MMMM DD, YYYY")}
            </p>
            <p className="text-sm sm:text-lg text-fun-gray-light max line-clamp-2">
              {frontMatter.description}
            </p>
            <Link href={`/blog/${frontMatter.slug}`} className="self-end">
              <div
                className={" text-fun-gray cursor-pointer text-sm hover:text-fun-pink flex items-center gap-1"}
              >
                <p>Read more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                  className={"fill-current"}
                >
                  <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
                </svg>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
