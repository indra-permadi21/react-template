import NavbarCenter from "../Component/Navbar/NavbarCenter";

function ContentData() {
  return (
    <>
    {/* <NavbarCenter/> */}
      {/* Start Hero */}
      <section className="relative table w-full py-36 lg:py-64 bg-[url('../../assets/images/event/bg.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90" />
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-7 md:order-1 order-2">
              <h5 className="text-xl text-white/60 mb-3">October 11, 2022</h5>
              <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">
                Join Our <br /> Web Design Seminar
              </h4>
              <p className="text-white/60 text-lg max-w-xl">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered Tailwind CSS v3.x html page.
              </p>
              <div className="mt-8">
                <a
                  href="#ticket"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                >
                  <i className="uil uil-envelope" /> Buy Ticket
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
              <a
                href="#!"
                data-type="youtube"
                data-id="S_CGed6E610"
                className="lightbox lg:h-24 h-20 lg:w-24 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white duration-500 ease-in-out mx-auto"
              >
                <i className="mdi mdi-play inline-flex items-center justify-center text-3xl" />
              </a>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Hero */}
      {/* Start */}
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="md:col-span-6">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-7">
                  <div className="grid grid-cols-1 gap-4">
                    <img
                      src="assets/images/event/1.jpg"
                      className="shadow rounded-lg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-1 gap-4">
                    <img
                      src="assets/images/event/2.jpg"
                      className="shadow rounded-lg"
                      alt=""
                    />
                    <div className="w-28 h-28 bg-indigo-600/10 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="md:col-span-6">
              <div className="lg:ms-5">
                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                  Outpace Your Competition
                </h6>
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                  Get access to the full <br /> conference experience.
                </h3>
                <p className="text-slate-400 max-w-xl mb-6">
                  Get instant helpful resources about anything on the go, easily
                  implement secure money transfer solutions, boost your daily
                  efficiency, connect to other app users and create your own
                  Techwind network, and much more with just a few taps. commodo
                  consequat. Duis aute irure.
                </p>
                <div className="flex mt-6">
                  <i className="uil uil-map-marker text-indigo-600 text-4xl me-4 mt-2" />
                  <div className="">
                    <h5 className="text-xl font-semibold mb-0">Location</h5>
                    <p className="text-slate-400 mt-2">
                      C/54 Northwest Freeway, <br /> Suite 558, Houston, <br />{" "}
                      USA 485
                    </p>
                  </div>
                </div>
                <div className="flex mt-6">
                  <i className="uil uil-clock text-indigo-600 text-4xl me-4 mt-2" />
                  <div className="">
                    <h5 className="text-xl font-semibold mb-0">Time</h5>
                    <p className="text-slate-400 mt-2">
                      October 11, 2022 <br /> 9:00A.M. - 12:00P.M.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end container*/}
        {/* Team */}
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
              Event Speakers
            </h6>
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Meet Our Speakers
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>
          {/*end grid*/}
          <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            <div className="lg:col-span-3 md:col-span-6">
              <div className="group text-center">
                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                  <img src="assets/images/client/04.jpg" className="" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                  <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                    <li className="inline">
                      <a
                        href=""
                        className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                      >
                        <i data-feather="facebook" className="h-4 w-4" />
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href=""
                        className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                      >
                        <i data-feather="instagram" className="h-4 w-4" />
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href=""
                        className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                      >
                        <i data-feather="linkedin" className="h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                  {/*end icon*/}
                </div>
                <div className="content mt-3">
                  <a
                    href=""
                    className="text-lg font-semibold hover:text-indigo-600 duration-500"
                  >
                    Jack John
                  </a>
                  <p className="text-slate-400">Speaker</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6">
              <div className="group text-center">
                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                  <img src="assets/images/client/05.jpg" className="" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                  <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                    <li className="inline">
                      <a
                        href=""
                        className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                      >
                        <i data-feather="facebook" className="h-4 w-4" />
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href=""
                        className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                      >
                        <i data-feather="instagram" className="h-4 w-4" />
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href=""
                        className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                      >
                        <i data-feather="linkedin" className="h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                  {/*end icon*/}
                </div>
                <div className="content mt-3">
                  <a
                    href=""
                    className="text-lg font-semibold hover:text-indigo-600 duration-500"
                  >
                    Krista John
                  </a>
                  <p className="text-slate-400">Speaker</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6">
              <div className="group text-center">
                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                  <img src="assets/images/client/06.jpg" className="" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                  <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                    <li className="inline">
                      <a
                        href=""
                        className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                      >
                        <i data-feather="facebook" className="h-4 w-4" />
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href=""
                        className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                      >
                        <i data-feather="instagram" className="h-4 w-4" />
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href=""
                        className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                      >
                        <i data-feather="linkedin" className="h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                  {/*end icon*/}
                </div>
                <div className="content mt-3">
                  <a
                    href=""
                    className="text-lg font-semibold hover:text-indigo-600 duration-500"
                  >
                    Roger Jackson
                  </a>
                  <p className="text-slate-400">Speaker</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6">
              <div className="group text-center">
                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                  <img src="assets/images/client/07.jpg" className="" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                  <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                    <li className="inline">
                      <a
                        href=""
                        className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                      >
                        <i data-feather="facebook" className="h-4 w-4" />
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href=""
                        className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                      >
                        <i data-feather="instagram" className="h-4 w-4" />
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href=""
                        className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"
                      >
                        <i data-feather="linkedin" className="h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                  {/*end icon*/}
                </div>
                <div className="content mt-3">
                  <a
                    href=""
                    className="text-lg font-semibold hover:text-indigo-600 duration-500"
                  >
                    Johnny English
                  </a>
                  <p className="text-slate-400">Speaker</p>
                </div>
              </div>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        {/* team */}
      </section>
      {/*end section*/}
      {/* End */}
      {/* Start CTA */}
      <section className="relative table w-full py-36 bg-[url('../../assets/images/event/bg3.jpg')] bg-no-repeat bg-bottom bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90" />
        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <div className="pb-8">
              <h6 className="text-white/50 text-sm font-bold uppercase mb-2">
                Hurry up &amp; Register
              </h6>
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
                Not yet registered? <br /> Hurry up!
              </h3>
              <p className="text-white/50 max-w-xl mx-auto">
                Start working with Tailwind CSS that can provide everything you
                need to generate awareness, drive traffic, connect.
              </p>
            </div>
            <div id="countdown">
              <ul className="count-down list-none inline-block text-white text-center mt-8">
                <li
                  id="days"
                  className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2"
                />
                <li
                  id="hours"
                  className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2"
                />
                <li
                  id="mins"
                  className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2"
                />
                <li
                  id="secs"
                  className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2"
                />
                <li id="end" className="h1" />
              </ul>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End CTA */}
      {/* Start */}
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Event Schedules
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>
          {/*end grid*/}
          <div className="grid grid-cols-1 mt-8">
            <ul
              className="md:w-fit w-full mx-auto flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
              id="myTab"
              data-tabs-toggle="#StarterContent"
              role="tablist"
            >
              <li
                role="presentation"
                className="md:inline-block block md:w-fit w-full"
              >
                <button
                  className="px-6 py-2 font-semibold rounded-md w-full hover:text-indigo-600 duration-500"
                  id="tuesday-tab"
                  data-tabs-target="#tuesday"
                  type="button"
                  role="tab"
                  aria-controls="tuesday"
                  aria-selected="true"
                >
                  Tuesday
                </button>
              </li>
              <li
                role="presentation"
                className="md:inline-block block md:w-fit w-full"
              >
                <button
                  className="px-6 py-2 font-semibold rounded-md w-full duration-500"
                  id="wednesday-tab"
                  data-tabs-target="#wednesday"
                  type="button"
                  role="tab"
                  aria-controls="wednesday"
                  aria-selected="false"
                >
                  Wednesday
                </button>
              </li>
              <li
                role="presentation"
                className="md:inline-block block md:w-fit w-full"
              >
                <button
                  className="px-6 py-2 font-semibold rounded-md w-full duration-500"
                  id="thursday-tab"
                  data-tabs-target="#thursday"
                  type="button"
                  role="tab"
                  aria-controls="thursday"
                  aria-selected="false"
                >
                  Thursday
                </button>
              </li>
              <li
                role="presentation"
                className="md:inline-block block md:w-fit w-full"
              >
                <button
                  className="px-6 py-2 font-semibold rounded-md w-full duration-500"
                  id="friday-tab"
                  data-tabs-target="#friday"
                  type="button"
                  role="tab"
                  aria-controls="friday"
                  aria-selected="false"
                >
                  Friday
                </button>
              </li>
            </ul>
            <div id="StarterContent" className="mt-1">
              <div
                className=""
                id="tuesday"
                role="tabpanel"
                aria-labelledby="tuesday-tab"
              >
                <div className="grid grid-cols-1">
                  <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                    <table className="w-full text-start">
                      <tbody>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            09:00AM - 10:00AM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/1.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Digital Conference Event Intro
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Raymond Turner
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            10:30AM - 11:30AM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/2.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Conference On User Interface
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Cindy Morrison
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            12:00PM - 01:00PM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/3.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Business World Event Intro
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Vincent Adams
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            02:00PM - 03:00PM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/4.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Business Conference for professional
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Ana Heweit
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                className="hidden"
                id="wednesday"
                role="tabpanel"
                aria-labelledby="wednesday-tab"
              >
                <div className="grid grid-cols-1">
                  <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                    <table className="w-full text-start">
                      <tbody>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            09:00AM - 10:00AM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/5.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Digital Conference Event Intro
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Raymond Turner
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            10:30AM - 11:30AM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/6.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Conference On User Interface
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Cindy Morrison
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            12:00PM - 01:00PM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/7.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Business World Event Intro
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Vincent Adams
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            02:00PM - 03:00PM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/8.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Business Conference for professional
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Ana Heweit
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                className="hidden"
                id="thursday"
                role="tabpanel"
                aria-labelledby="thursday-tab"
              >
                <div className="grid grid-cols-1">
                  <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                    <table className="w-full text-start">
                      <tbody>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            09:00AM - 10:00AM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/9.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Digital Conference Event Intro
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Raymond Turner
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            10:30AM - 11:30AM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/10.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Conference On User Interface
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Cindy Morrison
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            12:00PM - 01:00PM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/11.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Business World Event Intro
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Vincent Adams
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            02:00PM - 03:00PM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/12.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Business Conference for professional
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Ana Heweit
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                className="hidden"
                id="friday"
                role="tabpanel"
                aria-labelledby="friday-tab"
              >
                <div className="grid grid-cols-1">
                  <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                    <table className="w-full text-start">
                      <tbody>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            09:00AM - 10:00AM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/5.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Digital Conference Event Intro
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Raymond Turner
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            10:30AM - 11:30AM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/6.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Conference On User Interface
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Cindy Morrison
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            12:00PM - 01:00PM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/7.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Business World Event Intro
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Vincent Adams
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                            02:00PM - 03:00PM
                          </td>
                          <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                            <div className="flex items-center">
                              <img
                                src="assets/images/event/eve-sch/8.jpg"
                                className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700"
                                alt=""
                              />
                              <div className="ms-4">
                                <a
                                  href=""
                                  className="hover:text-indigo-600 text-lg font-semibold"
                                >
                                  Business Conference for professional
                                </a>
                                <p className="text-slate-400 mt-2">
                                  The most well-known dummy text is the 'Lorem
                                  Ipsum', which is said to have originated in
                                  the 16th century
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                            <span className="block">Speaker</span>
                            <span className="block text-black dark:text-white text-md mt-1">
                              Ana Heweit
                            </span>
                          </td>
                          <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                            <a
                              href=""
                              className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                            >
                              Buy Ticket <i className="uil uil-arrow-right" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}
      {/* Start CTA */}
      <section className="relative table w-full py-36 bg-[url('../../assets/images/event/bg2.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90" />
        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <a
              href="#!"
              data-type="youtube"
              data-id="S_CGed6E610"
              className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mb-12"
            >
              <i className="mdi mdi-play inline-flex items-center justify-center text-2xl" />
            </a>
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
              Let's Make Something Together
            </h3>
            <p className="text-white/80 max-w-xl mx-auto">
              The Biggest Event Ever
            </p>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End CTA */}
      {/* Start */}
      <section className="relative md:py-24 py-16" id="ticket">
        <div className="container relative">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5">
              <div className="lg:text-start text-center">
                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                  Secure Your Place Now
                </h6>
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                  This event is for you. <br /> Buy tickets now!
                </h3>
                <p className="text-slate-400 max-w-xl mx-auto">
                  Start working with Tailwind CSS that can provide everything
                  you need to generate awareness, drive traffic, connect.
                </p>
              </div>
            </div>
            {/*end col*/}
            <div className="lg:col-span-7 mt-8 lg:mt-0">
              <div className="lg:ms-8">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-[30px]">
                  <div className="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md md:scale-110 z-3 bg-white dark:bg-slate-900">
                    <div className="p-6 py-8">
                      <h6 className="font-bold uppercase mb-5 text-indigo-600">
                        Personal
                      </h6>
                      <div className="flex mb-5">
                        <span className="text-xl font-semibold">$</span>
                        <span className="price text-4xl font-semibold mb-0">
                          09
                        </span>
                        <span className="text-xl font-semibold self-end mb-1">
                          /event
                        </span>
                      </div>
                      <ul className="list-none text-slate-400">
                        <li className="mb-1 flex">
                          <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />{" "}
                          Full Access
                        </li>
                        <li className="mb-1 flex">
                          <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />{" "}
                          Source Files
                        </li>
                        <li className="mb-1 flex">
                          <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />{" "}
                          Free Appointments
                        </li>
                        <li className="mb-1 flex">
                          <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />{" "}
                          Enhanced Security
                        </li>
                      </ul>
                      <a
                        href=""
                        className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                  <div className="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md z-2 bg-gray-50 dark:bg-slate-800">
                    <div className="p-6 py-8 md:ps-10">
                      <h6 className="font-bold uppercase mb-5 text-indigo-600">
                        Business
                      </h6>
                      <div className="flex mb-5">
                        <span className="text-xl font-semibold">$</span>
                        <span className="price text-4xl font-semibold mb-0">
                          149
                        </span>
                        <span className="text-xl font-semibold self-end mb-1">
                          /event
                        </span>
                      </div>
                      <ul className="list-none text-slate-400">
                        <li className="mb-1 flex">
                          <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />{" "}
                          Full Access
                        </li>
                        <li className="mb-1 flex">
                          <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />{" "}
                          Source Files
                        </li>
                        <li className="mb-1 flex">
                          <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />{" "}
                          Free Appointments
                        </li>
                        <li className="mb-1 flex">
                          <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />{" "}
                          Enhanced Security
                        </li>
                      </ul>
                      <a
                        href=""
                        className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
                      >
                        Try it Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center">
            <div className="md:col-span-6">
              <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                Blogs
              </h6>
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Reads Our Latest <br /> News &amp; Blog
              </h3>
            </div>
            <div className="md:col-span-6">
              <p className="text-slate-400 max-w-xl">
                Start working with Techwind that can provide everything you need
                to generate awareness, drive traffic, connect.
              </p>
            </div>
          </div>
          {/*end grid*/}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
            <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
              <img src="assets/images/blog/01.jpg" alt="" />
              <div className="content p-6">
                <a
                  href="blog-detail.html"
                  className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  Design your apps in your own way
                </a>
                <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>
                <div className="mt-4">
                  <a
                    href="blog-detail.html"
                    className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    Read More <i className="uil uil-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
              <img src="assets/images/blog/02.jpg" alt="" />
              <div className="content p-6">
                <a
                  href="blog-detail.html"
                  className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  How apps is changing the IT world
                </a>
                <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>
                <div className="mt-4">
                  <a
                    href="blog-detail.html"
                    className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    Read More <i className="uil uil-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
              <img src="assets/images/blog/03.jpg" alt="" />
              <div className="content p-6">
                <a
                  href="blog-detail.html"
                  className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  Smartest Applications for Business
                </a>
                <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>
                <div className="mt-4">
                  <a
                    href="blog-detail.html"
                    className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    Read More <i className="uil uil-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}
    </>
  );
}

export default ContentData;
