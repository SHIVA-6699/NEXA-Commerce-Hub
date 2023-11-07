import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/HomePageSlide/img1.jpg";
import img2 from "../assets/HomePageSlide/img2.png";
import img3 from "../assets/HomePageSlide/img3.png";
import { Image, Col, Row } from "react-bootstrap";
function HomepageSlide2() {
  return (
    <Row className="d-flex gap-0 m-0 p-0">
      <Col lg={6}>
        <Carousel fade className="m-auto w-100 text-black" data-bs-theme="dark">
          <Carousel.Item
            className="text-black w-50"
            style={{ marginLeft: "8rem" }}
          >
            <Image src={img1} width={500} height={200} rounded />
          </Carousel.Item>

          <Carousel.Item
            className="text-black w-50"
            style={{ marginLeft: "8rem" }}
          >
            <Image src={img2} width={500} height={200} rounded />
          </Carousel.Item>

          <Carousel.Item
            className="text-black w-50 "
            style={{ marginLeft: "8rem" }}
          >
            <Image src={img3} width={500} height={200} rounded />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col lg={6}>
        <Carousel fade className="m-auto w-100 text-black" data-bs-theme="dark">
          <Carousel.Item
            className="text-black w-50"
            style={{ marginLeft: "8rem" }}
          >
            <Image src={img1} width={500} height={200} rounded />
          </Carousel.Item>

          <Carousel.Item
            className="text-black w-50"
            style={{ marginLeft: "8rem" }}
          >
            <Image src={img2} width={500} height={200} rounded />
          </Carousel.Item>

          <Carousel.Item
            className="text-black w-50 "
            style={{ marginLeft: "8rem" }}
          >
            <Image src={img3} width={500} height={200} rounded />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default HomepageSlide2;
