import React from "react";
import { ProfileSummary } from "@/data/content/about";

function parseProfileSummary() {
  return ProfileSummary.map((item, index) => (
    <div key={index}>
      {item.content.map((segment, segIndex) => {
        if (segment.highlights && segment.highlights.length > 0) {
          return (
            <span key={segIndex} className={segment.highlights.join(" ")}>
              {segment.text}
            </span>
          );
        }
        return <span key={segIndex}>{segment.text}</span>;
      })}
    </div>
  ));
}

export default function Profile() {
  return (
    <div className="flex flex-col justify-center text-start gap-3 sm:gap-6 w-full rounded-lg shadow-xl bg-fun-card backdrop-blur-sm border-2 border-fun-border my-2 sm:my-4 p-4 sm:p-8">
      <h1 className="font-bold text-fun-pink text-2xl sm:text-5xl">
        Profile Summary
      </h1>
      <div className="text-fun-pink-light text-base sm:text-xl flex flex-col gap-2 sm:gap-4">
        {parseProfileSummary()}
      </div>
    </div>
  );
}
