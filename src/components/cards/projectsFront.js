const currentYear = new Date().getFullYear();
//Front Projects

const projects = [
  {
        images: '/imgs/pranasitio.png',
    title: 'Website Prana',
    technologies: 'Wix - JavaScript - CSS',
    description:
      'As a result of experimenting with Wix and WordPress, focusing on CSS, SEO, UI design to learn about these tools.',
    deploy: 'https://sandrablua.wixsite.com/prana',
    // repo: 'https://github.com/CarolinaPallaro/TodoApp',
  },
  {
    images: '/imgs/todoApp.png',
    title: 'TODO AP',
    technologies: 'TailwindCSS - JavaScript - React ',
    description:
      'I aim to review concepts related to React such as Hooks, Routing, etc., using Tailwind CSS for layout and JavaScript as the main language.',
    deploy: 'https://todo-app-eight-sigma.vercel.app/',
    repo: 'https://github.com/CarolinaPallaro/TodoApp',
  },
  {
    images: '/imgs/web-2023.png',
    title: 'Portfolio Anterior',
    technologies: 'CSS - HTML - JavaScript - React ',
    description:
      'This is my previous portfolio, created before I immersed myself in the world of FrontEnd. While it reflects my style and skills from that time.',
    deploy: 'https://portfolio-web-five-swart.vercel.app/',
    repo: 'https://github.com/CarolinaPallaro/WEB-Portfolio/tree/main/portfolio',
  },
  {
    images: '/imgs/tateti.png',
    title: 'TA-TE-TI',
    technologies: 'CSS - JavaScript - React ',
    description:
      'This project demonstrates building a Tic-Tac-Toe game from scratch using React.js. Features include game reset, player switch, and game result display. ',
    deploy: 'https://ta-te-ti-ten.vercel.app/',
    repo: 'https://github.com/CarolinaPallaro/Ta-te-ti',
  },
  {
    images: '/imgs/odontos.png',
    title: 'Odontólogos',
    technologies: 'CSS - HTML - JavaScript - React',
    description:
      'An exam project that React Hooks, componentization, routing, DOM Manangement, and handling external APIs.',
    deploy: 'https://front-odontos.vercel.app/',
    repo: 'https://github.com/CarolinaPallaro/Front-Odontos',
  },
];

// Expierce 

const experience = [

  {
    yearNumber: 2025,
    year: 'feb - aug 2025',
    role: 'Web development in Dinkum Interactive',
    technologies: 'Typescript, React, TailwindCSS, Elixir, Playwright',
    description: 'Developed and maintained automated tests with Playwright. Collaborated on backend development with Elixir and frontend development with React. Actively participated in agile teams, managing tasks and tracking projects through GitHub Issues.',
    
  },
  {
    yearNumber: 2024,
    year: 'sep - feb 2025',
    role: 'Web development in Independent Contract',
    technologies: 'Elixir, Phoenix, Postman, React, TailwindCSS',
    description: 'Implemented and integrated Phoenix interfaces from HTML/Tailwind designs. Developed and optimized functionality in Elixir with Phoenix, including CRUD operations and backend improvements for integration with a new React frontend.',
  },
  {
    yearNumber: 2024,
    year: 'aug 2024',
    role: 'Self-taught Developer',
    technologies: 'React, Next, TailwindCSS, Figma, Vercel',
    description: 'This was my first formal project for a company in the agricultural sector. I served as a front-end developer and designer in the creation of the companys landing page. In addition to technical work, I participated in meetings with the client to gather information, define requirements, and propose solutions that met their needs. Although the website is no longer active, this experience allowed me to strengthen interpersonal skills such as effective communication, organization, and converting ideas into concrete results.',
    // link: 'https://landing-page-ten-taupe-44.vercel.app/'
  },
]


export { projects, experience };
