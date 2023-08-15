import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ResumeDetails from "./ResumeDetails";
import { VscDesktopDownload } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { BsGithub, BsFillTelephoneInboundFill } from "react-icons/bs";
import myResume from "../../Assets/Resume/StanleyPham_Resume.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <br />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            className="download-rem"
            variant="outline-success"
            href={myResume}
            target="_blank"
          >
            <VscDesktopDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Profiles</h3>
            <ResumeDetails title="ANH DUNG PHAM" content={[]} />

            <div className="resume-item">
              <p className="li-rem">
                <BiWorld style={{ fontSize: "1.3rem" }} /> Website :{" "}
                <a href="https://stanleypham.com/">stanleypham.com</a>
              </p>
              <p className="li-rem">
                <SiLinkedin style={{ fontSize: "1.3rem" }} /> LinkedIn :{" "}
                <a href="https://www.linkedin.com/in/anh-dung-pham-38830b1a6/">
                  https://www.linkedin.com/in/anh-dung-pham-38830b1a6/
                </a>
              </p>
              <p className="li-rem">
                <BsGithub style={{ fontSize: "1.3rem" }} /> GitHub:{" "}
                <a href="https://github.com/phamanhdung1813">
                  https://github.com/phamanhdung1813
                </a>
              </p>

              <p style={{ fontSize: "1.3rem", textAlign: "left" }}>
                <BsFillTelephoneInboundFill style={{ fontSize: "1.3rem" }} />{" "}
                Telephone: <a href="tel:+16475759328">(+1) 647-575-9328</a>
              </p>

              <p style={{ fontSize: "1.3rem", textAlign: "left" }}>
                <MdEmail style={{ fontSize: "1.3rem" }} /> Email:{" "}
                <a href="mailto:phamanhdung1813@gmail.com">
                  phamanhdung1813@gmail.com
                </a>
              </p>
            </div>

            <ResumeDetails
              title=""
              content={[
                "Three years Computer System Technology student with solid experience in Networking support and Web development.",
                "Experienced in learning, practicing web applications and demonstrating common networking tasks on cloud platforms.",
                "Strong interperson, teamworking skills",
              ]}
            />

            <h3 className="resume-title">Experiences</h3>
            <ResumeDetails
              title="Junior Software Developer"
              company="Canada Life Assurance"
              date="September 2022 - May 2023"
              content={[
                "Developed the comprehensive end-to-end application with Java Apache Kafka on Maven project with. Achieved 90% advancement in real-time data and 65% reduction in erroneous values.",
                "Debugged errors with Splunk Cloud to decrease 70% of incorrect communication instances between the APIs, integrated and completed 55% of Process Designer on IBM FileNet.",
                "Extracted the real-time data as per user’s specification, exported the data to CSV files, and triggered the event action to increase 75% of the data accuracy and reliability.",
              ]}
            />

            <ResumeDetails
              title="Training Software Developer"
              company="FDM Group"
              date="May 2022 - September 2022"
              content={[
                "Developed Java core fundamental to handle the algorithms, APIs, and web application.",
                "Integrated Spring Boot Maven to develop end-to-end APIs, which increased multiple microservices between applications, and established communication with Data Access (JDBC, JPA, SQL).",
                "Contributed in developing the project through the Agile management platform.",
              ]}
            />

            <ResumeDetails
              title="Academic Assistant"
              company="Seneca College of Applied Arts and Technology"
              date="April 2021 – August 2021"
              content={[
                "Assisted incoming students in resolving laboratory challenges and monitored practical lab assessments.",
                "Conducted in-depth research into Python Bash Scripting, analyzed the network security tasks, and enhanced practical lab requirements. Contributed in a 65% of overall learning activities.",
                "Developed comprehensive report, addressed student’ inquiries, organized learning materials, and facilitated the delivery of educational content.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Skills and Achivements</h3>
            <ResumeDetails
              title="SKILLS AND ABILITIES"
              content={[
                "Comfortable with: Java, Maven, Spring, React, SQL",
                "Experienced with: Cisco Packet Tracer, Docker, Kubernetes, Jenkins, GitHub, Python, HTLM/CSS ",
                "Knowledgeable on: Amazon AWS, Azure, CentOS 8, Window OS, Spring Microservices.",
              ]}
            />
            <div className="resume-item">
              <h5 className="resume-title">CERTIFIED AND ACHIVEMENT</h5>
              <ul>
                <li className="li-rem">
                  • AWS Certified Solutions Architect Associate Certification
                  SAA-C03
                </li>
                <li className="li-rem">
                  • AWS Solution Architecture deep-dive for SAP-C02
                </li>
                <li className="li-rem">
                  • Udemy Java certifications for Spring Boot, Spring Cloud,
                  Spring Security
                </li>
                <li className="li-rem">
                  • Udemy hands-on Python & R Data Analysis.
                </li>
                <li className="li-rem">• Udemy ReactJS with modern Redux.</li>
              </ul>
            </div>

            {/* <div className="resume-item">
              <p className="li-rem">
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/anh-dung-pham-38830b1a6/">
                  https://www.linkedin.com/in/anh-dung-pham-38830b1a6/
                </a>
              </p>
              <p className="li-rem">
                GitHub:{" "}
                <a href="https://github.com/phamanhdung1813">
                  https://github.com/phamanhdung1813
                </a>
              </p>
            </div> */}

            <h3 className="resume-title">Education</h3>
            <ResumeDetails  
              title="COMPUTER SYSTEMS TECHNOLOGY | ADVANCED DIPLOMA "
              date="From 2019 - to August 2021"
              content={[
                "Total GPA: 3.8/4.0",
                "Awarded President's Honor List: 4.0/4.0 (4 semesters)",
                "Relevant Coursework: Enterprise Network Management - Emerging Technology (OPS635), Advanced Networking Administration (OPS535), Secure Scripting (SRT211), Database Systems (DAT702), Microsoft Window ADDS (WIN700), Open System Automation (OPS435).",
              ]}
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            className="download-rem"
            variant="outline-success"
            href={myResume}
            target="_blank"
          >
            <VscDesktopDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
