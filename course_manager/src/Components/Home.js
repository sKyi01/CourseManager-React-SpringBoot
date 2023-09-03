import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home || Course Manager";
  }, []);

  return (
    <div style={{ backgroundColor: "#CAC9CC" }}>
      <Container fluid className="text-center mt-5">
        <h1 className="">Welcome to Course Manager</h1>
        <p> this my course manage application using react and spring boot</p>

        <Button outline>Start Course</Button>
      </Container>
    </div>
  );
};

export default Home;
