import React from "react";

import Insta from "../assets/intsa-icon.svg";
import Pie from "../assets/pie-click-here.jpg";
export default function Header() {
  const [dropNav, setDropNav] = React.useState(false);

  return (
    <>
      <header className="bg-slate-50 grid grid-cols-3 gap-4 pl-10 pr-10">
        <section className="text-white flex-1">
          <img
            src={Pie}
            onClick={() => setDropNav(!dropNav)}
            id="dropNav"
            alt="Click here"
          />
        </section>

        <section className="flex-grow">
          <h1 className="text-2xl lg:text-3xl xl:text-6xl text-center font-bold text-gray-900 min-w-xl">
            Harkness Pies
            <br />
            <sup className="text-xs">
              <span>organic</span> <span>outdoor-reared</span>
              <span>hot-water crust</span> <span>all handmade</span>
            </sup>
          </h1>
        </section>

        <section className="text-white flex-1">
          <img
            src={Insta}
            alt="Istagram icon"
            width="110px"
            height="auto"
            style={{ marginLeft: "auto" }}
          />
        </section>
        <div className="relative">
          {dropNav ? (
            <nav
              id="menu"
              className="text-black duration-300 p-5 bg-white absolute top-0 left-0 z-10"
            >
              <ul>
                <li>Products</li>
                <li>Values</li>
                <li>About</li>
              </ul>
            </nav>
          ) : null}
        </div>
      </header>
    </>
  );
}
