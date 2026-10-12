import React from "react";
import DotsAnimate from "./DotsAnimate";
import BlinkDot from "./BlinkDot";

const HeroPort = () => {
  return (
    <>
      <section className="relative w-full min-h-[calc(100vh-180px)] flex items-center px-5 sm:px-8 md:px-12 lg:px-10 xl:px-20 py-12">
        <div className="w-full max-w-4xl flex flex-col text-left">
          <p className="text-gray-800 tracking-[0.7px] bg-gray-200 flex items-center gap-2 px-2 rounded-[8px] text-[12px] sm:text-[9px] md:text-[11px] lg:text-[13px] w-fit">
            <BlinkDot />
           Available for New Projects & Collaborations
          </p>
          <h1 className="text-[13vw] mb-4 tracking-[-0.055em] leading-none font-bold sm:text-[9vw] md:text-[7.5vw] lg:text-[5.5vw] xl:text-[5.2vw] 2xl:text-[5vw] max-w-[900px]">
            <span className="block text-gray-950">
              Vexsora <span className="text-blue-600">Devs</span>
            </span>

            <span className="text-gray-500">Beyond Digital.</span>
          </h1>
 
<h2 className="text-[17px] sm:text-[19px] md:text-[22px] lg:text-[22px] mb-4 text-gray-700 font-semibold">
  Creative Design & Digital Solutions
</h2>

<div className="mb-6">
  <p className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[15px] text-gray-700">
    We create modern websites, unique logos, eye-catching graphics,
    and professional eBook covers.
  </p>

  <p className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[15px] text-gray-700">
    From eBook editing to publishing, we help bring your ideas
    to life with creativity and attention to detail.
  </p>

          </div>

          <div className="flex items-center gap-2 flex-wrap mb-10">
       
<a
  href={`${import.meta.env.BASE_URL}#pricing`}
  className="inline-flex cursor-pointer items-center rounded-[5px] border-2 border-black bg-black px-[20px] py-[8px] text-[12px] text-white transition-all duration-300 hover:bg-white hover:text-black sm:px-[21px] sm:py-[11px] sm:text-[13px] md:px-[22px] lg:px-[20px] lg:py-[10px] lg:text-[14px]"
>
  View My Work
</a>


            <a
              href={`${import.meta.env.BASE_URL}#contact`}
              className="group relative inline-flex cursor-pointer items-center overflow-hidden rounded-[5px] border-2 border-gray-100 bg-gray-100 px-[20px] py-[8px] text-[12px] text-black transition-all duration-300 hover:border-blue-400 hover:bg-blue-400 hover:text-white sm:px-[21px] sm:py-[11px] sm:text-[13px] lg:px-[20px] lg:py-[10px] lg:text-[14px]"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-2 sm:gap-3 md:gap-4 items-center flex-wrap">
            <p className="text-[11px] uppercase sm:text-[9px] md:text-[11px] lg:text-[12px] mr-[5px] sm:mr-[8px] font-semibold text-gray-700">
              core stack
            </p>

            <p className="bg-gray-200 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-semibold px-[7px] sm:px-[8px] py-[4px] sm:py-[5px] rounded-[4px] text-gray-700">
              Logo Design
            </p>

            <span className="text-[12px] sm:text-[13px] lg:text-[14px]">.</span>

            <p className="bg-gray-200 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-semibold px-[7px] sm:px-[8px] py-[4px] sm:py-[5px] rounded-[4px] text-gray-700">
              Website Development
            </p>

            <span className="text-[12px] sm:text-[13px] lg:text-[14px]">.</span>

            <p className="bg-gray-200 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-semibold px-[7px] sm:px-[8px] py-[4px] sm:py-[5px] rounded-[4px] text-gray-700">
              Graphic Design
            </p>

            <span className="text-[12px] sm:text-[13px] lg:text-[14px]">.</span>

            <p className="bg-gray-200 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-semibold px-[7px] sm:px-[8px] py-[4px] sm:py-[5px] rounded-[4px] text-gray-700">
              eBook Covers
            </p>

            <span className="text-[12px] sm:text-[13px] lg:text-[14px]">.</span>

            <p className="bg-gray-200 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-semibold px-[7px] sm:px-[8px] py-[4px] sm:py-[5px] rounded-[4px] text-gray-700">
              eBook Editing
            </p>

            <span className="text-[12px] sm:text-[13px] lg:text-[14px]">.</span>

            <p className="bg-gray-200 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-semibold px-[7px] sm:px-[8px] py-[4px] sm:py-[5px] rounded-[4px] text-gray-700">
              eBook Publishing
            </p>
          </div>
        </div>

        <DotsAnimate top="50%" left="70%" />
        <DotsAnimate top="2%" left="200px" />
      </section>
    </>
  );
};

export default HeroPort;
