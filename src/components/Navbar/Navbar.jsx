import { useState } from "react";
import osut from "../../assets/OSUT.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
export default function Navbar() {
  const { height, width } =
    useWindowDimensions();
  const [isPhone, setIsPhone] =
    useState("false");
  const [isShown, setIsShown] =
    useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const validateDimesions = () => {
    if (width < 1024) {
      setIsPhone(true);
    }
  };

  return (
    <nav className="flex items-center justify-between flex-wrap lg:bg-transparent p-6 matahari transition-all bg-black">
      <div class="flex items-center flex-shrink-0 text-white mr-6 ">
        <img
          src={osut}
          alt="logo"
          className="w-24 ml-14"
        />
      </div>
      <div class="block lg:hidden">
        <button
          onClick={handleClick}
          class="flex transition-all items-center px-3 py-2  rounded text-white  hover:text-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {isShown && isPhone ? (
        <div class="transition-all w-full ml-14 block lg:flex lg:items-center lg:w-auto lg:right-0 ">
          <div class="text-sm lg:flex-grow">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Creaza felicitare
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              De ce facem asta?
            </a>
            <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
              Doneaza
            </a>
          </div>
        </div>
      ) : (
        <div class="w-full cursor-pointer block lg:flex lg:items-center lg:w-auto lg:pr-14">
          <div class="text-sm ">
            <a class="hidden mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 ">
              Creaza felicitare
            </a>
            <a class="hidden mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              De ce facem asta?
            </a>
            <a class="hidden mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
              Doneaza
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
