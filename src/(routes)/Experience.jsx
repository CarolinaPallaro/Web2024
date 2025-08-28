import React from "react";
import { ProjectCard, ExperienceCard } from "../components/index";
import { projects, experience } from "../components/cards/projectsFront";
import backgroundSections from "../constants/constants";




const Experience = () => {

  const groupedExperience = experience.reduce((acc, item) => {
    if (!acc[item.yearNumber]) acc[item.yearNumber] = [];
    acc[item.yearNumber].push(item);
    return acc;
  }, {});

  return (
      <>
     <article className={`flex flex-col font-lexend text-primaryFont px-2 mb-20`}>
        <header className="portfolio py-12 space-y-3 text-primaryFont flex flex-col items-center">
          <h2 className="text-lg underline decoration-details">EXPERIENCE</h2>
        </header>

        <main className="flex flex-col items-center z-20">
          {Object.keys(groupedExperience)
            .sort((a, b) => b - a)
            .map((year) => (
              <div key={year} className="w-full max-w-4xl mb-5 relative">
                {/* Año (visible en todas las vistas) */}
                <div className="text-xs mt-4 ml-10 text-bg-slate-50">{year}</div>

                {/* Línea del timeline (solo visible desde md) */}
                <div className="md:block absolute top-8 left-3 w-0.5 h-full bg-primary movil:hidden tablet:block"></div>

                {/* Cards */}
                {groupedExperience[year].map((exp, idx) => (
                  <ExperienceCard
                    key={idx}
                    role={exp.role}
                    year={exp.year}
                    technologies={exp.technologies}
                    description={exp.description}
                    link={exp.link}
                  />
                ))}
              </div>
            ))}
        </main>
      </article>
    
    <article className={`${backgroundSections.portfolio} flex flex-col font-lexend text-primaryFont px-2 mb-20`}>
      <header className="portfolio py-12 space-y-3 text-primaryFont flex flex-col items-center ">
        <h2 className="  text-lg underline decoration-details">PORTFOLIO</h2>
        <p className="p-4 text-primaryFont text-center ">
          These projects represent a selection of what I have developed both individually to review technologies and
          concepts, and during bootcamps.
          <br /> I am constantly learning, always seeking to improve my skills and acquire new knowledge.
        </p>
      </header>
      <main className="flex flex-col items-center z-20">
        <section className="grid grid-cols-2 movil:grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-2 gap-6">
          {/* Cards */}
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
          </>
  );
};

export default Experience;
