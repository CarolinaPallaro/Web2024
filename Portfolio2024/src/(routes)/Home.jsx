import React from "react";
import { DownloadB, CoverParticles } from "../components/index";
import imageStyle from "./routesStyles/Routes.module.css";

const Home = () => {
  return (
    <div className="flex justify-center items-start z-0 container h-full bg-no-repeat">
      <CoverParticles />
      <section className="flex z-50 flex-col ">
        <article className="movil:w-full flex justify-center">
          <img className={`${imageStyle.photo} grayscale filter `} src="/public/imgs/miFoto.png" alt="MyPhoto" />
        </article>

        <article className=" tablet:text-left p-4 ">
          <h1 className="text-primary text-3xl font-lexend font-bold ">
            {" "}
            <span className="text-primaryFont ">Hi im Caro, </span>
            <br /> Front Developer
          </h1>

          <p className=" text-primaryFont text-left tablet:text-lg">
            I am a Front Developer, I have been working in this area for 2 Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Consequatur incidunt, architecto pariatur porro ducimus aut reiciendis provident
            laudantium mollitia quasi vero reprehenderit ad ea, asperiores officiis animi quaerat nam labore.
          </p>

          <br />

          <DownloadB />
        </article>
      </section>
    </div>
  );
};

export { Home };
