import React from "react";
import { Card, CardBody, CardText, CardHeader, CardTitle } from "reactstrap";

const AboutProject = () => {
  return (
    <div>
      <Card
        className="my-2"
        color="danger"
        inverse
        style={{
          width: "40rem",
        }}
      >
        <CardHeader>
          <h4>Project Description</h4>
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">Course Manager Web App</CardTitle>
          <CardText>
            The "Course Manager Web App" is a comprehensive application designed
            to streamline course management tasks.
          </CardText>
          <CardText>
            Key Features:
            <ul>
              <li>
                Create, update, and delete course information effortlessly.
              </li>
              <li>
                Track and organize course data, including titles and
                descriptions.
              </li>
              <li>
                Utilizes modern technologies such as React and Spring Boot for
                optimal performance and user experience.
              </li>
            </ul>
          </CardText>
          <CardText>
            This application is built using modern technologies and provides a
            user-friendly interface that simplifies administrative tasks, saving
            time and reducing errors.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutProject;
