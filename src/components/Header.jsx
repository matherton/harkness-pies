import Insta from "../assets/insta-icon.svg";
import ToggleNav from "./Toggle";
import { Link } from "react-router-dom";
import logo from "../assets/AI-HK-logo.png";
export default function Header() {
  return (
    <>
      <header className="bg-white-100 text-gray-50 grid grid-cols-3 gap-4 pl-2 pr-2 border-b-2 height-130">
        <section className="flex-1">
          <ToggleNav />
        </section>

        <section className="flex-grow">
          {/* 
          <Link to="/harkness-pies/" className="mx-auto">
            <img
              src={logo}
              alt="Harkness Pies organic outdoor reared hot-water crust all handmade"
              className="pt-1 pb-1 title"
              width="350px"
              height="auto"
            />
          </Link> */}
          <h1
            className="text-2xl mt-5 lg:text-3xl xl:text-6xl text-center font-bold text-gray-900 min-w-xl"
            style={{ margin: "auto" }}
          >
            <Link to="/harkness-pies/">Harkness Pies</Link>
            <br />
            <sup className="text-sm hidden sm:block ">
              <span>organic</span> <span>outdoor-reared</span>
              <span>hot-water crust</span> <span>all handmade</span>
            </sup>
          </h1>
        </section>

        <section className="text-white flex-1">
          <a
            href="https://www.instagram.com/harknesspies/"
            style={{ marginLeft: "auto" }}
            target="_blank"
          >
            <img src={Insta} alt="Istagram icon" width="110px" height="auto" />
          </a>
        </section>
      </header>
    </>
  );
}
