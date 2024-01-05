import React from "react";
import { Skills } from "@/data/content/home";

function SkillsPage() {
  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
        I got the experience
        <br />
        Here are sort of my skills
        <img
          className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px]"
          src="/static/doodles/skills/laptop.svg"
          alt="laptop"
        />
        <img
          className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src="/static/doodles/skills/coding.svg"
          alt="coding"
        />
        <img
          className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
          src="/static/doodles/skills/youtube.svg"
          alt="youtube"
        />
        <img
          className="sqD top-[-15px] right-[-20px]"
          src="/static/doodles/skills/fillStar.svg"
          alt="fillStar"
        />
      </h2>
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {Skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <img src={item.icon} style={item.style} alt="Skills icon" />
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsPage;
