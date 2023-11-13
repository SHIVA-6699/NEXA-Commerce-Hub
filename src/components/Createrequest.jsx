import React from "react";
import { Container, Col } from "react-bootstrap";
import Hedaer from "./Header";
import "../index.css";
import { Link } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";
const Createrequest = () => {
  const category = {
    "/Cateogry1": "Fashion",
    "/Cateogry2": "value2",
    "/Cateogry3": "value3",
    "/Cateogry4": "value4",
    "/Cateogry5": "value5",
    "/Cateogry6": "value6",
    "/Cateogry7": "value7",
    "/Cateogry8": "value8",
    "/Cateogry9": "value9",
    "/Cateogry10": "value10",
  };
  return (
    <>
      <Hedaer />
      <h4 className="text-center mt-2">Request Items</h4>
      <Container className="d-flex justify-content-center position-relative mt-5">
        <Col lg={8} className="shadow-lg">
          <div className="d-flex flex-wrap  justify-content-center  text-center">
            {Object.entries(category).map((item, index) => (
              <Link to={item[0]}>
                <a key={index} className="d-grid ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    className="m-1"
                  >
                    <path fill="#00000" d="m12 2l-5.5 9h11z" />
                    <circle cx="17.5" cy="17.5" r="4.5" fill="#00000" />
                    <path fill="#00000" d="M3 13.5h8v8H3z" />
                  </svg>
                  {item[1]}
                </a>
              </Link>
            ))}
          </div>
        </Col>
      </Container>
      <BottomNavbar />
    </>
  );
};
export default Createrequest;
