import Link from "next/link";
import React from "react";
import { Routes } from "@/data/global";

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between z-100 px-4 py-2 bg-[#1b2c38] rounded-b-3xl">
      <ul className="">
        <li className="list-none font-bold text-lg cursor-pointer">
          <Link href="/">
            <span className="font-black text-xl flex items-center">
              <img
                className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500 rounded-full"
                src="/static/img/linkedinprofilecropcomp.png"
                width="40"
                alt="Asyraf's Profile Picture"
              />
              {"Asyraf".split("").map((letter, index) => {
                return (
                  <span
                    key={index}
                    className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          </Link>
        </li>
      </ul>
      <ul className="flex items-center space-x-10">
        {Routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${
                currentPage === item.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
