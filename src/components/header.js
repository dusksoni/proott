import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import "../assets/css/nav.css";
import { RiMovieLine, RiSlideshow2Fill } from "react-icons/ri";
import { BsNewspaper } from "react-icons/bs";
import { MdLocalMovies, MdTheaterComedy } from "react-icons/md";
function Header({ isScrolled, setsidebar, sidebar }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-gray-800 md:flex md:items-center md:justify-between p-4 sticky top-0 shadow-lg md:pb-4 z-20">
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <div class="flex items-center space-x-2">
          {/* <button type="button" class="text-3xl text-white" onClick={()=>setsidebar(!sidebar)}>{sidebar? <AiOutlineClose/> : <RxHamburgerMenu />}</button> */}

          <span className="text-white font-bold text-lg">PRO OTT</span>
        </div>
        <button onClick={toggleMenu} className="md:hidden rounded-lg p-2">
          <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
            <path
              className={!isOpen ? "block" : "hidden"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
            />
            <path
              className={isOpen ? "block" : "hidden"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden md:items-center ${isOpen ? "hidden" : "block"}`}
      >
        <ul>
          <li className="mb-2">
            
            <span class="ml-2 text-sm tracking-wide truncate">Channels</span>
          </li>
          <li className="mb-2">
            
            <span class="ml-2 text-sm tracking-wide truncate">Languages</span>
          </li>
          <li className="mb-2">
            
            <span class="ml-2 text-sm tracking-wide truncate">Genres</span>
          </li>
        </ul>
      </div>
      <nav className={`md:flex md:items-center hidden`}>
        <ul className="md:flex items-center justify-between text-base text-gray-400 pt-4 md:pt-0">
          <li>
            <div className="block md:inline-block text-white hover:text-white mr-4">
              Home
            </div>
          </li>
          <li>
            <div className="block md:inline-block text-white hover:text-white mr-4">
              Shows
            </div>
          </li>
          <li>
            <div className="block md:inline-block text-white hover:text-white mr-4">
              Movies
            </div>
          </li>
          <li>
            <div className="block md:inline-block text-white hover:text-white">
              Comedy
            </div>
          </li>
          <li>
            <div className="block md:inline-block text-white hover:text-white ml-4">
              News
            </div>
          </li>
        </ul>
      </nav>
      <div className="flex  md:justify-end justify-between gap-2">
        <div className="w-full max-w-[320px] mx-auto">
          <div className="relative mr-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white rounded-full px-4 py-2 w-full"
            />
            <span className="absolute right-0 top-0 mr-3 mt-3">
              <FaSearch className="text-gray-500" />
            </span>
          </div>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-full mr-4">
          Subscribe
        </button>
        <button className="bg-transparent text-white border border-white px-4 py-2 rounded-full">
          Login
        </button>
      </div>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-between items-center p-2">
        <a href="#" className="flex flex-col items-center justify-center">
          <AiFillHome />
          <span className="text-xs mt-1">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center">
        <RiSlideshow2Fill />
          <span className="text-xs mt-1">Shows</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center">
          <MdLocalMovies />
          <span className="text-xs mt-1">Movies</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center">
          <MdTheaterComedy />
          <span className="text-xs mt-1">Comedy</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center">
          <BsNewspaper />
          <span className="text-xs mt-1">News</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
