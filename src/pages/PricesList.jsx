import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";

const PricesList = () => {
  const todoDetails = {
    address: "Todo 7",
    orders: "Learn AWS AppSyn32c4",
  };

  const createTodo = async () => {
    try {
      const newTodo = await API.graphql({
        query: mutations.createOrderdetails1,
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
        query: queries.getOrderdetails1,
        variables: { orders: "Learn AWS AppSync" },
      });
      console.log("One Tododata:", oneTodo);
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
