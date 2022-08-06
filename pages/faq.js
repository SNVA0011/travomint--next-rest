import Image from "next/image";
import React, { useEffect } from "react";
import Footer from "../components/Atom/Footer";
import Header from "../components/Atom/Header";
import Navs from "../components/Atom/Nav";
import TopNav from "../components/Atom/TopNav";
import Bread from "../components/Atom/Breadcrumb/bread";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import SideNavs from "../components/Atom/SideNav";
const faq = () => {
  return (
    <>
      <Header />

      <SideNavs />

      <Bread title="FAQ" html={
        <>
          <li className="d-inline-block align-middle">
            <Link href="/">
              <a>
                <FontAwesomeIcon icon="fa-solid fa-house" className="mr-2" />
                Home
              </a>
            </Link>
          </li>
          <li className="d-inline-block align-middle mx-3 opacity-50 text-sm">
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </li>
          <li className="d-inline-block align-middle active text-white" aria-current="page">
          FAQ
          </li>
        </>
      } />

      <Container>
        <div className="themepy-spacing">
          <div className="faq-classic">
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="count-fq">1</span>
                  <span className="pr-2"> What is Unique in Travomint (SNVA LLC) Booking Engine?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm">
                    Shopping for Airfares is not a herculean task for the travelers once they use Travomint (SNVA LLC) Booking Engine for this purpose. There is a wide variety for the consumers in the marketplace which would suit their needs as well as requirements. Buying an Airline ticket is just a child{"'"}s play when you settle down to book your tickets.
                    <br /><br />
                    Travomint (SNVA LLC), with its easy interface, lets the customers search and then purchase any flight as per their itinerary. The services offered by Travomint (SNVA LLC) is clear and do not have any hidden priority. There are a large number of airlines sites and travel sites which are available and the bulk tickets and consolidator tickets are not accessible by the consumers. Travomint (SNVA LLC) does it work perfectly by not only searching each and every site of the world, but also by searching other airfare engines, 125 consolidators, and mega travel and airline websites of the world within a few seconds.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                <span className="count-fq">2</span>
                <span className="pr-2"> What exactly is Bulk airline ticket or Consolidator?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm">
                    <strong className="text-bluefaq">Ans:</strong>  The Consolidator Airline tickets are the type of discounted fares which are sold by innumerable major airlines to assist in filling the seats. These tickets are just below the low published fare which is available directly through an airline company. This company has as many as 2,000,000 consolidator fares from as many as 60 airlines.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                <span className="count-fq">3</span>
                <span className="pr-2"> How to Book a Ticket from Travomint (SNVA LLC)?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong>  So how to book a flight ticket from Travomint (SNVA LLC)? Well, you only need to enter the departure as well as arrival information in the particular space by visiting the website of Travomint (SNVA LLC). You can use the internet booking engine to perform an extensive search of the fares in the database of Travomint (SNVA LLC) and on the sites of the major airlines. Now you need to choose the flights which exactly match your travel plans and also complete your purchase by filling the required information. Once you are done with your purchase, then you will receive an Email ticket within a single day. When you aboard the plane, then a seat waits for you. Flights are booked as well as confirmed once you will receive a confirmation number through the email. You can also confirm your seat and reservation with the airline also.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                <span className="count-fq">4</span>
                <span className="pr-2"> How Can I Buy Tickets?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong> With the help of online booking engine of the company, you won{"'"}t have any problem in reserving and purchasing your tickets. It is the most advanced booking engine of the world and handles a number of bookings per year. The online booking engine lets you book your ticket 24/7 which is of much help to you.</p>
                  <p className="text-gray-500 text-sm">
                    You can also contact one of the numbers below for purchasing the tickets with one of our experienced travel consultants.
                  </p>
                  <h3 className="mt-4 font-700 h5 text-gray-600">Call US </h3>
                  <hr className="hr-offphone my-2"></hr>
                  <p className="text-gray-500 text-sm">USA and Canada Phone: +91-8010000200 Hours (EST): Mon-Sun:9 am to 9 pm Email:support@travomint.com, Travomint (SNVA LLC).com
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                <span className="count-fq">5</span>
                <span className="pr-2"> What is an E-ticket?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong> An electronic ticket is referred to as the paperless ticket. You will be received a confirmation number through your email which you can use while performing a check-in the airport along with the photo ID for receiving the boarding pass. The airlines issue the e-tickets to the travelers which are the most secure way to send the flight related information. You should not lose your e-ticket at this is your confirmation number as well as photo ID. In the circumstances when you forget your confirmation number, providing your flight number as well as the flight name will be good for you.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                <span className="count-fq">6</span>
                <span className="pr-2"> If you buy an e-ticket what you will get as a proof?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong> Travelers who purchase the e-tickets will be received a confirmation number as well as e-ticket through an e-mail. The ones who receive this confirmation number, then he can present that number at the check- in process at the airport along with the proper identification.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                <span className="count-fq">7</span>
                <span className="pr-2"> What Payment Forms We Accept?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong>  Travomint (SNVA LLC) accepts all types of cards such as Discover Cards, American Express, Master and Visa Credit/Debit cards, bank transfers as well as cash deposits in lieu of the services provided by us.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                <span className="count-fq">8</span>
                <span className="pr-2"> When Will I Receive My Ticket from Travomint (SNVA LLC)?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong>  You will get your e-tickets within one or two days. In the rare cases when the airline can{"'"}t offer the e- ticket then you will get a paper ticket from us. Our executives will start calling the travelers on their contact numbers or sending an email to their email addresses once the paper ticket issuance process is started. We also confirm the delivery address from you and then your tickets will be delivered through Fed Ex.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                <span className="count-fq">9</span>
                <span className="pr-2"> Is it Mandatory to Register before I buy Airline tickets from Travomint (SNVA LLC)?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong>  You won{"'"}t require passwords and registration for searching the fares or to purchase as well as reserve fares on the company. All the information is organized with the help of a secure server so that you can stay safe while entering the personal information. However, this information won{"'"}t be used for any kind of marketing as well as sales purposes.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="110">
                <Accordion.Header>
                <span className="count-fq">10</span>
                <span className="pr-2"> What are the Required things to Know before I buy airline tickets from Travomint (SNVA LLC)?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong>  All types of cards are accepted in Travomint (SNVA LLC) such as MasterCard, VISA credit cards, Discover, American Express etc. You will have to pay in US Dollars  to buy airline tickets. Once you pay through a credit card from any country, then the credit card firm will make a conversion to the US Dollars  from your local currency., If you are looking for last minute flight booking services, then call the call center right away. You can change the international reservations through a huge airline penalty once it is confirmed.</p>
                  <p className="text-gray-500 text-sm">International Consolidator Tickets are said to be Non-Refundable. Your tickets are said to be non- refundable and non-changeable from the first day of your travel. If you are willing to make any schedule changes, then it is made before the original date of departure. To ensure the security of the credit card, any kind of reservation is made against the exact name of the traveler and no any nicknames are used here. In international traveling cases, the name which is on your passport should be there in the name of reservation.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="111">
                <Accordion.Header>
                <span className="count-fq">11</span>
                <span className="pr-2"> Whom to Call for Help while I am traveling?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong>  Once your journey is started, then it is always advisable to connect with the Airlines for any type of service request. If you are willing to make any changes in your travel plan and dates, then just get in touch with any of our travel consultants over the phone which can make a change in the reservation.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="112">
                <Accordion.Header>
                <span className="count-fq">12</span>
                <span className="pr-2"> Why I have multiple charges on the credit card on Travomint (SNVA LLC)?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong>  This happens when multiple passengers or airlines book the reservation. You will get to see a particular charge for each ticket which is processed separately. Any tax, fees or any additional service may show separate charges along with the Travomint (SNVA LLC).com description. When these charges are added together, then these charges are totaled the amount as per the price which was quoted.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="113">
                <Accordion.Header>
                <span className="count-fq">13</span>
                <span className="pr-2"> What are the fees for credit card transaction as well as currency conversion?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong>  All the prices are quoted and displayed in the U. S. Dollars and all charges posted will be in US dollars. If you are having a credit card other than the US credit card, then just check with the bank for more details on any currency conversion charge. Your credit card might charge a fee in order to process the purchases paid in the U. S. Dollars.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="114">
                <Accordion.Header>
                <span className="count-fq">14</span>
                <span className="pr-2"> My credit card billing address is outside Canada or U.S. Can I book the ticket?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong>  At our company, we process reservations for the travelers who have the billing address in as many as 150 + countries across the world. Select Other Countries when you start adding the details of your credit card for the payment purposes. After that choose your country from the given list. In case you won{"'"}t find your Country here then call customer service +91-8010000200 number to check if any secondary payment option is available.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="115">
                <Accordion.Header>
                <span className="count-fq">15</span>
                <span className="pr-2"> How to Request for an in-flight special meal?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong>  A large number of airlines charge for the meals provided in the flight or they do not proffer a meal service. However, the Flyers have an option to request for a meal if you are purchasing the tickets online. You can also call the airline immediately to request for it. If you are willing to request for such type of meal, then it should be done 24 hours before the scheduled departure. There is no guarantee that these requests will be allowed and it is only up to the discretion of the airline to permit them.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="116">
                <Accordion.Header>
                <span className="count-fq">16</span>
                <span className="pr-2"> I am getting an error message that the information of my credit card does not match. What is there in the records of my company{"'"}s credit card?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm">
                    Your name, address, credit card number, as well as zip code, should be entered just like it displays on the statement of the credit card. Please get in touch with the credit card company and confirm the information which is being entered by you is similar to the information which is in your records. You can also try as well as book your reservation through the other credit card. If you do not possess any other credit card, then contact the customer service team for help by dialing the number +91-8010000200.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="117">
                <Accordion.Header>
                <span className="count-fq">17</span>
                <span className="pr-2"> What is the seat selection procedure?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong>  Once you set out for ticket booking, then you can request for seat assignments. Please choose {"'"}Seat Preference{"'"} while submitting the details of the travelers during the process of booking. If you are done with your seat booking already, then kindly contact our travel executive at +91-8010000200 and we will forward the seat request to the concerned Airline.</p>
                  <p className="text-gray-500 text-sm">Although we let your seat request pass to the particular Airline, yet there is no guarantee that Airline will accept your request.</p>
                  <p className="text-gray-500 text-sm">
                    Please Note: -
                    Many Airlines, nowadays charge some money against the seat assignments and there are also some which restrict the pre-assignment of the seats.
                  </p>
                  <p className="text-gray-500 text-sm">
                    Some Airlines might only assign seats just 90 days before the departure of the flight. Emergency exit seating and Bulkhead are managed by the Airline and can{"'"}t be pre-assigned. These seats might be blocked by the particular Airline as well as held for check-in process at the airport on the departure date.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="118">
                <Accordion.Header>
                <span className="count-fq">18</span>
                <span className="pr-2"> Why the Fare increased when I was trying to book the flight?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong>  Airfares are not static and change every minute on the basis of demand as well as availability. The time when you search for your flight and then book it, seat inventory of a certain booking class might sell out. Once it is sold, then the Airlines offer this inventory at much higher price. At Travomint (SNVA LLC), we examine these changes closely and then put in our best efforts to maintain the current inventory as well as fares in our display.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="119">
                <Accordion.Header>
                <span className="count-fq">19</span>
                <span className="pr-2"> Can I contact Travomint (SNVA LLC) directly to book my ticket?</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-gray-500 text-sm"><strong className="text-bluefaq">Ans:</strong>  Yes! Of course! Travomint (SNVA LLC) is always ready to provide you phone assistance from 9 a.m. in the morning to 9 p.m. in order to meet your travel requirements. Kindly contact the customer service team at the phone number +91-8010000200.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Container>

      <Navs />

      <Footer />

    </>
  )
}
export default faq;