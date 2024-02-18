import React from "react";
import Link from "next/link";
import { Skills } from "@/data/content/home";
import { Contact } from "@/data/content/about";

export default function About() {
  return (
    <div className="flex flex-col gap-2 sm:gap-4 items-center px-2 sm:px-4">
      <div className="flex flex-col justify-center lg:justify-end gap-6 w-full rounded-lg bg-gradient-to-br from-[#173041b4] via-transparent to-[#173041b4] lg:h-[65dvh] my-2 sm:my-4 px-2 sm:px-4">
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
      <div className="flex flex-col justify-center text-start gap-3 sm:gap-6 w-full rounded-lg bg-gradient-to-br from-[#173041b4] via-transparent to-[#173041b4] my-2 sm:my-4 p-4 sm:p-8">
        <h1 className="font-bold text-fun-pink text-2xl sm:text-5xl">
          Profile Summary
        </h1>
        <div className="text-fun-pink-light text-base sm:text-xl flex flex-col gap-2 sm:gap-4">
          <p>
            I'm <span className="font-bold">Asyraf</span>, a 21-year-old
            Information Systems student at UIN Syarif Hidayatullah Jakarta. I'm
            passionate about{" "}
            <span className="font-bold">full-stack development</span> and
            creating web applications that are user-friendly, responsive, and
            scalable.
          </p>
          <p>
            I have expertise in both{" "}
            <span className="font-bold">front-end</span> and{" "}
            <span className="font-bold">back-end development</span>, as well as
            database management and deployment. Some of the tools and frameworks
            that I use are Laravel, Next.js, React, ExpressJS, MySQL, MongoDB,
            TailwindCSS, Git, and many more.
          </p>
          <p>
            I’m always curious and eager to learn more and challenge myself in
            the field of technology. I’m particularly interested in{" "}
            <span className="font-bold">cloud computing</span> and{" "}
            <span className="font-bold">blockchain</span>, and I’m currently
            studying and experimenting with these topics.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3 sm:gap-6 w-full rounded-lg bg-gradient-to-br from-[#173041b4] via-transparent to-[#173041b4] my-2 sm:my-4 p-4 sm:p-8">
        <h1 className="font-bold text-fun-pink text-2xl sm:text-5xl">
          Experiences
        </h1>
        <div className="grid grid-flow-row gap-3 sm:gap-6 my-4 sm:my-8">
          <div className="flex flex-col items-center gap-1">
            <div className="mb-2">
              <a
                href="https://metamata.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/static/icons/about/logo-metamata.png"
                  alt="Logo Metamata"
                  className="w-[12rem] sm:w-[15rem] rounded-lg bg-white p-1"
                />
              </a>
            </div>
            <h1 className="font-bold text-fun-pink-light text-lg sm:text-2xl">
              Metamata.id: Full-stack Developer Intern
            </h1>
            <p className="text-sm sm:text-base text-gray-200">
              November 2023 - Current
            </p>
          </div>
          <div className="divider divider-secondary">
            <img src="/static/icons/arrow-up.svg" alt="Arrow" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div>
              <a
                href="https://bps.go.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/static/icons/about/logobps.svg" alt="Logo BPS" />
              </a>
            </div>
            <h1 className="font-bold text-fun-pink-light text-lg sm:text-2xl">
              Badan Pusat Statistik: Web Developer Intern
            </h1>
            <p className="text-sm sm:text-base text-gray-200">
              July 2023 - Agustus 2023
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3 sm:gap-6 w-full rounded-lg bg-gradient-to-br from-[#173041b4] via-transparent to-[#173041b4] my-2 sm:my-4 p-4 sm:p-8">
        <h1 className="font-bold text-fun-pink text-2xl sm:text-5xl">Skills</h1>
        <div className="w-full mx-auto md:mx-none grid gap-x-2 gap-y-6 md:gap-8 grid-cols-3 md:grid-cols-6 items-center place-content-center">
          {Skills.map((item, index) => {
            return (
              <div
                title={item.title}
                key={index}
                className="w-12 mx-auto flex items-center flex-col justify-center tooltip"
                data-tip={item.title}
              >
                <img src={item.icon} style={item.style} alt="Skills icon" />
                <p className="text-sm md:text-base text-fun-pink-light font-monospace font-bold mt-3 opacity-80">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3 sm:gap-6 w-full rounded-lg bg-gradient-to-br from-[#173041b4] via-transparent to-[#173041b4] my-2 sm:my-4 p-4 sm:p-8">
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
                <img
                  src={item.icon}
                  alt="Platform Icon"
                  className="w-5 md:w-7"
                />
                <h1 className="font-bold text-sm sm:text-base">
                  {item.username}
                </h1>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
