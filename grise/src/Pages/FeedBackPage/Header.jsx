import React, {useState} from "react";
import { Row, Col, Select, Divider } from "antd";

const Header = () => {
	const [header, setHeader] = useState('제목')
	const [nickName, setNickName] = useState('nickname')
	const [location, setLocation] = useState('location')
  return (
    <>
      <Row>
				<Col>
					{header}
				</Col>
			</Row>
			<Row>
				<Col>
					{nickName}
				</Col>
				<Col>
					{location}
				</Col>
			</Row>
    </>
  );
};

export default Header;
