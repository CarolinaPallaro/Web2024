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
            With <strong className="text-details font-serif">3+ years</strong> dedicated to studying and practicing web
            development, I am seeking my first formal work experience. I am highly motivated to apply my knowledge in
            creating functional systems and designing intuitive and creative interfaces.
          </p>

          <br />

          <DownloadB />
        </article>
      </section>
    </div>
  );
};

export default Home;
