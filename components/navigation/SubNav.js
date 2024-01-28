import React from "react";

const SubNav = () => {
  return (
    <nav className="my-10 lg:my-20">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <li className="py-4 px-2  bg-blue-50  hover:bg-blue-100 hover:text-sky-400 hover:drop-shadow-md text-md text-gray-700 font-semibold text-center cursor-pointer rounded">
          Lorem
        </li>
        <li className="py-4 px-2  bg-blue-50  hover:bg-blue-100 hover:text-sky-400 hover:drop-shadow-md text-md text-gray-700 font-semibold text-center cursor-pointer rounded">
          Ipsum
        </li>
        <li className="py-4 px-2  bg-blue-50  hover:bg-blue-100 hover:text-sky-400 hover:drop-shadow-md text-md text-gray-700 font-semibold text-center cursor-pointer rounded">
          Rutrum
        </li>
        <li className="py-4 px-2  bg-blue-50  hover:bg-blue-100 hover:text-sky-400 hover:drop-shadow-md text-md text-gray-700 font-semibold text-center cursor-pointer rounded">
          Elementum
        </li>
      </ul>
    </nav>
  );
};

export default SubNav;
