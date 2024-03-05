import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import NavbarCenter from "./Component/Navbar/NavbarCenter";
import FooterData from "./Component/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarCenter />
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
      {/* <FooterData /> */}
    </>
  );
}

export default App;
