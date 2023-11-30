import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-lmvc0723humceldk.us.auth0.com"
      clientId="X6tjqbZbTLRcG8w7ac7BWExq6zAUTAlh"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <PayPalScriptProvider options={{
        clientId: "AT637dMJYkLi2R8wfKzpRa3v72k_umQ2hi44dWZrfSzPddY2NxHRCEjhtJ2soLWge5jMD4PMBTa5bhRA"
      }}>
        <ShoppingCartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ShoppingCartProvider>
      </PayPalScriptProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
