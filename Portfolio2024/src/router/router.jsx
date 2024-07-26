/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    routes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element}>
        {route.children &&
          route.children.map((child, idx) => <Route key={idx} path={child.path} element={child.element} />)}
      </Route>
    )),
  ),
);

export default router;
