import React from "react";
import LandImg from "../../assets/NK_login.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full min-h-screen font-sans text-gray-800">
        <div className="px-6 mx-auto max-w-7xl ">
          <div className="flex justify-between items-center mt-2 p-18 ">
            <h1 className="font-medium text-3xl ">Notes.io</h1>
            <nav className="flex  items-center space-x-10">
              <button
                className="h-10 w-24 bg-blue-600 text-white rounded-2xl cursor-pointer hover:bg-blue-500 hover:scale-110 transition-all active:bg-blue-700 shadow-lg shadow-slate-200"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </nav>
          </div>
          <div className="px-6 mx-auto max-w-6xl">
            <div className="flex">
              <div className="pt-24 pr-8 w-1/2">
                <h1 className="text-6xl font-bold font-display">
                  "Note.io - Capture Ideas, Stay Organized"
                </h1>
                <p className="pt-8 max-w-md text-xl leading-relaxed text-gray-500">
                  A simple and powerful notes app for organizing your thoughts.
                </p>
                <div className="flex  items-center pt-6 space-x-6">
                  <button
                    onClick={() => {
                      navigate("/register");
                    }}
                    className="w-28 h-10 bg-blue-600 text-white rounded-2xl cursor-pointer hover:bg-blue-500 hover:scale-110 transition-all active:bg-blue-700 shadow-xl shadow-gray-300 "
                  >
                    Get Started{" "}
                  </button>
                </div>
              </div>
              <div className="mx-4 px-5">
                <img className="mx-2" src={LandImg} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
