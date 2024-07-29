
import React from "react";
import { SkillsCards } from "../components/cards/SkillsCards";
import { skillstItems } from "../components/cards/skillsData";

const _Skills = () => {
  return (
    <section>
      <img
        className="absolute inset-0  w-full h-full object-cover z-0"
        src="./public/imgs/skills-dark.png"
        alt="skills-dark"
      />
      <header className="relative z-10  flex text items-center justify-center text-primaryFont movil:flex-col">
        <h2 className="font-lexend text-lg ">SKILLS</h2>
        <p className="desktop:px-10 desktop:py-10  ">
          Aca iria algo de contexto de las habilidades actuales, las que aprendo (actualmte) y alguna otra de interes
          relacionado al sector
        </p>
      </header>

      <main className="flex flex-row items-center justify-around p-20 text-primaryFont   desktop:p-5 ">
        {skillstItems.map(({ title, skills }, index) => (
          <SkillsCards key={index} title={title} items={skills} />
        ))}
      </main>
    </section>
  );
};
          
export {_Skills}