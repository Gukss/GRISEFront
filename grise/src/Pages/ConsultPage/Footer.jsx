import React, {useState, useRef, useEffect} from 'react'
import { Row, Col, Select, Divider } from "antd";
import styled from "styled-components";
import Comment from "./Comment";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import axios from 'axios';

const Footer = () => {

	const [content, setContent] = useState('');
	const [commentList, setCommentList] = useState([]);
	const [tutee_name, setTutee_name] = useState('');

	const inputEl = useRef(null);

	useEffect(() => {
		axios.get("./Json/consultPage/consult.json")
		.then((response) => {
			setCommentList(response.data.consult?.commentList);
			setTutee_name(response.data.consult?.tutee.name);
			// console.log(response.data.consult?.tutee.name);
			// console.log(response.data.consult?.commentList);
		});
	}, []);

	const getComment = (e) => {
    setContent(e.target.value);
		console.log(content);
  };

	const onSubmit = (e) => {
		e.preventDefault();
		if (content === '') {
			return;
		}
		setCommentList(
			commentList.concat({comment: {
				comment_id: 1,
				content: content,
				user_name: "유저이름1"
			}})
		)
		setContent('');
		inputEl.current.focus();
	}
	
	return (
    <>
      <div>
        <Comment commentList={commentList} tutee_name={tutee_name}></Comment>
      </div>
      <StyledFooter>
        <form
          style={{
            height: "100%",
            width: "97%",
            margin: "0 auto",
            display: "flex",
          }}
          onSubmit={onSubmit}
        >
          <StyledInput
            type="text"
            placeholder="피드백을 입력해주세요."
            onChange={(e) => {
              getComment(e);
            }}
            value={content}
            ref={inputEl}
          ></StyledInput>
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
      </StyledFooter>
    </>
  );
};


const StyledFooter = styled.footer`
  width: 100%;
  height: 3rem;
  position: fixed;
  bottom: 0;
  max-width: 1200px;
  margin: 0 auto;
  border-top: #3a6c7b solid 1px;
  display: flex;
	background-color: #fff;
`;

const StyledInput = styled.input`
	height: 100%;
	width: 75%; 
	border: none;
	flex: 1;
	:focus {
		outline: none;
	}
`;

export default Footer;