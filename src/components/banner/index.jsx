import React from "react";

const Banner = () => {
  return (
    <>
      <div>
        <div className="lg:mt-10">
          <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px]  bg-zinc-400 px-4 py-12">
            <div className="md:flex justify-center gap-8 items-center">
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hair_care.png"
                  alt="hair_care"
                  className="lg:block md:hidden block"
                />
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%2015.png"
                  alt
                  className="lg:hidden md:block hidden"
                />
              </div>
              <div>
                <p className="lg:text-4xl md:text-3xl text-3xl font-semibold md:text-left text-center">
                  Hair Care
                </p>
                <p className="text-base text-gray-600 max-w-[624px] w-full mt-6 md:text-left text-center">
                  “Spoil” your hair with our new hair restoration mask. Manage
                  common hair related problems such as hair fall, dryness,
                  dandruff, frizzy hair, thinning hair with our new product.
                </p>
                <button className="bg-gray-800 text-base font-medium lg:max-w-[205px] w-full px-3 py-2 text-white mt-11 hover:bg-gray-700 transition duration-300 ease-in-out lg:block md:hidden blocl">
                  Buy Now
                </button>
              </div>
            </div>
            <button className="bg-gray-800 text-base font-medium  w-full px-3 py-2 text-white mt-6 hover:bg-gray-700 transition duration-300 ease-in-out lg:hidden md:block hidden">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
