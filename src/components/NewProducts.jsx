import { Col, Row, Card } from "react-bootstrap";
import img1 from "../assets/CardImages/img1.jpg";
import img2 from "../assets/CardImages/img2.jpg";
import img3 from "../assets/CardImages/img3.jpg";
import img4 from "../assets/CardImages/img4.jpg";
import img5 from "../assets/CardImages/img5.jpg";
import img6 from "../assets/CardImages/img6.jpg";
import "../Sass/componet.scss";
import "../index.css";
const NewProducts = () => {
    const global_color = "$primay";
  return (
    <>
      <h3 className="text-center mb-5 global" style={{ color: global_color}}>
        Newly Lanuched Products
      </h3>
      <div className="d-flex justify-content-center flex-wrap gap-5 mb-5">
        <Row className="d-flex justify-content-center">
          <Col lg={3}>
            <Card className="shadow-lg card">
              <Card.Img src={img1} className="cardimg shadow rounded" />
              <Card.Body>
                <Card.Text>
                  <h6>About Item</h6>
                  The iPhone 15 introduces Dynamic Island, ensuring you stay
                  updated with alerts and Live Activities, enhancing
                  multitasking. With its innovative design, it boasts a durable,
                  water-resistant build and a 6.1" Super Retina XDR display that
                  shines even in bright sunlight.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="shadow-lg card">
              <Card.Img
                src={img2}
                className="cardimg shadow rounded"
                height={170}
              />
              <Card.Body>
                <Card.Text>
                  <h6>About Item</h6>
                  This SmartWatch features NFC technology for convenient
                  wireless communication and Bluetooth v5.0 for seamless
                  connectivity. Its compact 1.2-inch display provides a clear
                  interface, while the 1.18GHz processor ensures smooth
                  performance
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="shadow-lg card">
              <Card.Img
                src={img3}
                className="cardimg shadow rounded"
                height={170}
              />
              <Card.Body>
                <Card.Text>
                  <h6>About Item</h6>
                  This smart TV supports popular streaming apps like Netflix,
                  Prime Video, Disney+Hotstar, and YouTube, offering a wide
                  range of content options. Powered by Google TV, it provides a
                  user-friendly interface. With an Ultra HD (4K) resolution of
                  3840 x 2160 pixels
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* second row */}

        <Row className="d-flex justify-content-center">
          <Col lg={3}>
            <Card className="shadow-lg card">
              <Card.Img src={img4} className="cardimg shadow rounded" height={200} />
              <Card.Body>
                <Card.Text>
                  <h6>About Item</h6>
                  Introducing the Leader Beast 26T MultiSpeed Mountain Bike, a
                  high-quality and reliable choice for cycling enthusiasts. With
                  its sleek model name "Beast 26T," this bicycle features a
                  durable frame.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="shadow-lg card">
              <Card.Img
                src={img5}
                className="cardimg shadow rounded"
                height={170}
              />
              <Card.Body>
                <Card.Text>
                  <h6>About Item</h6>
                  This sofa offers comfortable seating for one person and does
                  not include a mattress. Its compact dimensions of 71 cm in
                  width, 40 cm in height, and 91 cm in depth make it a
                  space-saving choice, fitting well in smaller living spaces.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="shadow-lg card">
              <Card.Img
                src={img6}
                className="cardimg shadow rounded"
                height={170}
              />
              <Card.Body>
                <Card.Text>
                  <h6>About Item</h6>
                  This printer features dual USB connectivity options, allowing
                  for versatile and convenient printing. It offers
                  cost-efficient printing with a black ink cost of 24 paise per
                  page and a color ink cost of just 9 paise per page, making it
                  budget-friendly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default NewProducts;
