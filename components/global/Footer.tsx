import Link from "next/link";
import React from "react";
import { Footer } from "@/data/global";
import Image from "next/image";

function FooterPage() {
  return (
    <footer className="flex flex-col w-screen px-3 sm:px-5 pt-5 pb-8 z-20 backdrop-blur-md bg-fun-card">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 gap-2 sm:gap-8">
        {Footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-center mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div className="grid grid-cols-2 text-xs sm:text-base justify-items-center gap-x-2 text-fun-gray-light">
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
                            <span className="pr-1">
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
      <div className="max-w-full w-full m-auto pt-2 sm:pt-4 sm:mt-2 text-center text-fun-gray">
        <div className="flex flex-col items-center justify-center ">
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
