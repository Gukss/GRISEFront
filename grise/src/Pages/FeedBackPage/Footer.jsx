import React, {useState, useRef} from 'react'
import { Row, Col, Select, Divider } from "antd";
import styled from "styled-components";
import Comment from "./Comment";


const Footer = () => {
	const [comment, setComment] = useState('');
	const [commentList, setCommentList] = useState([]);
	const inputEl = useRef(null);
	const getComment = (e) => {
    setComment(e.target.value);
  };
	const onSubmit = (e) => {
		e.preventDefault();
		if (comment === '') {
			return;
		}
		setCommentList((commentList) => [...commentList, comment]);
		setComment('');
		inputEl.current.focus();
	}
	return (
		<>
			<Comment commentList={commentList}>

			</Comment>
			<StyeldFooter>
				<form style={{ height: "100%", width: "100%" }} onSubmit={onSubmit}>
					<input
						type="text"
						placeholder="피드백을 입력해주세요."
						style={{ height: "100%", width: "75%" }}
						onChange={(e) => {
							getComment(e);
						}}
						value={comment}
						ref={inputEl}
					></input>
					<button
						style={{ float: "right", height: "80%", alignItems: "center" }}
					>
						전송
					</button>
				</form>
			</StyeldFooter>
		</>
  );
};


const StyeldFooter = styled.footer`
  width: 97%;
  height: 3rem;
  position: fixed;
  bottom: 0;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
`;

export default Footer;