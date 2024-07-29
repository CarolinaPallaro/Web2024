import React from 'react';
import {socialMedia} from './dataNavTop'
// import { motion } from "framer-motion"


const SocialNav = () => {
  return (
    <section className="py-2 px-10 top-10 w-full fixed">
      <ul className=" text-primary flex justify-end space-x-5">
        {socialMedia.map((item, index) => (
          <li className="text-3xl cursor-pointer hover:text-secondary transition-colors duration-500 " key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <item.icon className="" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { SocialNav };
