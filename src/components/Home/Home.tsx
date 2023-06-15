import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import myAvatar from "../../Assets/Home/my-avatar.jpg";
import ExtraHome from "./ExtraHome";

function Home() {
  return (
    <section>
      <Container className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hello everyone <span className="wave">👋</span> !!! 
              </h1>
              <h1 className="heading-name">
                My name is 
                <strong className="main-name"> Stanley Pham</strong>
              </h1>
              <div style={{padding: 10}}>
                <Type />
              </div>

              <h1 className="short-description">
                I'm 22 years old, I am currently living in Toronto, Canada. 
                I graduated in Computer System Technology with 3 years Advanced Diploma. Especially, I am interested in 
                web development, and working with automatic tasks on Cloud platform. 
              </h1>
            </Col>
            
            
            <Col md={4} style={{ paddingTop: 50, paddingBottom: 50 }}>
              <img src={myAvatar} alt="home" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <ExtraHome/>
      
    </section>
    
    
  );
}

export default Home;
