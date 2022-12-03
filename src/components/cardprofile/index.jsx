import React from "react";

const CardP = () => {
  return (
    <div>
      <div className="flex justify-center mt-20 ">
        <div className="rounded-lg shadow-lg max-w-sm shadow-blue-800">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              className="rounded-t-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Nama</h5>
            <p className="text-gray-700 text-base mb-4">email</p>
            <p className="text-gray-700 text-base mb-4">No.Telpon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardP;
