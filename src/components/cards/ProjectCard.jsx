import React from "react";

const ProjectCard = ({ images, title, technologies, description, deploy, repo }) => {
  return (
    <article
      className="m-3 p-3 flex flex-col rounded-xl border-collapse overflow-hidden max-w-sm mx-auto
     shadow-md space-y-4 bg-neutral-900 [&>img]:hover:blur-0"
    >
      <img className="blur-sm duration-500 w-full h-48 object-cover" src={images} alt="projectImg" />
      <h2 className="text-lg mb-2 font-lexend text-left text-primaryFont ">{title}</h2>
      <p className="font-lexend text-secondary"> Technologies: <em>{technologies}</em>
      </p>
      <p className="text-sm text-left text-gray-400">{description}</p>

      <div className="flex flex-row gap-5 items-center font-semibold">
        <a
          href={deploy}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent hover:bg-secondary text-secondary  hover:text-primaryFont py-2 px-4 border border-secondary hover:border-transparent rounded cursor-pointer"
        >
          Deploy
        </a>
        <a
          className="text-primaryFont no-underline hover:underline cursor-pointer"
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </div>
    </article>
  );
};

export { ProjectCard };
