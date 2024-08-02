import React from "react";
import { NavLink} from 'react-router-dom'
import routes from "../../(routes)/router/routes";

const NavBar = () => {

    

    return (
      <nav className=" fixed  bottom-6 w-full z-50 p-4 movil:grid justify-center items-center  bg-neutral-900/10 backdrop-blur-sm border-t-2 border-neutral-900/15  `">
        <ul className="flex  gap-3 items-center tablet:flex-row">
          {routes[0].children.map((route, index) => (
            <li
              key={index}
              className={`text-primaryFont cursor-pointer hover:text-details transition-colors duration-500 `}
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



