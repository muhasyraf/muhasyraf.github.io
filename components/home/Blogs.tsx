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
              className={`bg-[#17304185] p-4 rounded-xl h-full flex flex-col justify-between`}
            >
              <Link href={`/blogs/${KebabCase(item.title)}`}>
                <h2 className="font-bold text-xl text-fun-pink">
                  {item.title}
                </h2>
              </Link>
              <p className="mt-2 text-sm text-fun-gray">
                {item.date.toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
