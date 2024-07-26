import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { sub_routes } from "../../router/routes";

const NavBar = () => {
  //   const location = useLocation();

  return (
    <nav className="py-2 px-10 fixed bottom-6 left-0 w-full bg-transparent flex justify-center  desktop:px-10 z-50">
      <ul className="flex space-x-5 font-sans text-wrap  flex-col items-center movil:flex-row movil:justify-center">
        {sub_routes.map((route, index) => (
          <li
            key={index}
            className="text-primaryFont cursor-pointer hover:text-details transition-colors duration-500 "
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

//<a href={items.link} className="text-xl">{items.name}</a>
