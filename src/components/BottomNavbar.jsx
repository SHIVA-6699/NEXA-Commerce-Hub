import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="bottom">
        <Container className="">
          <Nav className="mx-auto  d-flex gap-5 my-0">
            <Link to={'/'} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="p-0"
                >
                <path
                  fill="currentColor"
                  d="M19 9.3V4h-3v2.6L12 3L2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"
                  />
              </svg>
              </Link>
              <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                >
                <path
                  fill="currentColor"
                  d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3l7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"
                  />
              </svg>
                  </Link>
           
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default BottomNavbar;
