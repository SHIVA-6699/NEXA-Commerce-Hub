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
const Category9 = () => {
  const [itemData, setItemData] = useState([]);
  window.localStorage.setItem("category", "Grocerys");
  useEffect(() => {
    const fetchData = async () => {
      const data = {
        "AASHIRVAAD Select Sharbati Atta,  (5 kg), This atta comes in a convenient 5 kg packaging, making it a staple in households that prioritize wholesome and nutritious meals.":
          "Atta",
        "Bingo Salt Sprinkled Potato Chips  (90 g), Whoever looked at the potato in the ground and decided to eat it, was a true visionary. Because if it wasnt for him/ her":
          "chips",
        "Sunfeast Dark Fantasy Choco Fills Cream Filled  (300 g), Type: Cream Filled, Quantity: 300 g, Shelf Life: 6 Months, Base Flavor: Chocolate":
          "choco_cookies",
        "Parachute 100% Pure & Natural Coconut Hair Oil  (1 L), For Men & Women, Suitable For All Hair Types, Applied For Hair Growth, Hair Strengthening":
          "Coconut_Hair_Oil",
        "Sunfeast Mom's Magic Cashew and Almonds Cookies  (584 g), type: Cookies, Quantity: 584 g, Base Flavor: Almond, Cashew, Vegetarian":
          "cookie",
        "Shine Rexine World SRW-BNEW-0001 Single Bike Seat Cover For Universal For Bike NA,Fastening Type: ROPE, Material: Rexine, Color: Black, Blue, Type: Single.":
          "Cool_Deo",
        "ASRYD Bike Front Shocker Lock Bike Locking System Drum Brakes Wheel Lock For Universal Bike Disc Lock  (Black)":
          "Cool_Hair",
        "Dabur Honey, 100% Pure with No Sugar Adulteration  (650 g),  100% Pure with No Sugar Adulteration":
          "Dabur_Honey",
        "DENVER Hamilton Deodorant Spray - For Men  (200 ml), Quantity: 200 ml, Fragrance: Deodorant Spray, For Men":
          "deodorant",
        "DOVE Daily Shine Conditioner  (175 ml), For Daily CareSuitable For All Hair Types, Men & Women Conditioner":
          "dove_conditioner",
        "Haldiram's moong Dal  (200 g), Brand : Haldiram's, Model Name : moong Dal, Quantity : 200 g, Type : Dal, Flavor : Salt, Taste : Salt":
          "halidram",
        "HEAD & SHOULDERS Smooth and Silky Anti Dandruff Shampoo for Softer and Smoother Hair  (1 L), Anti-dandruff Shampoo, Ideal For: Men & Women, Suitable For: All Hair Types":
          "head&shoulder_shampoo",
        "Parachute Advansed Ayurvedic Hot Oil, Warming Coconut, Frizz Free Hair Oil  (300 ml), Suitable For All Hair Types, Applied For Conditioning":
          "Hot_Oil",
        "Mysore sandal soap 75g.The soap nourishes your skin from within, giving it a healthy glow and protecting it from environmental damage.":
          "mysore_soap",
        "Rustic 46pcs Tool Ratchet Torque Wrench Combo Tools Kit Car Repair Set Hand Tool Kit  (46 Tools)Socket and Bit Set, 46 Pieces, pulled or pushed in one direction, contains a ratchet that loosens or tightens the bolt or nut attached to the socket":
          "onion_chips",
        "Aachi Chilli, Turmeric, Coriander Powder Spices Combo  (3 x 200 g), Form FactorPowder, Pack of: 3, Quantity: 600 g, Ready MasalaNo":
          "powders",
        "INDIA GATE Mogra Basmati Rice (Broken Grain)  (5 kg), From the World's No. 1 Basmati Rice* brand, India Gate Mini-Mogra Basmati Rice is budget-friendly for everyday use and makes ordinary meals delightful.":
          "Rice_Bag",
        "Tata Salt 100% Natural Sendha Namak for Cooking Himalayan Pink Salt  (1 kg), It is a perfect addition to the essential ingredients in your kitchen":
          "salt",
        "Regular usage of Santoor Sandal and Turmeric Soap helps eliminate skin issues such as blackheads, acne, and skin allergie":
          "santoor_soap",
        "Surf excel Easy Wash Detergent Powder 1 kg, Surf Excel Easy Wash Detergent Powder is a laundry detergent designed to make the process of washing clothes easy and efficient":
          "surf_powder",
        "Dabur Red Gel Toothpaste  (300 g, Pack of 2), Ayurvedic, 18 Months":
          "Toothpaste",
        "Vaseline Cocoa Glow Serum In Lotion | 100% Pure & Shea Butter for Glowing & Soft Skin  (400 ml), Application Area: Body, For Men & Women, All Day Cream, For All Skin Types":
          "vaseline",
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
            const jpgImageUrl = await Storage.get(`Grocerys/${value}.jpg`, {
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

export default Category9;
