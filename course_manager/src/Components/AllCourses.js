import { React, useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/SpringBootApi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import userEvent from "@testing-library/user-event";

const AllCourses = ({ setSelected }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "All Courses || Course Manager";
  }, []);

  const updateData = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  // function to call api method
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/get-allCourses`).then(
      (response) => {
        toast.success("successfully loaded all courses", {
          position: "bottom-center",
        });
        console.log(response);
        setCourses(response.data);
      },
      (error) => {
        toast.error("failed", { position: "bottom-center" });
      }
    );
  };

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  return (
    <div>
      <h1>All Courses Here</h1>

      {courses.length > 0
        ? courses.map((item) => (
            <Course
              setSelected={setSelected}
              key={item.id}
              course={item}
              update={updateData}
            />
          ))
        : "Not Available"}
    </div>
  );
};
export default AllCourses;
