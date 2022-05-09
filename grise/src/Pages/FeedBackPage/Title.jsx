import React, {useState} from "react";
import { Row, Col, Select, Divider } from "antd";
import styled from 'styled-components'
const Title = () => {
	const [header, setHeader] = useState('제목')
	const [nickName, setNickName] = useState('nickname')
	const [location, setLocation] = useState('location')
  return (
    <StyledTitle>
      <Row>
        <Col>{header}</Col>
      </Row>
      <Row>
        <Col>{nickName}</Col>
        <Col>{location}</Col>
      </Row>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
	width: 97%;
	margin: 0 auto;
`;

export default Title;
