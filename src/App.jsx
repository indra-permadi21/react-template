import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarCenter from "./Component/Navbar/NavbarCenter";
import FooterData from "./Component/Footer/Footer";
import ContentData from "./Pages/ContentData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarCenter/>
      <ContentData/>
      {/* <FooterData/> */}
    </>
  );
}

export default App;
