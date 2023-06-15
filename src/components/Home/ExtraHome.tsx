import { Container, Row, Col } from "react-bootstrap";
import Info from "./Info";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function ExtraHome() {
  return (
    <Container id="about">
      <Container>
        <Row>
          <Col md={5} className="home-about-social">
            <h1 className="contact-me-on">CONTACT ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/phamanhdung1813"
                  className="icon-color home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anh-dung-pham-38830b1a6"
                  className="icon-color home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:phamanhdung1813@gmail.com/"
                  className="icon-color home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
          <Info />
        </Row>
      </Container>
    </Container>
  );
}
export default ExtraHome;
