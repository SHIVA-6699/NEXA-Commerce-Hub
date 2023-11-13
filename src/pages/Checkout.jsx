import { Container, Col, Button, Row } from "react-bootstrap";
import { useState } from "react";
import Address from "../components/Address";
import BHMUPI from "../components/BHMI";
import Gpay from "../components/Gpay";
import { Link } from "react-router-dom";
import "../index.css";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";

const Checkout = () => {
  const [add, setAdd] = useState(false);
  const [bhi, setBHMUPI] = useState(false);
  const address = {
    Houseno: 2939339,
    Street_Name: "Dewey Crescent",
    State: "North Emorymouth",
    Pincode: 493939,
  };

  const handleAddClick = () => {
    setAdd(true);
  };

  return (
    <>
      <Header />
     
        <h4 className="mt-5 text-center">Checkout Page</h4>
        <div className="d-flex justify-content-evenly  gap-5   mt-5">
          <Row className="">
            
            <Col lg={6}>
              <h5 className="text-center">Address</h5>
              <div className="text-center d-flex gap-5">
                <div className="border-2 rounded border d-flex justify-content-center flex-wrap w-100 my-5  px-5 py-3  border-primary address">
                  {add ? (
                    <>
                      <p>{address.Houseno},</p>
                      <p>{address.Street_Name},</p>
                      <p>{address.State},</p>
                      <p>{address.Pincode}</p>
                    </>
                  ) : (
                    <a className="m-auto fs-1" onClick={handleAddClick}>
                      +
                    </a>
                  )}
                </div>
              </div>

              {add && <Address />}
            </Col>

            <Col lg={6}>
              <div className="text-center">
                <h5 className="">Payment</h5>
                <div className="mt-5 d-grid justify-content-center">
                  <Gpay />

                  <Button
                    className="bg-black border-0 mx-5 mt-3 "
                    style={{ width: "15rem" }}
                    onClick={() => {
                      bhi === false ? setBHMUPI(true) : setBHMUPI(false);
                    }}
                  >
                    Pay With BHMUPI
                  </Button>
                  {bhi === true ? <BHMUPI /> : ""}
                  <Link to={"/QrCode"}>
                    <Button
                      className="bg-black border-0 mt-1"
                      style={{ width: "15rem" }}
                    >
                      Pay With QrCode
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      <BottomNavbar />
    </>
  );
};

export default Checkout;
