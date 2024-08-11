import React from "react";

type Experience = {
  companyName: string;
  position: string;
  employmentType: string;
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
      <h1 className="text-fun-pink-light text-lg sm:text-2xl">
        <span className="font-bold">{experience.companyName}</span>:{" "}
        {experience.position}
      </h1>
      <span className="text-fun-gray-light border border-fun-gray-light bg-transparent px-2 py-1 rounded-lg text-xs sm:text-sm italic font-medium hover:text-bg hover:bg-fun-gray-light">
        {experience.employmentType}
      </span>
      <p className="text-sm sm:text-base text-gray-200">
        {experience.duration}
      </p>
    </div>
  );
}
