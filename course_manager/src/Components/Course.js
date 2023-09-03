import React, { useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import base_url from "../api/SpringBootApi";
import { toast } from "react-toastify"; // Import 'toast' from 'react-toastify'
import AddCourses from "./AddCourses";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Course = ({ course, update, setSelected }) => {
  // Define the deleteCourse function
  const deleteCourse = (id) => {
    axios
      .delete(`${base_url}/delete-coursesById/${id}`)
      .then((response) => {
        console.log(response);
        // Use 'toast.success' to show a success message
        toast.success("Course deleted successfully");
        update(id);
      })
      .catch((error) => {
        console.log(error);
        // Use 'toast.error' to show an error message
        toast.error("Failed to delete course");
      });
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold"><b>{course.title}</b></CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button
            onClick={() => {
              deleteCourse(course.id);
            }}
            color="danger"
          >
            Delete
          </Button>

          <Link to="/update-courses">
            <Button
              onClick={() => setSelected(course)}
              color="warning"
              style={{ marginLeft: 20 }}
            >
              Update
            </Button>
          </Link>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
