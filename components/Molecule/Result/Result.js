import React, { useContext, useEffect } from "react";
import plane from "../../../public/Image/plane-ticket.png";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { SelectedData } from "../../Feature/Action";
import Dom_Int_OneWay from "./OneWay/Dom_Int_OneWay";
import { authCode, domain, siteID, testapi } from "../../static/static";
import Button from "react-bootstrap/Button";
import skeleton from "../../../public/Image/skeleton2.gif";
import shivam from "../../../public/Image/shivam.png";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Result = () => {
  const { currency_Name_rd } = useSelector((item) => item.currency_Reducer);
  //---------------------------- state------------------------------
  const [Result, setResult] = useState([]);
  const [AirResult, setAirResult] = useState([]);
  const [Load, setLoad] = useState(false);

  // ----------------------------Reduux-----------------------------------
  const data = useSelector(SelectedData);

  // ----------------------------Reduux-----------------------------------

  // ----------------------------------API-------------------------------------
  const int = data.CountryCode !== "IN" ? "false" : "true";
  const GetAPIDATA = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Access-Control-Request-Headers", "*");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      searchID: "0fgg48ux7h6421l",
      client: 2,
      segment: [
        {
          originAirport: data.departure,
          destinationAirport: data.arrival,
          travelDate: data.startDates,
        },
      ],
      searchDirectFlight: false,
      flexibleSearch: false,
      tripType: data.tripType,
      adults: data.adult,
      child: data.children,
      infants: data.infant,
      infantsWs: 0,
      cabinType: data.class,
      airline: "All",
      currencyCode: currency_Name_rd.currency_Name,
      siteId: siteID,
      source: "online",
      media: "online",
      sID: "",
      rID: "",
      locale: "en",
      isNearBy: false,
      limit: 300,
      pageValue: "search",
      userIP: "0:0:0:0:0:0:0:1",
      serverIP: "",
      device: "Desktop",
      browser: "WINDOWS_10",
      userCountry: data.CountryCode,
      userSearch: int,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    setLoad(true);

    const Apidata = await fetch(
      `${testapi}/Flights/GetFlightResult?authcode=${authCode}`,
      requestOptions
    );

    const datas = await Apidata.json();

    if (datas.responsStatus.status !== 0) {
      setResult(datas);
      setAirResult(datas.flightResult);
    } else {
      console.log("flight not found");
    }
    setLoad(false);
  };

  const myLoader = ({ src, width, quality }) => {
    return `https://www.travomint.com/resources/images/airline-logo/${src}`;
  };

  // --------------------------------Departure Time end-------------------------------------------

  // -------------------------useEffect----------------------------

  useEffect(() => {
    GetAPIDATA();
  }, [data]);

  // -------------------------useEffect----------------------------
  return (
    <div
      className={
        "oneway-flres position-relative " + (Load === true ? "loadmfy-spc" : "")
      }
    >
      {Load === true ? (
        <Container>
          <div className="load-insline overflow-hidden">
            <div className="loader1">
              <div className="bar1"></div>
            </div>
          </div>

          <Row className="relative">
            <Col xl={3} xs={12} className="d-none d-xl-block">
              <div>
                <Button
                  // onClick={handleShow}
                  type="button"
                  className="btn-outline-fetfare getalmob btn-block  mt-2 mt-lg-0 btn btn-primary"
                >
                  <div className="position-relative d-inline-block">
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>

                    <span className="border-ringfr">
                      <i className="far fa-bell"></i>
                    </span>
                  </div>
                  Get Fare Alert
                </Button>
              </div>

              <div className="mt-3">
                <Image
                  src={shivam}
                  width={388}
                  height={790}
                  className="rounded"
                />
              </div>
            </Col>

            {currency_Name_rd.currency_Name == "INR" ? (
              <>
                {" "}
                <Col xl={9} xs={12}>
                  <div className="d-flex justify-content-center align-items-center loadanimate-before flex relative mb-3 h-16 w-full border-2 border-white animation-result">
                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/G8.png"  /> */}
                          <Image
                            loader={myLoader}
                            src="G8.png"
                            alt="G8"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box1">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/AI.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="AI.png"
                            alt="G8"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20   w-28 m-1 box2">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/I5.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="I5.png"
                            alt="I5"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20 w-28 m-1 box3">
                      <div className="">
                        <div className="justify-center flex">
                          <Image
                            loader={myLoader}
                            src="6E.png"
                            alt="6E"
                            width={60}
                            height={60}
                          />
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/6E.png" className="w-50 " /> */}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box4">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/UK.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="UK.png"
                            alt="G8"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20 w-28 m-1 box5">
                      <div className="">
                        <div className="justify-center flex">
                          <Image
                            loader={myLoader}
                            src="SG.png"
                            alt="G8"
                            width={60}
                            height={60}
                          />
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/SG.png" className="w-50 " /> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div>
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                    </div>
                    <div>
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                    </div>
                  </div>
                </Col>
              </>
            ) : (
              <></>
            )}

            {currency_Name_rd.currency_Name == "USD" ? (
              <>
                {" "}
                <Col xl={9} xs={12}>
                  <div className="d-flex justify-content-center align-items-center loadanimate-before flex relative mb-3 h-16 w-full border-2 border-white animation-result">
                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/G8.png"  /> */}
                          <Image
                            loader={myLoader}
                            src="DL.png"
                            alt="DL"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box1">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/AI.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="B6.png"
                            alt="B6"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20   w-28 m-1 box2">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/I5.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="UA.png"
                            alt="UA"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20 w-28 m-1 box3">
                      <div className="">
                        <div className="justify-center flex">
                          <Image
                            loader={myLoader}
                            src="AA.png"
                            alt="AA"
                            width={60}
                            height={60}
                          />
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/6E.png" className="w-50 " /> */}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box4">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/UK.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="WN.png"
                            alt="WN"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20 w-28 m-1 box5">
                      <div className="">
                        <div className="justify-center flex">
                          <Image
                            loader={myLoader}
                            src="AS.png"
                            alt="AS"
                            width={60}
                            height={60}
                          />
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/SG.png" className="w-50 " /> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div>
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                    </div>
                    <div>
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                    </div>
                  </div>
                </Col>
              </>
            ) : (
              <></>
            )}

            {currency_Name_rd.currency_Name == "CAD" ? (
              <>
                {" "}
                <Col xl={9} xs={12}>
                  <div className="d-flex justify-content-center align-items-center loadanimate-before flex relative mb-3 h-16 w-full border-2 border-white animation-result">
                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/G8.png"  /> */}
                          <Image
                            loader={myLoader}
                            src="AC.png"
                            alt="AC"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box1">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/AI.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="WS.png"
                            alt="WS"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20   w-28 m-1 box2">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/I5.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="TS.png"
                            alt="TS"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20 w-28 m-1 box3">
                      <div className="">
                        <div className="justify-center flex">
                          <Image
                            loader={myLoader}
                            src="PD.png"
                            alt="PD"
                            width={60}
                            height={60}
                          />
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/6E.png" className="w-50 " /> */}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box4">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/UK.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="F8.png"
                            alt="F8"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20 w-28 m-1 box5">
                      <div className="">
                        <div className="justify-center flex">
                          <Image
                            loader={myLoader}
                            src="EY.png"
                            alt="EY"
                            width={60}
                            height={60}
                          />
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/SG.png" className="w-50 " /> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div>
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                    </div>
                    <div>
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                    </div>
                  </div>
                </Col>
              </>
            ) : (
              <></>
            )}

            {currency_Name_rd.currency_Name == "GBP" ? (
              <>
                {" "}
                <Col xl={9} xs={12}>
                  <div className="d-flex justify-content-center align-items-center loadanimate-before flex relative mb-3 h-16 w-full border-2 border-white animation-result">
                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/G8.png"  /> */}
                          <Image
                            loader={myLoader}
                            src="BA.png"
                            alt="BA"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box1">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/AI.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="EK.png"
                            alt="EK"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20   w-28 m-1 box2">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/I5.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="EC.png"
                            alt="EC"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20 w-28 m-1 box3">
                      <div className="">
                        <div className="justify-center flex">
                          <Image
                            loader={myLoader}
                            src="VS.png"
                            alt="VS"
                            width={60}
                            height={60}
                          />
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/6E.png" className="w-50 " /> */}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box4">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/UK.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="KL.png"
                            alt="KL"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20 w-28 m-1 box5">
                      <div className="">
                        <div className="justify-center flex">
                          <Image
                            loader={myLoader}
                            src="LS.png"
                            alt="LS"
                            width={60}
                            height={60}
                          />
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/SG.png" className="w-50 " /> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div>
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                    </div>
                    <div>
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                    </div>
                  </div>
                </Col>
              </>
            ) : (
              <></>
            )}

            {currency_Name_rd.currency_Name == "AUD" ? (
              <>
                {" "}
                <Col xl={9} xs={12}>
                  <div className="d-flex justify-content-center align-items-center loadanimate-before flex relative mb-3 h-16 w-full border-2 border-white animation-result">
                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/G8.png"  /> */}
                          <Image
                            loader={myLoader}
                            src="QF.png"
                            alt="QF"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box1">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/AI.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="JQ.png"
                            alt="JQ"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20   w-28 m-1 box2">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/I5.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="VA.png"
                            alt="VA"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20 w-28 m-1 box3">
                      <div className="">
                        <div className="justify-center flex">
                          <Image
                            loader={myLoader}
                            src="JQ.png"
                            alt="JQ"
                            width={60}
                            height={60}
                          />
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/6E.png" className="w-50 " /> */}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box4">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/UK.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="QF.png"
                            alt="QF"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20 w-28 m-1 box5">
                      <div className="">
                        <div className="justify-center flex">
                          <Image
                            loader={myLoader}
                            src="FP.png"
                            alt="FP"
                            width={60}
                            height={60}
                          />
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/SG.png" className="w-50 " /> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div>
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                    </div>
                    <div>
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                    </div>
                  </div>
                </Col>
              </>
            ) : (
              <></>
            )}

            {currency_Name_rd.currency_Name == "AED" ? (
              <>
                {" "}
                <Col xl={9} xs={12}>
                  <div className="d-flex justify-content-center align-items-center loadanimate-before flex relative mb-3 h-16 w-full border-2 border-white animation-result">
                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/G8.png"  /> */}
                          <Image
                            loader={myLoader}
                            src="QR.png"
                            alt="QR"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box1">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/AI.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="EK.png"
                            alt="EK"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20   w-28 m-1 box2">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/I5.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="LY.png"
                            alt="LY"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20 w-28 m-1 box3">
                      <div className="">
                        <div className="justify-center flex">
                          <Image
                            loader={myLoader}
                            src="EY.png"
                            alt="EY"
                            width={60}
                            height={60}
                          />
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/6E.png" className="w-50 " /> */}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box4">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/UK.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="SV.png"
                            alt="SV"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20 w-28 m-1 box5">
                      <div className="">
                        <div className="justify-center flex">
                          <Image
                            loader={myLoader}
                            src="ET.png"
                            alt="ET"
                            width={60}
                            height={60}
                          />
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/SG.png" className="w-50 " /> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div>
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                    </div>
                    <div>
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                    </div>
                  </div>
                </Col>
              </>
            ) : (
              <></>
            )}

            {currency_Name_rd.currency_Name == "EUR" ? (
              <>
                {" "}
                <Col xl={9} xs={12}>
                  <div className="d-flex justify-content-center align-items-center loadanimate-before flex relative mb-3 h-16 w-full border-2 border-white animation-result">
                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/G8.png"  /> */}
                          <Image
                            loader={myLoader}
                            src="FR.png"
                            alt="FR"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box1">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/AI.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="LH.png"
                            alt="LH"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20   w-28 m-1 box2">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/I5.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="SU.png"
                            alt="SU"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20 w-28 m-1 box3">
                      <div className="">
                        <div className="justify-center flex">
                          <Image
                            loader={myLoader}
                            src="TK.png"
                            alt="TK"
                            width={60}
                            height={60}
                          />
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/6E.png" className="w-50 " /> */}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative w-28 m-1 box4">
                      <div className="">
                        <div className="justify-center flex">
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/UK.png" className="w-50 " /> */}
                          <Image
                            loader={myLoader}
                            src="AF.png"
                            alt="AF"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  relative h-20 w-28 m-1 box5">
                      <div className="">
                        <div className="justify-center flex">
                          <Image
                            loader={myLoader}
                            src="EC.png"
                            alt="EC"
                            width={60}
                            height={60}
                          />
                          {/* <img src="https://www.travomint.com/resources/images/airline-logo/SG.png" className="w-50 " /> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div>
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                    </div>
                    <div>
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                      <Image src={skeleton} />
                    </div>
                  </div>
                </Col>
              </>
            ) : (
              <></>
            )}
          </Row>
        </Container>
      ) : (
        <>
          {Result.length === 0 ? (
            <Container>
              <Row>
                <Col xs={12} className="py-5">
                  <div className="result-Error text-center 2">
                    <div className="imgpl">
                      <Image src={plane} />
                    </div>
                   No flight available for this route. Please Check on different date.
                  </div>
                </Col>
              </Row>
            </Container>
          ) : (
            <>
              <Dom_Int_OneWay allData={Result} load={Load} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Result;
