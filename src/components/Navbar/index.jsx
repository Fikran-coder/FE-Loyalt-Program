import React from "react";
import { NavLink } from "react-router-dom";
import logotransparant from "../../assets/img/logotransparant.png";

const Navbar = () => {
  return (
    <div>
      <header className="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l">
        <nav
          id="site-menu"
          className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-b-4 border-teal-500"
        >
          <div className=" sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
            <NavLink to={"/"}>
              <img src={logotransparant} width="180" />
            </NavLink>
          </div>
          <div className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">
            <label className="cursor-pointer text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2">
              <NavLink to={"/aboutus"}>About Us</NavLink>
            </label>
            <label className="cursor-pointer text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2">
              <NavLink to={"/fitur"}>Features</NavLink>
            </label>
            <button
              type="button"
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded-3xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <NavLink to={"/login"}>Login</NavLink>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
