import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center lg:justify-end gap-6 w-full rounded-lg bg-gradient-to-br from-transparent via-fun-card to-transparent backdrop-blur-sm border-2 border-fun-border lg:h-[65dvh] my-2 sm:my-4 px-2 sm:px-4 shadow-xl">
      <div className="grid grid-flow-col lg:grid-cols-2 lg:gap-2 px-2 lg:px-4">
        <div className="flex justify-center items-center">
          <img
            src="/static/img/aboutme.png"
            alt="Asyraf's Photo"
            className="w-auto sm:h-[25rem] lg:h-[35rem] overflow-visible"
          />
        </div>
        <div className="lg:w-full pt-2 lg:pb-14 flex flex-col justify-center lg:justify-end items-center text-2xl sm:text-5xl lg:text-7xl font-bold text-fun-pink-light gap-1 lg:gap-4">
          <h1>Muhammad</h1>
          <h1 className="text-fun-pink">Asyraf</h1>
          <h1>Faiz</h1>
          <h1>Kamil</h1>
        </div>
      </div>
    </div>
  );
}
