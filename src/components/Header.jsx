import React from "react";
import { useState } from "react";
import { Button,Offcanvas } from "react-bootstrap";
import { Amplify ,Auth} from "aws-amplify";
import awsExports from "../aws-exports";
import App from "../App";
Amplify.configure(awsExports);
const Hedaer=()=>{
  const [show, setShow] = useState(false);
  const handleopen = () => setShow(true);
  const handleclose = () => setShow(false); 
  async function signOut() {
    try {
      await Auth.signOut({ global: true });
      <App/>
        
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }   
return (
  <>
    {/* Off canvas */}
    <Button variant="info" onClick={handleopen} className="m-3">
      Open
    </Button>
    <Offcanvas show={show} onHide={handleclose}>
      <Offcanvas.Header closeButton className="float-end"></Offcanvas.Header>
      <Offcanvas.Body>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, nostrum.
        Eveniet molestias sint placeat adipisci fuga facere voluptatem maiores
        sunt repellat. Neque perspiciatis cum corporis quod voluptates numquam.
        Modi, provident?
      </Offcanvas.Body>
    </Offcanvas>
    <Button onClick={signOut} className="float-end m-3">Sginout</Button>
  </>
);
}
export default Hedaer