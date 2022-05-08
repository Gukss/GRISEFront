import React from 'react'
import { Row, Col, Select, Divider } from "antd";
import styled from "styled-components";


const Footer = () => {

	return (
		<StyeldFooter>
			<form
				style={{height: '100%'}}>
				<input 
				type='text'
				placeholder="피드백을 입력해주세요."
				style={{height: '100%'}}
				></input>
				<button>전송</button>
			</form>

		</StyeldFooter>
	);
};

const StyeldFooter = styled.footer`
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  background-color: #ffb300;
  max-width: 768px;
`;

export default Footer;