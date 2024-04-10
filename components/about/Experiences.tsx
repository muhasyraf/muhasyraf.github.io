import React from "react";
import { Experience } from "@/data/content/about";
import ExperienceCard from "@/components/about/ExperienceCard";

export default function Experiences() {
  return (
    <div className="flex flex-col justify-center gap-3 sm:gap-6 w-full rounded-lg shadow-lg bg-fun-card my-2 sm:my-4 p-4 sm:p-8">
      <h1 className="font-bold text-fun-pink text-2xl sm:text-5xl">
        Experiences
      </h1>
      <div className="grid grid-flow-row gap-3 sm:gap-6 my-4 sm:my-8">
        {Experience.map((item, index) => {
          return (
            <div key={index}>
              <ExperienceCard experience={item} />
              {index !== Experience.length - 1 && (
                <div className="divider divider-secondary">
                  <img src="/static/icons/arrow-up.svg" alt="Arrow" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
