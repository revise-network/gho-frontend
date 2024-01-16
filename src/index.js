import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home";
import { MetaMaskProvider } from "@metamask/sdk-react";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <MetaMaskProvider
    debug={false}
    sdkOptions={{
      dappMetadata: {
        name: "Example React Dapp",
        url: window.location.host
      }
    }}
  >
    <div className="wrapper_container">
      <Home />
    </div>
  </MetaMaskProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
