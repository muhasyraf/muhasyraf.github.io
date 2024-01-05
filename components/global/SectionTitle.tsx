import React from "react";

type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="overflow-x-hidden w-full pt-5">
      <h2 className="landingSectionTitle max-w-sm md:max-w-full mx-auto md:mx-0 text-center text-3xl mb-10 pt-4 md:pt-0 md:w-full lg:text-5xl font-bold text-fun-pink-light">
        <span>{title}</span>
      </h2>
    </div>
  );
}

export default SectionTitle;
