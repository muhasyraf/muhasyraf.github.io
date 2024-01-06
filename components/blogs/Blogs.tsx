import React from "react";
import Link from "next/link";
import { Blogs } from "@/data/content/blogs";
import { KebabCase } from "@/utils/utils";

const BlogData = Blogs.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

function BlogsPage() {
  return (
    <div className="flex flex-col gap-3">
      {BlogData.map((item, index) => {
        return (
          <Link href={`/blogs/${KebabCase(item.title)}`}>
            <div
              className="flex flex-col gap-1 text-start bg-gradient-to-br from-[#1730415b] hover:bg-[#17304197] rounded-xl p-4"
              key={index}
            >
              <h1 className="text-2xl sm:text-4xl font-bold text-fun-pink-light italic">
                {item.title}
              </h1>
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
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default BlogsPage;
