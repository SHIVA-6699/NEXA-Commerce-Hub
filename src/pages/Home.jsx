import React, { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import '../Button.css'
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import '../Button.css'
import Hedaer from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import HomepageAlbum from "../components/HomepageAlbum";
import HomePageSlide1 from "../components/HomePageSlide1";
import HomepageSlide2 from "../components/HomepageSlide2";
import NewProducts from "../components/NewProducts";
import ExsitingProductiHome from "../components/ExsitingProductHome";
import Contact from "./Contact";
import "../index.css"
const Home = () => {
  const [email, setemail] = useState("");
  
  useEffect(() => {
    const user = Auth.currentAuthenticatedUser();
    user.then((resove) => {
      setemail(resove.attributes.email);
    });
  }, []);
  window.localStorage.setItem("email", email);

  return (
    <>
      <Hedaer />
      <div className="mt-5 ">
        <HomepageAlbum />
      </div>
      <div className="mb-5">
        <HomePageSlide1 />
      </div>
      <Form className="d-flex justify-content-center mt-5 mb-5">
        <Col xl={5}></Col>
      </Form>
      <div className="">
        <HomepageSlide2 />
      </div>
      <div>
        <ExsitingProductiHome />
      </div>
      <div>
        <NewProducts />
      </div>
      <div class="container shine-btn text-center">
        <Link to={"/Createrequest"} className="btn btn-anim">
          <h5 className="text-center text-white ">Shop Now</h5>
        </Link>
      </div>
      <hr className="mt-5" />
      <Contact />
      <BottomNavbar />
    </>
  );
};
export default Home;
