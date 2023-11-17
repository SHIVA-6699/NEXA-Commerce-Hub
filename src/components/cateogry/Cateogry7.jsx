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
 window.localStorage.setItem("category", "Sports&Gym");
 useEffect(() => {
   const fetchData = async () => {
     const data = {
       "Blendoy Cricket Tennis Ball Durable and High Quality Standard Bail  (Pack of 12), Exceptional durability                .":
         "Ball",
       "Strauss Cricket Kit | Full Size | Color: Blue | Right Handed Complete Set of 9 Cricket Kit, Sport Type: Cricket Ideal For: Men, Women, Color: Blue (Full Size), Width: 36 cm, Height: 70 cm, Depth: 25 cm ":
         "Cricket_Kit",
       "Sahib Trader Black Hex Dumbbells Set, Home Gym Fixed Weight Fixed Weight Dumbbell  (4 kg), Type: Fixed Weight Dumbbell, Weight: 4 kg":
         "dumbbell_4kg",
       "HRX Ignite 20 kg Adjustable Dumbbell Set for Home Gym Twist Lock Technology Adjustable Dumbbell  (20 kg), Type: Adjustable Dumbbell, Weight: 20 kg":
         "dumble_20kg",
       "FS-10 Football Shoes For Men  (Black), it depends on usage but as per our customers words 4 to 6 months easily                                       ":
         "Football_shoe",
       "TILLUSION Hi-Top Men Street Fashion Sneakers with Rubber Outsole|Memory Cushion| Walking Shoes For Men  (Grey)                                     .":
         "Running_shoe",
       "Jager-Smith PB-6000 Combo & Featherlite 2 Shuttle Kids Badminton Kit, Sport Type: Badminton, Ideal For: Junior, Color: Orange, Width: 26 cm, Height: 56 cm, Depth: 4 cm":
         "Shuttles",
       "VICTORY Best Fitness Jumping (Made in India) Freestyle Skipping Rope  (Length: 295 cm),Color: Black, Type: Freestyle Skipping Rope, Length: 295 cm":
         "skipping_rope",
       "Powermax Fitness Power max Fitness TDM-100S 1.5Hp Motorized Treadmill, Motorized, Color: Black, For Treadmill Push, Inclination Level 3, Maximum Weight Support 110 kg, Display Type: LCD, Speed: 12 km/h":
         "treadmill",
       "YFMATS 6MM Premium Eva with Tpe blend Anti slip Tearless Yoga mat with carry Bag Maroon 6 mm Yoga Mat,Type: Yoga, Thickness: 6 mm, Slip Resistant":
         "yoga_mat",
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
           const jpgImageUrl = await Storage.get(`Sports&Gym/${value}.jpg`, {
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
