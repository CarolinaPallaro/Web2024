import React from 'react';
import {socialMedia} from './dataNavTop'
// import { motion } from "framer-motion"


const SocialNav = () => {
  return (
    <section className="fixed py-2 px-10 top-6 flex justify-center tablet:right-10   z-50 ">
      <ul className=" text-primary flex w-full space-x-5">
        {socialMedia.map((item, index) => (
          <li
            className="  text-4xl cursor-pointer movil:text-grow hover:text-secondary transition-colors duration-500 "
            key={index}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <item.icon className="text-4xl tablet:text-5xl" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { SocialNav };
