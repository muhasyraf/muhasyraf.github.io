import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 mx-auto mt-10 flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5 font-light">
          Muhammad <span className="font-medium text-fun-pink">Asyraf</span>{" "}
          Faiz Kamil
        </p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
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
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-transparent hover:bg-fun-pink hover:text-bg hover:border-fun-pink transition-colors">
            Know me more!
          </div>
        </ScrollLink>
      </div>
    </>
  );
}

export default Hero;
