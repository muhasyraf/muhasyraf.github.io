import React from "react";

function Hero() {
  return (
    <div
      className="relative heroElem w-full pt-28 pb-56 mx-auto mt-10 flex justify-center text-center flex-col items-center z-1"
      style={{ maxWidth: "1200px" }}
    >
      <p className="text-lg sm:text-xl mb-2 font-light z-10">
        Muhammad <span className="font-medium text-fun-pink">Asyraf</span> Faiz
        Kamil
      </p>
      <p className="text-base sm:text-lg font-medium z-10 mb-5 text-fun-pink italic">
        - Software Engineer -
      </p>
      <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-4xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-medium heroShinyBg z-10">
        a Grateful{" "}
        <span className="heroShiny1 text-fun-pink">Lifelong Learner</span>{" "}
      </h1>
      <div className="scrollDown flex flex-col justify-center items-center">
        <p className="text-base text-gray-400">Scroll down</p>
        <img
          src="/static/icons/arrow-up.svg"
          alt="Arrow Icon"
          className="rotate-180 w-5 scroll-arrow"
        />
      </div>
      <img
        className="sqD top-[0px] left-2 sm:left-40 max-sm:block sm:hidden lg:block"
        style={{ animationDelay: "1s" }}
        src="/static/sqd/laravel.svg"
        alt="laravel"
      />
      <img
        className="sqD top-20 sm:top-[40px] right-[5%] sm:right-[170px] max-sm:block sm:hidden lg:block"
        style={{ animationDelay: "0.1s" }}
        src="/static/sqd/react.svg"
        alt="react"
      />
      <img
        className="sqD bottom-36 sm:top-60 left-16 sm:left-72 max-sm:block sm:hidden lg:block"
        style={{ animationDelay: "0.5s" }}
        src="/static/sqd/code.svg"
        alt="code"
      />
      <img
        className="sqD exclude-sqD bottom-28 sm:top-72 right-10 sm:right-[295px]"
        style={{ animationDelay: "1s" }}
        src="/static/sqd/github.svg"
        alt="github"
      />
    </div>
  );
}

export default Hero;
