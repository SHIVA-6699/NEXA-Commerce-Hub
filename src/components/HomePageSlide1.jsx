import React, { useState, useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
const images = [
  require("../assets/HomePageSlide/img1.jpg"),
  require("../assets/HomePageSlide/img2.png"),
  require("../assets/HomePageSlide/img3.png"),
  require("../assets/HomePageSlide/img4.png"),
  require("../assets/HomePageSlide/img5.png"),
  //   require("../assets/HomePageSlide/img6.png"),
  require("../assets/HomePageSlide/img7.png"),
  require("../assets/HomePageSlide/img8.jpg"),
  require("../assets/HomePageSlide/img9.png"),
  require("../assets/HomePageSlide/img10.png"),
  require("../assets/HomePageSlide/img11.png"),
  require("../assets/HomePageSlide/img12.png"),
  require("../assets/HomePageSlide/img13.jpg"),
  require("../assets/HomePageSlide/img14.png"),
  require("../assets/HomePageSlide/img15.png"),
];

const HomePageSlide1 = () => {
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
    <div className="border border-1 border-black mt-5 border-opacity-25">
      <Row>
        <Col sm={2} className="bg-white">
          <div className=" mt-5 d-flex justify-content-center">
            <h6 className="text-center" style={{ color: "#163A66" }}>
              Type with Industries
            </h6>
          </div>
        </Col>
        <Col sm={10} className="bg-white">
          <div className="d-flex overflow-hidden gap-0 m-0 p-0 bg-white">
            {images.map((src, index) => (
              <Image
                key={index}
                rounded
                className="m-0 py-3 "
                width={150}
                height={120}
                src={src}
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

export default HomePageSlide1;
