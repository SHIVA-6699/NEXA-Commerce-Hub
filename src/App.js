import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createrequest from "./components/Createrequest.jsx";
import Cateogry1 from "./components/cateogry/Cateogry1.jsx";
import Cart from "./components/Cart.jsx";
import Cartside from "./pages/CartSlilde.jsx";
import Checkout from "./pages/Checkout.jsx";
import QrCode from "./components/Qrcode.jsx";
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Createrequest" element={<Createrequest />} />
          <Route path="/Cateogry1" element={<Cateogry1 />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Cartside" element={<Cartside />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
          <Route path="/QrCode" element={<QrCode />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default withAuthenticator(App);
