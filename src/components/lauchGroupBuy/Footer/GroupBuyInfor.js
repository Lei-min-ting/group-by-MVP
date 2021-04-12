import React from "react";
import { Link } from "react-router-dom";

const GroupBuyInfor = (props) => {
   
  return (
    <div className={props.isOpen? "bg-gray-300 h-screen ":"hidden"}>
      <h2>
        Product
      </h2>
      <form className=" form bg-white m-2 p-2 flex flex-col rounded-md items-start">
        <div className="form-inputs m-1">
          <label>ProductName</label>
          <input type="text" name="productName" className='bg-gray-300 rounded ml-2'></input>
        </div>
        <div className="form-inputs m-1">
          <label>Scale</label>
          <input type="text" name="scale" className='bg-gray-300 rounded ml-2'></input>
        </div>
        <div className="form-inputs m-1">
          <label>Price</label>
          <input type="text" name="price" className='bg-gray-300 rounded ml-2'></input>
        </div>
        <div className="form-inputs m-1">
          <label>Inventory</label>
          <input type="text" name="inventory" className='bg-gray-300 rounded ml-2'></input>
        </div>
      </form>
      <h2>
        <span>GroupBuy Setting</span>
      </h2>
      <div className="bg-white rounded h-auto m-2 p-2">
        <div className="flex justify-between">
          <h1>Distribution</h1>
          <Link className="flex flex items-start">
            shipping
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="items-start  rounded-md">
          <p>Activity Time</p>
          <input type="date" className='bg-gray-300 rounded-sm'/> to <input type="date" className='bg-gray-300 rounded-sm'/>
        </div>
      </div>
    </div>
  );
};

export default GroupBuyInfor;
