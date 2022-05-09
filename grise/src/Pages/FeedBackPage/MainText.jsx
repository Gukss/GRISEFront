import React, { useState } from "react";
import { Row, Col, Select, Divider } from "antd";
import styled from "styled-components";

const MainText = () => {
  const [text, setText] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, illo."
  );
  return (
    <StyledMainText>
      <Row>
        <Col>{text}</Col>
      </Row>
    </StyledMainText>
  );
};

const StyledMainText = styled.div`
  width: 97%;
  margin: 0 auto;
`;

export default MainText;
