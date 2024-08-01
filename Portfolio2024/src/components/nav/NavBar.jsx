import React from "react";
import {useLocation, NavLink} from 'react-router-dom'
import routes from "../../router/routes";

const NavBar = () => {

    const location = useLocation();

    return (
      <nav className=" fixed  bottom-6 w-full z-50 p-4 movil:grid justify-center items-center ">
        <ul className="flex  gap-3 items-center tablet:flex-row">
          {routes[0].children.map((route, index) => (
            <li
              key={index}
              className={`text-primaryFont cursor-pointer hover:text-details transition-colors duration-500 ${
                location.pathname === index.link ? "" : ""
              }`}
            >
              <NavLink
                to={route.path === "" ? "/" : `/${route.path}`}
                className={({ isActive }) => (isActive ? "active-class" : "")}
              >
                {route.path === "" ? "Home" : route.path.charAt(0).toUpperCase() + route.path.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
}

export {NavBar};



