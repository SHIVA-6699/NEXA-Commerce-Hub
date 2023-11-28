import { useState, useEffect } from "react";
import img1 from "../assets/HomePageSlide2/img1.jpg";
import img2 from "../assets/HomePageSlide2/img2.jpg";
import img3 from "../assets/HomePageSlide2/img3.jpg";
import img4 from "../assets/HomePageSlide2/img4.jpg";
import img5 from "../assets/HomePageSlide2/img5.jpg";
import img6 from "../assets/HomePageSlide2/img6.jpg";
import "../Sass/componet.scss";
import "../index.css";
import { Image, Col, Row, Carousel } from "react-bootstrap";
const images = [img1, img2, img3];
const images2 = [img4, img5, img6];
function HomepageSlide2() {
    const global_color = "$primay";
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };
  const nextImage2 = () => {
    setCurrentImage2((currentImage2 + 1) % images2.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };
  const prevImage2 = () => {
    setCurrentImage2((currentImage2 - 1 + images2.length) % images2.length);
  };
  useEffect(() => {
    const interval1 = setInterval(() => {
      nextImage();
      nextImage2();
    }, 3000);
    return () => {
      clearInterval(interval1);
    };
  }, [currentImage]);
  useEffect(() => {
    const interval2 = setInterval(() => {
      nextImage2();
    }, 2000);
    return () => {
      clearInterval(interval2);
    };
  }, [currentImage2]);

  return (
    <>
      <h3 className="text-center global" style={{ color: global_color }}>
        Special Events{" "}
      </h3>
      <div style={{ marginTop: "7rem","margin":"5rem" }} >
        <Row className=" d-flex justify-content-center p-0 m-0">
          <Col lg={6} className="">
            <div className="image-slider">
              <div className="slider-container">
                <Image
                  src={images[currentImage]}
                  alt={`Image ${currentImage + 1}`}
                  className="slider-image shadow-lg"
                  rounded
                />
              </div>

              <button
                onClick={prevImage}
                className="slider-button prev"
                style={{ background: "#163A66" }}
              >
                Previous
              </button>
              <button
                onClick={nextImage}
                className="slider-button next"
                style={{ background: "#163A66" }}
              >
                Next
              </button>
            </div>
          </Col>
          {/* second image */}
          <Col lg={6}>
            <div className="image-slider">
              <div className="slider-container">
                <Image
                  src={images2[currentImage2]}
                  alt={`Image ${currentImage2 + 1}`}
                  className="slider-image shadow-lg"
                  rounded
                />
              </div>

              <button
                onClick={prevImage2}
                className="slider-button prev"
                style={{ background: "#163A66" }}
              >
                Previous
              </button>
              <button
                onClick={nextImage2}
                className="slider-button next"
                style={{ background: "#163A66" }}
              >
                Next
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HomepageSlide2;
