import React from "react";
import { ProfileSummary } from "@/data/content/about";

function parseProfileSummary() {
  return ProfileSummary.map((item, index) => {
    const { content } = item;
    const theObject = { __html: content };
    return <div key={index} dangerouslySetInnerHTML={theObject} />;
  });
}

export default function Profile() {
  return (
    <div className="flex flex-col justify-center text-start gap-3 sm:gap-6 w-full rounded-lg bg-gradient-to-br from-[#173041b4] via-transparent to-[#173041b4] my-2 sm:my-4 p-4 sm:p-8">
      <h1 className="font-bold text-fun-pink text-2xl sm:text-5xl">
        Profile Summary
      </h1>
      <div className="text-fun-pink-light text-base sm:text-xl flex flex-col gap-2 sm:gap-4">
        {parseProfileSummary()}
      </div>
    </div>
  );
}
