import React from "react";
import { DownloadB, CoverParticles } from "../components/index";
import Image from '../../public/imgs/miFoto.png';
import imageStyle from './routesStyles/Routes.module.css'

const Home = () => {
  return (
  
        <div className=" container min-h-[100vh] h-full bg-no-repeat">

          <CoverParticles />

        
    
        <div className="flex justify-center place-items-center flex-col-reverse z-50 ">
        

          <div className=" md:text-left p-4 md:flex-1">
                <h1 className="text-primary text-3xl font-lexend font-bold "> <span className="text-primaryFont ">Hi im Caro, </span><br /> Front Developer</h1>

                  <p className=" text-primaryFont ">
                  
                    I am a Front Developer, I have been working in this area for 2 Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.<br /> Consequatur 
                    incidunt, architecto pariatur porro ducimus aut reiciendis provident
                    laudantium mollitia quasi vero <br /> reprehenderit ad ea, asperiores officiis
                    animi quaerat nam labore.
                      </p>

                      <br />

                      <DownloadB /> 
           </div>

                <div className="relative movil:p-4 md:flex-1">
                 <img 
                  className={`${imageStyle.photo} grayscale relative filter movil:w-40 laptop:w-72 tablet:w-64 desktop:w-auto`}
                  src={Image}
                  alt="MyPhoto"
                  />
                  
                </div>
         </div>
    </div>
    
   
  );
};

export {Home};
