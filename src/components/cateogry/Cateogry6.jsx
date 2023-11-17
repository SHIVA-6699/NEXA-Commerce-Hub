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

     const itemsWithPrices = await Promise.all(
       Object.entries(data).map(async ([key, value]) => {
         try {
           const oneTodo = await API.graphql({
             query: queries.getPriceTable2,
             variables: { itemname: value },
           });

           const price = oneTodo.data?.getPriceTable2?.price;

           // Try fetching JPG image first
           const jpgImageUrl = await Storage.get(`IOT/${value}.jpg`, {
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

export default Category6;
