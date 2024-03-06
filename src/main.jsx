import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/tailwind.scss";
// import "../src/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Shows from "./Pages/Shows.jsx";
import ContactUs from "./Pages/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "shows",
        element: <Shows />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
