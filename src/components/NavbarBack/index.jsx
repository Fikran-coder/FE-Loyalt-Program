import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const NavbarBack = () => {
  return (
    <div>
      <header className="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l">
        <nav
          id="site-menu"
          className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-b-4 border-teal-500"
        >
          <div className=" sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
            <label>
              <NavLink to={"/"}>
                <BsFillArrowLeftCircleFill className="w-8 h-8" />
              </NavLink>
            </label>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavbarBack;
