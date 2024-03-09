import React from "react";

import Insta from "../assets/insta-icon.svg";
import ToggleNav from "./Toggle";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="bg-white-100 text-gray-50 grid grid-cols-3 gap-4 pl-10 pr-10">
        <section className="flex-1">
          <ToggleNav />
        </section>

        <section className="flex-grow">
          <h1 className="text-2xl lg:text-3xl xl:text-6xl text-center font-bold text-gray-900 min-w-xl">
            <Link to="/harkness-pies/">Harkness Pies</Link>
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
      </header>
    </>
  );
}
