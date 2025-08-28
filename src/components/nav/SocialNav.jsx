import React from "react";
import { socialMedia } from "./dataNavTop";
// import { motion } from "framer-motion"

const tablet = "tablet:justify-end tablet:pr-10";
const desktop = "desktop:pr-20 desktop:py-5";

const SocialNav = () => {
  return (
    <section
      className={`${desktop} ${tablet} fixed py-2 top-0 flex justify-center z-50 w-screen bg-neutral-900/10 backdrop-blur-sm border-b-4 border-neutral-900/15`}
    >
      <ul className=" text-primary flex space-x-5">
        {socialMedia.map((item, index) => (
          <li
            className="  text-4xl cursor-pointer movil:text-grow hover:text-secondary transition-colors duration-500 "
            key={index}
          >
            <a title={item.name} href={item.link} target="_blank" rel="noopener noreferrer">
              <item.icon className="text-4xl " />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { SocialNav };
