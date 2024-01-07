import React from "react";
import SectionTitle from "../global/SectionTitle";
import { Blogs } from "@/data/content/blogs";
import Link from "next/link";
import { KebabCase } from "@/utils/utils";

const BlogData = Blogs.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

function BlogsPage() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="Here are My Latest Posts!" />
      <div className="max-w-5xl m-auto md:max-h-[200px] grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-3 items-start">
        {BlogData.slice(0, 3).map((item, index) => {
          return (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#173041b4] via-transparent to-[#173041b4] p-4 rounded-xl h-full flex flex-col justify-between`}
            >
              <Link href={`/blogs/${KebabCase(item.title)}`}>
                <h2 className="font-bold text-xl text-fun-pink">
                  {item.title}
                </h2>
              </Link>
              <div className="mt-2 flex justify-between">
                <p className="text-sm text-fun-gray">
                  {item.date.toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <Link
                  href={`/blogs/${KebabCase(item.title)}`}
                  className="self-end"
                >
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
