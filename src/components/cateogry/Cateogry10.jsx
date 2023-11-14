import React from "react";
import { Badge, Button, Card, Container, Row, Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Header from "../Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BottomNavbar from "../BottomNavbar";
import "../../App.css";
import { Storage } from "aws-amplify";

const Category10 = () => {
  const [itemData, setItemData] = useState([]);
  window.localStorage.setItem("category", "Beauty&Toys");
  useEffect(() => {
    const fetchData = async () => {
      const data = {
        "Parachute Advansed Baby Care Gift Set, Perfect baby gift box for newborn baby, Baby Safe Toy, Small  (Blue).":
          "babycarekit",
        "R for Rabbit Tiny Toes T10 Ace with EVA Wheels Kids / Baby Tricycle, Tricycle for Kids 1.5 to 5 Years Baby Cycle with Storage Basket Tricycle  (Red, Black, Black) ":
          "EVAwheels",
        "Vadhavan Baby Pacifier Food Feeder Silicone Fresh Fruit Milk Nibbler Feeding Safe Kids Supplies Nipple Teat Pacifier Bottles 1 Pc Feeder Feeder  (Multicolor)":
          "feedbottel",
        "NISCOMED Manual First Feed Manual Breast Pump - Manual - Manual Type: Manual Hands Free Bra Size: Yes Weight: 300 g One Hand Operation Collection System: Bottle":
          "foodfeeder",
        "I 4 Pack 4WD Monster Truck Cars,Push and Go Toy Trucks Friction Powered Cars 4 Wheel Drive Vehicles for Toddlers Children Boys Girls Kids Gift-4PCS  (Multicolor)                                      ":
          "monstercar",
        "SIMILAC Stage 1 Infant Formula (Up to 6 months) Whole milk powder, lactose, maltodextrin, edible vegetable oil (soy oil, high oleic, sunflower oil, coconut oil), whey protein concentrate, butter oil, MINERALS#, VITAMINS**, nucleotides, emulsifier (soy lecithin), taurine, L-carnitine, antioxidant (mixed tocopherol))                                     .":
          "pam oil",
        "RJ IMPORTERS Soft Sponge Squeeze Smiley Ball for Kids, Infants (Multicolor) - Set of 12 Pcs - 20 cm  (Multicolor), Pack of 12, Character: PRINTED BALLS, Age: 3+ Years":
          "softspong",
        "Mrbear Cute Bootsy Red 122 Cm 4 feet Huggable And Loveable For Someone Special  Teddy Bear - 122 cm  (Red)Character: Taddy Bear Washable Age: 1+ Years":
          "teddybear",
      };

      const itemsWithImages = await Promise.all(
        Object.entries(data).map(async ([key, value]) => {
          try {
            // Try fetching JPG image first
            const jpgImageUrl = await Storage.get(`Beauty&Toys/${value}.jpg`, {
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

export default Category10;
