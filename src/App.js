import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createrequest from "./components/Createrequest.jsx";
import Cateogry1 from "./components/cateogry/Cateogry1.jsx";
import Cart from "./components/Cart.jsx";
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Createrequest" element={<Createrequest />} />
          <Route path ="/Cateogry1" element={<Cateogry1/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default withAuthenticator(App);
