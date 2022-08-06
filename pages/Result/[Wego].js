import React, { useEffect, useState } from "react";
import logo from "../../public/Image/logo.png";

import { useRouter } from "next/router";
import AirportData from "../../components/Sample_Data/AirPortData.json";
import axios from "axios";
import moment from "moment";
import { AllData } from "../../components/Redux/ActionType";
import { useDispatch } from "react-redux";
import { authCode, skyscanner, testapi } from "../../components/static/static";

const Wego = () => {
  const [signIn, toggle] = React.useState(true);
  const navigate = useRouter();
  const dispatch = useDispatch();
  const [apiData, setApiData] = useState();
  const [error, setError] = useState("");
  const [resObj, setResObj] = useState("");

  var objdata = "";
  var dd = {};
  const WegoApi = async () => {
    var t = window.location.href;
    var st = t.split("?")[1];
    var tttt = st.split("&");

    for (var i = 0; i < tttt.length; i++) {
      dd[tttt[i].split("=")[0]] = tttt[i].split("=")[1];
    }

    var data = JSON.stringify({
      searchId: dd["key"],
    });
    let words = dd["key"];
    let res = words.split(":")[3];

    var apiURlbase = "";

    if (res === "INR") {
      apiURlbase =
        "http://sky.travomint.com/search/viewsearch?authcode=Trav3103s987876";
    } else {
      apiURlbase =
        "https://api.travomint.com/search/viewsearch?authcode=Trav3103s987876";
    }
    var config = {
      method: "POST",
      url: apiURlbase,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const apidatasky = await axios(config);
    const dataapisky = await apidatasky;

    if (dataapisky) {
      setApiData(dataapisky.data);

      if (dataapisky) {
        var Responce = dataapisky.data.response.map((item) =>
          item.traveloesSearch.map((items) => items)
        );

        objdata = Responce[0][0];
      }

      if (objdata) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const fromCity = objdata.froCity.split(")")[0];
        const sllitfromCity = fromCity.split("(")[1];

        //to city

        const toCity = objdata.toCity.split(")")[0];
        const sllittoCity = toCity.split("(")[1];

        // DepDate
        const depDate = moment(objdata.depDate).format("MM/DD/YYYY");
        const retDate = moment(objdata.retDate).format("MM/DD/YYYY");

        const conditionsegments =
          objdata.tripType === 1
            ? [
                {
                  originAirport: sllitfromCity,
                  destinationAirport: sllittoCity,
                  travelDate: depDate,
                },
              ]
            : [
                {
                  originAirport: sllitfromCity,
                  destinationAirport: sllittoCity,
                  travelDate: depDate,
                },
                {
                  originAirport: sllittoCity,
                  destinationAirport: sllitfromCity,
                  travelDate: retDate,
                },
              ];

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          searchID: objdata.searchId,
          client: 2,
          segment: conditionsegments,
          searchDirectFlight: false,
          flexibleSearch: false,
          tripType: objdata.tripType,
          adults: objdata.adults,
          child: objdata.child,
          infants: objdata.infants,
          infantsWs: objdata.infantsWs,
          cabinType: objdata.cabinType,
          airline: objdata.airline,
          currencyCode: objdata.currencyCode,
          siteId: objdata.siteId,
          source: objdata.source,
          media: objdata.media,
          sID: "",
          rID: "",
          locale: "en",
          isNearBy: false,
          limit: 300,
          pageValue: "search",
          media: objdata.media,
          media: objdata.media,
          userIP: objdata.userIp,
          serverIP: objdata.serverIp,
          device: objdata.device,
          browser: objdata.browser,
          userCountry: "IN",
          userSearch: true,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        const resData = await fetch(
          `${skyscanner}/Flights/GetFlightResult?authcode=${authCode}`,
          requestOptions
        );
        const dataRes = await resData.json();
        if (dataRes) {
          ApiFlightResult();

          // dd.resultid;
          // var outBondResult = {};
          // var inBondResult = {};
          // if (objdata.tripType === "1") {
          //   outBondResult = dataRes.flightResult.find(
          //     (item) => item.resultID === Number(dd.resultid)
          //   );
          // } else if (objdata.tripType === "2") {
          //   const outResult = dd.resultid.split(",")[0];
          //   const inResult = dd.resultid.split(",")[1];
          //   outBondResult = dataRes.flightResult.find(
          //     (item) => item.resultID === Number(outResult)
          //   );
          //   inBondResult = dataRes.flightResult.find(
          //     (item) => item.resultID === Number(inResult)
          //   );
          // }

          // const fromone = objdata.froCity.split("(")[1];
          // const fromtwo = fromone.split(")")[0];
          // const toone = objdata.toCity.split("(")[1];
          // const totwo = toone.split(")")[0];
          // const fromCode = AirportData.find(
          //   (item) => item.cityCode === fromtwo
          // );
          // const toCode = AirportData.find((item) => item.cityCode === totwo);

          // dispatch({
          //   type: AllData,
          //   payload: {
          //     AllFlight_data: dataRes,
          //     SelectedDatas: outBondResult,
          //     inBoundData: inBondResult,
          //     Objdata: {
          //       ArCountryCode: fromCode.countryCode,
          //       CountryCode: toCode.countryCode,
          //       adult: objdata.adults,
          //       arrival: totwo,
          //       children: objdata.child,
          //       class: objdata.cabinType,
          //       departure: fromtwo,
          //       endDates: retDate,
          //       infant: objdata.infants,
          //       login: true,
          //       nameClass: objdata.cabinType,
          //       singleDate: depDate,
          //       startDates: depDate,
          //       totalpassanger:
          //         objdata.adults + objdata.child + objdata.infants,
          //       tripType: objdata.tripType,
          //       currencyCode: objdata.currencyCode,
          //       source: objdata.source,
          //     },
          //     // Objdata: objdata,
          //   },
          // });
          // navigate.push("/flight/checkout");

          // navigate("/FareAvailabity", {
          //     //state: {
          //         flight_data: dataRes.flightResult[0],
          //         AllFlight_Data: dataRes,x
          //         Objdata: objdata,
          //     },
          // });
        } else {
        }
      } else {
      }
    } else {
    }
  };

  // var objdata = "";

  // if (apiData) {
  //   var Responce = apiData.response.map((item) =>
  //     item.traveloesSearch.map((items) => items)
  //   );
  //   // setResObj(Responce[0][0]);
  //   objdata = Responce[0][0];
  // }

  const ApiFlightResult = async () => {
    const fromCity = objdata.froCity.split(")")[0];
    const sllitfromCity = fromCity.split("(")[1];

    //to city

    const toCity = objdata.toCity.split(")")[0];
    const sllittoCity = toCity.split("(")[1];

    // DepDate
    const depDate = moment(objdata.depDate).format("MM/DD/YYYY");
    const retDate = moment(objdata.retDate).format("MM/DD/YYYY");

    const conditionsegments =
      objdata.tripType === "1"
        ? [
            {
              originAirport: sllitfromCity,
              destinationAirport: sllittoCity,
              travelDate: depDate,
            },
          ]
        : [
            {
              originAirport: sllitfromCity,
              destinationAirport: sllittoCity,
              travelDate: depDate,
            },
            {
              originAirport: sllittoCity,
              destinationAirport: sllitfromCity,
              travelDate: retDate,
            },
          ];

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      searchID: objdata.searchId,
      client: 2,
      segment: conditionsegments,
      searchDirectFlight: false,
      flexibleSearch: false,
      tripType: objdata.tripType,
      adults: objdata.adults,
      child: objdata.child,
      infants: objdata.infants,
      infantsWs: objdata.infantsWs,
      cabinType: objdata.cabinType,
      airline: objdata.airline,
      currencyCode: objdata.currencyCode,
      siteId: objdata.siteId,
      source: objdata.source,
      media: "online",
      sID: "",
      rID: "",
      locale: "en",
      isNearBy: false,
      limit: 300,
      pageValue: "META",
      page: "index",
      userIP: objdata.userIp,
      serverIP: objdata.serverIp,
      device: objdata.device,
      browser: objdata.browser,
      userCountry: "IN",
      userSearch: true,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const Alldata = await fetch(
      `${skyscanner}/Flights/GetFlightResult?authcode=${authCode}`,
      requestOptions
    );
    const resData = await Alldata.json();
    // .then((response) => response.json())
    if (resData) {
      if (resData.responsStatus.status !== 0) {
        var outBondResult = {};
        var inBondResult = {};
        if (objdata.tripType === "1") {
          outBondResult = resData.flightResult.find(
            (item) => item.resultID === Number(dd.resultid)
          );
        } else if (objdata.tripType === "2") {
          const outResult = dd.resultid.split(",")[0];
          const inResult = dd.resultid.split(",")[1];

          outBondResult = resData.flightResult.find(
            (item) => item.resultID === Number(outResult)
          );
          inBondResult = resData.flightResult.find(
            (item) => item.resultID === Number(inResult)
          );
        }

        const fromone = objdata.froCity.split("(")[1];
        const fromtwo = fromone.split(")")[0];
        const toone = objdata.toCity.split("(")[1];
        const totwo = toone.split(")")[0];
        const fromCode = AirportData.find((item) => item.cityCode === fromtwo);
        const toCode = AirportData.find((item) => item.cityCode === totwo);

        dispatch({
          type: AllData,
          payload: {
            AllFlight_data: resData,
            SelectedDatas: outBondResult,
            inBoundData: inBondResult,
            Objdata: {
              ArCountryCode: fromCode.countryCode,
              CountryCode: toCode.countryCode,
              adult: objdata.adults,
              arrival: totwo,
              children: objdata.child,
              class: objdata.cabinType,
              departure: fromtwo,
              endDates: retDate,
              infant: objdata.infants,
              login: true,
              nameClass: objdata.cabinType,
              singleDate: depDate,
              startDates: depDate,
              totalpassanger: objdata.adults + objdata.child + objdata.infants,
              tripType: objdata.tripType,
              currencyCode: objdata.currencyCode,
              source: objdata.source,
            },
            // Objdata: objdata,
          },
        });
        navigate.push("/flight/checkout");
      } else {
        alert("Result Not Found");
      }
    } else {
      alert("Result Not Found2");
    }
  };

  useEffect(() => {
    //  getFlightResult()
    WegoApi();
  }, []);

  return (
    <>
      {error === "SEE_OTHER" ? (
        <div className="height_100vh d-flex align-items-center justify-content-center">
          <div className="">
            <div className="row  col- d-flex align-items-center  justify-content-center bg-white">
              <div className="col-6 text-center">
                <img src={logo} className="err_logo-custom mb-4" width="80%" />
                <div>
                  <img
                    // src={Flight_Not_Found}
                    className="flight_not_found_pic"
                  />
                </div>
                <div>
                  <h2>Flight Not Found</h2>
                </div>
                <a href={`https://www.travomint.com/in`}>
                  <div className="go_back_btn">
                    <button>Go To Home</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="Travomint-wrapper d-flex align-items-center justify-content-center">
          <div id="container">
            <div id="left">
              <h1 id="welcome">Travomint</h1>
              <p id="lorem">We are travomint!</p>
            </div>
            <div id="right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                width="200.000000pt"
                height="163.000000pt"
                viewBox="0 0 200.000000 163.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,163.000000) scale(0.100000,-0.100000)"
                  fill="#F15B2F"
                  stroke="none"
                >
                  <path d="M15 1603 c22 -94 161 -257 264 -312 l59 -31 186 0 c207 0 249 -9 279 -59 15 -26 17 -72 17 -445 0 -466 -3 -446 76 -566 23 -36 61 -80 83 -98 36 -29 150 -92 165 -92 3 0 6 292 6 648 0 542 -2 657 -15 705 -30 117 -101 219 -178 256 -42 20 -57 21 -496 21 l-453 0 7 -27z" />
                  <path d="M1453 1588 c68 -68 107 -174 107 -289 0 -48 1 -50 23 -44 111 34 182 88 282 215 45 58 92 114 104 124 11 11 21 23 21 27 0 4 -131 8 -290 9 l-290 1 43 -43z" />
                  <path d="M1299 1453 c-63 -95 -65 -100 -61 -150 l4 -53 114 0 c132 0 125 -8 99 113 -13 63 -69 187 -85 187 -3 0 -36 -44 -71 -97z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Wego;
