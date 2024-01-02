import React from "react";
import SectionTitle from "../global/SectionTitle";
import { Testimonials } from "@/data/content/home";

function TestimonialsPage() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="Here is where i put my thoughts, expressions, & feelings" />
      <div className="max-w-5xl m-auto md:max-h-[200px] grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-3 items-start">
        {Testimonials.map((item, index) => {
          return (
            <div
              key={index}
              className="relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between"
            >
              <p className="text-base italic relative testimonialQuote">
                "{item.quote}"
              </p>
              <p className="mt-4 text-xs text-fun-gray">
                <b className="text-fun-pink font-monospace">{item.name}</b> -{" "}
                {item.job}
              </p>
              {index === 2 && (
                <img
                  className="sqD top-[-30px] right-[-15px] w-11"
                  src="/static/doodles/testimonials/squiggle2.svg"
                  alt="squiggle"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TestimonialsPage;
