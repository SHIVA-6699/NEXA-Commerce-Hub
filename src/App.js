import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createrequest from "./components/Createrequest.jsx";
import Cateogry1 from "./components/cateogry/Cateogry1.jsx";
import Cateogry2 from "./components/cateogry/Cateogry2.jsx";
import Cateogry3 from "./components/cateogry/Cateogry3.jsx";
import Cateogry4 from "./components/cateogry/Cateogry4.jsx";
import Cateogry5 from "./components/cateogry/Cateogry5.jsx";
import Cateogry6 from "./components/cateogry/Cateogry6.jsx";
import Cateogry7 from "./components/cateogry/Cateogry7.jsx";
import Cateogry8 from "./components/cateogry/Cateogry8.jsx";
import Cateogry9 from "./components/cateogry/Cateogry9.jsx";
import Cateogry10 from "./components/cateogry/Cateogry10.jsx";
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
          <Route path="/Home" element={<Home />} />
          <Route path="/Createrequest" element={<Createrequest />} />
          <Route path="/Cateogry1" element={<Cateogry1 />}></Route>
          <Route path="/Cateogry2" element={<Cateogry2 />}></Route>
          <Route path="/Cateogry3" element={<Cateogry3 />}></Route>
          <Route path="/Cateogry4" element={<Cateogry4 />}></Route>
          <Route path="/Cateogry5" element={<Cateogry5 />}></Route>
          <Route path="/Cateogry6" element={<Cateogry6 />}></Route>
          <Route path="/Cateogry7" element={<Cateogry7 />}></Route>
          <Route path="/Cateogry8" element={<Cateogry8 />}></Route>
          <Route path="/Cateogry9" element={<Cateogry9 />}></Route>
          <Route path="/Cateogry10" element={<Cateogry10 />}></Route>
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
