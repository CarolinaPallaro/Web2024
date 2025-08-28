import React from "react";
import Docu from "../../../public/downloads/CarolinaPallaroCv2025.pdf";
import { RiDownload2Line } from "react-icons/ri";

const DownloadB = () => {
  return (
    <a 
      title="Download my CV"
      href={Docu}
      download
      className="flex w-fit items-center gap-3 bg-primary text-zinc-200 hover:bg-secondary transition-colors duration-500 rounded-full py-2 px-6 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-30"
    >
      <RiDownload2Line />
      <span className="font-semiBold">CV</span>
    </a>
  );
};

export { DownloadB };
