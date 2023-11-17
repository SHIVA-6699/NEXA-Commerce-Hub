import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Toast, ToastContainer } from "react-bootstrap";
import { API, graphqlOperation } from "aws-amplify";
import { createOrderdetails1 } from "../graphql/mutations";

const Address = () => {
  const [formData, setFormData] = useState({
    houseNo: "",
    streetName: "",
    stateCity: "",
    pincode: "",
  });
  const [item, setItem] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [error, seterror] = useState("");

  useEffect(() => {
    try {
      const storedItem = window.localStorage.getItem("useritem");
      setItem(storedItem || "");
    } catch (error) {
      console.error("Error retrieving useritem from local storage:", error);
    }
  }, []);

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
      address: `${formData.houseNo} ${formData.streetName} ${formData.stateCity} ${formData.pincode}`,
      orders: item,
    };

    try {
      await API.graphql(
        graphqlOperation(createOrderdetails1, { input: addressData })
      );
      setAlertVisible(true);
      setDisableButton(true);
      setToastVisible(true);

      // Hide the toast after 2 seconds
      setTimeout(() => {
        setToastVisible(false);
      }, 10000);
    } catch (error) {
      console.error("Error adding address:", error);
      seterror("Server Busy Try again Later");
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

          {alertVisible === true ? (
            <Alert
              variant="success"
              onClose={() => setAlertVisible(false)}
              dismissible
            >
              Address successfully saved!
            </Alert>
          ) : (
            <p className="text-danger">{error}</p>
          )}  

          {toastVisible && (
            <ToastContainer position="top-end">
              <Toast onClose={() => setToastVisible(false)} className="m-5">
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>Few seconds ago</small>
                </Toast.Header>
                <Toast.Body className="text-success">Your Address Succssfully saved Please Continue Payment Section</Toast.Body>
              </Toast>
            </ToastContainer>
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
