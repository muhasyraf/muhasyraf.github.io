import React from "react";

type HeadingProps = {
  title?: string;
};

function Heading({ title }: HeadingProps) {
  return (
    <div
      className={`pt-16 sm:pt-20 ${
        title ? "pb-4 sm:pb-8" : "pb-10 sm:pb-16"
      } w-full text-center relative`}
    >
      <h1
        className={`text-2xl sm:text-5xl inline-block w-auto mb-4 relative font-bold text-fun-pink ${
          title ? "px-2 sm:px-8" : ""
        }`}
      >
        {title ? title : "Blogs"}
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
