import React from "react";
import { SkillsCards, DetailsCards } from "../components/cards/index";
import { aboutEducation, skillstItems } from "../components/cards/skillsData";
import backgroundSections from "../constants/constants";

const Skills = () => {
  return (
    <section className={`${backgroundSections.skills} flex flex-col text-primaryFont py-10 px-2`}>
      <header className="py-14 space-y-3 text-primaryFont flex flex-col items-center ">
        <h2 className="font-lexend text-lg underline decoration-details">SKILLS</h2>
        <p className="text-left p-4 desktop:px-10 desktop:py-10  ">
          Aca iria algo de contexto de las habilidades actuales, las que aprendo (actualmte) y alguna otra de interes
          relacionado al sector
        </p>
      </header>

      <main className="flex flex-col justify-around p-2  text-primaryFont  desktop:p-5 ">
        <article className="gap-4 space-y-8 p-8 z-50">
          <div className="flex flex-row justify-around">
            {skillstItems.map(({ title, skills }, index) => (
              <SkillsCards key={index} title={title} items={skills} />
            ))}
          </div>

          {aboutEducation.map((about, index) => (
            <DetailsCards key={index} title={about.title} text={about.text} />
          ))}
        </article>
      </main>
    </section>
  );
};

export default Skills;
