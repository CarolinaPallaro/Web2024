import React from "react";


const ProjectCard = ({ images, title, description, deploy, repo }) => {
  return (
    <article
      className="m-3 p-3 flex flex-col rounded-xl border-collapse overflow-hidden max-w-sm mx-auto
     shadow-md space-y-4 bg-neutral-900"
    >
      <img className="blur-sm hover:blur-0 duration-500 w-full h-48 object-cover" src={images} alt="projectImg" />
      <h2 className="text-lg mb-2 font-lexend text-left text-primaryFont ">{title}</h2>
      <p className="text-ls text-left text-gray-400">{description}</p>

      <div className="flex flex-row gap-5">
        <a href={deploy} target="_blank" rel="noopener noreferrer" className="text-primary cursor-pointer">
          Deploy
        </a>
        <a className="text-secondary cursor-pointer" href={repo} target="_blank" rel="noopener noreferrer">
          Repository
        </a>
      </div>
    </article>
  );
};

export {ProjectCard};