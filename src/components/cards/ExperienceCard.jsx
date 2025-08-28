import React from "react";

const ExperienceCard = ({ year, role, technologies, description, link}) => {
  return (
    <article
      className="relative m-3 p-5 flex flex-col rounded-xl border-collapse overflow-hidden max-w-xl mx-auto
      space-y-3 hover:shadow-lg hover:blur-2 md:pl-8 md:border-l-2"
    >
      <h2 className="text-lg mb-2 font-lexend text-left text-primaryFont">{role}</h2>
      <h3 className="text-xs text-left text-gray-400">{year}</h3>
      <p className="text-sm text-left text-primaryFont">{description}</p>
      <p className="text-sm font-lexend  text-gray-400">
        Technologies: <em>{technologies}</em>
      </p>

      {link && (
        <div className="flex flex-row gap-5 items-center font-semibold">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-primary text-sm cursor-pointer"
          >
            Link
          </a>
        </div>
      )}
    </article>
  );
};

export { ExperienceCard };
