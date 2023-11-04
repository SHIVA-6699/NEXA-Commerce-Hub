import React from "react";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Amplify, Auth } from "aws-amplify";
import awsExports from "../aws-exports";
import App from "../App";
import { Link } from "react-router-dom";
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
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </Button>
      <Offcanvas show={show} onHide={handleclose}>
        <Offcanvas.Header closeButton className=""></Offcanvas.Header>
        <Offcanvas.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
          nostrum. Eveniet molestias sint placeat adipisci fuga facere
          voluptatem maiores sunt repellat. Neque perspiciatis cum corporis quod
          voluptates numquam. Modi, provident?
        </Offcanvas.Body>
      </Offcanvas>
      <div className="float-end">
       <Link to={'/Cart'}>
       <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 24 24"
          className="m-auto"
          >
          <path
            fill="currentColor"
            d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z"
            />
        </svg>
        {1 + parseInt(window.localStorage.getItem("cartnum"))}
            </Link> 
        <Button
          onClick={signOut}
          className=" m-3 border-0"
          style={{ background: "#8700ff" }}
        >
          Sginout
        </Button>
      </div>
    </>
  );
};
export default Hedaer;
