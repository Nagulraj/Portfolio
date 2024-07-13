import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nagulraj Thangaraj </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am a 2024 Computer Science and Engineering Graduate
            <br />
            I have completed My college at St.joseph's College of Engineering,Chennai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing PC Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging out with friends in discord
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to Contribute to the Society in a Technical way"{" "}
          </p>
          <footer className="blockquote-footer">Nagul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
