import React from "react";
import { NavBar } from "../components/index";
import imageStyle from "./routesStyles/Routes.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center laptop:flex-row laptop:gap-x-52 justify-center min-h-screen font-lexend text-slate-700 bg-no-repeat bg-cyan-400 px-6 py-8 space-y-6">
      
             {/* Columna de texto */}
       <div className="flex flex-col text-left space-y-6 max-w-md bg-slate-50 py-24 px-8 rounded-lg">
         <h1 className="text-4xl laptop:text-5xl font-bold">Miau-ps!</h1>
         <p className="text-2xl">Something went wrong</p>
         <p>
         You may have misspelled the address or the page may have moved.
         </p>
          <Link className="text-primaryFont bg-slate-800 p-3 hover:text-slate-800 hover:border-solid hover:bg-slate-50 hover:border-slate-800 hover:border-2 w-fit rounded-md" >Go to Homepage</Link>
       </div>

      {/* Imagen */}
      <div>
        <img
          className={`${imageStyle.error} max-w-[250px] laptop:max-w-[500px]`}
          src="/imgs/404.png"
          alt="404 error"
        />
      </div>
     
        <NavBar />
    </div>
  );
};

export default NotFound;
