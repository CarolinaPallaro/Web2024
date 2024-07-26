import React from "react";

const SkillsCards = ({ title, items = [] }) => {
  return (
    <article>
      <h4 className=" font-lexend text-details">{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
};

export { SkillsCards };
