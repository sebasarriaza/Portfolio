"use client";
import React, { useState } from "react";
import { Link, Element } from "react-scroll";

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="fixed flex justify-between w-[100%] z-20">
      <div className="flex p-5 lg:p-8 h-fit">
        <a href="#">
          <h3>Sebas Arriaza</h3>
        </a>
      </div>

      <div className="p-5 lg:p-8">
        <div className="flex justify-end">
          <div className="cursor-pointer h-full" onClick={handleClick}>
              <span
                className={`bg-white h-[0.1rem] w-7 block my-[0.4rem] transition duration-700 ease-in-out
                ${
                  openMenu
                    ? "translate-y-[500%] rotate-[-45deg]"
                    : "transform-none"
                }`}
              ></span>
              <span
                className={`bg-white h-[0.1rem] w-7 block my-[0.4rem] transition duration-700 ease-in-out
                ${openMenu ? "rotate-[45deg]" : "transform-none"}`}
              ></span>
          </div>
        </div>
        <div
          className={`
        transition duration-700 ease-in-out mt-10
        ${openMenu ? "translate-x-[0]" : "translate-x-[50vw]"}
        `}
        >
          <div className=" ">
            <ul className="flex flex-col items-end w-[100%] justify-end gap-4 ">
              <li className="flex">
                <Link
                  className="flex font-thin"
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Projects<span className="text-xs">01</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  About<span className="text-xs">02</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Contact<span className="text-xs">03</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
