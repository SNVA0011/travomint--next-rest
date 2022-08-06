import React from "react";
import Footer from "../components/Atom/Footer";
import Header from "../components/Atom/Header";
import TopNav from "../components/Atom/TopNav";
import Navs from "../components/Atom/Nav";
import Schedules from "../components/Molecule/Schedule/schedule";
import SideNavs from "../components/Atom/SideNav";
const Schedule=()=>{
    return(
        <>
        <Header/>
<SideNavs/>
{/* <EngineTwo/> */}
<Schedules/>
<Navs/>
<Footer/>
        </>
    )
}

export default Schedule;