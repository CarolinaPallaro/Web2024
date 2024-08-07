import React from "react";
import { SkillsCards, DetailsCards } from "../components/cards/index";
import { aboutEducation, skillstItems } from "../components/cards/skillsData";
import backgroundSections from "../constants/constants";

const Skills = () => {
  return (
    <section className={`${backgroundSections.skills} flex flex-col text-primaryFont font-lexend py-10 px-2`}>
      <header className="py-13 space-y-3 text-primaryFont flex flex-col items-center ">
        <h2 className="font-lexend text-lg underline decoration-details">SKILLS</h2>
        <p className="text-center p-4 desktop:px-10 desktop:py-10  ">
          Although they are not part of the technical stack, it is also important to highlight that at these educational
          institutions, I learned tools such as <strong className="text-details font-serif">SCRUM</strong>, a framework
          within Agile methodologies.
        </p>
      </header>

      <main className="flex flex-col justify-around p-2  text-primaryFont  desktop:p-5 ">
        <article className="gap-4 space-y-8 p-8 z-50">
          <div className="flex items-start flex-row justify-around">
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
