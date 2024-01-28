"use client";

import Link from "next/link";
import React, { useState } from "react";
import MenuBurger from "./MenuBurger";

const MainNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="py-8 px-5 md:px-10 2xl:px-32 flex font-poppins items-center border-b">
        <Link href="/" className="text-5xl flex items-center justify-center">
          <div className="flex items-center justify-center transform rotate-45">
            <div className="h-5 w-2 bg-gradient-to-r from-sky-400 to-blue-500  m-0.5 rounded-tr rounded-bl"></div>
            <div className="h-8 w-2 bg-gradient-to-r from-sky-400 to-blue-500  m-0.5 rounded-tr rounded-bl"></div>
            <div className="h-5 w-2 bg-gradient-to-r from-sky-400 to-blue-500  m-0.5 rounded-tr rounded-bl"></div>
          </div>
          <p className="m-2 text-3xl font-">This Blog</p>
        </Link>
        <nav className="lg:mx-10 flex items-center justify-end flex-grow">
          <ul className="flex-grow items-center justify-center lg:flex hidden">
            <li className="p-4 mx-2 hover:bg-blue-50 rounded text-sm text-gray-500 cursor-pointer">
              Top Posts
            </li>
            <li className="p-4 mx-2 hover:bg-blue-50 rounded text-sm text-gray-500 cursor-pointer">
              All Posts
            </li>
            <li className="p-4 mx-2 hover:bg-blue-50 rounded text-sm text-gray-500 cursor-pointer">
              Categories
            </li>
            <li className="p-4 mx-2 hover:bg-blue-50 rounded text-sm text-gray-500 cursor-pointer">
              About
            </li>
          </ul>
          <button className="p-4 mx-2 hover:bg-blue-50 rounded text-sm text-gray-500 cursor-pointer hidden lg:inline-block">
            Sign Up
          </button>
          <button className="px-8 py-3 mx-2 bg-blue-500  hover:bg-sky-400 rounded font-semibold text-white cursor-pointer hidden lg:inline-block">
            Log In
          </button>
          <MenuBurger
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            handleShowMenu={handleShowMenu}
          />
        </nav>
      </header>
      <div className="h-0.5 w-screen bg-gradient-to-l from-sky-300 to-blue-400"></div>
      {showMenu && (
        <menu className="text-center absolute w-screen lg:hidden">
          <li className="py-5 bg-blue-50  hover:bg-blue-100 hover:text-sky-400 text-sm text-gray-500 cursor-pointer">
            Top Posts
          </li>
          <li className="py-5 bg-blue-50   hover:bg-blue-100 hover:text-sky-400 text-sm text-gray-500 cursor-pointer">
            All Posts
          </li>
          <li className="py-5 bg-blue-50  hover:bg-blue-100 hover:text-sky-400 text-sm text-gray-500 cursor-pointer">
            About
          </li>
          <li className="py-5 bg-blue-50  hover:bg-blue-100 hover:text-sky-400 text-sm text-gray-500 cursor-pointer">
            Sign Up/Log In
          </li>
        </menu>
      )}
    </>
  );
};

export default MainNav;
