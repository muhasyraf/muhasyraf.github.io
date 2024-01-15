import Link from "next/link";
import React from "react";
import { Footer } from "@/data/global";
import Image from "next/image";

function FooterPage() {
  return (
    <footer className="flex flex-col w-screen px-3 sm:px-5 pt-5 pb-8 border-t-2 border-fun-gray-darker z-20 bg-gradient-to-b from-[#1b2c38cf] via-[#1b2c382d] to-[#1b2c38cf]">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 gap-5 sm:gap-8">
        {Footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-center mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div className="grid grid-cols-2 justify-items-center gap-x-4">
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-2 w-max">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex justify-center"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image
                                src={item.icon}
                                width={20}
                                height={20}
                                alt="social-media"
                              />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-full w-full m-auto mt-4 pt-4 sm:mt-2 sm:pt-2 text-center text-fun-gray">
        <div className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  className="invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="26"
                  title="TailwindCSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a
              href="mailto:faizkamil39@gmail.com"
              className="text-fun-gray-light font-medium"
            >
              Muhammad Asyraf Faiz Kamil
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
