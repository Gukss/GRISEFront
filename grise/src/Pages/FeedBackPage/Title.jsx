import React, {useState} from "react";
import { Row, Col, Select, Divider } from "antd";
import styled from 'styled-components'
const Title = ({title, tuteeName, tutorName}) => {
  return (
    <StyledTitle>
      <StyledHeader>{title}</StyledHeader>
      <StyledName>{tutorName}{tuteeName}</StyledName>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  width: 97%;
  margin: 0 auto;
  border-bottom: #3a6c7b solid 1px;
	padding: 1rem 0;
	display: flex;
`;

const StyledHeader = styled.div`
  font-weight: bold;
  color: #3a6c7b;
	margin-left: 1rem;
`;

const StyledName = styled.div`
  font-weight: bold;
  color: #b1b1b1;
	margin-left: auto;
	margin-right: 3rem;
`;

export default Title;
