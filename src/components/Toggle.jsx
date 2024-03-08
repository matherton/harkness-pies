import { useState } from "react";

import Pie from "../assets/pie-click-here.jpg";
const ToggleNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={Pie}
        alt="Click here to open navigation menu"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      />
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } transition-all ease-in-out duration-500 overflow-hidden block absolute top-[120px] z-50`}
      >
        <ul className="bg-white pl-5 text-black" style={{ width: "135px" }}>
          <li>Products</li>
          <li>Values</li>
          <li>About</li>
        </ul>
      </div>
    </>
  );
};

export default ToggleNav;
