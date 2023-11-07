import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "../App.css";

const BHMUPI = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [upiID, setUpiID] = useState("");

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("shova");
    handleAlert();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex gap-2 align-items-end">
        <Form.Control
          placeholder="UPI ID @ybl, @Paytm input"
          className="mt-4 shadow-lg h-75"
          style={{ width: "15rem" }}
          value={upiID}
          onChange={(e) => setUpiID(e.target.value)}
          required
        />
        <Button className="h-75" variant="info" type="submit">
          Pay
        </Button>
      </div>
      <div className={`alert-container ${showAlert ? "show" : ""}`}>
        <Alert variant="primary">⚠️ Under Work!</Alert>
      </div>
    </form>
  );
};

export default BHMUPI;
