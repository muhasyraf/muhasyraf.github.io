import React from "react";
import { Skills } from "@/data/content/home";

export default function SkillsPage() {
  return (
    <div className="flex flex-col justify-center gap-3 sm:gap-6 w-full rounded-lg shadow-xl bg-gradient-to-br from-fun-card via-transparent to-fun-card backdrop-blur-sm border-2 border-fun-border my-2 sm:my-4 p-4 sm:p-8">
      <h1 className="font-bold text-fun-pink text-2xl sm:text-5xl">Skills</h1>
      <div className="w-full mx-auto md:mx-none grid gap-x-2 gap-y-6 md:gap-y-8 grid-cols-3 md:grid-cols-6 items-center place-content-center">
        {Skills.map((item, index) => {
          return (
            <div
              key={index}
              className="w-12 mx-auto flex items-center flex-col justify-center transition hover:-translate-y-2.5 cursor-pointer hover:scale-125"
            >
              <img src={item.icon} style={item.style} alt="Skills icon" />
              <p className="text-sm md:text-base text-fun-pink-light font-monospace font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
