import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import Orders from "./pages/Orders";
import App from "./App";
import StarRating from "./components/Review";
import PricesList from "./pages/PricesList";


Amplify.configure(awsExports);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PricesList/> 
  </React.StrictMode>
);
reportWebVitals();
