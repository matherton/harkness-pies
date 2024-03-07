import React from "react";

import Insta from "../assets/intsa-icon.svg";
import Pie from "../assets/pie-click-here.jpg";
export default function Header() {
  return (
    <>
      <header className="bg-slate-50 grid grid-cols-3 gap-4 pl-10 pr-10">
        <section className="columns-2xs text-white ">
          <img src={Pie} />
        </section>

        <section>
          <h1 className="text-2xl lg:text-3xl xl:text-6xl text-center font-bold text-gray-900 min-w-xl">
            Harkness Pies
            <br />
            <sup>
              <span>organic</span> <span>outdoor-reared</span>
              <span>hot-water crust</span> <span>all handmade</span>
            </sup>
          </h1>
        </section>

        <section className="columns-2xs text-white">
          <img
            src={Insta}
            alt="Istagram icon"
            width="110px"
            height="auto"
            style={{ marginLeft: "auto" }}
          />
        </section>
      </header>
    </>
  );
}
