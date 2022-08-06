import React, { useContext } from "react";
import EngineTwo from "../components/Atom/EngineTwo";
import FlightHeader from "../components/Atom/FlightHeader";
import Header from "../components/Atom/Header";
import Result from "../components/Molecule/Result/Result";

const Results = (props) => {
  window.onpopstate = function (event) {
    if (event) {
      window.location.href = 'http://www.travomint.co/';
      // Code to handle back button or prevent from navigation
    }
  }

  return (
    <>
      <FlightHeader/>
      <Header />
      {/* <Query /> */}
      <EngineTwo />
      <Result />
    </>
  );
};

export default Results;
