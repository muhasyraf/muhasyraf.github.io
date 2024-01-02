import React from "react";

type HeadingProps = {
  tag?: string;
  title?: string;
};

function Heading({ tag, title }: HeadingProps) {
  return (
    <div
      className={`${
        tag || title ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"
      } w-full text-center relative`}
    >
      {tag || title ? (
        <>
          <h1 className="text-3xl sm:text-4xl inline-block w-auto mx-auto mb-8 relative font-bold text-fun-pink">
            {tag ? `${tag} Projects` : title}
            <img
              className="sqD w-8 sm:w-10 -top-6 -right-2 sm:-right-8 sm:-top-8 absolute"
              src="/static/doodles/hero/code.svg"
              alt="code"
            />
          </h1>
        </>
      ) : (
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative font-bold text-fun-pink">
          Projects
          <img
            className="sqD w-10 -top-8 -right-8 absolute"
            src="/static/doodles/hero/code.svg"
            alt="code"
          />
        </h1>
      )}
      {!tag ||
        (!title && (
          <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
            I've built cool apps and websites using anything from HTML to React
            (and even PHP!). Here are some of my favorite projects over the
            course of my journey.
          </p>
        ))}
    </div>
  );
}

export default Heading;
