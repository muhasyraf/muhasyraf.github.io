import React from "react";
import { Skills } from "@/data/content/home";

function SkillsPage() {
  return (
    <div className="flex flex-col px-4 md:px-8 py-4 md:flex-row bg-gradient-to-b sm:bg-gradient-to-r from-[#173041b4] via-transparent to-[#173041b4] rounded-xl justify-between relative">
      <h2 className="text-2xl md:text-3xl w-full text-center md:self-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 text-fun-pink-light">
        Some tools i've been working with
      </h2>
      <div className="max-w-lg w-full mx-auto md:mx-none grid gap-x-4 gap-y-8 sm:gap-4 md:gap-6 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {Skills.map((item, index) => {
          return (
            <div
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center transition hover:-translate-y-2.5 cursor-pointer hover:scale-125"
            >
              <img src={item.icon} style={item.style} alt="Skills icon" />
              <p className="text-xs text-fun-pink-light font-monospace font-bold mt-3 opacity-80">
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
