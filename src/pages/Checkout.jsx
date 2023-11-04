import { Container, Col, Form } from "react-bootstrap";
import { useState } from "react";
import Address from "../components/Address";
import "../index.css";
const Checkout = () => {
  const [add, setadd] = useState(false);
  const address = {
    Houseno: 2939339,
    Street_Name: "Dewey Crescent",
    State: "North Emorymouth",
    Pincode: 493939,
  };
  return (
    <>
      <Container>
        <h4 className="mt-5 text-center">Checkout Page</h4>
        <div className="d-flex justify-content-center mt-5">
          <Col lg={6}>
            <h5 className="text-center">Address</h5>
            <div className="text-center d-flex gap-5">
              <div className="border-2 rounded border d-flex flex-wrap w-50 my-5  px-5 py-3  border-primary address">
                <p>{address.Houseno},</p>
                <p>{address.Street_Name},</p>
                <p>{address.State},</p>
                <p>{address.Pincode}</p>
              </div>
              <div className="border-2 rounded border d-flex flex-wrap w-50 my-5  px-5 py-3  border-primary address">
                <a
                  className="m-auto fs-1"
                  onClick={() => {
                    setadd(true);
                  }}
                >
                  +
                </a>
              </div>
            </div>

            {add === true ? <Address /> : ""}
          </Col>
          <Col lg={6}>
            <div className="text-center">
              <h5 className="">Payment</h5>
            </div>
          </Col>
        </div>
      </Container>
    </>
  );
};
export default Checkout;
