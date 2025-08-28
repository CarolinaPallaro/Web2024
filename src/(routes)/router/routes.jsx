import React from "react";
import App from "../App.jsx";
import { Home, About, Experience, Skills, NotFound } from "../index.js";
import { createBrowserRouter } from "react-router-dom";

export const navRoutes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/about",
    element: <About />,
    name: "About",
  },
  {
    path: "/experience",
    element: <Experience />,
    name: "Experience",
  },
  // {
  //   path: "/skills",
  //   element: <Skills />,
  //   name: "Skills",
  // },
 
];

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: navRoutes.map(route => ({
      path: route.path,
      element: route.element,
    })),
  },
  {
    path:"*",
    element: <NotFound />,
    name: "NotFound"
  }
]);

export default routes;
