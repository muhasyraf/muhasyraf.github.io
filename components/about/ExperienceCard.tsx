import Image from "next/image";
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
    <div className="flex flex-col items-center gap-2" key={key}>
      <div
        className={`${experience.companyName === "Metamata.id" ? "mb-2" : ""}`}
      >
        <a href={experience.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={experience.image}
            width={240}
            height={240}
            alt={`${experience.companyName} Logo`}
            className={"w-[12rem] sm:w-[15rem]"}
            style={experience.imagestyle}
          />
        </a>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-fun-pink-light text-lg sm:text-2xl font-medium">
          {experience.position}
        </h1>
        <h1 className="text-fun-pink-light text-lg sm:text-2xl flex gap-2 items-center">
          <span className="font-bold">{experience.companyName}</span>
          <span>·</span>
          <span className="text-fun-gray-light text-sm sm:text-base italic font-medium">
            {experience.employmentType}
          </span>
        </h1>
        <p className="text-sm sm:text-base text-gray-200">
          {experience.duration}
        </p>
      </div>
    </div>
  );
}
