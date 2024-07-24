import React from "react";
import { ProjectCard } from "../components";
const Portfolio = () => {
  return (
    <div className="portfolio text-primaryFont flex flex-col items-center">
      <h2 className="font-lexend text-lg ">Portfolio</h2>
      <p>
        Proyectos de bootcamps, personales y bla bla SOLO FRONT pero especificar
        que estan los de back
      </p>

      *///*RENDERIZAR LAS CARDS**

     <ProjectCard />

    </div>
  );
};

export { Portfolio };
