import React from "react";
import { NavLink } from "react-router-dom";

const NavbarDashboard = () => {
  return (
    <div>
      <header className="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l">
        <nav
          id="site-menu"
          className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 shadow sm:shadow-none border-b-4 bg-cyan-300"
        >
          <div className=" sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center"></div>

          <div className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">
            <label className="cursor-pointer text-dark hover:text-red text-md w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2">
              <NavLink to={"/aboutus"}>About Us</NavLink>
            </label>
            <label className="cursor-pointer text-dark hover:text-red text-md w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2">
              <NavLink to={"/fitur"}>Features</NavLink>
            </label>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavbarDashboard;
