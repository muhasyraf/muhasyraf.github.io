import React from "react";

type Experience = {
  companyName: string;
  position: string;
  duration: string;
  image: string;
  imagestyle?: object;
  link: string;
};

export default function ExperienceCard(
  { experience }: { experience: Experience },
  key: number
) {
  return (
    <div className="flex flex-col items-center gap-1" key={key}>
      <div
        className={`${experience.companyName === "Metamata.id" ? "mb-2" : ""}`}
      >
        <a href={experience.link} target="_blank" rel="noopener noreferrer">
          <img
            src={experience.image}
            alt={`${experience.companyName} Logo`}
            className={`w-[12rem] sm:w-[15rem]`}
            style={experience.imagestyle}
          />
        </a>
      </div>
      <h1 className="font-bold text-fun-pink-light text-lg sm:text-2xl">
        {experience.companyName}: {experience.position}
      </h1>
      <p className="text-sm sm:text-base text-gray-200">
        {experience.duration}
      </p>
    </div>
  );
}
