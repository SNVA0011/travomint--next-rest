import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import confirmation from "../../../components/Animation/94433-green-success-confirmation.json";
import error from "../../../components/Animation/lf30_ERROR.json";
import Details from "../../../components/Animation/69042-details.json";
import moment from "moment";
import AirPortData from "../../../components/Sample_Data/AirPortData.json";
import { authCode, staging, testapi } from "../../../components/static/static";
import { useParams } from "react-router-dom";
import Mail from "../../../components/Atom/Mail";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";

const BookingID = (props) => {
  const { currency_Name_rd } = useSelector((state) => state.currency_Reducer);
  console.log("currency_Name_rd:", currency_Name_rd);
  const ConvertMinsToTime = ({ data }) => {
    let hours = Math.floor(data / 60);
    let minutes = data % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}h:${minutes}m`;
  };

  const urlcheck = useParams();

  const [bookingidNo, setBookingidno] = useState("");
  const [status, setStatus] = useState(true);
  const [data, setData] = useState([]);
  const [sts, Setsts] = useState(true);
  const navigate = useRouter();
  function getDataofStatus() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Method", "*");
    myHeaders.append("Access-Control-Allow-Header", "*");
    myHeaders.append("mode", "opaque");

    var raw = JSON.stringify({
      bookingId: props.dataBooking.bookingId,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${staging}/back-end/viewbookingById?authcode=${authCode}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result.response);
        Setsts(false);
        setStatus(false);
      });
  }

  const success = {
    loop: true,
    autoplay: true,
    animationData: confirmation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const failure = {
    loop: true,
    autoplay: true,
    animationData: error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const details = {
    loop: true,
    autoplay: true,
    animationData: Details,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    getDataofStatus();
  }, [props.para.BookingId]);

  return (
    <>
      <div className="Mail_transion">
        {data.length === 0 ? (
          <div className="details-lottie-div">
            <div className="details-lottie-seperation">
              <Lottie options={details} height={100} width={500} />
            </div>
            <div className="details-lottie-seperation">
              <Lottie options={details} height={100} width={500} />
            </div>
            <div className="details-lottie-seperation">
              <Lottie options={details} height={100} width={500} />
            </div>
            <div className="details-lottie-seperation">
              <Lottie options={details} height={100} width={500} />
            </div>
          </div>
        ) : (
          <>
            <div className="ticket-wrapper container-fluid">
              <div className="pnr-container">
                {data[0].bookingDetail.pnrConfirmation !== "" &&
                data[0].bookingDetail.pnrConfirmation !== "X" ? (
                  <Lottie options={success} height={100} width={100} />
                ) : (
                  <Lottie options={failure} height={100} width={100} />
                )}
                <p className="text-lg">
                  <b>PNR</b> :{" "}
                  {data[0].bookingDetail.pnrConfirmation !== ""
                    ? data[0].bookingDetail.pnrConfirmation
                    : "X"}
                </p>
                <div className="ticket-payment-info">
                  {/* ---------------------------------PNR AND BOOKING SUCCESS------------------------------- */}
                  {data[0].bookingDetail.pnrConfirmation !== "" && (
                    <>
                      {data[0].bookingDetail.bookingStatus === "TKTED" &&
                      data[0].paymentgateway &&
                      data[0].paymentgateway[0].status === "Success" ? (
                        <p>
                          Your booking is confirmed, Please wait our customer
                          agent will contact you soon. <br />
                          Your Booking Reference id is{" "}
                          <b className="text-lg">
                            {props.dataBooking.invoiceNo}
                          </b>
                          . <br />
                          Please use it for any further communication with us.
                        </p>
                      ) : null}
                    </>
                  )}
                  {/* ---------------------------------PNR AND BOOKING SUCCESS------------------------------- */}

                  {/* --------------------BOOKING STATUS  !=SUCCESS &PAYMENT SUCCESS------------------------------ */}
                  {data[0].bookingDetail.bookingStatus !== "TKTED" &&
                    data[0].paymentgateway.length == 1 &&
                    data[0].paymentgateway[0].status == "Success" && (
                      <p>
                        Your booking is confirmed and ticket is under process.{" "}
                        <br />
                        Our customer service will inform you about status. The
                        airline did not give a clear indication of the status of
                        this booking. If the booking succeeded, you will receive
                        an email confirmation from them shortly.
                        <br />
                        Please do not re-book the booking until our customer
                        service team would not informed you about current If in
                        doubt, please contact our help desk at{" "}
                        <b>+91-8010000200</b>
                        Please use it for any further communication with us.{" "}
                      </p>
                    )}
                  {/* --------------------BOOKING STATUS  !== SUCCESS &PAYMENT SUCCESS------------------------------ */}

                  {/* --------------------------------BOOKING PENDING or FAILURE AND PAYMENT FAILURE  ------------------------------ */}

                  {data[0].bookingDetail.bookingStatus != "TKTED" &&
                  data[0].paymentgateway.size > 1 &&
                  data[0].paymentgateway[0].status != "Success" ? (
                    <p>
                      Your booking is not confirmed due to payment failure.
                      <br />
                      Our customer service will inform you about the <br />
                      Please do not re-book the booking until our customer
                      service team would not informed you about current If in
                      doubt, please contact our help desk at{" "}
                      <b>+91-8010000200</b>. Your payment is failed from bank,
                      Please contact your bank. your booking is pending until
                      payment is not clear from the bank.
                      <br />
                      Your Booking Reference id is{" "}
                      <b className="text-lg">{props.dataBooking.invoiceNo}</b>
                      . <br />
                      Please use it for any further communication with us.
                    </p>
                  ) : (
                    ""
                  )}
                  {/* --------------------------------BOOKING PENDING or FAILURE AND PAYMENT FAILURE  ------------------------------ */}
                </div>
              </div>
            </div>

            <div className="flight-booking-Confirmation-div">
              <div>
                <span className="btn btn-siteorange">Flight Details</span>
              </div>
              {data[0].SectorDetail.map((item) => (
                <div className="departure-span">
                  <img
                    src={`https://www.travomint.com/resources/images/airline-logo/${item.airline}.png`}
                    className="airlineImage"
                  />
                  <div className="flightDetails">
                    <div>
                      <p>
                        <b>{item.fromDestination}</b>
                        {"        "}
                        {AirPortData.filter(
                          (fil) => fil.airportCode == item.fromDestination
                        ).map((name) => name.airportName)}
                      </p>
                    </div>
                    <div>
                      <p>
                        <b>
                          {moment(item.fromDateTime).format(
                            "dddd,DD/MM/yyyy hh:mm  a"
                          )}
                        </b>
                      </p>
                    </div>
                  </div>

                  <span className="text-xs text-black font-sans">
                    <ConvertMinsToTime data={item.eft} />
                  </span>
                  <div className="flightDetails">
                    <div>
                      <p>
                        <b>{item.toDestination}</b> {"        "}
                        {AirPortData.filter(
                          (fil) => fil.airportCode == item.fromDestination
                        ).map((name) => name.airportName)}
                      </p>
                    </div>
                    <p>
                      <b>
                        {" "}
                        {moment(item.fromDateTime).format(
                          "dddd, DD/MM/yyyy hh:mm  a"
                        )}
                      </b>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flight-booking-Confirmation-div">
              <div>
                <span className="btn btn-siteorange">Passesnger Details</span>
              </div>

              <div className="departure-span">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th>First Name</th>
                      <th>Middle Name</th>
                      <th>Last Name</th>
                      <th>DOB</th>
                      <th>Gender</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data[0].PassengerDetails.map((item) => (
                      <tr>
                        <th scope="row">{item.title}</th>
                        <td>{item.paxFirstName}</td>
                        <td>{item.paxMiddleName}</td>
                        <td>{item.paxLastName}</td>
                        <td> {moment(item.paxDob).format("MMMM Do YYYY")}</td>
                        <td> {item.paxType == 1 ? "MALE" : "FEMALE"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flight-booking-Confirmation-div">
              <div>
                <span className="btn btn-siteorange">Price Details</span>
              </div>
              <div className="price-container">
                <div className="price-container-key Price_list_mail_name">
                  <span>
                    {data[0].bookingDetail.adult} Traveller : Per Adult{" "}
                  </span>
                  <span>Flight Charges per adult</span>
                  <span>Taxes and Fees per adult</span>
                </div>
                <div className="price-container-key Price_list_mail_price">
                  <span>
                    {" "}
                    {data[0].currency}{" "}
                    {(data[0].FareDetail[0].adultFare +
                      data[0].FareDetail[0].adultMarkup +
                      data[0].FareDetail[0].adultTax) *
                      data[0].bookingDetail.adult}
                  </span>
                  {"  "}
                  <span>
                    {" "}
                    {data[0].currency} {data[0].FareDetail[0].adultFare}
                  </span>
                  {"  "}

                  <span>
                    {" "}
                    {data[0].currency}{" "}
                    {data[0].FareDetail[0].adultTax +
                      data[0].FareDetail[0].adultMarkup}
                  </span>
                </div>
                {data[0].bookingDetail.child !== 0 ? (
                  <>
                    <div className="price-container-key Price_list_mail_name ">
                      <span>
                        {data[0].bookingDetail.child} Traveller : Child{" "}
                      </span>
                      <span>Flight Charges per child</span>
                      <span>Taxes and Fees per child</span>
                    </div>
                    <div className="price-container-key Price_list_mail_price">
                      <span>
                        {" "}
                        {data[0].currency}{" "}
                        {(data[0].FareDetail[0].childFare +
                          data[0].FareDetail[0].childMarkup +
                          data[0].FareDetail[0].childTax) *
                          data[0].bookingDetail.child}
                      </span>
                      {"  "}
                      <span>
                        {" "}
                        {data[0].currency} {data[0].FareDetail[0].childFare}
                      </span>
                      {"  "}

                      <span>
                        {" "}
                        {data[0].currency}{" "}
                        {data[0].FareDetail[0].childTax +
                          data[0].FareDetail[0].childMarkup}
                      </span>
                    </div>
                  </>
                ) : (
                  " "
                )}
                {data[0].bookingDetail.infant !== 0 ? (
                  <>
                    <div className="price-container-key Price_list_mail_name">
                      <span>
                        {data[0].bookingDetail.infant} Traveller : Infant{" "}
                      </span>
                      <span>Flight Charges per infant</span>
                      <span>Taxes and Fees per infant</span>
                    </div>
                    <div className="price-container-key Price_list_mail_price">
                      <span>
                        {" "}
                        {data[0].currency}{" "}
                        {(data[0].FareDetail[0].infantFare +
                          data[0].FareDetail[0].infantMarkup +
                          data[0].FareDetail[0].infantTax) *
                          data[0].bookingDetail.infant}
                      </span>
                      {"  "}
                      <span>
                        {" "}
                        {data[0].currency} {data[0].FareDetail[0].infantFare}
                      </span>
                      {"  "}

                      <span>
                        {" "}
                        {data[0].currency}{" "}
                        {data[0].FareDetail[0].infantTax +
                          data[0].FareDetail[0].infantMarkup}
                      </span>
                    </div>
                  </>
                ) : (
                  "  "
                )}
              </div>
              <div className="price-container Grand_Total_Mail">
                <span>
                  <b> Grand Total </b>
                </span>
                <span>
                  {data[0].currency} {data[0].FareDetail[0].grandTotal}
                </span>
              </div>
              {/* <table className="table">
                <thead>
                  <tr>
                    <th scope="col">currency</th>
                    <th>Total fare</th>
                    <th>Total Tax</th>
                    <th>Total Markup</th>
                    <th>Total Pax</th>
                    <th>Convenience fee</th>
                    <th>Grand Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{data[0].currency}</th>
                    <td>
                      {data[0].FareDetail[0].adultFare +
                        data[0].FareDetail[0].childFare +
                        data[0].FareDetail[0].infantFare}
                    </td>
                    <td>
                      {data[0].FareDetail[0].adultTax +
                        data[0].FareDetail[0].childTax +
                        data[0].FareDetail[0].infantTax}
                    </td>
                    <td>
                      {data[0].FareDetail[0].adultMarkup +
                        data[0].FareDetail[0].childMarkup +
                        data[0].FareDetail[0].infantMarkup}
                    </td>
                    <td>
                      {data[0].bookingDetail.adult +
                        data[0].bookingDetail.child +
                        data[0].bookingDetail.infant}
                    </td>
                    <td> 250</td>
                    <td>{data[0].FareDetail[0].grandTotal}</td>
                  </tr>
                </tbody>
              </table> */}
              <Mail data={data} bookingidNo={props.dataBooking.invoiceNo} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default BookingID;

export async function getServerSideProps(context) {
  const { params } = context;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const options = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const res = await fetch(
    `${testapi}/getBookingMasterOrderIdVersion2?orderId=` +
      params.BookingId.split(";")[0],
    options
  );
  const dataBook = await res.text();
  return {
    props: {
      dataBooking: JSON.parse(dataBook),
      para: params,
    },
  };
}
