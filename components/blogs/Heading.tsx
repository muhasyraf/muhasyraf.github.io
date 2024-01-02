import React from "react";

type HeadingProps = {
  title?: string;
};

const isTitle = (title: string) => {
  return title ? "pb-4 sm:pb-8" : "pb-8 sm:pb-14";
};

function Heading({ title }: HeadingProps) {
  return (
    <div className={`pt-16 sm:pt-20 ${isTitle} w-full text-center relative`}>
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-4 relative font-bold text-fun-pink">
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
