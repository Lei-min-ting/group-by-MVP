import React from "react";

const JoinComunity = () => {
  return (
    <div className="bg-gray-300 h-screen mt-3 p-5 ">
      <form id="infoSearch" className="flex justify-center">
        <input
          type="search"
          value="Comunity information"
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

export default JoinComunity;
