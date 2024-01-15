import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 mx-auto mt-10 flex justify-center text-center flex-col items-center z-1"
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
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
          className="z-10"
        >
          <div className="group cursor-pointer font-bold whitespace-nowrap px-4 py-2 text-fun-white border-2 text-2xl rounded-3xl border-fun-pink bg-transparent hover:bg-fun-pink hover:text-bg hover:border-fun-pink transition-colors flex flex-row space-x-4 items-center">
            <div>
              Know <span className="text-fun-pink group-hover:text-bg">me</span>{" "}
              more!
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              width="26"
              viewBox="0 0 512 512"
              className="fill-current"
            >
              <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6L269.8 394.5c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3z" />
            </svg>
          </div>
        </ScrollLink>
        <img
          className="sqD top-[0px] left-2 sm:left-40"
          style={{ animationDelay: "1s" }}
          src="/static/sqd/laravel.svg"
          alt="laravel"
        />
        <img
          className="sqD top-20 sm:top-[40px] right-[5%] sm:right-[170px]"
          style={{ animationDelay: "0.1s" }}
          src="/static/sqd/react.svg"
          alt="react"
        />
        <img
          className="sqD bottom-2 sm:top-60 left-4 sm:left-72"
          style={{ animationDelay: "0.5s" }}
          src="/static/sqd/code.svg"
          alt="code"
        />
        <img
          className="sqD bottom-14 sm:top-72 right-16 sm:right-[295px]"
          style={{ animationDelay: "1s" }}
          src="/static/sqd/github.svg"
          alt="github"
        />
      </div>
    </>
  );
}

export default Hero;
