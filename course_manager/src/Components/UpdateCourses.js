import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import base_url from "../api/SpringBootApi";
import { Link } from "react-router-dom";

const UpdateCourses = ({ selected }) => {
  const [course, setCourse] = useState({
    id: selected?.id,
    title: selected?.title,
    description: selected?.description,
  });

  const handleUpdate = () => {
    axios
      .put(`${base_url}/update-courses/${course.id}`, course)
      .then((response) => {
        toast.success("Course updated successfully");
      })
      .catch((error) => {
        toast.error("Course update failed");
      });
  };

  return (
    <Fragment>
      <h1 className="text-center">Update Course Detail</h1>

      <Form>
        <FormGroup>
          <label htmlFor="userId">Course Id</label>
          <Input
            disabled
            type="number"
            value={course.id}
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
            value={course.title}
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <Input
            type="text"
            value={course.description}
            name="description"
            id="description"
            style={{ height: 200 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container>
          <Link to="/view-courses">
            <Button
              onClick={handleUpdate}
              type="button" // Changed to type="button"
              className="bg-success"
            >
              Update Course
            </Button>
          </Link>

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

export default UpdateCourses;
