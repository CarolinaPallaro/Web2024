import React from "react";
import { ProjectCard } from "../components/index";
import { projects } from "../components/cards/projectsFront";
import backgroundSections from "../constants/constants";




const Portfolio = () => {
  return (
    <article className={`${backgroundSections.portfolio} flex flex-col text-primaryFont px-2 mb-20`}>
      <header className="portfolio py-14 space-y-3 text-primaryFont flex flex-col items-center ">
        <h2 className=" font-lexend text-lg underline decoration-primary">PORTFOLIO</h2>
        <p className="p-4 text-primaryFont text-center ">
          These projects represent a selection of what I have developed both individually to review technologies and
          concepts, and during bootcamps.
          <br /> I am constantly learning, always seeking to improve my skills and acquire new knowledge.
        </p>
      </header>
      <main className="flex flex-col items-center z-20">
        <section className="grid grid-cols-2 movil:grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              images={project.images}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              deploy={project.deploy}
              repo={project.repo}
            />
          ))}
        </section>
      </main>
    </article>
  );
};

export default Portfolio;
