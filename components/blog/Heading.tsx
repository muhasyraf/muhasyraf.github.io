import React from "react";

type HeadingProps = {
  title?: string;
};

function Heading({ title }: HeadingProps) {
  return (
    <div
      className={`${
        title ? "" : "pb-10 sm:pb-16 pt-16 sm:pt-20"
      } w-full text-center relative`}
    >
      <h1
        className={`text-2xl sm:text-4xl w-auto mb-1 relative font-bold text-fun-pink-light ${
          title ? "px-2 sm:px-8" : ""
        }`}
      >
        {title ? title : "Blog"}
      </h1>
      {!title && (
        <p className="text-fun-gray-light text-xl">
          I write about my experiences, learnings, and thoughts down here.
        </p>
      )}
    </div>
  );
}

export default Heading;
