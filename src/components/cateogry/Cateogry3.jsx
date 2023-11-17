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
const Category3 = () => {
  const [itemData, setItemData] = useState([]);
  window.localStorage.setItem("category", "home&kit");

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        "Blue Star 1 Ton 3 Star Convertible 5 in 1 Cooling Inverter Split AC (Copper, Multi Sensors, Dust Filters, Smart Ready, Blue Fins, Self Diagnosis, 2023Model, IC312YNU,White)":
          "ac",
        "Panasonic 260 L Double Door 3 Star AI Enabled Inverter Technology Frost Free Refrigerator (NR-TH272CPAN, Ocean Blue, Jumbo Fresh Vegetable Basket,2023 Model, Net Capacity 237L)Invest in the timeless appeal of the Casual Navy Check Shirt to effortlessly upgrade your casual wardrobe. Whether you're aiming for a classic or modern look ":
          "fridge",
        "Samsung 8 kg, 5 star, Eco Bubble Technology with Super Speed, Wi-Fi, Digital Inverter, Motor, Soft Closing Door, Fully-Automatic Top Load Washing Machine (WA80BG4546BDTL, Versailles Gray)The Branded Chest Graphic T-Shirt is more than just clothing; it's a canvas for self-expression. Elevate your wardrobe with this unique and stylish piece that effortlessly combines comfort, quality,":
          "washm",
        "Samsung 28L, Slim Fry, Convection Microwave Oven with Tandoor and Curd making(CE1041DSB3/TL, Black, Best Diwali Gift, 10 Yr warranty)'s Navy Blue Super Skinny Fit Low-Rise Heavy Fade Stretchable Jeans.Whether you're aiming for a laid-back vibe or a fashion-forward statement, these jeans are the perfect choice for the modern man who values both style and comfort.":
          "microwave",
        "Havells Capture 500W 3 Jar Mixer Grinder, High Speed 21000 RPM Motor, 304 SS Blades, 5 Years Motor Warranty with Overload Protector, 1.5 Ltr Bigger Size Blending Jar I (Grey & Green)Premium Gray Melange Track Pant. Combining the best of comfort and style, these track pants are a testament to your commitment to quality and fashion":
          "blendar",
        "Morphy Richards at 402 1450Watts Pop-Up Toaster,   4-Slice Automatic Pop up Toaster with Removable Crumb Tray, 7-Levels Browning Controls, Bread Centring with Wide Bread Slots, 2-Yr Warranty, WhiteThe Classic Blue Zipper Hoodie, this hoodie seamlessly combines classic design with modern functionality. Elevate your casual wardrobe with this versatile and enduring piece.":
          "toaster",
        "Luminous Inverter & Battery Combo with Trolley for Home, Office & Shops (Zelio+ 1100 Pure Sine Wave Inverter, RC 15000 120 Ah Tubular Battery) - Bluecargo cotton jacket Step into a world of fashion and functionality with our latest jacket. This versatile piece seamlessly blends style with practicality":
          "inverter",
        "Bajaj New Shakti Neo 15L Vertical Storage Water Heater| Star Rated Heater| Water Heating with Titanium Armour & Swirl Flow Technology| Glasslined Tank| Wall Mounting| 1-Yr Warranty by Bajaj| WhiteEffortless Elegance: Slim Fit Men's Black Trousers our Slim Fit Men's Black Trousers, a wardrobe essential that seamlessly combines sophistication with modern flair.":
          "heater",
        "atomberg Renesa 1200mm BLDC Motor 5 Star Rated Sleek Ceiling Fans with Remote | Upto 65% Energy Saving | 2+1 Year Warranty (Brown and Black) | Winner of National Energy Conservation Awards (2022)Elevate Your Workout: Men's Polyester Black Gym Shorts, our Men's Gym Shorts in Polyester Black, a fusion of style and functionality crafted to enhance your performance":
          "fan",
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
            const jpgImageUrl = await Storage.get(`home&kit/${value}.jpg`, {
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

export default Category3;
