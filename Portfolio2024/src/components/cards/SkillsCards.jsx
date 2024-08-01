import React from "react";

const SkillsCards = ({ title, items = [] }) => {
  return (
    <article className="flex flex-col text-left space-x-4 ">
      <h4 className=" font-lexend text-xl text-secondary">{title}</h4>
      <ul className="">
        {items.map((item, index) => (
          <li className="" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export { SkillsCards };
