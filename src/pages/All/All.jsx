// All.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Helpers/Container";

const All = () => {
  const [activeButton, setActiveButton] = useState(""); 

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <Container>
      <div className="flex gap-3 mt-10 ">
        <Link to='/modell' onClick={() => {handleButtonClick("company"); }}>
          <button
            className={`text-gray outline-none w-[150px] h-[50px] border-2 rounded-md text-center ${
              activeButton === "company" ? "bg-red-600 text-white" : "bg-gray-200"
            }`}
          >
            О компании
          </button>
        </Link>

        <Link to="/production" onClick={() => {handleButtonClick("production"); }}>
          <button
            className={`text-gray outline-none w-[150px] h-[50px] border-2 rounded-md text-center ${
              activeButton === "production" ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
          >
            Производство
          </button>
        </Link>
        <Link to="/awards" onClick={() => {handleButtonClick("awards"); }}>
          <button
            className={`text-gray outline-none w-[150px] h-[50px] border-2 rounded-md text-center ${
              activeButton === "awards" ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
          >
            Награды
          </button>
        </Link>

        <Link to="/job" onClick={() => {handleButtonClick("job"); }}>
          <button
            className={`text-gray outline-none w-[150px] h-[50px] border-2 rounded-md text-center ${
              activeButton === "job" ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
          >
            Вакансии
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default All;
