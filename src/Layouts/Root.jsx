import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/NavBar";

const Root = () => {
  const QuizContext = createContext([]);
  return (
    <div>
      <QuizContext.Provider value={[]}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </QuizContext.Provider>
    </div>
  );
};

export default Root;
