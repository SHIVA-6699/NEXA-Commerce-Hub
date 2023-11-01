import { Amplify } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Button } from "react-bootstrap";
import awsExports from "./aws-exports";
import Home from "./components/Home";
import Hedaer from "./components/Header";
Amplify.configure(awsExports);

function App({ signOut,user}) {
  return (
    <>
     <Hedaer/>
     <Home/>
    </>
  );
}

export default withAuthenticator(App);
