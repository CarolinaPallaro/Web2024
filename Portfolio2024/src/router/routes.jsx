import React from "react";
import App from "../(routes)/App";
import { Home, About, Portfolio, _Skills } from "../(routes)/index.js";
import { createBrowserRouter } from "react-router-dom";

export const sub_routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    name: "Skills",
    path: "/skills",
    element: <_Skills />,
  },
];

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: sub_routes,
    errorElement: <h1>404 Not Found</h1>,
  },
]);

export default routes;
