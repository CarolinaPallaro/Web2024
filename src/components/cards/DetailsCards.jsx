import React, { useState } from 'react';

const DetailsCards = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <details
      open={isOpen}
      onClick={handleToggle}
      className=" backdrop-blur-sm bg-neutral-900/50  ring-1 ring-black/5  shadow-md p-6 rounded-lg"
    >
      <summary className="text-sm font-lexend leading-6 text-primaryFont font-semibold select-none">{title}</summary>
      <div className="mt-3 font-lexend text-sm leading-6 text-primaryFont">
        <p className="whitespace-pre-line">{text}</p>
      </div>
    </details>
  );
};

export { DetailsCards};

    

