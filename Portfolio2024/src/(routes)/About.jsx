import React from "react";
import backgroundSections from "../constants/constants";

const About = () => {
  return (
    <article
      className={`${backgroundSections.about} flex text-primaryFont space-x-2 px-4 tablet:items-center max-w-[800px]`}
    >
      <header className=" text-center space-y-3 z-10 flex-col movil:py-3 max-h-50 justify-center tablet:h-30 tablet:m-40 ">
        <h1 className=" font-lexend text-lg underline decoration-details">ABOUT ME</h1>
        <p className="text-left">
          Hablar un poco de mi, de mi formacion y dejar redes y contacto (Mail) Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Et sint non reiciendis magni corporis quisquam minus nam officiis, quidem mollitia provident
          nisi deleniti odit tempore laudantium ipsum inventore corrupti sit! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Corporis voluptas culpa quasi eligendi ab. Voluptate, excepturi voluptatum. Quidem, dolores
          nostrum? Corporis at asperiores sequi eos corrupti? Quisquam nam vero exercitationem? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Eaque est asperiores tempora dicta hic sequi eligendi, voluptate error
          temporibus repellendus ea officia perspiciatis inventore aperiam illum. Dolores architecto omnis rerum! Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Dolores alias, dignissimos consequuntur suscipit aliquam
          hic magni consectetur sit ea autem perferendis minima, enim, explicabo facilis! Atque, incidunt. Harum,
          explicabo quod.
        </p>
      </header>
    </article>
  );
};

export { About };
