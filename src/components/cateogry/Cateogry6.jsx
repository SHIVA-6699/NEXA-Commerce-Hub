import React from "react";
import { Badge, Button, Card, Container, Row, Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Header from "../Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BottomNavbar from "../BottomNavbar";
import "../../App.css";
import { Storage } from "aws-amplify";

const Category6 = () => {
  const [itemData, setItemData] = useState([]);
 window.localStorage.setItem("category", "IOT");

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        "Easy Electronics ADXL345 Three 3 Axis Digital Accelerometer Gy-291, Adxl345 Three Axis 3-Axis Gy- 291 + 1 Male Pin Header Adxl345 Digital Three-Axis Acceleration Of Gravity Tilt Module For Arduino Code Iic / Spi.":
          "accelometer",
        "Temperature Humidity Sensor Module DHT11 With PCB, 0 to 100% RH. Whether you're aiming for a classic or modern look ":
          "humidity",
        "Arduino UNO R3 board with DIP ATmega328, SKU: 2016R3UNO Categories: Modules, Electronics Components Tags: Controller Module, IOT Module":
          "aurdino",
        "Jumper Wire - Female to Female 40 Pcs 20 CM, A highly useful connecting wire. It comes with female connectors at both ends, can be used to make quick connections between headerpins, FRC pins":
          "jumperwires",
        "The HC-SR501 PIR Motion Detector Sensor Module is a pyroelectric device that detects motion by measuring changes in the infrared levels emitted by surrounding objects. This motion can be detected by checking for a high signal on a single I/O pin.":
          "PIR",
        "Raspberry Pi 4 8GB RAM | All New Raspberry Pi Desktop Computer, Brand Raspberry Pi, Model Name : Pi 4":
          "rassberrypi",
        "Taiss 1Pcs LJ18A3-8-Z/BX-5V M18 8mm Sensing DC 5V NPN NO（Normally Open） 3D Printer Cylinder inductive Proximity Sensor Switch Work Voltage 5VDC Special for MCU":
          "sensorswitch",
        
      };

      const itemsWithImages = await Promise.all(
        Object.entries(data).map(async ([key, value]) => {
          try {
            // Try fetching JPG image first
            const jpgImageUrl = await Storage.get(`IOT/${value}.jpg`, {
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

export default Category6;
