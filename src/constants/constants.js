const bg = 'before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-cover before:bg-no-repeat';

const backgroundSections = {
  about: `before:bg-about before:bg-[40%_100%] inter:before:bg-[40%_100%] ${bg}`,
  portfolio: `before:bg-portfolio before:bg-[60%_100%] inter:before:bg-[50%_100%] ${bg}`,
  skills: `before:bg-skills before:bg-[67%_100%] inter:before:bg-[70%_100%] ${bg}`,
};

export default backgroundSections;
