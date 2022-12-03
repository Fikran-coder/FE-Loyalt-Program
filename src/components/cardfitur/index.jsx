import React from "react";
import testimg from "../../assets/img/testimg.jpg";

const CardF = () => {
  return (
    <div className="flex row justify-center mt-16 ">
      <div className="max-w-sm rounded  overflow-hidden shadow-lg mr-16 shadow-blue-800">
        <img className="w-full" src={testimg} alt="....." />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mr-16 shadow-blue-800">
        <img className="w-full" src={testimg} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-blue-800">
        <img className="w-full" src={testimg} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardF;
