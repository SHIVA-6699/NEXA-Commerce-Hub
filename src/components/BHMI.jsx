import { useState } from "react";
import { Form } from "react-bootstrap";
const BHMUPI = () => {
  const [check, setCheck] = useState("");
  return (
    <>
      <Form.Control
        placeholder="UPI ID @ybl,@Paytm input "
        className="mt-4 shadow-lg h-75 mx-5"
        style={{ width: "15rem" }}
      ></Form.Control>
    </>
  );
};
export default BHMUPI;
