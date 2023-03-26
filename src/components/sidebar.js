import React, { useState } from "react";
import Channel from "./channel";
import Genres from "./genres";
import Languages from "./languages";
import { RiMovieLine } from "react-icons/ri";
import { TbLanguageHiragana } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import SliderComponent from "./slider";

function Sidebar() {
  const [cssid, setcssid] = useState(0);

  let categories = [
    {
      id: 1,
      name: "Dashboard",
      title: <Channel />,
    },
    {
      id: 2,
      name: "Programs",
      title: <Languages />,
    },
    {
      id: 3,
      name: "Accounts",
      title: <Genres />,
    },
  ];
  return (
    <>
      {/* <div class="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white  h-[92vh]">
        <div className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
          <RiMovieLine className="text-xl" />
          <span className="-mr-1 font-medium">Channels</span>
        </div>

        <div className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
          <TbLanguageHiragana className="text-xl" />
          <span className="group-hover:text-gray-700">Languages</span>
        </div>

        <div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
          <BiCategory className="text-xl" />
          <span className="group-hover:text-gray-700">Genres</span>
        </div>
      </div> */}
      <div class="sticky md:flex hidden flex-col  sm:top-[4.7rem] top-[130px] left-0 w-14 hover:w-64 md:w-64 bg-white dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">

        <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul class="flex flex-col py-4 space-y-3">
            
            <li>
              <div
                class="relative flex flex-row items-center h-11 focus:outline-none  bg-gray-800 cursor-pointer text-white-600 hover:text-white-800  hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                <RiMovieLine className="text-xl" />
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                Channels
                </span>
              </div>
            </li>
            <li>
              <div
                class="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 cursor-pointer text-white-600 hover:text-white-800  hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                <TbLanguageHiragana className="text-xl" />
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Languages</span>
                
              </div>
            </li>
            <li>
              <div
                class="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 cursor-pointer text-white-600 hover:text-white-800  hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                <BiCategory className="text-xl" />
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                Genres
                </span>
              </div>
            </li>
            
          </ul>
          
        </div>
      </div>
    </>
  );
}

export default Sidebar;
