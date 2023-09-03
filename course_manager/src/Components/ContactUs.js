import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardLink,
  CardTitle,
} from "reactstrap";
import MyCardImage from "../img/MyCard.jpg";

const ContactUs = () => {
  return (
    <div>
      <Card
        style={{
          width: "40rem",
        }}
      >
        <CardBody>
          <CardTitle tag="h5">Akash Khandagale</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Full Stack Developer
          </CardSubtitle>
        </CardBody>
        <img
          style={{
            height: "200px",
          }}
          alt="Akash Khandagale"
          src={MyCardImage}
          width="100%"
        />
        <CardBody>
          <CardText>
            I'm a Full Stack Developer passionate about creating web
            applications. I have experience with React and Spring Boot. This is
            my course manager web app."
          </CardText>
          <CardLink href="mailto:akashkhandagale038@gmail.com">
            <label> Email:</label> akashkhandagale038@gmail.com
          </CardLink>
          <CardLink href="https://www.linkedin.com/in/akash-khandagale-5a72b3204/">
            LinkedIn Profile
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default ContactUs;
