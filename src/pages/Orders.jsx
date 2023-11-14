import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card ,Spinner} from "react-bootstrap";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import Review from "../components/Review";

const Orders = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const itemCategory = window.localStorage.getItem("category");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allOrders = await API.graphql({
          query: queries.listOrderdetails1s,
        });
        const ordersData = allOrders.data.listOrderdetails1s.items;

        setOrders(ordersData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h3 className="text-center mt-5">Orders</h3>
      <Row className="justify-content-center">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          orders.map((order, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title className="text-capitalize">
                    {order.orders}
                  </Card.Title>
                  <Card.Text>Address: {order.address}</Card.Text>
                  <Card.Text>ID: {order.id}</Card.Text>
                  <Review/>
                  <Button variant="success">
                    <Spinner animation="grow" size="sm" role="status" />{" "}
                    Tracking
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Orders;
