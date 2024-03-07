import React from "react";
import NavbarMain from "../Component/Navbar/NavbarMain";

const Gallery = () => {
  return (
    <>
      {/* Start Home */}
      <section
        className="relative md:py-56 py-44 bg-[url('../../assets/images/photography/photographer.jpg')] bg-cover jarallax"
        data-jarallax=""
        data-speed="0.5"
        id="aboutme"
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900" />
        <div className="absolute text-center p-6 bottom-0 start-0 end-0">
          <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-bold">
            Portfolio
          </h3>
        </div>
      </section>
      {/*end section*/}
      {/* End Home */}
      {/* Start Section*/}
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 items-center gap-[30px]">
            <div className="filters-group-wrap text-center">
              <div className="filters-group">
                <ul className="mb-0 list-none container-filter-border-bottom filter-options space-x-3">
                  <li
                    className="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500 active"
                    data-group="all"
                  >
                    All
                  </li>
                  <li
                    className="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                    data-group="branding"
                  >
                    Branding
                  </li>
                  <li
                    className="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                    data-group="designing"
                  >
                    Designing
                  </li>
                  <li
                    className="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                    data-group="photography"
                  >
                    Photography
                  </li>
                  <li
                    className="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                    data-group="development"
                  >
                    Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*grid*/}
          <div id="grid" className="md:flex justify-center mx-auto mt-4">
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["branding"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p1.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p1.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["designing"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p2.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p2.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["branding"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p3.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p3.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["designing"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p4.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p4.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["photography"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p5.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p5.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["branding"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p6.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p6.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["designing"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p7.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p7.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["branding"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p8.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p8.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["photography"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p9.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p9.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["photography"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p10.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p10.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["development"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p11.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p11.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["development"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p12.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p12.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["branding"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p13.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p13.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["designing"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p14.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p14.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["photography"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p15.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p15.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["photography"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p16.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p16.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["branding"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p17.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p17.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/3 p-1 picture-item"
              data-groups='["photography"]'
            >
              <div className="group relative block overflow-hidden rounded-md duration-500">
                <img
                  src="assets/images/photography/p18.jpg"
                  className=""
                  alt="work-image"
                />
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                  <a
                    href="assets/images/photography/p18.jpg"
                    className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox"
                  >
                    <i className="uil uil-camera" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*end grid*/}
          <div className="grid grid-cols-1 mt-8">
            <div className="text-center">
              <a
                href="photography-portfolio.html"
                className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600 after:bg-indigo-600 dark:after:bg-white duration-500 ease-in-out"
              >
                See More <i className="uil uil-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
    </>
  );
};

export default Gallery;
