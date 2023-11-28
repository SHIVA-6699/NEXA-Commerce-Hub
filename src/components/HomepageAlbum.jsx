import img1 from "../assets/HomePageAlbumImages/img1.jpg";
import img2 from "../assets/HomePageAlbumImages/img2.jpg";
import img3 from "../assets/HomePageAlbumImages/img3.jpg";
import img4 from "../assets/HomePageAlbumImages/img4.jpg";
import img5 from "../assets/HomePageAlbumImages/img5.png";
import img6 from "../assets/HomePageAlbumImages/img6.png";
import '../Sass/componet.scss';
import { Image, Row, Col } from "react-bootstrap";
import "../index.css";

const HomepageAlbum = () => {
  const global_color = "$primay";
  const images = {
    item1: img1,
    item2: img2,
    item3: img3,
    item4: img4,
    item5: img5,
    item6: img6,
  };
    window.localStorage.setItem("cartnum", -1);

  return (
    <>
      <div className="d-flex justify-content-center ">
        <Row className="mt-5">
          <Col sm={12} lg={6} className="d-flex justify-content-between  pe-5 ">
            <div className="mt-5">
              <div>
                <h2 className="h1 w-100 global" >
                  Your One-Stop
                </h2>
              </div>
              <div>
                <h3 className="" style={{ color: global_color }}>
                  E-Commerce, Destination
                </h3>
              </div>
              <hr
                className=""
                style={{
                  color: "#ffcc00",
                  width: "15rem",
                  borderWidth: ".15rem",
                }}
              />
              <p
                className="global"
                style={{
                  width: "20rem",
                  "text-align": "justify",
                  color:global_color,
                }}
              >
                Our e-commerce website offers a vast marketplace where you can
                find an extensive array of products, from fashion and
                electronics to home decor and more
              </p>
            </div>
          </Col>
          <Col sm={12} lg={6} className="ps-5x">
            <div
              className="d-flex flex-wrap justify-content-center gap-4"
              style={{ width: "36rem" }}
            >
              {Object.entries(images).map((value, index) => (
                <div key={index} className="">
                  <Image
                    src={value[1]}
                    width={140}
                    height={180}
                    rounded
                    className="shadow img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomepageAlbum;
