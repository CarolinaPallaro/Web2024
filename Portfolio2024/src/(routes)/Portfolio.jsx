import React from "react";
import {ProjectCard} from "../components/index"
import { projects} from "../components/cards/projectsFront";

const Portfolio = () => {
  return (
    <section className="flex flex-col text-primaryFont py-20 px-20">
      <img
        className="absolute inset-0  w-full h-full object-cover z-0"
        src="./public/imgs/portfolio-dark.png"
        alt="portfolio-dark"
      />
      <header className="portfolio relative z-10 text-primaryFont flex flex-col items-center ">
        <h2 className="font-lexend text-lg ">PORTFOLIO</h2>
        <p>Proyectos de bootcamps, personales y bla bla SOLO FRONT pero especificar que estan los de back</p>
      </header>
      <main className="flex flex-col items-center">
        <h3 className="text-details text-lg font-lexend">Projects</h3>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              deploy={project.deploy}
              repo={project.repo}
            />
          ))}
        </section>
      </main>
    </section>
  );
};

export { Portfolio };
