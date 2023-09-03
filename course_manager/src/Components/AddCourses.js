import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import base_url from "../api/SpringBootApi";

const AddCourses = () => {
  const [course, setCourse] = useState({
    userId: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    document.title = "Add Courses || Course Manager";
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(course); // You can access the course object here
    // Call the function to add the course to the database
    addCourseToDatabase(course);
  };

  // Function to add course details to the database
  const addCourseToDatabase = (data) => {
    axios
      .post(`${base_url}/add-courses`, data)
      .then((response) => {
        console.log(response);
        toast.success("Course added successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Course Adding Failed");
      });
  };

  return (
    <Fragment>
      <h1 className="text-center">Fill Course Detail</h1>

      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="userId">Course Id</label>
          <Input
            type="number"
            placeholder="Enter Course Id Here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="title">Course Title</label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title here"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <Input
            type="text"
            placeholder="Enter Description here"
            name="description"
            id="description"
            style={{ height: 200 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container>
          <Button type="submit" className="bg-success">
            Add Course
          </Button>
          <Button
            type="reset"
            className="bg-warning"
            style={{ marginLeft: 20 }}
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourses;
