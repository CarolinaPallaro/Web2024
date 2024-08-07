import React from "react";
import Docu from '../../../public/downloads/FrontEnd-Carolina-PallaroCV.pdf';

const DownloadB = () => {
    return (
      <a href={Docu} download className="inline-block">
        <button className="bg-primary text-zinc-200 hover:bg-secondary  transition-colors duration-500 rounded-full p-3 py-2 px-6 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-30">
          <span className="material-symbols-outlined mr-2 font-semiBold">download CV</span>
        </button>
      </a>
    );
};

export { DownloadB };
