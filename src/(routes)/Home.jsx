import React from "react";
import { DownloadB, CoverParticles } from "../components/index";
import imageStyle from "./routesStyles/Routes.module.css";

const Home = () => {
  return (
    <div className="flex justify-center items-start z-0 container h-full bg-no-repeat">
      <CoverParticles />
      <section className="flex z-50 flex-col font-lexend">
        <article className="movil:w-full flex justify-center">
          <img className={`${imageStyle.photo} grayscale filter `} src="/imgs/miFoto.png" alt="MyPhoto" />
        </article>

        <article className=" tablet:text-left p-4 ">
          <h1 className="text-primary text-3xl font-lexend font-bold ">
            {" "}
            <span className="text-primaryFont ">Hi I'm Caro, </span>
            <br /> Front Developer
          </h1>

          <p className=" text-primaryFont text-left tablet:text-lg">
            Since<strong className="text-details font-serif">  2021 </strong> I've been exploring and developing the web, combining strong technical skills with a creative mindset to design functional, intuitive, and engaging digital experiences. I'm always curious, constantly learning, and always looking for smarter ways to turn my ideas into reality.
          </p>

          <br />

          <DownloadB />
        </article>
      </section>
    </div>
  );
};

export default Home;
