import React from "react";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Amplify, Auth } from "aws-amplify";
import awsExports from "../aws-exports";
import App from "../App";
Amplify.configure(awsExports);
const Hedaer = () => {
  const [show, setShow] = useState(false);
  const handleopen = () => setShow(true);
  const handleclose = () => setShow(false);
  async function signOut() {
    try {
      await Auth.signOut({ global: true });
      <App />;
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  return (
    <>
      {/* Off canvas */}
      <Button
        style={{ background: "#8700ff" }}
        onClick={handleopen}
        className="m-3 border-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 16 16"
        >
          <path
            fill="#ffffff"
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </Button>
      <Offcanvas show={show} onHide={handleclose}>
        <Offcanvas.Header closeButton className="float-end"></Offcanvas.Header>
        <Offcanvas.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
          nostrum. Eveniet molestias sint placeat adipisci fuga facere
          voluptatem maiores sunt repellat. Neque perspiciatis cum corporis quod
          voluptates numquam. Modi, provident?
        </Offcanvas.Body>
      </Offcanvas>
      <Button
        onClick={signOut}
        className="float-end m-3 border-0"
        style={{ background: "#8700ff" }}
      >
        Sginout
      </Button>
    </>
  );
};
export default Hedaer;
