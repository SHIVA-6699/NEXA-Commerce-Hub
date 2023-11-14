import React from "react";
import { Badge, Button, Card, Container, Row, Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Header from "../Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BottomNavbar from "../BottomNavbar";
import "../../App.css";
import { Storage } from "aws-amplify";

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

      const itemsWithImages = await Promise.all(
        Object.entries(data).map(async ([key, value]) => {
          try {
            // Try fetching JPG image first
            const jpgImageUrl = await Storage.get(`Tools&kits/${value}.jpg`, {
              expires: 60,
            });

            return { key, value, imageUrl: jpgImageUrl };
          } catch (error) {
            try {
              // If JPG image fetch fails, try fetching PNG image
              const pngImageUrl = await Storage.get(`${value}.png`, {
                expires: 60,
              });
              return { key, value, imageUrl: pngImageUrl };
            } catch (error) {
              console.error(`Error fetching image for ${value}:`, error);
              return { key, value, imageUrl: null };
            }
          }
        })
      );

      setItemData(itemsWithImages);
    };

    fetchData();
  }, []);

  function store(value) {
    window.localStorage.setItem("useritem", value);
  }

  return (
    <>
      <Header />
      <Container className="mb-5 me-5">
        <h5 className="text-center mb-5">Choose Items</h5>

        {itemData.map((item, index) => {
          return (
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
                    <p className="ms-3">{item.key}</p>
                  </div>
                )}
              </Col>
              <Col lg={3} className="d-flex align-items-center">
                <Link to={"/Cart"} className="">
                  <Button
                    variant=""
                    style={{ background: "#163A66" }}
                    className="text-white"
                    onClick={() => store(item.value)}
                  >
                    Add to Cart
                  </Button>
                </Link>
              </Col>
            </Row>
          );
        })}
      </Container>
      <BottomNavbar />
    </>
  );
};

export default Category8;
