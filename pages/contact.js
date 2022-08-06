import Image from "next/image";
import React, { useEffect, useState } from "react"; 
import Footer from "../components/Atom/Footer";
import Header from "../components/Atom/Header";
import Navs from "../components/Atom/Nav";
import TopNav from "../components/Atom/TopNav";
import contact from "../public/Image/contact1.png"; 
import Link from "next/link";
import Bread from "../components/Atom/Breadcrumb/bread";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideNavs from "../components/Atom/SideNav";

const Contact = () => {
const[first,setFirst]= useState("")
const[second,setSecond]= useState("")
const[email,setEmail]= useState("")
const[phone,setPhone]= useState("")
const[comment,setComment]= useState("")


// console.log(first,second,email,phone,comment)

  return (
    <>
      <Header />
      <SideNavs />
      {/* <div className="grid grid-cols-1 h-56" >
<div  style={{ 
      backgroundImage: `url(${banner2})` ,
      backgroundSize:'100%'
    }}>
</div>
</div> */}

      {/* <div className="bg-gray-200 px-40 font-bold text-black text-xl py-2">
    HOME / CONTACT US
</div> */}


      <Bread title="Contact Us" html={
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
            Contact Us
          </li>
        </>
      } />

      <div className="contact-classic">
        <Container>
          <Row>
            
            <Col xs={12} lg={7} xl={8}>
              <div className="loginbox-journey-2 p-0">
                <div className="w-100 form-contact-site">
                  <h3 className="text-2xl font-bold mb-4 title-dtcont mt-0">CONTACT FORM</h3>
                  <Row>
                    <Col xs={12} md={6} className="mb-3">
                      <label className="form-label formtrvel-in">First Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your First Name"
                        onChange={(e)=>setFirst(e.target.value)}
                      ></input>
                    </Col>

                    <Col xs={12} md={6} className="mb-3">
                      <label className="form-label formtrvel-in">Last Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Last Name"
                        onChange={(e)=>setSecond(e.target.value)}
                      ></input>
                    </Col>

                    <Col xs={12} md={6} className="mb-3">
                      <label className="form-label formtrvel-in">Phone No.*</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Phone No."
                        onChange={(e)=>setPhone(e.target.value)}
                      ></input>
                    </Col>

                    <Col xs={12} md={6} className="mb-3">
                      <label className="form-label formtrvel-in">E-Mail*</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Email"
                        onChange={(e)=>setEmail(e.target.value)}
                      ></input>
                    </Col>

                    <Col xs={12}>
                      <label className="form-label formtrvel-in">Your Comment*</label>
                      <textarea type="text" className="form-control"
                        placeholder="Enter Your Email" rows="4" cols="50"
                        onChange={(e)=>setComment(e.target.value)}></textarea>
                    </Col>

                    <Col xs={12} className="mt-4 text-right">
                     <div className="d-md-inline-block">
                     <button className="btn btn-siteorange contact shadow-0">
                     Submit
                      </button>
                     </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={5} xl={4}>
              <div className="contact-details w-100 mt-5 mt-lg-0">

                <div className="callwith-s">
                  <Image alt="logo" src={contact} className="rounded-xl" />
                </div>


                <div className="w-100 infodt px-3 pt-2 pb-4">
                  <h2 className="text-2xl font-bold mb-4 title-dtcont">
                  CONTACT DETAILS
                  </h2>


                  <div className="icon-box-wrapper d-flex w-100">
                    <div className="icon-wrapper">
                      <a className="icon-circled text-center">
                        <FontAwesomeIcon icon="fa-solid fa-phone" />
                      </a>
                    </div>
                    <div className="icon-text pl-3 pt-2">
                      <h5 className="icon-box-title font-semibold mb-1">Phone</h5>
                      <a className="content mb-1  text-dark d-inline-block mr-2" href="tel:+91-8010000200" target="_blank">+91-8010000200</a>
                      <div className="text-gray-500 text-sm font-300 d-inline-block">(INDIA)</div>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <hr className="hr-offphone my-3"></hr>

                  <div className="icon-box-wrapper d-flex">
                    <div className="icon-wrapper">
                      <a className="icon-circled text-center">
                        <FontAwesomeIcon icon="fa-solid fa-map-location-dot" />
                      </a>
                    </div>
                    <div className="icon-text pl-3 pt-2">
                      <h5 className="icon-box-title font-semibold mb-1">Address</h5>
                      <div className="content mb-1 text-dark">
                        B 44, Bhabha Marg, B Block, Sector 59, Noida, Uttar Pradesh
                        201301
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>


                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Navs />
      <Footer />
    </>
  );
};

export default Contact;
