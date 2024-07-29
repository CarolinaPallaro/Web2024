import React from 'react';
import {socialMedia} from './dataNavTop'
// import { motion } from "framer-motion"


const SocialNav = () => {
  return (
    <section className="py-2 px-10 top-10 w-full fixed bg-transparent ">
      <ul className=" text-details flex justify-end space-x-5">
        {socialMedia.map((item, index) => (
          <li className="text-3xl " key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <item.icon className="cursor-pointer hover:text-primaryFont transition-colors duration-500 " />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { SocialNav };
