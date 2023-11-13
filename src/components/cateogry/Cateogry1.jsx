import React from "react";
import { Badge, Button, Card, Container, Row, Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Header from "../Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BottomNavbar from "../BottomNavbar";
import "../../App.css";
import { Storage } from "aws-amplify";

const Category1 = () => {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        "Men's Green Round Neck Long Sleeve Sweatshirt. Its blend of comfort, style, and versatility makes it a must-have for every man's closet.":
          "sweatshirt",
        "Invest in the timeless appeal of the Casual Navy Check Shirt to effortlessly upgrade your casual wardrobe. Whether you're aiming for a classic or modern look ":
          "shirts",
        "The Branded Chest Graphic T-Shirt is more than just clothing; it's a canvas for self-expression. Elevate your wardrobe with this unique and stylish piece that effortlessly combines comfort, quality,":
          "tshirts",
        "Men's Navy Blue Super Skinny Fit Low-Rise Heavy Fade Stretchable Jeans.Whether you're aiming for a laid-back vibe or a fashion-forward statement, these jeans are the perfect choice for the modern man who values both style and comfort.":
          "jeans",
        "Premium Gray Melange Track Pant. Combining the best of comfort and style, these track pants are a testament to your commitment to quality and fashion":
          "trackpants",
        "The Classic Blue Zipper Hoodie, this hoodie seamlessly combines classic design with modern functionality. Elevate your casual wardrobe with this versatile and enduring piece.":
          "hoodies",
        "cargo cotton jacket Step into a world of fashion and functionality with our latest jacket. This versatile piece seamlessly blends style with practicality":
          "jackets",
        "Effortless Elegance: Slim Fit Men's Black Trousers our Slim Fit Men's Black Trousers, a wardrobe essential that seamlessly combines sophistication with modern flair.":
          "trousers",
        "Elevate Your Workout: Men's Polyester Black Gym Shorts, our Men's Gym Shorts in Polyester Black, a fusion of style and functionality crafted to enhance your performance":
          "shorts",
        "weather in style with our collection of Sleeveless T-Shirts. These versatile garments are a must-have for the modern wardrobe, offering a perfect balance of comfort and fashion.":
          "sleevshirt",
      };

      const itemsWithImages = await Promise.all(
        Object.entries(data).map(async ([key, value]) => {
          try {
            // Try fetching JPG image first
            const jpgImageUrl = await Storage.get(`clothes/${value}.jpg`, {
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

export default Category1;
