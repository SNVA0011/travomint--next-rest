import React from "react";
import Collapse from "react-bootstrap/Collapse";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { currency } from "../../../components/Api/currency";
// import currency from "../../../components/Api/currency";

const RoundIntPricing = ({
  All_Flight_Data,
  fares,
  Objdata,
  discount,
  currencySign,
  HalfFlatDiscount,
  FlatDiscount,
  totalpassanger,
  PrecentTotleValue,
  value,
  valueprice,
  baggageProtValue,
  baggageProtValueprice,
  travelProtectionValue,
  travelProtection,
  totalpricedatas,
  nameForm,
  isCheckednew,
  handleClickEventApply,
}) => {
  const currencySign_filter = currency.find(
    (item) => item.currency_Name === currencySign
  );

  const currencySign_Logo = currencySign_filter.currency_Logo;

  return (
    <>
      <div className="sticky toprem-6">
        <div className=" text-gray-800 pb-4">
          <div className=" entercp-flp-1 grid grid-cols-1 mt-0 bg-gray-50 rounded-2xl ">
            <h3 className="button-cpheading d-flex justify-content-start align-items-center m-0">
              <i className="fa fa-credit-card text-blue-500"></i> &nbsp; PRICE
              DETAILS
            </h3>

            <div className="border-top p-3 np-3">
              <div className="grid grid-cols-4  right-pricedt-wrapper  right-pricedt-wrapper">
                <div className="col-span-3">
                  <p className="text-black font-bold pr-2 text-sm">
                    {All_Flight_Data.adults} Traveler(s) : Adult{" "}
                  </p>
                  <p className="text-sm  pb-2 mb-0 pr-2">
                    {" "}
                    Flight Charges per child{" "}
                  </p>
                  <p className="text-sm  pb-0 mb-2 mt-0 pr-2 ">
                    {" "}
                    Taxes & Fees per adult{" "}
                  </p>
                </div>
                <div className="right-pricedt text-right">
                  <p className="text-black font-bold text-sm text-right">
                    {" "}
                    {currencySign}
                    {(
                      (fares.adultFare + fares.adultTax + fares.adultMarkup) *
                      All_Flight_Data.adults
                    ).toFixed(2, 0)}
                  </p>
                  <p className="text-sm  pb-2 mb-0 text-right">
                    {" "}
                    {currencySign} {fares.adultFare.toFixed(2, 0)}
                  </p>
                  <p className="text-sm  pb-0 mb-2 mt-0 text-right">
                    {" "}
                    {currencySign}{" "}
                    {(fares.adultTax + fares.adultMarkup).toFixed(2, 0)}
                  </p>
                </div>
              </div>

              {All_Flight_Data.child !== 0 && (
                <div className="grid grid-cols-4 pt-3 mt-2 border-top childas-flp-4  right-pricedt-wrapper">
                  <div className="col-span-3">
                    <p className="text-black font-bold pr-2 text-sm">
                      {All_Flight_Data.child} Traveler(s) : Child{" "}
                    </p>
                    <p className="text-sm  pb-2 mb-0 pr-2">
                      {" "}
                      Flight Charges per Child{" "}
                    </p>
                    <p className="text-sm  pb-0 mb-2 mt-0 pr-2 ">
                      {" "}
                      Taxes & Fees per Child{" "}
                    </p>
                  </div>
                  <div className="right-pricedt text-right">
                    <p className="text-black font-bold text-sm text-right">
                      {" "}
                      {currencySign}
                      {(
                        (fares.childFare + fares.childTax + fares.childMarkup) *
                        All_Flight_Data.child
                      ).toFixed(2, 0)}
                    </p>
                    <p className="text-sm  pb-2 mb-0 text-right">
                      {" "}
                      {currencySign}
                      {fares.childFare.toFixed(2, 0)}
                    </p>
                    <p className="text-sm  pb-0 mb-2 mt-0 text-right ">
                      {" "}
                      {currencySign}{" "}
                      {(fares.childTax + fares.childMarkup).toFixed(2, 0)}
                    </p>
                  </div>
                </div>
              )}

              {All_Flight_Data.infants !== 0 && (
                <div className="grid grid-cols-4 pt-3 mt-2 border-top childas-flp-3  right-pricedt-wrapper">
                  <div className="col-span-3">
                    <p className="text-black font-bold pr-2 text-sm">
                      {All_Flight_Data.infants} Traveler(s) : Infant{" "}
                    </p>
                    <p className="text-sm  pb-2 mb-0 pr-2">
                      {" "}
                      Flight Charges per infant{" "}
                    </p>
                    <p className="text-sm  pb-0 mb-2 mt-0 pr-2 ">
                      {" "}
                      Taxes & Fees per infant{" "}
                    </p>
                  </div>
                  <div className="right-pricedt text-right">
                    <p className="text-black font-bold text-sm text-right">
                      {" "}
                      {currencySign}
                      {(
                        fares.infantFare +
                        fares.infantTax +
                        fares.infantMarkup
                      ).toFixed(2, 0)}
                    </p>
                    <p className="text-sm  pb-2 mb-0 text-right">
                      {" "}
                      {currencySign} {fares.infantFare.toFixed(2, 0)}
                    </p>
                    <p className="text-sm  pb-0 mb-2 mt-0 text-right ">
                      {" "}
                      {currencySign}
                      {(fares.infantTax + fares.infantMarkup).toFixed(2, 0)}
                    </p>
                  </div>
                </div>
              )}
              {Objdata.currencyCode === "INR" && (
                <div className="grid grid-cols-4 pt-2 convenience-ml-1">
                  <div className="col-span-3">
                    <p className="text-gray-800 font-semibold pr-2 text-sm">
                      Convenience Fees
                    </p>
                  </div>
                  <div className="">
                    <p className="text-black font-semibold text-sm text-right tracking-wide">
                      {currencySign}
                      {fares.convenienceFees * totalpassanger}
                    </p>
                  </div>
                </div>
              )}

              <Collapse in={value}>
                <div className="grid grid-cols-4  px-6 text-sm font-bold text-red-500">
                  <div className="col-span-3">Medical Charge</div>
                  <div className="px-1">
                    <p>
                      {currencySign}
                      {valueprice}
                    </p>
                  </div>
                </div>
              </Collapse>
              <Collapse in={baggageProtValue}>
                <div className="grid grid-cols-4  px-6 text-sm font-bold text-red-500">
                  <div className="col-span-3">Baggage Protection</div>
                  <div className="px-1">
                    <p>
                      {" "}
                      {currencySign}
                      {baggageProtValueprice}
                    </p>
                  </div>
                </div>
              </Collapse>
              <Collapse in={travelProtectionValue}>
                <div className="grid grid-cols-4  px-6 text-sm font-bold text-red-500">
                  <div className="col-span-3">Travel Protection</div>
                  <div className="px-1">
                    <p>
                      {" "}
                      {currencySign}
                      {travelProtection}
                    </p>
                  </div>
                </div>
              </Collapse>

              <div className="pri-3 grid grid-cols-5 mb-1 mt-3 down  p-3 d-flex align-items-center justify-content-between pr-3-row totalpr-insair">
                <div className="col-span-3 mb-0">
                  <p className="text-black mb-0 font-medium text-sm">
                    Total Price :{" "}
                  </p>
                </div>
                <div className="col-span-2 text-right mb-0">
                  <p className="text-black font-700 text-sm text-right tracking-wide m-0">
                    {currencySign} {totalpricedatas.toFixed(2, 0)}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 pt-3">
                <span className="font-light text-gray-800 text-sm leading-relaxed">
                  <strong className="font-600">NOTE:</strong> All Fares
                  displayed are quoted in INR and inclusive of base fare, taxes
                  and all fees Additional baggage fees may apply as per the
                  airline policies..
                </span>
              </div>

              {/* 
        <div className="grid grid-cols-1 hidden lg:block ">
          <div className=" pb-2 grid grid-cols-1 mt-3  up rounded-2xl ">
            <div className="grid grid-cols-1 text-left">
              <Disclosure defaultOpen="true">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between down border-2 w-full px-4 py-1 text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                      <span className="text-blue-500 font-bold text-xl">
                        Coupon Code
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-7 h-7 text-gray-900`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-2 pt-1  mt-1   rounded-2xl  pb-2 text-sm ">
                      <div className="grid grid-cols-8 pl-3 pr-4">
                        <div className="col-span-6">
                          <form ref={nameForm}>
                            <input
                              required
                              type="text"
                              name={"coupanCode"}
                              className="w-full mt-1 px-2 text-sm py-2  text-gray-900"
                              placeholder="Coupon Code"
                              value={isCheckednew}
                            />
                          </form>
                        </div>
                        <div className="col-span-2">
                          <button
                            className="btn btn-primary mt-1"
                            onClick={handleClickEventApply}
                          >
                            Apply
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-8 px-4 mt-2 gap-4">
                        <div className="col-span-7">
                          <input
                            type="radio"
                            className="mt-2"
                            name="fav_language"
                          />
                          <span className="text-sm pl-1 text-blue-600 font-bold font-sans">
                            {" "}
                            TRAVOHAPPY
                          </span>{" "}
                          <p className="text-xs pl-4">
                            FLAT{" "}
                            <span className="text-red-600 font-bold ">
                              {" "}
                              500 OFF
                            </span>{" "}
                            ON HDFC credit Card Only.
                          </p>
                        </div>
                        <div>
                          <span className="float-right font-sans">
                            <i className="fa fa-tags"></i>
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-8 px-4 gap-4">
                        <div className="col-span-7">
                          <input
                            type="radio"
                            className="mt-2"
                            name="fav_language"
                          />
                          <span className="text-sm pl-1 text-blue-600 font-bold font-sans">
                            {" "}
                            TRAVOHAPPY2k
                          </span>{" "}
                          <p className="text-xs pl-4">
                            FLAT{" "}
                            <span className="text-red-600 font-bold ">
                              {" "}
                              2000 OFF
                            </span>{" "}
                            ON DOMESTIC FLIGHT.
                          </p>
                        </div>
                        <div>
                          <span className="float-right font-sans">
                            <i className="fa fa-tags"></i>
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-8 px-4 gap-4">
                        <div className="col-span-7">
                          <input
                            type="radio"
                            className="mt-2"
                            name="fav_language"
                          />
                          <span className="text-sm pl-1 text-blue-600 font-bold font-sans">
                            {" "}
                            TRAVOHAPPY100
                          </span>{" "}
                          <p className="text-xs pl-4">
                            FLAT{" "}
                            <span className="text-red-600 font-bold ">
                              {" "}
                              100 OFF
                            </span>{" "}
                            ON DOMESTIC FLIGHT.
                          </p>
                        </div>
                        <div>
                          <span className="float-right font-sans">
                            <i className="fa fa-tags"></i>
                          </span>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoundIntPricing;
