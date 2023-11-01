import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Offcanvas } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Auth } from "aws-amplify";

const Home = () => {
  const [email, setemail] = useState("");

  useEffect(() => {
    const user = Auth.currentAuthenticatedUser();
    user.then((resove) => {
      setemail(resove.attributes.email);
    });
  }, []);

  return (
    <>
      <Form className="d-flex justify-content-center mt-5">
        <Col xl={5}>
          <h6>{email}👋</h6>
          <p>Let's do something...</p>
          <InputGroup className="rounded-3">
            <Form.Control size="md" className=" shadow-lg" />
            <InputGroup.Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className=""
              >
                <path
                  fill="#fffff"
                  d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
                />
              </svg>
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Form>
      <h6 className="text-center mt-5">Quick Actions</h6>
      <Col lg={12} className="d-flex justify-content-center">
        <div className="d-flex justify-content-center mt-5 p-5 shadow-sm">
          <div>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#8700ff"
                  d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"
                />
              </svg>
            </a>
          </div>
          <div>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#8700ff"
                  d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm4 12h-4v3l-5-5l5-5v3h4v4z"
                />
              </svg>
            </a>
          </div>
        </div>
      </Col>
    </>
  );
};
export default Home;
