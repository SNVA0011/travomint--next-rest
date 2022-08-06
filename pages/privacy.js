import React, { useEffect } from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Header from "../components/Atom/Header";
import Footer from "../components/Atom/Footer";
import TopNav from "../components/Atom/TopNav";
import Bread from "../components/Atom/Breadcrumb/bread";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNavs from "../components/Atom/SideNav";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head>
        <title>Travomint | Privacy Policy</title>
        <meta
          name="description"
          content='Travomint.com and its related companies ("we," "us," or "our") value your trust and want you to be familiar with how we collect, use, and disclose information.'
        />
        <meta
          name="keywords"
          content="Travomint, cheap flight booking website, best place to book flight, online flight booking"
        />
        <link rel="canonical" href={"https://www.Travomint.com/privacy"} />
      </Head>

      <Header />
      <SideNavs />

      <Bread title="Privacy Policy" html={
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
            Privacy Policy
          </li>
        </>
      } />

      <Container>
      <div className="themepy-spacing">
      <div className="content-blog-default">
          <h2 className="sub-title mt-0">Privacy policy</h2>
          <hr />
          <h2>Introduction</h2>
          <p>
          Your trust is important to Travomint and its affiliated businesses, 
          and we want you to understand how we gather, use, and share information. 
          This privacy statement explains our practices regarding the information 
          we receive from you when you visit any of our websites, including but not limited to www.travomint.com, 
          access or use any of the mobile software apps we make accessible (the "Apps"), or buy or utilize any of 
          the services we offer through our various channels, such as but not limited to our Websites, Apps, and call centers (the "Services").
          You accept the terms and conditions of this Privacy Policy and the related Terms and Conditions by visiting any of our Websites, using any of our Apps, or purchasing or using any of our Services.
          </p>
          <h2>Personal information</h2>
           <hr />

       
          <b>A. Personal Data That We May Gather:</b>
          <b>"Personal Information" is any data that pertains to or uniquely identifies you as a specific individual, such as:</b>
          <ul>
          <li>Identity Postal Address (es).</li>
          <li>Email and phone numbers.</li>
          <li>Numbers for credit and debit cards, as well as related data.</li>
          <li>Number assigned by a transportation organization, such as a TSA known traveler number, social media account ID, or passport number</li>
          <li>Any additional information you provide us when you speak with us or plan a trip with us (for example, your dietary restrictions and other preferences), as well as details about your reservations (e.g., points of departure and destinations)
          </li>
          </ul>

          
          <h2>How We Might Gather Personal Data</h2>
           <hr />
           <b>Personal information may be gathered by us and our third-party service providers in a number of ways, including:</b>

        <ul>
          <li>Through the Services: When you make a booking or sign up for a promotion through the Services, we may gather Personal Information about you.</li>
          <li>Offline: When you contact customer care, for example, we may gather Personal Information from you offline.</li>
          <li>From Other Sources: To the extent authorized by applicable law, we may get your Personal Information from other sources, such as public databases, joint marketing partners, social media platforms (including from users with whom you are friends or otherwise associated), and other third parties.</li>
        </ul>
          




          <h2>3.How We Might Use Personal Data</h2>
           <hr />
           <b>We could employ personal data to:</b>

          <ul>
            <li>To finish and fulfil your reservation or purchase, including processing your money, getting in touch with you about it, and giving you any necessary customer support. For the purpose of making trip reservations, we use passport information.</li>
            <li>To answer your questions and carry out your requests, including sending you newsletters.</li>
            <li>To communicate with you for administrative matters, such as updates to our terms, conditions, and policies as well as information about the Services.</li>
            <li>To the degree authorized by law, send you marketing materials we think you'll find interesting.</li>
            <li>To display items and offers that are customized for you in order to enhance your experience on the Services.</li>
            <li>To promote our services and products</li>
            <li>To enable you to take part in raffles, competitions, and such promotions, as well as to manage these events. There may be additional restrictions for certain of these activities that detail how we use and disclose your Personal Information. You must abide by any such regulations if you choose to join, therefore we advise that you read them carefully.</li>
            <li>To provide social sharing capabilities.so that you can message someone else using the Services. By utilizing this feature, you are confirming that you have permission to give us your friend's name and email address.</li>
            <li>for operational and growth-related business goals, such as data analysis, audits, fraud monitoring and prevention, developing new products, augmenting, improving, or changing our Services, detecting use patterns, and evaluating the success of our marketing initiatives.</li>
            <li>To the extent that we deem it necessary or appropriate: (a) under applicable law, including laws outside your state or country of residence; (b) to respond to requests from public and governmental authorities and self-regulatory organizations, including public and governmental authorities and self-regulatory organizations outside your state or country of residence; and (c) to comply with legal process; d) to enforce our terms and conditions; e) to protect our operations, assets, or interests or those of any of our affiliates; f) to protect our rights, privacy, safety, or property and/or that of our affiliates, you, or others; and g) to enable us to pursue available remedies or lessen the damages that we may sustain.</li>
          </ul>

          <h2>How personal information may be disclosed</h2>
           <hr />


          <ul>
            <li>The following organizations may receive disclosures of or transfers of your personal information. These organizations, with the exception of our corporate affiliates and service partners, are not under our control, and any Personal Information disclosed to them is subject to the privacy policies and security procedures of the relevant organization. As a result, we advise you to carefully read the privacy statements of any company whose goods or services you buy through the Services:</li>
            <li>To other travel-related businesses that we collaborate with to offer a component of the Services, such airline consolidators or aggregators, other travel agencies that give users access to their travel-related inventory through the Services, and travel insurance organizations.</li>
            <li>To our business partners, who may provide their goods or services on the Services, who may have sent you there from another website or online service, or to whom the Services may link. We advise you to carefully read the privacy statement for each of these websites and online services.</li>
            <li>To our third-party service providers who offer services including email delivery, auditing, customer support, data analysis, payment processing, order fulfilment, information technology, and associated infrastructure. We impose confidentiality duties on the data we give to third-party service providers, and they are only allowed to use it for the purposes specified in those obligations.</li>
            <li>To third-party sponsors or managers of polls, drawings, competitions, and such promotions.</li>
            <li>To allow recipients of messages you send over the Services to recognize you. Additionally, you have the option to expose your personal information on message boards, chat, profile pages, blogs, and other sites where you may submit content. Please be aware that everything you reveal or publish through these services becomes public and may be seen by other users and members of the public. When selecting to reveal any information on the Services, we strongly advise you to use extreme caution.</li>
            <li>In connection with your social sharing activity, subject to your social media account settings, the friends you have connected to your social media account, other website users, and your social media account provider, such as if you link your social media account to your services account or log into your services account from your social media account. By linking your Services account to your social media account, you permit us to share information with the provider of your social media account, and you acknowledge that the social media site's privacy policies will apply to how the information we provide is used. Do not link your social media accounts to your accounts for the Services or take part in social sharing if you do not want your Personal Information to be shared with other users or the provider of your social media account.</li>
            <li>We anticipate that the information we have gathered, including personal data, would be transferred to the surviving corporation in a merger or the acquiring entity in the case of a merger, reorganization, dissolution or similar corporate event, or the sale of all or nearly all of our assets. All such transfers are subject to our obligations under our Privacy Policy regarding the privacy and confidentiality of such personal data.</li>
            <li>As we deem necessary or appropriate: (a) in accordance with applicable law, including laws outside of your state or country of residence; (b) to comply with legal process and to stop, detect, or otherwise deal with abuse, fraud, or criminal activity; (c) to respond to requests from public and governmental authorities and self-regulatory organizations, including public and governmental authorities and self-regulatory organizations outside of your state or country of residence.</li>
          </ul>

        

          <h2>
          5.Additional Information
          </h2>
           <hr />

           <b>Additional Information We Might Gather:</b>


          <p>
          Any information that does not specifically identify you or that does not directly link to an individual is referred to as "Other Information." We may only use Other Information for the reasons for which we use and disclose Personal Information, as described in this Privacy Policy, if we are required by applicable law to regard it as Personal Information. Other information could include, for instance:
          </p>
          <ul>
            <li>Device and browser details</li>
            <li>info on app usage</li>
            <li>Information gathered via pixel tags, cookies, and other methods</li>
            <li>Demographic data as well as additional information you gave</li>
            <li>information in aggregate</li>
          </ul>

          <h2>6.How We Might Gather Additional Data</h2>
           <hr />
           <b>Various methods may be used by us and our third-party service providers to collect other information, such as:</b>


       <ul>
        <li><b>By using your browser or device:</b> Most browsers or your device automatically collect certain information, including your Media Access Control (MAC) address, computer type (Windows or Macintosh), screen resolution, operating system name and version, device manufacturer and model, language, Internet browser type and version, and the name and version of the Services (such as the App) you are using. We make use of this data to make sure the Services work effectively.</li>
        <li><b>Through your use of the App: </b>As you download and use the App, we and our service providers may track and gather information about your usage of the App, including the date and time the App on your device accesses our servers, as well as the information and files that have been downloaded to the App based on the device you are using.</li>
        <li><b>Utilizing cookies:</b>tilizing cookies: Cookies are data files that are directly saved on the computer you are using. In general, cookies let us gather data about your browser type, how long you spend using the Services, the pages you visit, your preferred language, and other anonymous or fictitious traffic information. For further details, please visit our cookie policy here.</li>
        <li><b>Using pixel tags and other similar technologies: </b> Pixel tags (also referred to as web beacons and clear GIFs) may be used in connection with some Services to, among other things, track the actions of users of the Services (including email recipients), evaluate the effectiveness of our marketing campaigns, and compile data regarding usage of the Services and response rates</li>
        <li><b>Utilizing Flash Local Shared Objects ("Flash LSOs") and other comparable technologies from Adobe:</b> We could gather and keep data on how you use the Services via Flash LSOs and other technologies, among other things. Utilizing the options on the Website Storing Settings Panel, you may modify your Flash player's settings to prevent the storage of Flash LSOs on your computer. Flash LSOs can also be managed by visiting the Global Storage Settings Panel and according to the instructions (which may include instructions on how to remove already-existing Flash LSOs, for example) (referred to as "information" on the Macromedia site).</li>
        <li><b>IP Address: </b>Your Internet Service Provider will automatically assign a number known as your IP address to the computer you are now using. Every time a user visits the Services, an IP address may be recognized and automatically stored in our server log files together with the date and time of the visit and the page(s) that were accessed. Many websites, programs, and other services routinely collect IP addresses as part of regular operations. In order to run the Services, determine usage trends, identify server issues, and more, we need IP addresses. Your IP address may also allow us to determine a general location for you.</li>
        <li><b>Physical Position: </b>Using satellite, mobile phone tower, or Wi-Fi signals, for instance, may allow us to determine the precise location of your device. For the purpose of offering, you specialized location-based services and content, we may utilize the precise location of your device. We could also provide our marketing affiliates access to the precise location of your device so they can show you geo-targeted advertisements. You may be able to accept or disallow such usage and/or sharing of your device's location, for example, through the settings on your device. If you do, it's possible that we and/or our marketing affiliates won't be able to offer you the pertinent tailored services and information.</li>
        <li><b>From you:</b> When you willingly submit it, information like your preferred method of contact and specific travel requirements (for instance, those related to a handicap or food constraint) is gathered.</li>
       </ul>

          <h2>7.Supplemental Services</h2>
           <hr />


          <p>
          The privacy methodologies of any third parties, including any third-party supplier or intermediary, any third party operating any website or service to which the Services link, or any third party that incorporates a widget on the Services, are not covered by this privacy statement, and we disclaim responsibility for them (for example, the Facebook Like button or share buttons). The presence of a link on the Services does not imply that we or our affiliates support the website or service being connected to. Additionally, we disclaim all liability for any Personal Information you disclose to third parties through or in connection with the Apps. Examples of these third parties include Facebook, Apple, Google, Microsoft, and any other app developer, app provider, social media platform provider, operating system provider, wireless service provider, or device manufacturer.
          </p>

          <h2>8.Unaffiliated Advertisers</h2>
           <hr />

          <p>
          When you access and use the Services and other websites, apps, or online services, we may work with third-party advertising companies to show you advertisements for products and services that may be of interest to you based on information about how you access and use those websites, apps, and online services on any of your devices. These businesses could accomplish this by identifying or placing a special cookie on your browser (including through use of pixel tags). They could also employ these technologies and other data they and we gather about your online activities to identify you when you use other devices, like a laptop and a mobile phone
          </p>

          <h2>9.Period of Retention</h2>
           <hr />

          <p>
          Unless a longer retention time is needed or authorized by law, we will only keep your personal information as long as it takes to accomplish the objectives listed in this privacy policy.
          </p>

         
        </div>
        </div>
      </Container>



      <Footer />
    </>
  );
}

 