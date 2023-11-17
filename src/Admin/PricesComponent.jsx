import React, { useState } from "react";
import { createPriceTable2, updatePriceTable2 } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PricesComponent = () => {
  const [itemname, setItemname] = useState("");
  const [price, setPrice] = useState("");
  const [mode, setMode] = useState("add"); // "add" or "update"
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleAddOrUpdateEntry = async () => {
    const priceDetails = {
      itemname: itemname,
      price: price,
    };

    try {
      if (mode === "add") {
        // Add new entry
        await API.graphql(
          graphqlOperation(createPriceTable2, { input: priceDetails })
        );

        // Display success toast
        toast.success("Entry added successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else if (mode === "update" && selectedItemId) {
        // Update existing entry
        await API.graphql(
          graphqlOperation(updatePriceTable2, {
            input: { ...priceDetails, id: selectedItemId },
          })
        );

        // Display success toast
        toast.success("Entry updated successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Reset to "Add Entry" mode after updating
        setMode("add");
        setSelectedItemId(null);
      }

      // Clear input fields after adding/updating
      setItemname("");
      setPrice("");
    } catch (error) {
      toast.error(
        `Error ${
          mode === "add" ? "adding" : "updating"
        } entry Please Enter Valid Inputs.`,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  };

  const handleSwitchMode = () => {
    // Switch between "Add Entry" and "Update Entry" modes
    if (mode === "add") {
      setMode("update");
      // Set selectedItemId (assuming you have an ID for the item you want to update)
      // Replace 'selectedItemIdValue' with the actual ID value you want to update
      setSelectedItemId("selectedItemIdValue");
    } else {
      setMode("add");
      setSelectedItemId(null);
    }
  };

  return (
    <div>
      <h3 className="text-center mt-5 mb-5">
        {mode === "add" ? "Add New Entry" : "Update Entry"}
      </h3>
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
        <button
          className="btn btn-primary border-0"
          onClick={handleAddOrUpdateEntry}
          style={{ background: "#163A66" }}
        >
          {mode === "add" ? "Add Entry" : "Update Entry"}
        </button>
        <button className="btn btn-secondary ms-2" onClick={handleSwitchMode}>
          Switch to {mode === "add" ? "Update" : "Add"} Mode
        </button>
      </div>
      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default PricesComponent;
