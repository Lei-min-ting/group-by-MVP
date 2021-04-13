import React from "react";

const GroupBuying = (props) => {
  return (
    <div className="bg-gray-300 h-screen">
      <div
        onClick={props.GroupBuyingOff}
        className="text-2xl font-mono flex justify-start uppercase text-gray-600 p-3 cursor cursor-pointer"
      >
        <svg
          className="w-6 h-6 mt-1 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>
        back
      </div>
      <nav className="flex justify-center px-2">
        <button
          type="button"
          className="bg-gray-300 font-mono uppercase mx-3 text-2xl hover:bg-gray-200"
        >
          All
        </button>
        <button
          type="button"
          className="bg-gray-300 font-mono uppercase mx-3 text-2xl  hover:bg-gray-200"
        >
          Group buying
        </button>
        <button
          type="button"
          className="bg-gray-300 font-mono uppercase mx-3 text-2xl  hover:bg-gray-200"
        >
          Wait for launch
        </button>
        <button
          type="button"
          className="bg-gray-300 font-mono uppercase mx-3 text-2xl  hover:bg-gray-200"
        >
          end
        </button>
        <button
          type="button"
          className="bg-gray-300 font-mono uppercase mx-3 text-2xl  hover:bg-gray-200"
        >
          delete in 30 day
        </button>
      </nav>
      <form id="infoSearch" className="flex justify-center mt-3">
        <input
          type="search"
          value="Search for activity"
          className="font-mono w-1/3 rounded-md text-gray-400 text-center px-4 py-1"
        />
        <svg
          className="w-6 h-6 ml-2 mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
    </div>
  );
};

export default GroupBuying;
