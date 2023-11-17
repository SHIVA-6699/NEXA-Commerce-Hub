import React, { useState } from "react";
import AllOrders from "./Allorders"; // Assuming you have a component named AllOrders
import PricesComponent from "./PricesComponent"; // Replace with your Prices component
import ProductsComponent from "./ProductsComponent"; // Replace with your Products component
// import ProductsComponent from "./ProductsComponent"; // Replace with your Products component
import "../index.css";
import Users from "./Users";
import Allfeedback from "./Allfeedback";
import { Button } from "@aws-amplify/ui-react";
import { Link, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);
    const Logout=()=>{
     
    }
  const handleOptionClick = (option) => {
    // Update the selected option
    setSelectedOption(option);
  };

  const renderComponent = () => {
    switch (selectedOption) {
      case "orders":
        return <AllOrders />;
      case "prices":
        return <PricesComponent />;
      case "products":
        return <ProductsComponent />;
      case "users":
        return <Users />;
      case "feedback":
        return <Allfeedback />;
      // Add more cases for other options as needed
      default:
        return null;
    }
  };

  return (
    <div className="mt-5 rounded rounded-5">
      <div
        className="w-75 m-auto p-5 rounded d-flex justify-content-center"
        style={{ background: "#163A66" }}
      >
        <h4 className="text-center text-white ">Admin Panel</h4>
        <Link to={'/Home'} className="ms-auto">
          <Button className="">Signout</Button>
        </Link>
      </div>
      <div className="m-auto  w-75">
        {/* Navbar */}
        <nav className="mt-4">
          <ul className="list-unstyled d-flex gap-5 justify-content-center ">
            <li onClick={() => handleOptionClick("orders")} className="viewtag">
              <h5>Orders</h5>
            </li>
            <li onClick={() => handleOptionClick("prices")} className="viewtag">
              <h5>Prices</h5>
            </li>
            <li
              onClick={() => handleOptionClick("products")}
              className="viewtag"
            >
              <h5>Products</h5>
            </li>
            <li onClick={() => handleOptionClick("users")} className="viewtag">
              <h5>Users</h5>
            </li>
            <li
              onClick={() => handleOptionClick("feedback")}
              className="viewtag"
            >
              <h5>Feedback</h5>
            </li>
            {/* Add more options as needed */}
          </ul>
        </nav>

        {/* Render content based on the selected option */}
        <div>{renderComponent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
