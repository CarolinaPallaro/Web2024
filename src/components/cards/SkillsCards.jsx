import React from "react";

const SkillsCards = ({ title, items = [] }) => {
  return (
    <article className="flex flex-col  space-x-4 ">
      <h4 className=" pl-3 font-lexend text-xl text-primary">{title}</h4>
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
