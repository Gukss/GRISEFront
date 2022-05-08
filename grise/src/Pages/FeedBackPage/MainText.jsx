import React, { useState } from "react";
import { Row, Col, Select, Divider } from "antd";

const MainText = () => {
  const [text, setText] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, illo."
  );
  return (
    <>
      <Row>
        <Col>{text}</Col>
      </Row>
    </>
  );
};

export default MainText;
