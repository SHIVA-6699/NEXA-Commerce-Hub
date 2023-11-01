import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createrequest from "./components/Createrequest.jsx";
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Createrequest" element={<Createrequest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default withAuthenticator(App);
