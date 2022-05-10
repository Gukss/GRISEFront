import React, {useState, useRef} from 'react'
import { Row, Col, Select, Divider } from "antd";
import styled from "styled-components";
import Comment from "./Comment";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

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
      <Comment commentList={commentList}></Comment>
      <StyeldFooter>
        <form
          style={{
            height: "100%",
            width: "97%",
            margin: "0 auto",
            display: "flex",
          }}
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="피드백을 입력해주세요."
            style={{ height: "100%", width: "75%", border: "none", flex: "1" }}
            onChange={(e) => {
              getComment(e);
            }}
            value={comment}
            ref={inputEl}
          ></input>
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <BsFillArrowUpCircleFill
              style={{
                float: "right",
                height: "2rem",
                width: "2rem",
                border: "none",
                marginLeft: "auto",
                marginTop: "auto",
                marginBottom: "auto",
                color: "#3A6C7B",
              }}
            />
          </button>
        </form>
      </StyeldFooter>
    </>
  );
};


const StyeldFooter = styled.footer`
  width: 100%;
  height: 3rem;
  position: fixed;
  bottom: 0;
  max-width: 1200px;
  margin: 0 auto;
  border-top: #3a6c7b solid 1px;
  display: flex;
`;

export default Footer;