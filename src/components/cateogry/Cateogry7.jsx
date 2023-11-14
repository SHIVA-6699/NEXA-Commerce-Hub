import React from "react";
import { Badge, Button, Card, Container, Row, Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Header from "../Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BottomNavbar from "../BottomNavbar";
import "../../App.css";
import { Storage } from "aws-amplify";

const Category7 = () => {
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

      const itemsWithImages = await Promise.all(
        Object.entries(data).map(async ([key, value]) => {
          try {
            // Try fetching JPG image first
            const jpgImageUrl = await Storage.get(`Sports&Gym/${value}.jpg`, {
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

export default Category7;
