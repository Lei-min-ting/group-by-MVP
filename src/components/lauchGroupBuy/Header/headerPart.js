import React from "react";
import { Link } from "react-router-dom";

const HeaderPart = (props) => {
  return (
    <div className="flex flex-col justify-start items-start h-auto bg-gradient-to-b from-green-300 via greeb-200 to white font-momo">
      <h1 className="lg:text-5xl my-2 text-3xl font-bold">
        Gruop Buy! Buy more,Fun more
      </h1>
        <Link className="bg-green-500 m-3 p-1  rounded-lg flex items-start">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          MVP webpage
        </Link>

      <div className="grid grid-cols-3 divide-x flex justify-start items-cetner text-center">
        <p className="px-7">{props.number}selling</p>
        <p className="px-7">{props.number}social group</p>
        <p className="px-7">{props.number}join</p>
      </div>
    </div>
  );
};

export default HeaderPart;
