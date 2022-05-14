import React, { useState } from "react";
import { Row, Col, Select, Divider } from "antd";
import styled from "styled-components";

const MainText = (props) => {
  const [text, setText] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, illo."
  );
  return (
    <StyledMainText>
      <Row>
        <Col>{props?.content}</Col>
      </Row>
    </StyledMainText>
  );
};

const StyledMainText = styled.div`
  width: 97%;
  height: 140px;
  margin: 0 auto;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default MainText;
