import React from 'react';
import socialItems from '../utils/Data';
// import { motion } from "framer-motion"


const SocialNav = () => {
  return (
    <div className=' top-5 flex flex-row items-end z-50'>
      <ul className='flex'>
        {socialItems.map((items) => (
          <li key={items.id} className='mx-2'>
            <a href={items.links} target="_blank" rel="noreferrer" className='flex items-center'>
             {items.icons}
              
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { SocialNav };
