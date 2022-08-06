import React, { useContext } from "react";
import Bottom from "../components/Atom/Bottom";
import Footer from "../components/Atom/Footer";
import Header from "../components/Atom/Header";
import SideNavs from "../components/Atom/SideNav";
import Hero from "../components/Molecule/Charter/Hero";
import Document from "../components/Molecule/Charter/Document";
import FAQ from "../components/Molecule/Charter/FAQ";
import Types from "../components/Molecule/Charter/Types";
import VisaPrice from "../components/Molecule/Charter/VisaPrice";
import VisaProcess from "../components/Molecule/Charter/VisaProcess";



const Charter = (props) => {
  return (
    <>
<Header/>
<SideNavs/>
<Hero/>
{/* <VisaPrice/> */}
<Types/>




<Bottom/>
<Footer/>
    </>
  );
};

export default Charter;
