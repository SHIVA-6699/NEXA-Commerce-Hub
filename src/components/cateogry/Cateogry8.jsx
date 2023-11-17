// Category2.jsx
import React, { useState, useEffect } from "react";
import { Button, Container, Row, Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Header from "../Header";
import { Link } from "react-router-dom";
import { Storage } from "aws-amplify";
import * as queries from "../../graphql/queries";
import "../../App.css";
import BottomNavbar from "../BottomNavbar";
import { API } from "aws-amplify";
const Category8 = () => {
  const [itemData, setItemData] = useState([]);
window.localStorage.setItem("category", "Tools&kits");
useEffect(() => {
  const fetchData = async () => {
    const data = {
      "ASRYD Bike Disc Lock Motorcycle Waterproof 110dB Heavy Duty Anti-Theft Alarm Wheel Disc Disc Lock  (Black), Type: Disc Lock, Material: Aluminium, Number of Keys: 2":
        "anti-theftalarm",
      "Getsocio Heavy Duty Stainless Steel Chrome Security Anti-Theft Lock for Motorcycle and Bicycle Disk Brake Safety Lock Disc Lock  (Steel, Black)":
        "brake lock",
      "STVS N9325620 Bike Engine Guard  (TVS), Model Number: N9325620, Vehicle Brand: TVS, Vehicle Model Name: Apache":
        "engine guard",
      "thriftkart Anti Shake and Stable Cradle Clamp with 360  Rotation Bicycle Phone Mount Bike Mobile Holder  (Black)":
        "moblie holder",
      "Grandbiker Rear Wheel Paddock Stand Extra Strong with Swing Arm Rest for KTM RC 8 Bike Storage Stand  (Floor Mount) ":
        "paddock",
      "Shine Rexine World SRW-BNEW-0001 Single Bike Seat Cover For Universal For Bike NA,Fastening Type: ROPE, Material: Rexine, Color: Black, Blue, Type: Single.":
        "seat cover",
      "ASRYD Bike Front Shocker Lock Bike Locking System Drum Brakes Wheel Lock For Universal Bike Disc Lock  (Black)":
        "shocker",
      "Rustic 46pcs Tool Ratchet Torque Wrench Combo Tools Kit Car Repair Set Hand Tool Kit  (46 Tools)Socket and Bit Set, 46 Pieces, pulled or pushed in one direction, contains a ratchet that loosens or tightens the bolt or nut attached to the socket":
        "toolkit",
    };

    const itemsWithPrices = await Promise.all(
      Object.entries(data).map(async ([key, value]) => {
        try {
          const oneTodo = await API.graphql({
            query: queries.getPriceTable2,
            variables: { itemname: value },
          });

          const price = oneTodo.data?.getPriceTable2?.price;

          // Try fetching JPG image first
          const jpgImageUrl = await Storage.get(`Tools&kits/${value}.jpg`, {
            expires: 60,
          });

          return { key, value, imageUrl: jpgImageUrl, price };
        } catch (error) {
          console.error(`Error fetching data for ${value}:`, error);
          return { key, value, imageUrl: null, price: null };
        }
      })
    );

    setItemData(itemsWithPrices);
  };

  fetchData();
}, []);

  function store(item) {
    window.localStorage.setItem("useritem", item.value);
    window.localStorage.setItem("itemprice", item.price);
  }

  return (
    <>
      <Header />
      <Container className="mb-5 me-5">
        <h5 className="text-center mb-5">Choose Items</h5>

        {itemData.map((item, index) => (
          <Row className="ms-5 mb-3" key={index}>
            <Col lg={9}>
              {item.imageUrl && (
                <div className="d-flex align-items-center justify-content-between">
                  <Image
                    src={item.imageUrl}
                    alt={item.value}
                    width="50"
                    height="50"
                    className="cloimg"
                    rounded
                    fluid
                  />
                  <p className="ms-3 mb-0 pe-0 text-start">{item.key}</p>
                  {item.price && <h6>₹{item.price}</h6>}
                </div>
              )}
            </Col>
            <Col lg={3} className="d-flex align-items-center">
              <Link to={"/Cart"} className="">
                <Button
                  variant=""
                  style={{ background: "#163A66" }}
                  className="text-white"
                  onClick={() => store(item)}
                >
                  Add to Cart
                </Button>
              </Link>
            </Col>
          </Row>
        ))}
      </Container>
      <BottomNavbar />
    </>
  );
};

export default Category8;
