import { Badge, Button, Container, ListGroup, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Header from "../Header";
import { Link } from "react-router-dom";
import { useState } from "react";

const Category1 = () => {
  const data = {
    item1: "water",
    item2: "Food",
    item3: "Hair",
    item4: "Home",
    item5: "Powder",
  };

  function store(value) {
    window.localStorage.setItem("useritem", value);
  }

  return (
    <>
      <Header />
      <h5 className="text-center mb-5">Choose Items</h5>
      {Object.entries(data).map((item, index) => (
        <Container className="my-3" key={index}>
          <Row>
            <div className="d-flex justify-content-end">
              <Col lg={5}>
                <ListGroup variant="flush" className="rounded-1">
                  <ListGroup.Item>
                    {item[1]}
                    <Badge bg="primary" pill className="float-end">
                      {Math.floor(Math.random() * 10)}
                    </Badge>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg={4}>
                <Link to={"/Cart"} className="">
                  <Button
                    variant=""
                    style={{ background: "#8700ff" }}
                    className="mx-3 text-white"
                    onClick={() => store(item[1])}
                  >
                    Add to Cart
                  </Button>
                </Link>
                {/* Your content here */}
              </Col>
            </div>
          </Row>
        </Container>
      ))}
    </>
  );
};

export default Category1;
