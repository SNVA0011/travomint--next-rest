import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
// import Enginebox from '../Molecules/Home/Enginebox';
// import BreadHero from '../component/BreadHero';
import { Button, Col, Row } from "react-bootstrap";
import Link from "next/link";
// import loading from "../Atoms/Image/load.gif"
// import ScrollAnimation from 'react-animate-on-scroll';
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Atom/Header";
import TopNav from "../components/Atom/TopNav";
import Footer from "../components/Atom/Footer";
import SideNavs from "../components/Atom/SideNav";

export default function Flights(props, pageValue, pageType) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const SendingPageType = (data) => {
    dispatch({
      type: SENDVALUES,
      payload: data,
    });
  };

  const myLoader = ({ src, width, quality }) => {
    return `https://www.travomint.com/resources/images/airline-logo/${src}.png`;
  };

  return (
    <div>
      <Head>
        <title>{`Get List of Top Flights/Airlines Worldwide | Travomint `}</title>
        <meta
          name="description"
          content={`With the help of Travomint passengers can easily search out the list of top best flights or airlines worldwide. Get the latest details related to prices & offers.`}
        />
        <meta
          name="keywords"
          content={`Top Flight, Top Airlines, Top Airways, list of airlines, list of domestic airlines, top international airlines`}
        />
        <link rel="canonical" href={`https://www.travomint.com/flights`} />
        <link rel="alternate" href={`https://www.travomint.com/flights`} />
      </Head>

      <div>
        <div className="blogadda">
          <Header />
          <SideNavs />
          {/* <BreadHero title="Flights" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link href="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Flights</li> </ul></>} /> */}
          <div className="basicdata container ">
            <h1>Best Flights Offer By: Travomint</h1>
            <hr />
            <p>
              We, at Travomint, are committed to serving millions of travel
              enthusiasts by collecting real-time flight data from more than 600
              airline companies and flight data aggregators. Our agency is
              driven by rich industry experience, high-end database, and sincere
              desire of making the travel industry more accessible. We aim in
              removing the barriers that are limiting the combination options
              available to the air travel aspirants.
              <br />
              <br />
              Travomint is actively engaged in offering a comprehensive range of
              services, including single flight booking service, group flight
              booking service, corporate flight booking service, direct flight
              booking service, multi-city flight booking service, last-minute
              flight booking service, and cheap flight booking service. We're
              associated with authentic payment gateways and continuously
              improving the user-friendliness of offered services. Our
              reservation experts, who are sufficiently trained, carry in-depth
              experience in ticket booking, ticket canceling, adding miles,
              adding special services, changing seat or flight, and ensuring
              cancellation refund.
              <br />
              <br />
              To do this job accurately and efficiently, our engineers have
              developed a technologically advanced ticket booking gateway. This
              multi-functional gateway was designed with the willingness to make
              the ticket and hotel booking process less time-consuming. We're
              enabling the globally spread travel aspirants in finding budget
              hotels, cheap cruises, highway-touching resorts, and local
              transport facilities. Additionally, we have introduced a helpline
              number that's reliable, receptive, and easy-to-access. Travomint
              customer care values each aspirant and promised to assist him/her
              throughout the year.
              <br />
              <br />
            </p>
          </div>

          <div className="container popular-destination blogaddalist full-w">
            <Container>
              <div className="top-title text-center pb-10">
                <h1>Popular Airlines</h1>
              </div>
              <br />

              {props.allflights.filter((items) => items.pageType === "Airline")
                ?.length > 0 ? (
                <Row>
                  {props.allflights
                    .filter((items) => items.pageType === "Airline")
                    .map((items, i) => (
                      <Col xs={12} md={4}>
                        <div className="blogaddalist-round">
                          <div className="blogaddalist-inner">
                            <Image
                              loader={myLoader}
                              src={items.pageValue.toUpperCase()}
                              alt=" author"
                              width={50}
                              height={50}
                              className="rounded"
                            />
                            <br />
                            <span className="h4 title">
                              {items.pageName}-{items.pageValue}
                            </span>
                            <hr className="mx-row-hr" />

                            <Link
                              className="float-right"
                              onClick={() => SendingPageType(items)}
                              href={`/flights/${items.url}-${items.pageValue}`}
                            >
                              <a className="btn btn-site ripple-effbtn btn-40">
                                {" "}
                                <span>Read More</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              ) : (
                "No items found !"
              )}
            </Container>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    contentId: "",
    pageType: "",
    pageValue: "",
    pageName: "",
    metaTitle: "",
    metaKeyword: "",
    metaDesc: "",
    otherMeta: "",
    dealCode: "",
    dealTitle: "",
    contentTitle: "",
    contentData: "",
    contentImage: "",
    siteId: "6",
    status: "",
    count: "",
    url: "",
    modifyBy: "",
    modifyDate: "",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const res = await fetch(
    "https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876",
    requestOptions
  );
  const json = await res.json();
  return {
    props: { allflights: json.response },
  };
}
