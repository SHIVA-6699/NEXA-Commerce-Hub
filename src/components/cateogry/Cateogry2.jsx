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
const Category2 = () => {
  const [itemData, setItemData] = useState([]);
  window.localStorage.setItem("category", "electronics");

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        "pTron Newly Launched Fusion Evo v4 16W Bluetooth 5.2 Speaker, Dual Drivers, up to 19Hrs Playtime, Soundbar for Phone/TV/Laptop/Tablets/Projectors, Aux/TF Card/USB Drive Playback & TWS Function (Black)":
          "bar",
        "Effective Pixels: 24.2 MP.Video Resolution: 4K UHD at 23 FPS.Sensor: CMOS, APS-C (22.3 x 14.9mm)WiFi Available: Yes.Dimension & Weight: 739g, 122.5x147x87.8mm.Up to 651 AF Frame Zones, Eye Detection Auto Focus, Ultra High Resolution Panoramas.2 Years Product Warranty.":
          "camera",
        "Shopnet 30 W Adaptive Charging 4.2 A Mobile Charger with Detachable Cable  (White, Cable Included) Oneplus 1 Year Warranty":
          "charger",
        "Oneplus Nord Wired Earphones with mic, 3.5mm Audio Jack, Enhanced bass with 9.2mm Dynamic Drivers, in-Ear Wired Earphone - Black":
          "earphones",
        "boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Aqua Blue)":
          "headset",
        "Finish. Silver. Space Grey, Capacity 1 64GB. 256GB,Buttons and Connectors. Smart. Connector 3.5 mm., In the Box. iPad. Lightning to USB-C Cable. Display. 10.2″ Retina display. Retina display. Chip. A13 Bionic chip. Camera. 8MP Wide camera. Video Recording. 1080p HD video recording at 25 fps and 30 fps.":
          "ipad",
        "Lenovo V15 G3 Intel Core i3-1215U 12th Gen Thin and Light Laptop/ 8GB DDR4 3200 Ram / 512 GB SSD PCIe/Windows 11/Integrated Graphics 15.6 FHD Display1YearWarranty":
          "laptop",
        "V29 8GB+128GB Majestic Red6.78 inches (17.22 cm), AMOLED Display.Memory: 8GB RAM, 128GB ROM.Processor: Qualcomm Snapdragon 778G, Octa Core.Camera: 50 MP + 8 MP + 2 MP Triple Rear & 50MP Front Camera.Battery: 4600 mAh with 80W USB Type-C Fast Charging.USP: Funtouch OS 13 Global, Aesthetic Design..":
          "mobile",
        "boAt Rockerz 255 Pro+ Bluetooth Neckband with Upto 60 Hours Playback, ASAP Charge, IPX7, Dual Pairing and Bluetooth v5.2(Navy Blue)":
          "neckband",
        "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Headphones with 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth...":
          "pods",
        "The three-sided, frameless design of S53 makes it possible to view content in full-screen and at a wider angle while yet feeling":
          "tv",
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
            const jpgImageUrl = await Storage.get(`electronics/${value}.jpg`, {
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

export default Category2;
