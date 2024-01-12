import React from "react";
import Link from "next/link";
import { Blog } from "@/data/content/blog";
import { KebabCase } from "@/utils/utils";

const BlogData = Blog.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

function BlogPage() {
  return (
    <div className="flex flex-col gap-3">
      {BlogData.map((item, index) => {
        return (
          <div
            className="flex flex-col gap-1 text-start bg-gradient-to-br from-[#1730415b] via-transparent to-[#1730415b] rounded-xl p-4"
            key={index}
          >
            <Link href={`/blog/${KebabCase(item.title)}`}>
              <h1 className="text-2xl sm:text-4xl font-bold text-fun-pink-light italic">
                {item.title}
              </h1>
            </Link>
            <p className="text-xs sm:text-sm text-fun-pink">
              {item.date.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-sm sm:text-lg text-fun-gray-light max line-clamp-2">
              {item.body[0].content}
            </p>
            <Link href={`/blog/${KebabCase(item.title)}`} className="self-end">
              <div
                className={` text-fun-gray cursor-pointer text-sm hover:text-fun-pink flex items-center gap-1`}
              >
                <p>Read more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                  className={`fill-current`}
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

export default BlogPage;
