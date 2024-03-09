import { useState } from "react";
import { Link } from "react-router-dom";

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
        } transition-all ease-in-out duration-500 overflow-hidden block absolute top-[120px] z-50 border-b-2 border-l-2 border-r-2 border-gray-200`}
      >
        <ul className="bg-white pl-5 text-black" style={{ width: "135px" }}>
          <li>
            <Link to="/harkness-pies/products">Products</Link>
          </li>
          <li>
            <Link to="/harkness-pies/values">Values</Link>
          </li>
          <li>
            <Link to="/harkness-pies/about">About</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ToggleNav;
