import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";

// import Bottom from "../Atom/Bottom";
import Header from "../components/Atom/Header";
import SideNavs from "../components/Atom/SideNav";
// import TopNav from "../Atom/TopNav";
import FullEngine from "../components/Molecule/Flight/FullEngine";
import NewOffer from "../components/Molecule/Flight/NewOffer";
import Offer from "../components/Molecule/Flight/Offer";
import Deals from "../components/Molecule/Flight/Deals";
import Partner from "../components/Molecule/Flight/Partner";
// import Navs from "../components/Atom/Nav";
import Footer from "../components/Atom/Footer";

import Promo from "../components/Atom/Promo";
// import Graterates from "../Atom/Graterates";
// import Head from 'next/head'
// import Image from 'next/image'
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { AllData, CURRENCY, GateWays } from "../components/Redux/ActionType";
import { useDispatch, useSelector } from "react-redux";
import { checkFlights, RemoveFlight } from "../components/Feature/Action";
import axios from "axios";
import { currency } from "../components/Api/currency";

// import HeaderBg from "../../Images/header_bg_1.svg"
const Flight = () => {
  const dispatch = useDispatch();
  const { currency_Name_rd } = useSelector((item) => item.currency_Reducer);

  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: "en" },
      "google_translate_element"
    );
  }

  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getIPdata = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");

    const currencyFilter = currency.find(
      (item) => item.currency_Code === res.data.country_code
    );
    // const currencyFilter = currency.find((item) => "INR" === "USD")

   
    setIP(res.data.country_code);
    if (currency_Name_rd.currency_Code === ip) {
    dispatch({
      type: CURRENCY,
      payload:
        currencyFilter === undefined || currencyFilter === null
          ? {
              id: 1,
              currency_Name: "INR",
              currency_Logo: "₹",
              currency_Logo_Img: "in_flag.png",
              currency_Code: "IN",
              // currency_Footer_img: "footer-bg2.png",
            }
          : currencyFilter,
    });
  }
  };
  //country_code

  useEffect( () => {
    //passing getData method to the lifecycle method
    getIPdata()

  }, [])

  useEffect(() => {
    dispatch({
      type: AllData,
      payload: {
        AllFlight_data: {},
        SelectedDatas: {},
        inBoundData: {},
        Objdata: {},
      },
    });

    dispatch(RemoveFlight({}));
    dispatch({
      type: GateWays,
      payload: {
        ValueType: "",
        AdultValue: 0,
        ChildValue: 0,
        FaltValue: 0,
      },
    });
  });
  return (
    <>
      <Head>
        <title>{`Travomint : Book Cheap Flight Tickets | Online Travel Agency`}</title>
        <meta
          name="description"
          content={`Travomint is an online travel company, providing services to book cheap Air tickets, hotels, car rentals, vacation packages etc... To get expert advice contact Travomint.`}
        />
        <meta
          name="keywords"
          content={`travomint, travomint cheap flight tickets, travomint reviews, travomint vacation packages, travomint travel agency, travomint travel company, travomint phone number`}
        />
        <link rel="canonical" href={`https://www.travomint.com/`} />
        <link rel="alternate" href={`https://www.travomint.com/`} />

        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
        <meta
          name="google-signin-client_id"
          content="41403895905-m0d58g83moh51eqg72ovev4c4osnm5pb.apps.googleusercontent.com"
        ></meta>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>

        <link rel="stylesheet" href="owl-carousel/owl.theme.css" />
      </Head>

      <Header />
      {/* <img src={HeaderBg} alt="header Bg" /> */}
      <SideNavs />
      <FullEngine />
      {/* <NewOffer /> */}
      {/* <div className=""> */}
      <Promo />

      {/* <Deals /> */}
      <Partner />
      <Offer />
      {/* </div> */}
      {/* <Navs /> */}
      <Footer />
      {/* <Bottom /> */}
    </>
  );
};
export default Flight;
