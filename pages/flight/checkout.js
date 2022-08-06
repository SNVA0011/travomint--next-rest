import React, { useState, useRef, useEffect, useCallback } from "react";
import Footer from "../../components/Atom/Footer";
import Header from "../../components/Atom/Header";
import Head from "next/head";
import TopNav from "../../components/Atom/TopNav";
import { SelectedData } from "../../components/Feature/Action";
import First from "../../components/Molecule/FinalPage/First";
import Second from "../../components/Molecule/FinalPage/Second";
import Third from "../../components/Molecule/FinalPage/Third";
import Collapse from "react-bootstrap/Collapse";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import AirportData from "../../components/Sample_Data/AirPortData.json";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import FlightHeader from "../../components/Atom/FlightHeader";
import { GateWays } from "../../components/Redux/ActionType";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OneWayPricing from "./AllPricing/OneWayPricing";
import RoundIntPricing from "./AllPricing/RoundIntPricing";
import RoundDomPricing from "./AllPricing/RoundDomPricing";
import { authCode, switcher } from "../../components/static/static";
import { Button } from "react-bootstrap";
import {
  Elements,
  useElements,
  useStripe,
  CardElement,
} from "@stripe/react-stripe-js";

const Finalpage = (props) => {
  const [isCheckednew, setIsChecked] = useState("");
  const [applycoupan, setapplycoupan] = useState("");
  const nameForm = useRef(null);
  const GetData = useRouter();
  const dispatch = useDispatch();
  const [stripeKEY, setStripeKEY] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const { currency_Name_rd } = useSelector((item) => item.currency_Reducer);
  const { GateWaysValue } = useSelector((item) => item.gateWaysReducer);
  const { AllFlight_data, SelectedDatas, Objdata, inBoundData } = useSelector(
    (item) => item.flightResultData
  );

  const currencySign = Objdata.currencyCode;

  const All_Flight_Data = AllFlight_data;
  const Flight_Data = SelectedDatas;

  // const Objdata = JSON.parse(GetData.query.Objdata);
  const inBoundDATA = inBoundData;
  // const Objdata = useSelector(SelectedData);
  // const Objdatas = Objdata;
  // const searchObj = Objdata.source ? Objdata : Objdata;

  /* ----------------------------STIRPE-KEY----------------------------- */
  var fares;
  if (Objdata.tripType === 1 || Objdata.tripType === "1") {
    fares = Flight_Data.fare;
  } else {
    if (
      Objdata.ArCountryCode === "IN" &&
      Objdata.CountryCode === "IN" &&
      Objdata.currencyCode === "INR"
    ) {
      fares = {
        adultFare: inBoundData.fare.adultFare + Flight_Data.fare.adultFare,
        childFare: inBoundData.fare.childFare + Flight_Data.fare.childFare,
        infantFare: inBoundData.fare.infantFare + Flight_Data.fare.infantFare,
        infantWsFare:
          inBoundData.fare.infantWsFare + Flight_Data.fare.infantWsFare,
        adultTax: inBoundData.fare.adultTax + Flight_Data.fare.adultTax,
        childTax: inBoundData.fare.childTax + Flight_Data.fare.childTax,
        infantTax: inBoundData.fare.infantTax + Flight_Data.fare.infantTax,
        infantWsTax:
          inBoundData.fare.infantWsTax + Flight_Data.fare.infantWsTax,
        adultMarkup:
          inBoundData.fare.adultMarkup + Flight_Data.fare.adultMarkup,
        childMarkup:
          inBoundData.fare.childMarkup + Flight_Data.fare.childMarkup,
        infantMarkup:
          inBoundData.fare.infantMarkup + Flight_Data.fare.infantMarkup,
        infantWsMarkup:
          inBoundData.fare.infantWsMarkup + Flight_Data.fare.infantWsMarkup,
        bagFees: inBoundData.fare.bagFees + Flight_Data.fare.bagFees,
        grandTotal: inBoundData.fare.grandTotal + Flight_Data.fare.grandTotal,
        markupID: inBoundData.fare.markupID + Flight_Data.fare.markupID,
        markupType: "IN",
        totalMarkup:
          inBoundData.fare.totalMarkup + Flight_Data.fare.totalMarkup,
        grandOrgTotal:
          inBoundData.fare.grandOrgTotal + Flight_Data.fare.grandOrgTotal,
        baseFare: inBoundData.fare.baseFare + Flight_Data.fare.baseFare,
        totalTax: inBoundData.fare.totalTax + Flight_Data.fare.totalTax,
        YQTax: inBoundData.fare.YQTax + Flight_Data.fare.YQTax,
        OtherCharges:
          inBoundData.fare.OtherCharges + Flight_Data.fare.OtherCharges,
        offeredFare:
          inBoundData.fare.offeredFare + Flight_Data.fare.offeredFare,
        // ChargeBU: array_3,
        ServiceFee: inBoundData.fare.ServiceFee + Flight_Data.fare.ServiceFee,
        gstPrice: inBoundData.fare.gstPrice + Flight_Data.fare.gstPrice,
        convinenceFeeMeta:
          inBoundData.fare.convinenceFeeMeta +
          Flight_Data.fare.convinenceFeeMeta,
        convinenceFeeStatusMeta: "NO",
        convenienceFees:
          inBoundData.fare.convenienceFees + Flight_Data.fare.convenienceFees,
      };
    } else {
      // console.log("123");
      fares = Flight_Data.fare;
    }
  }

  // Static Var
  const agentMarkup = Objdata.source === "online" ? fares.convenienceFees : 410;

  const outBound = Flight_Data.outBound;
  const totalpassanger =
    All_Flight_Data.adults + All_Flight_Data.child + All_Flight_Data.infants;

  const handleClickEventApply = () => {
    const form = nameForm.current;
    alert(`${form["coupanCode"].value}`);
  };

  function onChangeValue(event) {
    setIsChecked(event.target.value);
  }

  const [state, setState] = useState("state");
  const [value, setValue] = useState(false);
  const [baggageProtValue, setBaggageProtValue] = useState(false);
  const [travelProtectionValue, setTravelProtectionValue] = useState(false);
  const [valueprice, setValueprice] = useState(0);
  const [baggageProtValueprice, setBaggageProtValueptice] = useState(0);
  const [travelProtection, setTravelProtection] = useState(0);
  const [stopValue, setStopValue] = useState(1);

  //NCM
  const [ncm, setNcm] = useState([]);
  const [ncmTrue, setNcmTrue] = useState("false");

  // Card
  const [discountWay, setDiscountWay] = useState("");
  const [discountValue, setDiscountValue] = useState("");
  const [activeGetWays, setActiveGetWays] = useState([]);
  const [showAllGateway, setShowAllGateway] = useState([]);

  const AdultCardValue = GateWaysValue.AdultValue * All_Flight_Data.adults;
  const ChildCardValue = GateWaysValue.ChildValue * All_Flight_Data.child;
  const PrecentTotleValue = AdultCardValue + ChildCardValue;
  const FlatTotleValue =
    GateWaysValue.FaltValue * (All_Flight_Data.adults + All_Flight_Data.child);
  var totalpricedatas = 0;

  var NcmDiscount = 0;

  if (ncmTrue === "true") {
    if (fares.grandOrgTotal && fares.offeredFare) {
      NcmDiscount = fares.offeredFare - fares.grandOrgTotal;
    }
  }

  if (Objdata.tripType === 2 || Objdata.tripType === "2") {
    if (currencySign === "INR") {
      totalpricedatas =
        fares.grandTotal +
        agentMarkup * totalpassanger +
        PrecentTotleValue +
        NcmDiscount +
        FlatTotleValue +
        valueprice +
        baggageProtValueprice +
        travelProtection;
      // fares.grandTotal + inBoundDATA.fare.grandTotal;
    } else {
      totalpricedatas =
        fares.grandTotal +
        valueprice +
        baggageProtValueprice +
        travelProtection;
    }
  } else {
    if (currencySign === "INR") {
      totalpricedatas =
        fares.grandTotal +
        fares.convenienceFees * totalpassanger +
        NcmDiscount +
        PrecentTotleValue +
        FlatTotleValue +
        valueprice +
        baggageProtValueprice +
        travelProtection;
    } else {
      totalpricedatas =
        fares.grandTotal +
        valueprice +
        baggageProtValueprice +
        travelProtection;
    }
  }

  const AllGateWays = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const getAll = await fetch(
      `${switcher}/gateway/showAllRunGateways?authcode=${authCode}`,
      requestOptions
    );

    const AllGetWays = await getAll.json();

    if (AllGetWays.baseResponse.status === 1) {
      const skyscannerdata = AllGetWays.response.filter(
        (item) => item.sourceMedia === Objdata.source
      );
      const activePaymentMethods = skyscannerdata.filter(
        (item) => item.gatewayStatus === "true"
      );

      setNcm(activePaymentMethods);

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({});

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const showAllGateways = await fetch(
        `${switcher}/gateway/showAllGateways?authcode=${authCode}`,
        requestOptions
      );
      const showAllGateway = await showAllGateways.json();
      if (showAllGateway.baseResponse.status == 1) {
        const showGateWayFilter = activePaymentMethods.map((items) =>
          showAllGateway.response.filter((item) => item.gid === items.gatewayId)
        );
        setShowAllGateway(showGateWayFilter);
      }

      // .then(response => response.text())
      // .then(result => console.log(result))
      // .catch(error => console.log('error', error));
      // }
    }
  };

  useEffect(() => {
    currencySign === "INR" && AllGateWays();
  }, []);

  var discount = fares.totalMarkup + NcmDiscount;
  if (
    GateWaysValue.ValueType === "PERCENT" ||
    GateWaysValue.ValueType === "percentage"
  ) {
    Objdata.source === "online"
      ? (discount = PrecentTotleValue + NcmDiscount)
      : (discount = fares.totalMarkup + PrecentTotleValue + NcmDiscount);
  } else if (
    GateWaysValue.ValueType === "FLAT" ||
    GateWaysValue.ValueType === "flat"
  ) {
    // discount = fares.totalMarkup + FlatTotleValue;
    Objdata.source === "online"
      ? (discount = FlatTotleValue + NcmDiscount)
      : (discount = fares.totalMarkup + FlatTotleValue + NcmDiscount);
  }

  var FlatDiscount = 0;
  var HalfFlatDiscount = 0;
  var childFlatDiscount = 0;
  var childHalfFlatDiscount = 0;

  if (
    GateWaysValue.ValueType === "FLAT" ||
    GateWaysValue.ValueType === "flat"
  ) {
    var HalfFlatDiscounts =
      discount / (All_Flight_Data.adults + All_Flight_Data.child);

    var childHalfFlatDiscounts =
      discount / (All_Flight_Data.adults + All_Flight_Data.child);

    HalfFlatDiscount = HalfFlatDiscounts * All_Flight_Data.adults;
    childHalfFlatDiscount = childHalfFlatDiscounts * All_Flight_Data.child;

    FlatDiscount = HalfFlatDiscount / All_Flight_Data.adults;
    childFlatDiscount = childHalfFlatDiscount / All_Flight_Data.child;
  }

  return (
    <>
      <Head>
        <title>
          Travomint- Travomint has been recognised as the {"'"}Prestigious Brand
          {"'"} 2020 - 21 by {"'"}The Economic Times{"'"}
        </title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <FlightHeader />
      <Header />
      <div className="flight-checkoutpage">
        <Container>
          <Row className="flex-xl-row-reverse">
            <Col xs={12} xl={5} xxl={4} className="mb-3 mb-xl-0">
              {Objdata.tripType === 2 || Objdata.tripType === "2" ? (
                <>
                  {Objdata.ArCountryCode !== "IN" &&
                  Objdata.CountryCode !== "IN" ? (
                    <>
                      <RoundIntPricing
                        Objdata={Objdata}
                        discount={discount}
                        All_Flight_Data={All_Flight_Data}
                        currencySign={currencySign}
                        fares={fares}
                        HalfFlatDiscount={HalfFlatDiscount}
                        FlatDiscount={FlatDiscount}
                        totalpassanger={totalpassanger}
                        PrecentTotleValue={PrecentTotleValue}
                        value={value}
                        valueprice={valueprice}
                        baggageProtValue={baggageProtValue}
                        baggageProtValueprice={baggageProtValueprice}
                        travelProtectionValue={travelProtectionValue}
                        travelProtection={travelProtection}
                        totalpricedatas={totalpricedatas}
                        nameForm={nameForm}
                        isCheckednew={isCheckednew}
                        handleClickEventApply={handleClickEventApply}
                      />
                    </>
                  ) : (
                    <RoundDomPricing
                      Objdata={Objdata}
                      discount={discount}
                      inBoundDATA={inBoundDATA}
                      All_Flight_Data={All_Flight_Data}
                      currencySign={currencySign}
                      fares={fares}
                      HalfFlatDiscount={HalfFlatDiscount}
                      FlatDiscount={FlatDiscount}
                      totalpassanger={totalpassanger}
                      PrecentTotleValue={PrecentTotleValue}
                      value={value}
                      valueprice={valueprice}
                      baggageProtValue={baggageProtValue}
                      baggageProtValueprice={baggageProtValueprice}
                      travelProtectionValue={travelProtectionValue}
                      travelProtection={travelProtection}
                      totalpricedatas={totalpricedatas}
                      nameForm={nameForm}
                      isCheckednew={isCheckednew}
                      handleClickEventApply={handleClickEventApply}
                      GateWaysValue={GateWaysValue}
                      childFlatDiscount={childFlatDiscount}
                      childHalfFlatDiscount={childHalfFlatDiscount}
                      agentMarkup={agentMarkup}
                    />
                  )}
                </>
              ) : (
                <OneWayPricing
                  Objdata={Objdata}
                  discount={discount}
                  All_Flight_Data={All_Flight_Data}
                  currencySign={currencySign}
                  fares={fares}
                  HalfFlatDiscount={HalfFlatDiscount}
                  FlatDiscount={FlatDiscount}
                  totalpassanger={totalpassanger}
                  PrecentTotleValue={PrecentTotleValue}
                  value={value}
                  valueprice={valueprice}
                  baggageProtValue={baggageProtValue}
                  baggageProtValueprice={baggageProtValueprice}
                  travelProtectionValue={travelProtectionValue}
                  travelProtection={travelProtection}
                  totalpricedatas={totalpricedatas}
                  nameForm={nameForm}
                  isCheckednew={isCheckednew}
                  handleClickEventApply={handleClickEventApply}
                  GateWaysValue={GateWaysValue}
                  childFlatDiscount={childFlatDiscount}
                  childHalfFlatDiscount={childHalfFlatDiscount}
                />
              )}
            </Col>

            <Col xs={12} xl={7} xxl={8}>
              <div className="W-100">
                <First
                  allflightdata={All_Flight_Data}
                  flightdata={Flight_Data}
                  inBoundData={inBoundDATA}
                  data={Objdata}
                />
                <Second
                  setValue={setValue}
                  setBaggageProtValue={setBaggageProtValue}
                  allflightdata={All_Flight_Data}
                  flightdata={Flight_Data}
                  totalpricedata={totalpricedatas}
                  inBoundData={inBoundDATA}
                  setValueprice={setValueprice}
                  setBaggageProtValueptice={setBaggageProtValueptice}
                  setTravelProtectionValue={setTravelProtectionValue}
                  setTravelProtection={setTravelProtection}
                  data={Objdata}
                  showAllGateway={showAllGateway}
                  setDiscountWay={setDiscountWay}
                  setDiscountValue={setDiscountValue}
                  setStopValue={setStopValue}
                  ncm={ncm}
                  setNcmTrue={setNcmTrue}
                />
                <Third />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};
export default Finalpage;
/* 
 const stripeKey = async () => {
    fetch("https://www.travomint.com/stripe-key", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(function (result) {
        return result.json();
      })
      .then(function (data) {
        console.log(data);
        return setStripeKEY(data.publishablekey);
      })
      .then(function ({ stripe, card, clientSecret }) {
        pay(stripe, card, clientSecret);
      });
  }; */
