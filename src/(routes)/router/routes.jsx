import React from "react";
import App from "../App.jsx";
import { Home, About, Portfolio, Skills } from "../index.js";
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
    path: "/portfolio",
    element: <Portfolio />,
    name: "Portfolio",
  },
  {
    path: "/skills",
    element: <Skills />,
    name: "Skills",
  },
];

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: navRoutes,
  },
]);

export default routes;
