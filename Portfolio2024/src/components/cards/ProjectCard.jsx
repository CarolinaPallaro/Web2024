import React from "react";


const ProjectCard = ({ title, description, deploy, repo }) => {
  return (
    <article className="border m-3 p-3  border-stone-900 border-collapse  bg-black text-primaryFont">
      <h2 className="text-2xl mb-2">{title}</h2>
      <p className="text-lg mb-2">{description}</p>

     
    
      <a href={deploy} target="_blank" rel="noopener noreferrer" className="text-blue-500 mb-2 ">
        Deploy
      </a>

      <a className="text-blue-500 cursor-pointer" href={repo} target="_blank" rel="noopener noreferrer">
        Repository
      </a>
     
    </article>
  );
};

export {ProjectCard};