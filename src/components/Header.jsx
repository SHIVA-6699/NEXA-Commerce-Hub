import React from "react";
import { useState,useEffect} from "react";
import { Button, Offcanvas ,Image,Form,ToggleButton,ToggleButtonGroup} from "react-bootstrap";
import { Amplify, Auth } from "aws-amplify";
import awsExports from "../aws-exports";
import App from "../App";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import Theme from "./DarkMode";
Amplify.configure(awsExports);

const Hedaer = () => {
  const [show, setShow] = useState(false);
  const handleopen = () => setShow(true);
  const [email, setemail] = useState("");
  const handleclose = () => setShow(false);

    useEffect(() => {
      // Check if dark mode is enabled from local storage
    }, []);
    
  async function signOut() {
    try {

      await Auth.signOut({ global: true });
      <App />;
      
    } catch (error) {
      console.log("error signing out: ", error);
    }
  const data=window.localStorage.getItem("email");
  }
  return (
    <>
      {/* Off canvas */}
      <div className="d-flex">
        <Button
          style={{ background: "#163A66" }}
          onClick={handleopen}
          className="m-3 border-0 sticky-top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            className="sticky-top"
          >
            <path
              fill="#ffffff"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </Button>

        <Offcanvas show={show} onHide={handleclose}>
          <Offcanvas.Header closeButton className="float-end ms-auto m-2">
            <Theme/>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Link to={"/Orders"}>Orders</Link>
            <hr />
            <Link to={"/Profile"}>Profile</Link>
            <hr />
            <Link to={"/Viewproducts"}>View All Products</Link>
            <hr />
            <Link to={"/Createrequest"}>Shop Now</Link>
            <hr />
            <Link to={"/Feedback"}>Contact us</Link>
            <hr/>
            <Link to={"/Admin"}>Admin</Link>
          </Offcanvas.Body>
          <h6 className="text-center m-3">©2023 Nexa</h6>
        </Offcanvas>
        <Image src={Logo} width={100} height={70} />
        <p>{email}</p>
        <div className="d-flex position-relative sub-group align-baseline align-content-end ms-auto flex sticky-top">
          <div className="ms-auto mt-3 d-flex align-baseline  h-50">
            <div className="position-relative">
              <Form.Control
                placeholder="Search..."
                className="rounded rounded-5 pl-4 w-100"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="position-absolute top-50 start- translate-middle-y m-1 end-0" // Adjust position as needed
              >
                <path
                  fill="#163A66"
                  d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
                />
              </svg>
            </div>
          </div>
          <Link to={"/Cart"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              className="m-auto sticky-top"
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
            className="m-3 border-0 sticky-top rounded rounded-5 singout-btn text-center bg-light"
          >
            <div className="singout-hide text-center"></div>
            <div className="text-center z-5">Signout</div>
          </Button>
        </div>
      </div>
    </>
  );
};
export default Hedaer;
