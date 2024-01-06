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
          </h1>
        </>
      ) : (
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative font-bold text-fun-pink-light">
          Projects
        </h1>
      )}
      {!tag ||
        (!title && (
          <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
            Check my cool {tag ? `${tag} ` : ""}projects below!
          </p>
        ))}
    </div>
  );
}

export default Heading;
