import React from "react";
import { NavLink } from "react-router-dom";
import Clandingpict from "../../assets/img/Clandingpict.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Clanding = () => {
  return (
    <div>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src={Clandingpict}
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className=" md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-3xl">
                Loyalty Studio adalah sebuah web application yang memudahkan
                anda untuk mendapatkan keuntungan melalui Point
              </h2>
              <p className="mt-6 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <div className="flex">
                <h2 className="flex mt-4 text-blue-800 md:w-10 h-10">
                  <NavLink to={"/aboutus"}>
                    <BsFillArrowRightCircleFill className=" flex md:w-10 h-10" />
                  </NavLink>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clanding;
