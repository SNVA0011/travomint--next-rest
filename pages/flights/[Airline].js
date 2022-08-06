import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Link from "next/link";
// import { useRouter } from 'next/router';
// import Footer from '../../component/Footer';
// import Navbar from "../../component/Navbar"
// import BreadHero from '../../component/BreadHero';
import Head from "next/head";
import Footer from "../../components/Atom/Footer";
import TopNav from "../../components/Atom/TopNav";
import Header from "../../components/Atom/Header";
import FullEngine from "../../components/Molecule/Flight/FullEngine";
import SideNavs from "../../components/Atom/SideNav";

export default function Airline(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>{props.flight[0].metaTitle}</title>
        <meta name="description" content={props.flight[0].metaDesc} />
        <meta name="keywords" content={props.flight[0].metaKeyword} />
        <link
          rel="canonical"
          href={`https://www.travomint.com/flights/${props.flight[0].url}-${props.flight[0].pageValue}`}
        />
        <link
          rel="alternate"
          href={`https://www.travomint.com/flights/${props.flight[0].url}-${props.flight[0].pageValue}`}
        />
      </Head>
      {/* <Navbar /> */}

      <Header />
      <SideNavs />

      <div className="blogadda py-10">
        {/* <BreadHero title="Flights" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link href="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page"> <Link href="/flights"> Flights </Link></li> <li className='breadcrumb-item active' aria-current="page">{props.flight[0].metaTitle}</li> </ul></>} /> */}
        <FullEngine />
        <div className="popular-destination blogaddalist details full-w">
          <Container>
            {props.flight.map((items, i) => (
              <div className="blogaddalist-round">
                <div className="blogaddalist-inner">
                  <div className="blog-inner-box2">
                    <p
                      dangerouslySetInnerHTML={{ __html: items.contentData }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Container>
        </div>
      </div>

      <Footer />
      {/* <Footer /> */}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  var cityname = params.Airline.split("-")[2];
  let actualURLParts = params.Airline.split("-");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    contentId: "",
    pageType: "Airline",
    pageValue: cityname,
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
    url: actualURLParts[0] + "-" + actualURLParts[1],
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
    "https://cms.travomint.com/travoles-content/showcontent?authcode=Trav3103s987876",
    requestOptions
  );
  const json = await res.json();
  return {
    props: { flight: json.response },
  };
}
