"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenMenu(event.target.checked);
  };

  return (
    <nav className="fixed flex justify-between w-[100%] menu-container">
      <div className="flex p-5">
        <a href="#">
          <h3>Sebas Arriaza</h3>
        </a>
      </div>

      <input
        type="checkbox"
        id="openmenu"
        className="absolute z-3 top-5vh left-5vw w-10vw opacity-0 h-6vh"
        checked={openMenu}
        onChange={handleCheckboxChange}
      />

      <div className="p-5">
        <div className="flex justify-end">
            <label htmlFor="openmenu">
            <span
                className={`bg-white h-[0.1rem] w-7 block my-[0.4rem] transition duration-700 ease-in-out
                ${
                openMenu ? "translate-y-[500%] rotate-[-45deg]" : "transform-none"
                }`}
            ></span>
            <span
                className={`bg-white h-[0.1rem] w-7 block my-[0.4rem] transition duration-700 ease-in-out
                ${openMenu ? "rotate-[45deg]" : "transform-none"}`}
            ></span>
            </label>
        </div>
      <div className={`
        transition duration-700 ease-in-out mt-10
        ${openMenu ? "translate-x-[0]" : "translate-x-[50vw]"}
        `}>
        <div className=" ">
            <ul className="flex flex-col items-end w-[100%] justify-end gap-4 ">
                <li className="flex">
                    <a className="flex font-thin" href="#projects">
                    Projects<span className="text-xs">01</span>
                    </a>
                </li>
                <li>
                    <a className="flex" href="#about">
                    About<span className="text-xs">02</span>
                    </a>
                </li>
                <li>
                    <a className="flex" href="#contact">
                    Contact<span className="text-xs">03</span>
                    </a>
                </li>
            </ul>
        </div>
      </div>
      </div>

    </nav>
  );
};

export default Navbar;
