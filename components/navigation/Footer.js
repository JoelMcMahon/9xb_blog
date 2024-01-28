import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-800 h-56 w-screen flex flex-col">
      <div className="w-full mt-auto my-5">
        <Link href="/" className="text-5xl flex items-center justify-center">
          <div className="flex items-center justify-center transform rotate-45">
            <div className="h-5 w-2 bg-gradient-to-r from-sky-400 to-blue-500  m-0.5 rounded-tr rounded-bl"></div>
            <div className="h-8 w-2 bg-gradient-to-r from-sky-400 to-blue-500  m-0.5 rounded-tr rounded-bl"></div>
            <div className="h-5 w-2 bg-gradient-to-r from-sky-400 to-blue-500  m-0.5 rounded-tr rounded-bl"></div>
          </div>
          <p className="m-2 text-3xl text-white">This Blog</p>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex items-center justify-center">
          <li className="text-gray-500 text-2xl m-5 cursor-pointer">
            <a href="https://www.facebook.com" target={"_blank"}>
              <FaFacebook />
            </a>
          </li>
          <li className="text-gray-500 text-2xl m-5 cursor-pointer">
            <a href="https://www.x.com" target="_blank">
              <FaXTwitter />
            </a>
          </li>
          <li className="text-gray-500 text-2xl m-5 cursor-pointer">
            <a href="https://www.instagram.com" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li className="text-gray-500 text-2xl m-5 cursor-pointer">
            <a href="https://www.linkedin.com" target="_blank">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
