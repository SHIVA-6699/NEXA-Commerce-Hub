import React, { useState, useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
const images = [
  require("../assets/HomePageSlide1/img1.jpg"),
  require("../assets/HomePageSlide1/img2.png"),
  require("../assets/HomePageSlide1/img3.png"),
  require("../assets/HomePageSlide1/img4.png"),
  require("../assets/HomePageSlide1/img5.png"),
  //   require("../assets/HomePageSlide1/img6.png"),
  require("../assets/HomePageSlide1/img7.png"),
  require("../assets/HomePageSlide1/img8.jpg"),
  require("../assets/HomePageSlide1/img9.png"),
  require("../assets/HomePageSlide1/img10.png"),
  require("../assets/HomePageSlide1/img11.png"),
  require("../assets/HomePageSlide1/img12.png"),
  require("../assets/HomePageSlide1/img13.jpg"),
  require("../assets/HomePageSlide1/img14.png"),
  require("../assets/HomePageSlide1/img15.png"),
];

const HomePageSlide11 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="border border-1 border-gray " style={{ marginTop: "6rem" }}>
      <Row className="">
        <Col sm={2} className="bg-white">
          <div className=" mt-5 d-flex justify-content-center">
            <h5 className="text-center" style={{ color: "#163A66" }}>
              Industry veterans
            </h5>
          </div>
        </Col>
        <Col sm={10} className="bg-white">
          <div className="d-flex overflow-hidden gap-0 m-0 p-0 bg-white">
            {images.map((src, index) => (
              <Image
                key={index}
                rounded
                className="m-0 py-3"
                width={150}
                height={120}
                src={src}
                loading="lazy"
                style={{
                  transform: `translateX(${index - currentIndex}00%)`,
                  transition: "transform 1s",
                }}
              />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePageSlide11;
