import { Provider } from "react-redux";
import { store, persistor } from "../components/Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "../styles/global.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
function MyApp({ Component, pageProps }) {
  const [stripeKEY, setStripeKEY] = useState("");

  const stripeKey = () => {
    fetch("https://www.travomint.com/stripe-key", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(function (result) {
        return result.json();
      })
      .then(function (data) {
        setStripeKEY(data.publishablekey);
      });
  };
  const stripePromise = loadStripe(stripeKEY);
  useEffect(() => stripeKey(), []);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Elements stripe={stripePromise}>
            <Component {...pageProps} />
          </Elements>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
