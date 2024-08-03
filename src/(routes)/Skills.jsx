import React from "react";
import { SkillsCards } from "../components/cards/SkillsCards";
import { skillstItems } from "../components/cards/skillsData";
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

      <main className="flex  justify-around p-2  text-primaryFont  desktop:p-5 ">
        {skillstItems.map(({ title, skills }, index) => (
          <SkillsCards key={index} title={title} items={skills} />
        ))}
      </main>
    </section>
  );
};

export default Skills;
