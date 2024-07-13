import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Swiftics"
              description="Data visualization project to take any two columns from a csv file to create a unique link with which the user
can visualize the data in any browser."
              ghLink="https://github.com/Nagulraj/swiftics"
              // demoLink="https://"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="clipboard-s3bucket"
              description="It is a web app in which we can paste the image we copied on the clipboard ,the app will upload the image in aspecific order in s3 bucket."
              ghLink="https://github.com/Nagulraj/swiftics"
              // demoLink="https://"              
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Portfolio"
              description="and this is my portfolio"
              ghLink="https://github.com/Nagulraj/swiftics"
              // demoLink="https://"              
            />
          </Col> */}

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
