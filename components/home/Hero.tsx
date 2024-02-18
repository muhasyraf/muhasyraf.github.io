import React from "react";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-28 pb-56 mx-auto mt-10 flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5 font-light z-10">
          Muhammad <span className="font-medium text-fun-pink">Asyraf</span>{" "}
          Faiz Kamil
        </p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg z-10">
          a Grateful{" "}
          <span className="heroShiny1 text-fun-pink">Lifelong Learner</span>{" "}
        </h1>
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
        <img
          className="sqD top-[0px] left-2 sm:left-40"
          style={{ animationDelay: "1s" }}
          src="/static/sqd/laravel.svg"
          alt="laravel"
        />
        <img
          className="sqD top-14 sm:top-[40px] right-[5%] sm:right-[170px]"
          style={{ animationDelay: "0.1s" }}
          src="/static/sqd/react.svg"
          alt="react"
        />
        <img
          className="sqD bottom-40 sm:top-60 left-4 sm:left-72"
          style={{ animationDelay: "0.5s" }}
          src="/static/sqd/code.svg"
          alt="code"
        />
        <img
          className="sqD bottom-28 sm:top-72 right-10 sm:right-[295px]"
          style={{ animationDelay: "1s" }}
          src="/static/sqd/github.svg"
          alt="github"
        />
      </div>
    </>
  );
}

export default Hero;
