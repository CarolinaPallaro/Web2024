import React from "react";
import backgroundSections from "../constants/constants";

const About = () => {
  return (
    <article
      className={`${backgroundSections.about} flex text-primaryFont space-y-3 px-3 movil:py-12 tablet:items-center max-w-[900px]`}
    >
      <header className=" text-center space-y-3 z-10 flex-col font-lexend  movil:py-3 max-h-50 justify-center tablet:h-25 tablet:m-[35px] ">
        <h1 className=" text-lg underline decoration-details">ABOUT ME</h1>
        <p className="text-justify">
          I’m Carolina Pallaro, a software development enthusiast. Although my initial steps were in teaching, my
          fascination with the web led me to explore technology. I began with small online courses and eventually
          enrolled in an online degree program. That's how I discovered programming, a field where I can combine my love
          for design with technical tools to create functional and appealing projects.
          <br />
          <br />
          In my free time, I enjoy consuming science content on YouTube, playing PC games on weekends, and riding my
          bike, as sports have always been a fundamental part of my life. I also have a strong passion for the arts,
          especially drawing and painting, and I find great satisfaction in creating or repairing all kinds of objects,
          from fixing my desk to building stands for mobile devices.
          <br />
          <br />
          Even though my initial training was not entirely related to this field, I can say that it provided me with
          valuable skills such as active listening, teamwork, and a strong sense of responsibility. These have been
          invaluable in my transition to programming, enabling me to collaborate effectively on projects, resolve
          conflicts, and share technical knowledge with my peers.
          <br />
          <br />
          My next goal is to join a company as a Front End Developer, where I can make meaningful contributions and
          continue learning. In the long term, I dream of developing socially impactful applications that merge my
          passion for technology with some of my hobbies.
        </p>
      </header>
    </article>
  );
};

export default About;
