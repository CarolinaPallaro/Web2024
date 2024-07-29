import React from "react";
const About = () => {
  return (
    <section className=" flex items-center text-primaryFont py-20 px-20">
      <img
        className="absolute inset-0  w-full h-full object-cover z-0"
        src="./public/imgs/about-dark.png"
        alt="about-dark"
      />
      <header className="relative z-10 flex-col ">
        <h1 className=" font-lexend text-lg ">ABOUT ME</h1>
        <p className="">
          Hablar un poco de mi, de mi formacion y dejar redes y contacto (Mail) Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. <br />
          Et sint non reiciendis magni corporis quisquam minus nam officiis, quidem mollitia provident nisi deleniti
          odit tempore laudantium ipsum inventore corrupti sit! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. <br /> Corporis voluptas culpa quasi eligendi ab. Voluptate, excepturi voluptatum. Quidem, dolores
          nostrum? Corporis at asperiores sequi eos corrupti? Quisquam nam vero exercitationem? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Eaque est asperiores tempora dicta hic sequi eligendi, voluptate error
          temporibus repellendus ea officia perspiciatis inventore aperiam illum. Dolores architecto omnis rerum! <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores alias, dignissimos consequuntur suscipit
          aliquam hic magni consectetur sit ea autem perferendis minima, enim, explicabo facilis! Atque, incidunt.
          Harum, explicabo quod.
        </p>
      </header>
    </section>
  );
};

export { About };
