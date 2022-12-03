import React from "react";
import { Navbar } from "../../components";
import AboutUspage1 from "../../assets/img/AboutUspage1.png";
import AboutUspage2 from "../../assets/img/AboutUspage2.png";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We didn't reinvent the wheel
            </h2>
            <p class="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg bg-cyan-200"
              src={AboutUspage1}
              alt="pict1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg bg-cyan-200"
              src={AboutUspage2}
              alt="pict2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
