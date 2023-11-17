import { Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div className="d-grid gap-5 mt-5 mb-5">
        <Row>
          <Col lg={2}>
            <div className="d-grid justify-content-start">
              <h6 className="text-center">ABOUT</h6>

              <ListGroup variant="flush" className="text-start">
                <ListGroup.Item  className="text-center"><Link to={'/Feedback'} className="me-0">Contact Us:</Link></ListGroup.Item>
                <ListGroup.Item className="text-center">About Us</ListGroup.Item>
                <ListGroup.Item className="text-center">Careers</ListGroup.Item>
                <ListGroup.Item className="text-center">Press</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col lg={2}>
            <div className="d-grid justify-content-start">
              <h6 className="text-center">HELP</h6>

              <ListGroup variant="flush" className="text-start">
                <ListGroup.Item>Payments</ListGroup.Item>
                <ListGroup.Item>Shipping</ListGroup.Item>
                <ListGroup.Item>Cancellation & Returns </ListGroup.Item>
                <ListGroup.Item>FAQ</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col>
            <div className="d-grid justify-content-start">
              <h6 className="text-center">Consumer Policy</h6>

              <ListGroup variant="flush" className="text-start">
                <ListGroup.Item>Cancellation & Returns</ListGroup.Item>
                <ListGroup.Item>Security</ListGroup.Item>
                <ListGroup.Item>Privacy</ListGroup.Item>
                <ListGroup.Item>Terms Of Use</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col>
            <h6 className="text-center">SOCIAL</h6>
            <div className="d-grid justify-content-start">
              <ListGroup variant="flush" className="text-start">
                <ListGroup.Item>Payments</ListGroup.Item>
                <ListGroup.Item>Shipping</ListGroup.Item>
                <ListGroup.Item>Cancellation & Returns </ListGroup.Item>
                <ListGroup.Item>FAQ</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>

          <Col>
            <h6>Mail Us:</h6>
            <div className="d-grid justify-content-start">
              <ListGroup variant="flush" className="text-start">
                <ListGroup.Item>
                  NeXa@gmail.com Buildngs Alyssa Begonia Outer Road Delhi
                  5005001 INDIA
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col>
            <h6>Registered Office Address:</h6>
            <div className="d-grid justify-content-start">
              <ListGroup variant="flush" className="text-start">
                <ListGroup.Item>
                  NeXa internet Private Limited,Buildings Alyssa Begoinia &&
                  Clove Embbasy Rollavaka Village Vizinagaram 500392 ,INDIA
                  CIN:949499393828 Telephone:+91 99499393828
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      <div className="d-flex justify-content-center rounded rounded-5 mb-5">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101974.4811564007!2d83.35598338880958!3d18.226031502459936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bef5e7fab5d93%3A0x8539c45d69778c2f!2sCenturion%20University%20Vizianagaram%20-%20BTech%20Engineering%20College%2C%20Paramedical%20Courses!5e0!3m2!1sen!2sin!4v1699867798857!5m2!1sen!2sin"
        width="1500"
        
        height="350"
        style={{"border":"0"}}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        </div>
    </>
  );
};
export default Contact;
