import React from "react";
import { Skills } from "@/data/content/home";

function SkillsPage() {
  return (
    <div className="flex flex-col md:px-8 md:py-4 md:flex-row bg-[#17304185] rounded-xl justify-between relative">
      <h2 className="text-2xl md:text-3xl w-full text-center md:self-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
        Some tools i've been working with
      </h2>
      <div className="max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-4 md:gap-6 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {Skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
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
