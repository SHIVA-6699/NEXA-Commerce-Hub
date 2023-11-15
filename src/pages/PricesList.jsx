import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";

const PricesList = () => {
  const todoDetails = {
    itemname: "sweatshirt",
    price: "499",
  };

  const createTodo = async () => {
    try {
      const newTodo = await API.graphql({
        query: mutations.createPriceTable2,
        variables: { input: todoDetails },
      });
      console.log("New Todo:", newTodo);
    } catch (error) {
      console.error("Error creating todo:", error);
      // Handle the error or ignore it if you don't want to log it
    }
  };

  useEffect(() => {
    createTodo();
    fetchOneTodo(); // Call the function to fetch one todo after creating a new one
  }, []); // Run this effect only once when the component mounts

  const fetchOneTodo = async () => {
    try {
      const oneTodo = await API.graphql({
        query: queries.getPriceTable2,
        variables: { itemname: "sweatshirt" },
      });
      console.log("One Tododata:", oneTodo.data.getPriceTable2.price);
    } catch (error) {
      console.error("Error fetching one todo:", error);
      // Handle the error or ignore it if you don't want to log it
    }
  };

  return (
    // Your JSX code here
    <></>
  );
};

export default PricesList;
