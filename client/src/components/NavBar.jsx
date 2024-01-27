import React from "react";

const NavBar = () => {
  return (
    <div className="flex w-full h-20 justify-between border-b-2 border-solid ">
      <div className="flex w-36">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2965/2965358.png"
          alt="Logo"
          className="w-10 h-11 mx-4 my-4"
        />
        <h2 className="w-16 mx-1 my-4 font-medium text-2xl">Keep</h2>
      </div>
      <div className="mx-4 my-4 w-2/3 flex  ">
        <label className="relative block w-full">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className="placeholder:italic  h-12 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-grey-500 focus:ring-grey-500 focus:ring-1 sm:text-sm"
            placeholder="Search Note..."
            type="text"
            name="search"
          />
        </label>
      </div>
      <div className="flex justify-between  w-2/12 ">
        <button className=" my-4  w-20  bg-blue-700 text-slate-50 rounded-xl">
          SignUp
        </button>
        <button className=" my-4  w-20  bg-blue-700 text-slate-50 rounded-xl">
          Login
        </button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2965/2965358.png"
          alt=""
          className="w-12 h-11 p-1 mx-4 my-4"
        />
      </div>
    </div>
  );
};

export default NavBar;
