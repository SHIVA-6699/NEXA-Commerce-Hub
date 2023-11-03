import { Button, Container} from "react-bootstrap";
import Hedaer from "./Header";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "../index.css";
import logo from "./assets/download.png";
const Cart = () => {
  const [count, setCount] = useState(0);
  const data = window.localStorage.getItem("useritem");

  return (
    <>
      <Hedaer />
      <Container>
        <h4 className="text-center">Cart</h4>
        <p className="mx-5 issue-items"> Issued Items</p>
        <div className="d-flex justify-content-around ">
          <div className="d-flex gap-5">
            <img src={logo} width={50} height={40} className="rounded" ></img>
            <p className="fs-5">{data}</p>
          </div>
          <div className="d-flex">
            <Button
              onClick={() => {
                setCount(count + 1);
                window.localStorage.setItem("cartnum", count);
              }}
              className="mx-3"
              disabled={count === 5}
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
              className="mx-3"
              onClick={() => {
                setCount(count - 1);
                window.localStorage.setItem("cartnum", count);
              }}
              disabled={count === 0}
            >
              -
            </Button>
          </div>
        </div>
      </Container>
      <div
        className="d-flex justify-content-center "
        style={{ marginTop: "18rem" }}
      >
        <Button className="col-8 " variant="primary">
          Buy
        </Button>
      </div>
    </>
  );
};
export default Cart;
