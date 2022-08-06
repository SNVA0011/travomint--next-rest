import React, { useContext, useEffect } from "react";
import Bottom from "../../components/Atom/Bottom";
import Footer from "../../components/Atom/Footer";
import Header from "../../components/Atom/Header";
import SideNavs from "../../components/Atom/SideNav";
import Hero from "../../components/Molecule/Charter/CharterDetail/Hero";




const Charter = (props) => {

    useEffect(()=>{
window.scroll(0,0)
    },[])
  return (
    <>
<Header/>
<SideNavs/>
<Hero/>
<Bottom/>
<Footer/>
    </>
  );
};

export default Charter;
