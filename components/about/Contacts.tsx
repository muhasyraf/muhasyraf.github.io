import React from "react";
import { Contact } from "@/data/content/about";

export default function Contacts() {
  return (
    <div className="flex flex-col justify-center gap-3 sm:gap-6 w-full rounded-lg shadow-lg bg-fun-card my-2 sm:my-4 p-4 sm:p-8">
      <h1 className="font-bold text-fun-pink text-2xl sm:text-5xl text-start">
        Contacts
      </h1>
      <div className="w-full flex max-sm:flex-col sm:flex-wrap gap-4 sm:gap-6 justify-items-center items-start">
        {Contact.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-1 justify-center items-center tooltip transition hover:-translate-y-1.5 text-fun-pink-light hover:underline cursor-pointer"
              data-tip={item.platform}
            >
              <img src={item.icon} alt="Platform Icon" className="w-5 md:w-7" />
              <h1 className="font-bold text-sm sm:text-base">
                {item.username}
              </h1>
            </a>
          );
        })}
      </div>
    </div>
  );
}
