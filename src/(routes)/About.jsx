import React from "react";
import backgroundSections from "../constants/constants";
import { SkillsCards, DetailsCards } from "../components/cards/index";
import { aboutEducation, skillstItems } from "../components/cards/skillsData";
const About = () => {
  return (
    <>
    <section
      className={`${backgroundSections.about} flex flex-col text-primaryFont space-y-3 px-3 movil:py-12 tablet:items-center max-w-[900px]`}
      >
      <header className=" text-center space-y-3 z-10 flex-col font-lexend  movil:py-3 max-h-50 justify-center tablet:h-25 tablet:m-[35px] ">
        <h1 className=" text-lg underline decoration-details">ABOUT ME</h1>
        <p className="text-justify">
          I’m Carolina Pallaro, a Junior Web Developer with a strong focus on Front-End. Since 2021, I’ve been training both formally and self-taught, exploring technologies such as HTML, CSS, JavaScript, React, Tailwind, Material UI, Docker, and TypeScript, and contributing to projects where I applied layout design, development, and automated testing with Playwright.

          <br />
          <br />
          I’ve also worked on backend development with Elixir and Phoenix Framework, creating new features, CRUDs, and endpoints, ensuring their seamless integration with the frontend.
          
          <br/>
          My background in teaching gave me valuable skills such as communication, teamwork, and problem-solving. 
          <br/>
          I’m passionate about blending technical expertise with creativity to bring functional and visually appealing projects to life.
          Outside of coding, I enjoy mate, music, science, art, and sports. I’m always looking for new challenges that allow me to learn, add value, and—ultimately—develop applications with a positive social impact.
          <br />          
        </p>
      </header>
    </section>

    <section className={`flex flex-col text-primaryFont font-lexend py-10 px-2  max-w-[900px]`}>
      <header className="py-13 space-y-3 text-primaryFont flex flex-col items-center ">
        <h2 className="font-lexend text-lg underline decoration-details">SKILLS</h2>
        <p className="text-center justify-center p-4 desktop:px-10 desktop:py-10  ">
        Although not part of my core technical stack, I have applied <span className="text-details font-serif">Agile methodologies</span>, particularly the <span className="text-details font-serif">Scrum</span> framework, 
        both during my formal training and in real-world projects, 
        allowing me to collaborate effectively, manage tasks, and adapt to changing requirements.
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

</>
  );
};

export default About;
