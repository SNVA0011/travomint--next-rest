import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { authCode, cms_trav } from "../components/static/static";
import completed_booking_bg from "../public/Image/completed_booking_bg.png";
import two_way from "../public/Image/two_way.png";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Atom/Header";
import TopNav from "../components/Atom/TopNav";
import loaders from "../public/Image/load.gif";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SideNavs from "../components/Atom/SideNav";

const Mytrip = () => {
  const [load, setLoading] = useState(true);
  const [Mytip, setMytip] = useState([]);
  const [tripDetails, setTripDetails] = useState({});
  const [tripDetailsload, setTripDetailsLoading] = useState(true);

  const navigate = useRouter();
  const { status, user_id, user_name, user_email, mobile } = useSelector(
    (state) => state.auth
  );

  const findbooking = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      siteId: "All",
      bookingType: "All",
      productType: "0",
      checkTkt: true,
      emailId: user_email, //"chetans63@gmail.com"
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log("requestOptions", requestOptions);
    const apiData = await fetch(
      `${cms_trav}/back-end/findbooking?authcode=${authCode}`,
      requestOptions
    );

    const data = await apiData.json();
    if (data.baseResponse.status === 1) {
      setMytip(data);
      setLoading(false);
    } else {
      setMytip(data);
      setLoading(false);
    }
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    if (status === 0) {
      navigate.push("/");
    } else {
      findbooking();
    }
  }, []);

  const viewbooking = (item) => {
    var axios = require("axios");
    var data = JSON.stringify({
      bookingId: item.invoiceNum,
    });

    var config = {
      method: "post",
      url: "http://staging.nobelmail.net/back-end/viewbookingById?authcode=Trav3103s987876",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setTripDetails(JSON.stringify(response.data));
        setTripDetailsLoading(false);
        handleShow();
      })
      .catch(function (error) {
        console.log("error");
      });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <SideNavs className="" />
      {load ? (
        <>
          {" "}
          <Image src={loaders} width={540} height={260} />
        </>
      ) : (
        <>
          <div className="mt-5">
            <div className="container">
              <div className="upcomming_box_1">
                <div className="upcomming_inner">
                  <div className="row">
                    <div className="upcome_content col-lg-12">
                      <h4>Looks empty, you{"'"}ve no cancelled bookings.</h4>
                      <p>
                        When you book a trip, you will see your itinerary here.
                      </p>
                      <Link href="/">PLAN A TRIP</Link>
                    </div>
                    <div className="col-md-12"></div>
                  </div>
                </div>
              </div>
              <div className="upcomming_box_2">
                <div className="upcomming_inner">
                  <div className="row">
                    <div className="upcome_content col-lg-12">
                      <h4>Looks empty, you{"'"}ve no cancelled bookings.</h4>
                      <p>Great! Looks like you{"'"}ve no cancelled bookings.</p>
                      <Link href="/">PLAN A TRIP</Link>
                    </div>
                    <div className="col-md-12"></div>
                  </div>
                </div>
              </div>

              <div className="upcomming_box_3" id="ucome_event_3">
                <div className="upcomming_inner3">
                  <div className="booking_complete">
                    <div className="complete_booking_text">
                      <h4>Completed Bookings</h4>
                      {Mytip.baseResponse.status === 1 && (
                        <p>Your Completed booking</p>
                      )}
                    </div>
                    <h2>{Mytip.baseResponse.messege}</h2>
                  </div>

                  {Mytip.response.map((item, i) => {
                    return (
                      <div key={i}>
                        <div className="booking_deatail_box">
                          <div className="b_flight_to_form_hdr">
                            <div className="b_flight_between">
                              <div className="b_flight_from">
                                <h3>
                                  <span>{item.froCity}</span>
                                  <span>
                                    <Image src={two_way} />
                                  </span>
                                  <span>{item.toCity}</span>
                                </h3>
                                <p className="b_fligt_info_c">
                                  <span>{item.bookingStatus}</span>
                                  <span>
                                    {item.tripType === "RT"
                                      ? "Round Trip FlightBooking"
                                      : "One Way FlightBooking"}
                                  </span>
                                  <span>Booking ID - {item.orderNum}</span>
                                </p>
                              </div>
                              <div
                                className="b_flight_manage"
                                // onClick={() => viewbooking(item)}
                              >
                                VIEW &amp; MANAGE BOOKING
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      {tripDetailsload ? (
                        <>
                          <Image src={loaders} width={540} height={260} />
                        </>
                      ) : (
                        <>
                          {tripDetails.response.map((items, index) => {
                            return (
                              <div key={index}>
                                {/* <div>{items.bookingDetail.bookingId}</div> */}
                              </div>
                            );
                          })}
                        </>
                      )}
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Mytrip;
