import React, { useState, useRef, useMemo, useEffect } from "react";
import { Row, Col, Select, Divider } from "antd";
import styled from "styled-components";

const MainText = (props) => {
  return (
    <StyledMainText>
      <div>{props?.content}</div>
    </StyledMainText>
  );
};

const StyledMainText = styled.div`
  width: 97%;
  height: 8rem;
  margin: 0 auto;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
	background-color: #fff;
`;

export default MainText;
