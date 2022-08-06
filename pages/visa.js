import React, { useContext } from "react";
import Bottom from "../components/Atom/Bottom";
import Footer from "../components/Atom/Footer";
import Header from "../components/Atom/Header";
import SideNavs from "../components/Atom/SideNav";
import FAQ from "../components/Molecule/Visa/FAQ"
import Document from "../components/Molecule/Visa/Document"
import VisaProcess from "../components/Molecule/Visa/VisaProcess"
import Types from "../components/Molecule/Visa/Types"
import VisaPrice from "../components/Molecule/Visa/VisaPrice"
import Hero from "../components/Molecule/Visa/Hero"
// import Kind from "../components/Molecule/Visa/Kind"



const Visa = (props) => {
  return (
    <>
      <Header />
      <SideNavs />
      <Hero />
      <VisaPrice />
      <Types />
      <VisaProcess />
      <Document />
      <FAQ />
      {/* <Kind/> */}
      {/* <Navs/> */}
      <Bottom />

      <Footer />
    </>
  );
};

export default Visa;
