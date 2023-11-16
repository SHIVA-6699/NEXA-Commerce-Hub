import { Alert, Button, Container, Col } from "react-bootstrap";
import Hedaer from "./Header";
import { useState,useEffect } from "react";
import { Storage } from "aws-amplify";
import { Form } from "react-bootstrap";
import "../index.css";
import { Link } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";
const Cart = () => {
  const [count, setCount] = useState(0);
  const data1 = window.localStorage.getItem("useritem");
  const data2 = window.localStorage.getItem("category");
  console.log(data1, data2);

    const [imagePath, setImagePath] = useState("");

    useEffect(() => {
      const loadImagePath = async () => {
        try {
          const path = await Storage.get(`${data2}/${data1}.jpg`);
          setImagePath(path);
        } catch (error) {
          console.error("Error loading image path:", error);
        }
      };

      loadImagePath();
    }, [data1, data2]);
  return (
    <>
      <Hedaer />
      <Container>
        <h4 className="text-center">Cart</h4>
        <p className="mx-5 issue-items"> Issued Items</p>
        <div className="d-flex justify-content-around pt-5 rounded-1">
          <div className="d-flex gap-5">
            <img
              src={imagePath}
              width={50}
              height={50}
              className="rounded exsimg1"
            ></img>
            <p className="fs-5">{data1}</p>
          </div>
          <div className="d-flex">
            <Button
              onClick={() => {
                setCount(count + 1);
                window.localStorage.setItem("cartnum", count);
              }}
              className="mx-3 border-0"
              disabled={count === 5}
              style={{ background: "#163a66" }}
            >
              +
            </Button>
            <Form.Control
              className="text-center"
              value={count}
              style={{ width: "5rem" }}
              onChange={(e) => e.target.value}
            ></Form.Control>
            <Button
              className="mx-3 border-0"
              onClick={() => {
                setCount(count - 1);
                window.localStorage.setItem("cartnum", count);
              }}
              disabled={count === 0}
              style={{ background: "#163a66" }}
            >
              -
            </Button>
          </div>
        </div>
      </Container>
      {count > 0 ? (
        <Link to={"/Checkout"} className="">
          <div
            className="d-flex justify-content-center "
            style={{ marginTop: "18rem" }}
          >
            <Button
              className="col-4 text-white rounded rounded-5"
              variant=""
              style={{ background: "#163a66" }}
            >
              Buy
            </Button>
          </div>
        </Link>
      ) : (
        <div
          className="w-100 d-flex justify-content-center msg"
          style={{ marginTop: "13rem" }}
        >
          <Col xxl={10}>
            <Alert variant="danger text-center">Add Items</Alert>
          </Col>
        </div>
      )}
      <BottomNavbar />
    </>
  );
};
export default Cart;
