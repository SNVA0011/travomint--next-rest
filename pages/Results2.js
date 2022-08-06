import React, { useState } from "react";
import { useSelector } from "react-redux";
// import EngineTwo from "../components/Atom/EngineTwo";
import { SelectedData } from "../components/Feature/Action";
import Head from "next/head"

import Header from "../components/Molecule/Result/Header";
import Resulttwo from "../components/Molecule/Result/Resulttwo";
import RoundWayInt from "../components/Molecule/Result/RoundWay/RoundWayInt"
import FlightHeader from "../components/Atom/FlightHeader";


const Resultstwo = () => {
  const data = useSelector(SelectedData);
  window.onpopstate = function (event) {
    if (event) {
      window.location.href = 'http://www.travomint.co/';
      // Code to handle back button or prevent from navigation
    }
  }


  return (
    <>
    
      {/* <Header /> */}
      {/* <Query /> */}
      <FlightHeader/>
      {/* <EngineTwo /> */}

      {data.CountryCode !== "IN" || data.ArCountryCode !== "IN" ? (
        <>
       
          <RoundWayInt />
        </>
      ) : (
        <>
          <Resulttwo />
        </>
      )}
    </>
  );
};

export default Resultstwo;
