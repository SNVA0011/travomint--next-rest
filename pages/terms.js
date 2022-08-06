import Image from "next/image";
import React, { useEffect } from "react";
import Footer from "../components/Atom/Footer";
import Header from "../components/Atom/Header";
import Navs from "../components/Atom/Nav";
import TopNav from "../components/Atom/TopNav";
import Bread from "../components/Atom/Breadcrumb/bread";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import SideNavs from "../components/Atom/SideNav";

const terms = () => {
  return (
    <>
      <Header />
      <SideNavs />

      <Bread
        title="Terms & Conditions"
        html={
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
            <li
              className="d-inline-block align-middle active text-white"
              aria-current="page"
            >
              Terms & Conditions
            </li>
          </>
        }
      />

      <Container>
        <div className="themepy-spacing">
          <div className="content-blog-default">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse1"
                  >
                    Booking
                  </a>
                </h4>
              </div>
              <div>
                <div class="panel-body">
                  <h2>AIRLINES' Terms &amp; Conditions</h2>

                  <ul>
                    <li>
                      Airline terms and restrictions, including but not confined
                      to cancellation and refund procedures, apply to any
                      airline tickets purchased through the Website.
                    </li>

                    <li>
                      TravomintÂ&nbsp;just serves as a conduit to make it
                      possible for Users to purchase airline tickets. The User
                      and the relevant airline are always parties to the service
                      agreement for the use of the flight.
                    </li>

                    <li>
                      Airlines maintain the right to amend or cancel flights or
                      itineraries independently of and without prior
                      notification to Travomint. They may also reschedule flight
                      dates and routes. As a facilitator, Travomint is not
                      liable for any loss, direct or eventuality, that a User
                      may experience as a result of such a change or
                      cancellation of a flight because it has no control or
                      jurisdiction over the logistics of the airlines.
                    </li>

                    <li>
                      On the same airline, assorted tickets may have different
                      limits or different services and prices.
                    </li>

                    <li>
                      The airline determines the terms for the baggage allowance
                      for a certain fare; TravomintÂ&nbsp;has no ascendancy over
                      these terms. Some of the tickets displayed in the booking
                      flow are "hand baggage fares," meaning the user must pay
                      extra for checked baggage because they do not grant them
                      access to free checked baggage. Adding checked luggage to
                      a reservation can cost more or less depending on the
                      airline. For specific costs, the User is encouraged to get
                      in touch with the airlines.
                    </li>
                  </ul>

                  <h2>Code Share</h2>

                  <ul>
                    <li>
                      With other airlines, certain airlines enter "code share"
                      arrangements. In other words, there are some routes on
                      which the airline carrier selling or marketing the flight
                      ticket does not operate its own aircraft. Instead, it
                      rather partners with or hires another airline to fly
                      passengers there. The partner airline is identified as
                      "operated by" in the booking flow.
                    </li>
                    <li>
                      Your flight's code-sharing status will be made known to
                      you during the booking process and beforehand you make a
                      payment.
                    </li>

                    <li>
                      Only once the ticketing airline informs Travomint of any
                      such code-sharing agreements will Travomint share them
                      with the user.
                    </li>
                  </ul>

                  <h2>FLIGHT SEGMENT USE</h2>

                  <p>
                    In the event User does not embark on the onward journey, the
                    entire PNR pertaining to that booking shall be automatically
                    canceled by the airline. In such a scenario, Travomint will
                    not be required to allocate the User alternative bookings or
                    have any ascendancy over the aforementioned procedure. In
                    such a case, the cancellation penalty will be determined by
                    the relevant airline regulations.
                  </p>

                  <h1>MODIFICATIONS TO CURRENT BOOKING</h1>

                  <ul>
                    <li>
                      In addition to the service cost charged by Travomint, any
                      changes to an extanting booking will be subjected to
                      auxiliary fees imposed by the relevant airline.
                    </li>

                    <li>
                      In the case that a booking is altered or modified, the
                      User is liable to pay the associated fees. Charges for
                      modifying or changing an existing reservation, however,
                      may vary according to the airline and the pricing class.
                    </li>
                  </ul>

                  <h2>Corporate Booking</h2>

                  <ul>
                    <li>
                      You can book corporate flights with us using both online
                      and offline methods, however travomint does not guarantee
                      a fixed price until the booking is verified by the
                      airline. In most circumstances, corporate reservations are
                      less expensive through travomint.
                    </li>

                    <li>
                      Travomint shall not be held responsible for any fare
                      change as it is not in the jurisdiction of travomint.
                    </li>
                  </ul>

                  <h2>Group Bookings</h2>
                  <ul>
                    <li>
                      Group Bookings rate is flexible and may vary until the
                      tickets are issued as these rates may fluctuate and
                      Travomint shall not be held responsible for the price
                      change as it depends on the airline and their policy.
                    </li>

                    <li>
                      If there is a disparity in the fare change before the
                      issuance of tickets, Travomint is not responsible for
                      paying any fare difference.
                    </li>
                  </ul>

                  <h2>PRICING</h2>
                  <ul>
                    <li>
                      The base fare, any applicable government taxes, and the
                      convenience fee are often included in the final price that
                      is presented on the website's payment page. Users must pay
                      the whole amount before their reservation is confirmed.
                      Travomint has the right to refuse service if the User does
                      not pay the full amount. On the date of travel, the user
                      undertakes to pay all statutory taxes, surcharges, and
                      fees.
                    </li>

                    <li>
                      An infant must be under 24 months for the entire trip in
                      order to qualify for baby prices. This includes both
                      onward and return journeys. On the return trip, if the
                      newborn is 24 months or older, the user will need to make
                      a separate reservation using a kid fee.
                    </li>
                  </ul>

                  <h2>TRAVEL PAPERWORK</h2>

                  <ul>
                    <li>
                      The User shall be solely responsible for making sure they
                      have all necessary travel documentation, including
                      identification documents, passports, visas (including
                      transit visas), etc., to complete the trip. The user
                      acknowledges that Travomint will not be held responsible
                      in any manner if they are unable to travel because they do
                      not have appropriate travel documents.
                    </li>

                    <li>
                      The user is aware that any information (if any) provided
                      by Travomint on the travel papers is advisory in nature
                      only and should not be taken as definitive. The User is
                      responsible for verifying the travel regulations with the
                      relevant airlines of the relevant countries the User may
                      transit through or decide to visit.
                    </li>
                  </ul>

                  <h2>TERMS OF CHECK-IN</h2>
                  <ul>
                    <li>
                      Regarding the check-in timings, users should inquire
                      directly with the airlines. For domestic flights, check-in
                      typically opens two hours prior to takeoff, whereas it
                      does so three hours prior to takeoff for international
                      flights.
                    </li>

                    <li>
                      In order to confirm the identity, nationality, and age of
                      the people travelling on a ticket, including infants, the
                      user needs to bring valid identification proofs,
                      passports, and age proofs.
                    </li>
                  </ul>

                  <h2>REFUND</h2>
                  <ul>
                    <li>
                      Refunds will be handled in accordance with the
                      cancellation and pricing policies of the airline. These
                      refunds are conditional upon Travomint getting the money
                      from the airlines. The convenience fee, on the other hand,
                      is a non-refundable fee that was paid to Travomint at the
                      time of booking.
                    </li>

                    <li>
                      The convenience fee is levied on electronic transactions
                      in order to cover the cost of electronic payment
                      infrastructure. The customer shall be completely
                      responsible to bear all charges, fees, taxes, duties and
                      assessments arising out of the use of the service,
                      depending on the applicable laws. Therefore, the
                      convenience fee is not refundable.
                    </li>

                    <li>
                      To begin the refund procedure, Travomint must be informed
                      of any cancellations made directly with the airline.
                      Refund processing times can change according to the bank,
                      payment method, etc. The Travomint service cost, which is
                      separate from the convenience fee as previously noted,
                      will be subtracted before processing the refund.
                    </li>

                    <li>
                      The original account from which the payment was made will
                      get the reimbursement. If the User used a credit card, for
                      instance, Travomint will appropriately reverse the charge
                      to the same credit card; similarly, if the User used a
                      debit card, Travomint will credit the money to the same
                      debit card.
                    </li>

                    <li>
                      In case of any cancellation the discounted price offered
                      to the customer shall not be refundable.
                    </li>
                  </ul>

                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col" colspan="6">
                          Travomint Convenience fee charges
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Convience Fee</td>
                        <td>Domestic one way</td>
                        <td>Domestic Round Trip</td>
                        <td>Internation one way</td>
                        <td>International Round Trip</td>
                      </tr>
                      <tr>
                        <td>Travomint charges</td>
                        <td>Upto 500 per person</td>
                        <td>Upto 1000 per person</td>
                        <td>Upto 750 per person</td>
                        <td>Upto 1500 Per person</td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col" colspan="6">
                          Travomint Cancellation fee Charges
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Cancellation Fee</td>
                        <td>Domestic one way</td>
                        <td>Domestic Round Trip</td>
                        <td>International one way</td>
                        <td>International Round Trip</td>
                      </tr>
                      <tr>
                        <td>Travomint charges</td>
                        <td>Upto 300 per person</td>
                        <td>Upto 600 per person</td>
                        <td>Upto 500 per person</td>
                        <td>Upto 1000 per person</td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col" colspan="6">
                          Travomint Changes fee/ Reissue fee
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Cancellation Fee</td>
                        <td>Domestic one way</td>
                        <td>Domestic Round Trip</td>
                        <td>International one way</td>
                        <td>International Round Trip</td>
                      </tr>
                      <tr>
                        <td>Travomint charges</td>
                        <td>Upto 300 per person</td>
                        <td>Upto 300 per person</td>
                        <td>Upto 500 per person</td>
                        <td>Upto 500 per person</td>
                      </tr>
                    </tbody>
                  </table>

                  <h2>Travomint's Function and Liability Limitations</h2>
                  <ul>
                    <li>
                      The only function of Travomint is to make it easier for
                      the User to purchase service from the Service provider.
                      The User and the Activity Provider are always the parties
                      to the transaction or service fulfillment arrangement.
                    </li>

                    <p>Travomint shall not be liable or responsible for:</p>

                    <li>
                      Any loss or damage, harm, accident, demise, malfunction,
                      irregularity, delay or schedule modification, cancellation
                      without justification, erroneous information, inadequate
                      service or product, or cancellation brought on by
                      circumstances beyond the control of the activity provider.
                    </li>
                    <li>
                      The health, safety and well-being of the User in the
                      course of availing the Activity or thereafter.
                    </li>
                    <li>Any false statement made by the activity provider.</li>

                    <li>
                      This Agreement shall be governed by and construed in
                      accordance with the laws of India, including all matters
                      any dispute relating thereto shall be subject to the
                      competent jurisdiction of the courts in Gautam Budhnagar,
                      Uttar Pradesh.
                    </li>

                    <p>
                      The maximum liability of TravomintÂ&nbsp;will be
                      restricted to the reimbursement of the booking fee that
                      was received byÂ&nbsp;travomintÂ&nbsp;for the Activity
                      reservation.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Navs />
      <Footer />
    </>
  );
};

export default terms;
