import React from "react";

function CTA() {
  return (
    <div className="pt-36 relative w-full">
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-fun-pink-light">
          Let's Build Something Together!
        </h2>
        <a
          href="mailto:faizkamil39@gmail.com"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-fun-pink-light border-2 rounded-3xl border-fun-pink bg-transparent hover:bg-fun-pink hover:border-collapse hover:text-bg transition-colors"
        >
          Keep in touch!
        </a>
      </div>
    </div>
  );
}

export default CTA;
