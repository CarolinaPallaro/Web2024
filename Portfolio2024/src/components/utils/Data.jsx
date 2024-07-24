
import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
// NavBar items 

// const itemsNav = [
//     {
//          id: 1, 
//          name: "Home", 
//          link: "/" 
//     },
//     { 
//          id: 2,
//           name: "About",
//           link: "/about" 
//         },
//     {
//           id: 3,
//           name: "Portfolio",
//            link: "/portfolio" 
//         },
//     {
//           id: 4,
//           name: "Skills",
//            link: "/skills" 
//         },

// ];


// social media 

const  socialMedia = [
    {
        id: 1,
        name: "Linkedin",
        link: "https://www.linkedin.com/in/carolina-pallaro-20dev",
        icon: <FaLinkedinIn/>
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/CarolinaPallaro",
        icon: <FaGithub />
    }
];


//Front Projects

const projectsFront = [{
    id: 1,
    title: "Odontólogos",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
    image: "",
    link: "https://front-odontos.vercel.app/"
    
},
{
    id: 2,
    title: "Portfolio Anterior",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
    image: "",
    link: "https://portfolio-web-five-swart.vercel.app/"
},
{
    id: 3,
    title: "TA TE TI",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
    image: "",
    link: "https://front-odontos.vercel.app/"
},
{
    id: 4,
    title: "TOODO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
    image: "",
    link: "https://front-odontos.vercel.app/"
}


]

export default {socialMedia, projectsFront};