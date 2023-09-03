import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import { Button, Row, Col, TabContent, Container } from "reactstrap";
import Home from "./Components/Home";
import Course from "./Components/Course";
import AllCourses from "./Components/AllCourses";
import AddCourses from "./Components/AddCourses";
import Header from "./Components/Header";
import Menus from "./Components/Menus";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import UpdateCourses from "./Components/UpdateCourses";
import { useState } from "react";
import AboutProject from "./Components/AboutProject";

import ContactUs from "./Components/ContactUs";
function App() {
 
  const [selected, setSelected] = useState(null);

  

  return (

    

    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col>
              <Menus />
            </Col>
            <Col>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-courses" element={<AddCourses />} exact />
                <Route  path="/contact-us" element={<ContactUs/>} exact />
                <Route path="/about-project" element={<AboutProject />} exact />
                <Route
                  path="/view-courses"
                  element={
                    <AllCourses
                      
                      setSelected={setSelected}

                    />
                  }
                  exact
                />
                <Route
                  path="/update-courses"
                  element={<UpdateCourses selected={selected} />}
                  
                  exact
                />


               
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;