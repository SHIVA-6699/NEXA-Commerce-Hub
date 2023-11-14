import React from "react";
import { Container, Col, Image } from "react-bootstrap";
import Hedaer from "./Header";
import "../index.css";
import { Link } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";
import Fashion from "../assets/Cateogry_images/Fashion.jpg";
import sports from "../assets/Cateogry_images/sports.jpg";
import Grocery from "../assets/Cateogry_images/Grocery.jpg";
import Tools from "../assets/Cateogry_images/Tools.jpg";
import Beauty from "../assets/Cateogry_images/Beauty.jpg";
import elctronics from "../assets/Cateogry_images/elctronics.jpg";
import iot from "../assets/Cateogry_images/iot.jpg";
import furniture from "../assets/Cateogry_images/furniture.jpg";
import homefurniture from "../assets/Cateogry_images/home&furniture.jpg";
import homekit from "../assets/Cateogry_images/home&kit.jpg";
const Createrequest = () => {
  const category = {
    "/Cateogry1": Fashion,
    "/Cateogry2": elctronics,
    "/Cateogry3": homekit,
    "/Cateogry4": furniture,
    "/Cateogry5": homefurniture,
    "/Cateogry6": iot,
    "/Cateogry7": sports,
    "/Cateogry8": Tools,
    "/Cateogry9": Grocery,
    "/Cateogry10": Beauty,
  };
  const itemlist = [
    "Fashion & Desgins",
    "Electronics",
    "Kitchen Accessories",
    "Furniture",
    "Home appliences ",
    "IOT Devices",
    "Sports & Gym",
    "Tools",
    "Grocery",
    "Beauty & Toys",
  ];
  return (
    <>
      <Hedaer />
      <div className="mb-5">
        <h4 className="text-center mt-2">Request Items</h4>
        <Container className="d-flex justify-content-center position-relative mt-5 mb-5">
          <Col lg={8} className="shadow-lg">
            <div className="d-flex flex-wrap gap-0 m-0 p-0  justify-content-center  text-center mb-5">
              {Object.entries(category).map((item, index) => (
                <Link to={item[0]}>
                  <a key={index} className="d-grid text-center">
                    <Image
                      src={item[1]}
                      width={80}
                      height={80}
                      className="exsimg"
                      roundedCircle
                    />
                    {itemlist[index]}
                  </a>
                </Link>
              ))}
            </div>
          </Col>
        </Container>
      </div>
      <BottomNavbar />
    </>
  );
};
export default Createrequest;
