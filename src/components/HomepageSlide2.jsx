import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/HomePageSlide2/img1.jpg";
import img2 from "../assets/HomePageSlide2/img2.jpg";
import img3 from "../assets/HomePageSlide2/img3.jpg";
import img4 from "../assets/HomePageSlide2/img4.jpg";
import img5 from "../assets/HomePageSlide2/img5.jpg";
import img6 from "../assets/HomePageSlide2/img6.jpg";
import '../index.css'
import { Image, Col, Row } from "react-bootstrap";
function HomepageSlide2() {
  return (
    <Row className="d-flex justify-content-center ">
      <Col lg={6}>
        <Carousel fade className="d-flex justify-content-center" data-bs-theme="dark">
          <Carousel.Item
            className="text-black w-50 d-flex "
            style={{ marginLeft: "7rem" }}
          >
            <Image src={img1} width={500} height={200} className="shadow-lg img" rounded />
          </Carousel.Item>

          <Carousel.Item
            className="text-black w-50"
            style={{ marginLeft: "7rem" }}
          >
            <Image src={img2} width={500} height={200} rounded className="shadow-lg img"/>
          </Carousel.Item>

          <Carousel.Item
            className="text-black w-50 "
            style={{ marginLeft: "7rem" }}
          >
            <Image src={img3} width={500} height={200} rounded className="shadow-lg img" />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col lg={6}>
        <Carousel fade className="m-auto w-100 text-black" data-bs-theme="dark">
          <Carousel.Item
            className="text-black w-50"
            style={{ marginLeft: "7rem" }}
          >
            <Image src={img4} width={500} height={200} rounded className="shadow-lg img" />
          </Carousel.Item>

          <Carousel.Item
            className="text-black w-50"
            style={{ marginLeft: "7rem" }}
          >
            <Image src={img5} width={500} height={200} rounded className="shadow-lg img" />
          </Carousel.Item>

          <Carousel.Item
            className="text-black w-50 "
            style={{ marginLeft: "7rem" }}
          >
            <Image src={img6} width={500} height={200} rounded className="shadow-lg img" />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default HomepageSlide2;
