import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TopNav from "../components/Atom/TopNav"
import Header from "../components/Atom/Header";
import Footer from "../components/Atom/Footer";
import blogs1 from "../public/Image/pr_news.svg";
import blogs2 from "../public/Image/blogs2.jpg";
import best from "../public/Image/best.png";
import easy from "../public/Image/easy.png";
import twenty from "../public/Image/24.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { authCode, cms_trav } from "../components/static/static";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bread from "../components/Atom/Breadcrumb/bread";
import moment from "moment";
import Head from "next/head";
import SideNavs from "../components/Atom/SideNav";



const Blogs = (props) => {
  const path = "https://www.travomint.com";


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const myLoader = ({ src, width, quality }) => {
    return `https://www.travomint.com//resources/images/blog/${src}?w=${width}&q=${quality || 75}`;
  };



  return (
    <>
     <Head >
     <title>{`Travomint in Media | Latest Published Media Coverage `}</title>
          <meta name="description" content={`Get the latest updates and events by Travomint published in the media section. Get in touch for all the latest information and many more exciting original information.`} />
          <meta name="keywords" content={``} />
           <link rel="canonical" href={`https://www.travomint.com/media`} />
           <link rel="alternate" href={`https://www.travomint.com/media`} />

        </Head>
      <Header />
      <SideNavs />

      <Bread title="Media" html={
        <>
          <li className="d-inline-block align-middle">
            <Link href="/">
              <a>
                <FontAwesomeIcon icon="fa-solid fa-house" className="mr-2" />
                Home</a>
            </Link>
          </li>
          <li className="d-inline-block align-middle mx-3 opacity-50 text-sm">
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </li>
          <li className="d-inline-block align-middle active text-white" aria-current="page">
            Media
          </li>
        </>
      } />

      <div className="themepy-spacing inmedia-classic">
        <Container>
          <Row>
            <Col xs={12} lg={4} xxl={3} className="Travel-Recent">
              <div className="bg-gray-50 rounded-xl rounded-xl mb-4 px-2 border inmediacre-wrapper">
                <div className="grid grid-cols-1 px-3 py-3">
                  <div className="flex justify-center w-full text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                    <span className="text-lg font-bold ">IN MEDIA</span>
                  </div>
                </div>
              
              <div className="inmediacre-body">
                {props.singleblog.slice(0, 10).map((items, i) => (
                  <>
                    <Link
                      href={items.titleUrl}> 
                      <a className="d-flex p-2 rounded-xl w-full bg-white mb-2 inmediacre-a">
                        <div className="inmediacre-a-img">
                          <Image src={blogs1} className="rounded-l-lg" width={85} height={100}/>
                        </div>
                        <div className="col-span-2 pt-2 pl-3">
                          <span className="text-xs font-semibold text-gray-500 mb-1 d-block">
                            <span className="date">{moment(items.posttime).format("DD").toString()}</span>
                            <span className="month">{moment(items.posttime).format("MMM").toString()}, </span>
                            <span className="year">{moment(items.posttime).format("YYYY").toString()}</span>
                          </span>
                          <h4 className="text-sm font-medium text-black mb-0 inmediacre-a-title">{items.title}</h4>
                        </div>
                      </a>

                    </Link>
                  </>
                ))} 
                </div>
          
              </div>

              <div className="border rounded-xl rounded-xl p-2 whych-trvtrip mt-4 mt-lg-0 mb-5 mb-lg-0">
                <div className="w-100">
                  <div className="bg-orange-500 text-white px-2 py-3 text-center text-xl rounded">WHY CHOOSE TRAVOMINT</div>
                  <div>
                    <div className="text-center p-3">
                      <Image src={best} className="" width={60} height={60} />
                      <p className="mb-0 font-bold">Hand Picked Deals</p>
                      <span className="text-sm font-medium">Find our low price to destinations worldwide.</span>
                    </div>
                    <div className="text-center p-3">
                      <Image src={easy} className="" width={60} height={45} />
                      <p className="mb-0 font-bold">Easy Booking</p>
                      <span className="text-sm font-medium">Search, select and save - the fastest way to book your trip.</span>
                    </div>
                    <div className="text-center p-3">
                      <Image src={twenty} className="" width={60} height={60} />
                      <p className="mb-0 font-bold">24/7 Customer Care</p>
                      <span className="text-sm font-medium">Get award-winning service and special deals by calling<br></br>
                      <a href="tel:+91-8010000200" target={'_blank'}>+91-8010000200</a>
                      </span>
                    </div>
                  </div>
                </div>
                </div>

            </Col>
            <Col xs={12} lg={8} xxl={9}>

              {props.singleblog.map((items, i) => (
                <>
                  <div className="card-blogitem">
                    <Row>
                      <Col xs={12} md={4} lg={5} xxl={4}>
                        <a
                          className="rounded-2xl overflow-hidden d-block relative card-blogitem-img"
                          href={`${items.titleUrl}`}
                        >
                          <div className="h-100 img-sh">
                            <Image src={blogs2} alt={items.title} layout="fill" />
                          </div>
                          <div className="date-asv-blog absolute">
                            <span className="date d-block">{moment(items.posttime).format("DD").toString()}</span>
                            <span className="month">{moment(items.posttime).format("MMM").toString()}, </span>
                            <span className="year">{moment(items.posttime).format("YYYY").toString()}</span>
                          </div>
                        </a>
                      </Col>
                      <Col xs={12} md={8} lg={7} xxl={8}>
                        <div className="blogaddalist-inner travo-card  text-left mt-2 mt-md-1 relative">
                          <a
                            className="h4 title font-bold text-blue-600 travo-h3-link"
                            href={`${items.titleUrl}`}
                          >
                            <h3 className="text-lg travo-h3">
                              {" "}
                              {items.title}
                            </h3>
                          </a>
                          <div className="text-sm-15 mb-0" dangerouslySetInnerHTML={{
                            __html: items.content,
                          }}></div>
                        </div>
                      </Col>
                    </Row>
                  </div>

                </>
              ))}
            </Col>
          </Row>



        </Container>
      </div>



      <Footer />
    </>
  );
};

export default Blogs;

export async function getServerSideProps() {
  // single blogDetail
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id": "",
    "title": "",
    "titleUrl": "",
    "content": "",
    "description": "",
    "keywords": "",
    "posttime": "",
    "status": "Active",
    "heading": "",
    "categoryName": "",
    "siteId": "6",
    "pageType": "News",
    "extraTag": ""
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const res = await fetch(
    `${cms_trav}/news-article/showNAdata?authcode=${authCode}`,
    requestOptions
  );
  const onejson = await res.json();

  return {
    props: {
      singleblog: onejson.response,
    },
  };
}

