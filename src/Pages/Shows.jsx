import React from "react";
import NavbarMain from "../Component/Navbar/NavbarMain";

const Shows = () => {
  return (
    <>
      {/* Start Hero */}
      <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/course/cta.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-75" />
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Shows
            </h3>
            <h5 className="text-white/50 text-lg font-medium">
              List show yang akan datang
            </h5>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <a href="shows.html">Shows</a>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="uil uil-angle-right-b" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              List
            </li>
          </ul>
        </div>
      </section>
      {/*end section*/}
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      {/* End Hero */}
      {/* Start Section*/}
      <section className="relative md:py-24 py-16 overflow-hidden">
        <div className="container relative">
          <div className="text-center">
            {/* <p className="text-base font-semibold text-indigo-600">404</p> */}
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Upcoming Shows
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              No upcoming events at the moment
            </p>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Section*/}
    </>
  );
};

export default Shows;
