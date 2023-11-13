import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { API, graphqlOperation } from "aws-amplify";
import { createOrderdetails } from "../graphql/mutations";

const Address = () => {
  const [formData, setFormData] = useState({
    houseNo: "",
    streetName: "",
    stateCity: "",
    pincode: "",
  });
  const [item, setItem] = useState(""); // State to hold the value from localStorage
  const [alertVisible, setAlertVisible] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const storedItem = window.localStorage.getItem("useritem");
    setItem(storedItem || "");
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addAddress = async () => {
    const orderId = generateRandomOrderId();
    const addressData = {
      id: orderId,
      address: `${formData.houseNo} ${formData.streetName} ${formData.stateCity} ${formData.pincode}`,
      orders: item, // Use the latest value of 'item' from state
    };

    try {
      await API.graphql(
        graphqlOperation(createOrderdetails, { input: addressData })
      );
      setAlertVisible(true);
      setDisableButton(true);
      setCount(count + 1);
    } catch (error) {
      console.error("Error adding address:", error);
    }
  };

  const generateRandomOrderId = () => {
    // Implement a function to generate a random order ID
    // You can use a library like uuid to generate a unique ID
    // Example: import { v4 as uuidv4 } from 'uuid';
    // const orderId = uuidv4();
    // return orderId;
  };

  return (
    <>
      <div>
        <h6>Add New Address</h6>
        <Form className="mb-5">
          <Form.Label className="m-3">House No:</Form.Label>
          <Form.Control
            className="mx-3"
            type="text"
            name="houseNo"
            value={formData.houseNo}
            onChange={handleInputChange}
          />

          <Form.Label className="m-3">Street Name:</Form.Label>
          <Form.Control
            className="mx-3"
            type="text"
            name="streetName"
            value={formData.streetName}
            onChange={handleInputChange}
          />

          <Form.Label className="m-3">State/City:</Form.Label>
          <Form.Control
            className="mx-3"
            type="text"
            name="stateCity"
            value={formData.stateCity}
            onChange={handleInputChange}
          />

          <Form.Label className="m-3">Pincode:</Form.Label>
          <Form.Control
            className="mx-3"
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
          />

          {/* ... (other form controls) */}

          {alertVisible && (
            <Alert
              variant="success"
              onClose={() => setAlertVisible(false)}
              dismissible
            >
              Address successfully saved!
            </Alert>
          )}

          <Button className="m-3" onClick={addAddress} disabled={disableButton}>
            Add Address
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Address;
