import React, { useState } from "react";
import { createPriceTable2 } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

const PriceList = () => {
  const [itemname, setItemname] = useState("");
  const [price, setPrice] = useState("");

  const handleAddEntry = async () => {
    const todoDetails = {
      itemname: itemname,
      price: price,
    };

    try {
      const newTodo = await API.graphql(
        graphqlOperation(createPriceTable2, { input: todoDetails })
      );
      console.log("New Todo:", newTodo);
      alert("Entry added successfully!");
    } catch (error) {
      console.error("Error creating entry:", error);
      alert("Error adding entry. Please check the console for details.");
    }
  };

  return (
    <div>
      <h3 className="text-center mt-5 mb-5">Add New Entry</h3>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="itemname" className="form-label">
            Item Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="itemname"
            value={itemname}
            onChange={(e) => setItemname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAddEntry}>
          Add Entry
        </button>
      </div>
    </div>
  );
};

export default PriceList;
