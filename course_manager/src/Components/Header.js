import React, { Fragment } from "react";
import { Card, CardBody } from "reactstrap";

const Header = () => {
  return (
    <div className="text-center mt-4">
      <Card style={{ backgroundColor: "#C1A3DF" }}>
        <CardBody>
          <h1> Welcome to Course Manager</h1>
        </CardBody>
      </Card>
    </div>
  );
};
export default Header;
