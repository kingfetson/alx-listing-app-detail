import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 flex flex-col">
      <div className="w-full">
        <div
          className="
        bg-emerald-600 p-2 text-white
        flex flex-col items-center justify-center space-y-2
        md:flex-row md:justify-center md:space-y-0 md:space-x-4"
        >
          <div className="flex items-center space-x-3 text-center md:text-left">
            <Image
              width={30}
              height={30}
              src="/assets/icons/Linear/School/Case_Minimalistic.png"
              alt="school bag"
            />
            <p className="text-sm font-medium">
              Overseas trip? Get the latest information on travel guides
            </p>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-gray-800 transition-colors flex-shrink-0">
            More Info
          </button>
        </div>

        <div className="bg-white p-4 md:p-6 md:px-10 flex lg:flex-row items-center justify-between">
          <div className="hidden md:block md:mr-6 font-bold flex-shrink-0">
            <Image src="/assets/logos/alx logo.png" width={70} height={70} alt="alx logo"/>
          </div>

          <div
            className="
          flex flex-col space-y-4 w-full
          md:flex-row md:space-y-0 md:space-x-2 md:flex-grow md:justify-end
          lg:justify-center lg:w-auto
          "
          >
            <div
              className="flex-shrink-0
            flex items-center bg-white-100 rounded-full py-1 pr-2 pl-8 space-x-2 w-auto
            md:hidden
            border-gray-300 border"
            >
              <div className="flex-1 text-gray-500 ml-2 text-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 md:hidden">
                  Where to
                </h2>
                <form className="flex space-y-2">
                  <div className="text-sm">
                    <input
                      type="text"
                      id="location"
                      placeholder="Location"
                      className="bg-transparent outline-none text-gray-500 w-full"
                    />
                  </div>
                  {/* <div className="px-4">
                    &bull;
                  </div> */}
                  <div className="text-sm">
                    <input
                      type="text"
                      id="location"
                      placeholder="Date"
                      className="bg-transparent outline-none text-gray-500 w-full"
                    />
                  </div>
                  {/* <div className="px-4">
                    &bull;
                  </div> */}
                  <div className="text-sm">
                    <input
                      type="text"
                      id="location"
                      placeholder="Guest"
                      className="bg-transparent outline-none text-gray-500 w-full"
                    />
                  </div>
                </form>
              </div>
              <button className="bg-orange-500 p-3 rounded-full flex-shrink-0 hover:bg-orange-400 transition-colors">
                <Image
                  src="/assets/icons/Linear/Search/Magnifer.png"
                  alt="search icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <form
              className="
            hidden md:flex md:items-center md:bg-white-100 md:rounded-full md:py-4 md:px-4 md:space-x-4
            md:w-full lg:w-auto border border-gray-300
            "
            >
              <div className="text-sm lg:w-[40%]">
                <label className="block font-semibold text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Search for destination"
                  className="bg-transparent outline-none text-gray-500 w-full"
                />
              </div>
              <div className="text-sm border-l border-gray-300 pl-4 lg:w-[20%]">
                <label className="block font-semibold text-gray-700">
                  Check in
                </label>
                <input
                  type="text"
                  id="checkin"
                  placeholder="Add date"
                  className="bg-transparent outline-none text-gray-500 w-full"
                />
              </div>
              <div className="text-sm border-l border-gray-300 pl-4 lg:w-[20%]">
                <label className="block font-semibold text-gray-700">
                  Check out
                </label>
                <input
                  type="text"
                  id="checkout"
                  placeholder="Add date"
                  className="bg-transparent outline-none text-gray-500 w-full"
                />
              </div>
              <div className="text-sm border-l border-gray-300 pl-4 lg:w-[20%]">
                <label className="block font-semibold text-gray-700">
                  People
                </label>
                <input
                  type="text"
                  id="people"
                  placeholder="Add guest"
                  className="bg-transparent outline-none text-gray-500 w-full"
                />
              </div>

              <button className="bg-orange-400 p-3 rounded-full flex-shrink-0 hover:bg-orange-600 transition-colors ml-auto lg:ml-0">
                <Image
                  src="/assets/icons/Linear/Search/Magnifer.png"
                  alt="search icon"
                  width={24}
                  height={24}
                />
              </button>
            </form>
          </div>

          <div className="flex space-x-2 ml-4 flex-shrink-0 justify-between">
            <div className="hidden lg:flex space-x-2">
              <button className="bg-emerald-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-emerald-700 transition-colors">
                Sign In
              </button>
              <button className="border border-gray-300 text-gray-700 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Sign up
              </button>
            </div>
            <div className="lg:hidden items-center space-x-2">
              <button className="bg-emerald-100 p-3 rounded-full text-emerald-600 hover:bg-emerald-200 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;