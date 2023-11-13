import React from "react";
import { Badge, Button, Card, Container, Row, Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Header from "../Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BottomNavbar from "../BottomNavbar";
import "../../App.css";
import { Storage } from "aws-amplify";

const Category5 = () => {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        "Snazzy Plastic Multipurpose Foldable Open Bookshelf, Book Shelves, Bookcase, Bookrack, Book Storage Organizer Shelf for Study Room Home Office Library (Black)'s Green Round Neck Long Sleeve Sweatshirt. Its blend of comfort, style, and versatility makes it a must-have for every man's closet.":
          "bookshell",
        "CELLBELL Desire C104 Mesh Mid-Back Ergonomic Office Chair/Study Chair/Revolving Chair/Computer Chair for Work from Home Metal Base Height Adjustable Chair [Black]Invest in the timeless appeal of the Casual Navy Check Shirt to effortlessly upgrade your casual wardrobe. Whether you're aiming for a classic or modern look ":
          "chair",
        "Corazzin Garden Patio Seating Chair and Table Set Outdoor Balcony Garden Coffee Table Set Furniture with 1 Table and 4 Chairs Set (Black)The Branded Chest Graphic T-Shirt is more than just clothing; it's a canvas for self-expression. Elevate your wardrobe with this unique and stylish piece that effortlessly combines comfort, quality,":
          "chair&tabel",
        "Lukzer Engineered Wood Computer Desk with One Tier Shelves Laptop Study Table for Office Home Workstation Writing Modern Desk (ST-004/Oak Brown / 90 x 50 x 77 cm)Men's Navy Blue Super Skinny Fit Low-Rise Heavy Fade Stretchable Jeans.Whether you're aiming for a laid-back vibe or a fashion-forward statement, these jeans are the perfect choice for the modern man who values both style and comfort.":
          "desk",
        "SONA ART & CRAFTS Modern Furniture Solid Sheesham Wood Dining Table 4 Seater Dining Table Set with 4 Cushion Chairs Dinner Table Set for Dinning Room Home Hotel and Office (Natural Finish)Premium Gray Melange Track Pant. Combining the best of comfort and style, these track pants are a testament to your commitment to quality and fashion":
          "dining",
        "Patiofy Cotton Large Soft Leather Velvet Hammock Hanging Swing Chair, Jhula For Adults, Swing For Indoor/Outdoor, Home, Balcony & Garden, 200 Kgs Weight Capacity (Free Hanging Accessories- Grey) Classic Blue Zipper Hoodie, this hoodie seamlessly combines classic design with modern functionality. Elevate your casual wardrobe with this versatile and enduring piece.":
          "hangchair",
        "Plastic Rattan Chairs| Set of 2 | Plastic Chairs for Dining Room, Bedroom, Living Room | Comfortable Back |Curved Seating | Rattan Box Legs |Bearing Capacity up to 200Kg, Brown Colour":
          "plasticchair",
        "Plastic Rattan Chairs| Set of 2 | Plastic Chairs for Dining Room, Bedroom, Living Room | Comfortable Back |Curved Seating | Rattan Box Legs |Bearing Capacity up to 200Kg, Brown ColourEffortless Elegance: Slim Fit Men's Black Trousers our Slim Fit Men's Black Trousers, a wardrobe essential that seamlessly combines sophistication with modern flair.":
          "sofa",
        "Furniture Solid Sheesham Wood Bar Cabinet for Living Room Rack Hard and Soft Drinks Wooden Storage Cabinets Home Wine Wisky Scotch All Type DrinksElevate Your Workout: Men's Polyester Black Gym Shorts, our Men's Gym Shorts in Polyester Black, a fusion of style and functionality crafted to enhance your performance":
          "woodbar",
      };

      const itemsWithImages = await Promise.all(
        Object.entries(data).map(async ([key, value]) => {
          try {
            // Try fetching JPG image first
            const jpgImageUrl = await Storage.get(`furniture/${value}.jpg`, {
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

export default Category5;
