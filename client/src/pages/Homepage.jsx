import React, { useRef, useState, useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import NavBar from "../components/NavBar";
import Keeps from "../components/Keeps";

const Homepage = () => {
  const [isTextareaVisible, setIsTextareaVisible] = useState(false);
  const inputRef = useRef();
  const [inputTitle, setInputTitle] = useState("");
  const [inputTxtArea, setInputTxtArea] = useState("");

  const toggleTextarea = () => {
    setIsTextareaVisible(!isTextareaVisible);
  };

  const handleWindowClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      // Clicked outside the input and textarea, hide textarea
      setIsTextareaVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleWindowClick);

    return () => {
      window.removeEventListener("mouseup", handleWindowClick);
    };
  }, []);

  const handleTextareaClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center w-auto h-44 my-10 ">
        <div
          className={`w-2/6 ${
            !isTextareaVisible ? "h-16" : "h-40"
          }  bg-white flex flex-col my-4 rounded-2xl shadow-xl`}
        >
          <input
            type="text"
            placeholder={isTextareaVisible ? "Title" : "Take a note..."}
            className="mx-5 my-3 h-46  placeholder:italic    placeholder:text-slate-400 block bg-white w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-grey-500 focus:ring-grey-500 focus:ring-1 sm:text-sm"
            onClick={toggleTextarea}
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            ref={inputRef}
          />
          {isTextareaVisible && (
            <textarea
              id="addTxt"
              style={{ resize: "none" }}
              value={inputTxtArea}
              onChange={(e) => setInputTxtArea(e.target.value)}
              rows="3"
              className="mx-5  bg-white w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-grey-500 focus:ring-grey-500 focus:ring-1 sm:text-sm"
              placeholder="Take a Note..."
              onClick={handleTextareaClick}
              ref={inputRef}
            ></textarea>
          )}
          <button className={` ml-auto -mt-3  -mx-2 w-10 h-10 `}>
            {!isTextareaVisible ? (
              <IoIosAddCircle className="w-10 h-10 text-blue-700" />
            ) : (
              <IoIosCheckmarkCircle className="w-10 h-10 text-blue-700" />
            )}
          </button>
        </div>
      </div>
      <div className="flex"></div>
      <Keeps />
    </div>
  );
};

export default Homepage;
