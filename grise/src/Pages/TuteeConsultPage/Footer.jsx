import React, {useState, useRef, useEffect} from 'react'
import { Row, Col, Select, Divider } from "antd";
import styled from "styled-components";
import Comment from "./Comment";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import axios from 'axios';

const Footer = ({ consultId }) => {
  const ItemRef = useRef(null);
  const [content, setContent] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [tuteeName, setTuteeName] = useState("");
  const inputEl = useRef(null);

	const commentListCheck = (comments) => {

	};

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://grise.p-e.kr/tutee/consults/${consultId}/comments`,
      headers: {
        Authorization: window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
		.then((res) => {
			commentListCheck(res.data);
		})
		.catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    if (commentList.length !== 0) {    
    	ItemRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [commentList]);

  const getItem = () => {
    if(commentList.length === 0){
			return;
		};
    const result = [];

    for (let i = 0; i < commentList.length - 1; i++) {
      result.push(
        <CommentItem
          key={i}
          backgroundColor={
            tuteeName === commentList[i]?.comment.userName
              ? "#e3e3e3"
              : "#3a6c7b"
          }
          color={
            tuteeName === commentList[i]?.comment.userName ? "#000" : "#fff"
          }
        >
          <span>{commentList[i]?.comment.userName}</span>
          <span>{commentList[i]?.comment.content}</span>
        </CommentItem>
      );
    }
    result.push(
      <CommentItem
        key={commentList.length - 1}
        ref={ItemRef}
        backgroundColor={
          tuteeName === commentList[commentList.length - 1]?.comment.userName
            ? "#e3e3e3"
            : "#3a6c7b"
        }
        color={
          tuteeName === commentList[commentList.length - 1]?.comment.userName
            ? "#000"
            : "#fff"
        }
      >
        <span>{commentList[commentList.length - 1]?.comment?.userName}</span>
        <span>{commentList[commentList.length - 1]?.comment.content}</span>
      </CommentItem>
    );
    return result;
  };

  const getComment = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (content === "") {
      return;
    }
		axios({
      method: "POST",
      url: `http://grise.p-e.kr/tutee/consults/${consultId}/comments`,
      headers: {
        Authorization: window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      data: {
        content: content,
      },
    })
      .then((res) => {
        axios({
          method: "GET",
          url: `http://grise.p-e.kr/tutee/consults/${consultId}/comments`,
          headers: {
            Authorization: window.localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
						setCommentList(res.data);
						setContent("");
            inputEl.current.focus();
					})
          .catch((error) => {
            console.log("1", error);
          });
      })
      .catch((error) => {
        console.log("2", error);
      });
  };

  return (
    <div>
      <StyledComment>{getItem()}</StyledComment>
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
    </div>
  );
};

const StyledComment = styled.div`
  height: 17rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const CommentItem = styled.div`
	list-style-type: none;
	background-color: ${(props) => props.backgroundColor};
	width: 90%;
	margin-bottom: 0.5rem;
	border-radius: 10px;
	padding: 0.2rem 0;
	padding-left: 0.7rem;
	font-size: 0.9rem;
	color: ${(props) => props.color};
	margin-left: 5%;
`;

const StyledFooter = styled.footer`
  width: 100%;
  height: 3rem;
  /* position: fixed; */
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