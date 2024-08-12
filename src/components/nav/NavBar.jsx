import React from "react";
import { NavLink } from "react-router-dom";
import { navRoutes } from "../../(routes)/router/routes";

const NavBar = () => {
  return (
    <nav className=" fixed bottom-0 w-full z-50 p-4 movil:grid justify-center   bg-neutral-900/10 backdrop-blur-sm border-t-2 border-neutral-900/15  `">
      <ul className="flex min-w-[320px] items-center justify-evenly">
        {navRoutes.map((route, index) => (
          <li
            key={index}
            className={`text-primaryFont cursor-pointer hover:text-details transition-colors duration-500 `}
          >
            <NavLink to={route.path} className={({ isActive }) => (isActive ? "active-class" : "")}>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { NavBar };
