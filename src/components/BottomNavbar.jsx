import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Sass/varaibles.scss";
import "../Sass/Bottom.scss";


const BottomNavbar = () => {
    
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary shadow-lg w-100 bottom-navbar"
        style={{ height: "3.5rem" }}
        fixed="bottom"
       
        bg="dark"
      >
        <Container className="w-100 d-flex justify-content-evenly gap-5">
          <Nav className="">
            <Row>
              <div className="d-flex justify-content-between  align-self-center gap-5 w-100 mt-2">
                <Col md={6}>
                  <Link
                    to={"/"}
                    style={{ background: "#163A66" }}
                    className="p-2 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="36"
                      viewBox="0 0 24 24"
                      className="p-0"
                    >
                      <path
                        fill="#ffffff"
                        d="M19 9.3V4h-3v2.6L12 3L2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"
                      />
                    </svg>
                  </Link>
                </Col>
                <Col md={6}>
                  <Link
                    to={"/Orders"}
                    style={{ background: "#163A66" }}
                    className="p-2 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#ffffff"
                        d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3l7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"
                      />
                    </svg>
                  </Link>
                </Col>
              </div>
            </Row>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default BottomNavbar;
