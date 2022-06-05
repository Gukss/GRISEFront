import React, {useState, useRef, useEffect} from 'react'
import { Row, Col, Select, Divider } from "antd";
import styled from "styled-components";
import Comment from "./Comment";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import axios from 'axios';

const Footer = ({ consultId, tuteeName, consultType }) => {
  const ItemRef = useRef(null);
  const [content, setContent] = useState("");
  const [commentList, setCommentList] = useState([]);
  // const [tuteeName, setTuteeName] = useState("");
  const inputEl = useRef(null);
  const commentCountRef = useRef(3);
  const currentCommentRef = useRef(0);

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
        setCommentList(res.data);
        console.log("리스트", commentList);
      })
      .catch((error) => {
        console.log(error);
      });
			if (consultType === "Requesting") {
        inputEl.current.disabled = true;
      } else if (consultType === "Consulting") {
        inputEl.current.disabled = false;
      } else if (consultType === "SolvedConsult") {
        inputEl.current.disabled = true;
				inputEl.current.placeholder = "상담이 완료되었습니다. 입력이 불가합니다."
      }
  }, []);

  useEffect(() => {
    if (commentList.length !== 0) {
      ItemRef.current.scrollIntoView({ behavior: "smooth" });
      currentCommentRef.current = 0;
      let localUserId = window.localStorage.getItem("userId");
      commentList.map((el) => {
        //id로 바꿔야 한다.
        if (el.userId === localUserId) {
          currentCommentRef.current += 1;
        }
      });
      commentCountRef.current = 3 - currentCommentRef.current;
      console.log('수정전',inputEl.current.placeholder);
      inputEl.current.placeholder = `피드백을 입력해주세요. ${commentCountRef.current}회 입력 가능합니다.`;
      console.log('수정후',inputEl.current.placeholder);
      if (commentCountRef.current === 0) {
        inputEl.current.placeholder = `입력횟수를 모두 사용하셨습니다.`;
      }
      if (commentCountRef.current <= 0) {
        inputEl.current.disabled = true;
      }
    }
  }, [commentList]);

  const getItem = () => {
    if (commentList.length === 0) {
      return;
    }
    const result = [];

    for (let i = 0; i < commentList.length - 1; i++) {
      result.push(
        <CommentItem
          key={i}
          backgroundColor={
            tuteeName === commentList[i]?.userName ? "#e3e3e3" : "#3a6c7b"
          }
          color={tuteeName === commentList[i]?.userName ? "#000" : "#fff"}
        >
          <span>{commentList[i]?.userName}: </span>
          <span>{commentList[i]?.content}</span>
        </CommentItem>
      );
    }
    result.push(
      <CommentItem
        key={commentList.length - 1}
        ref={ItemRef}
        backgroundColor={
          tuteeName === commentList[commentList.length - 1]?.userName
            ? "#e3e3e3"
            : "#3a6c7b"
        }
        color={
          tuteeName === commentList[commentList.length - 1]?.userName
            ? "#000"
            : "#fff"
        }
      >
        <span>{commentList[commentList.length - 1]?.userName}: </span>
        <span>{commentList[commentList.length - 1]?.content}</span>
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
    axios
      .post(
        `http://grise.p-e.kr/tutee/consults/${consultId}/comment`,
        {
          content: content,
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
            "Content-Type": `application/json`,
          },
        }
      )
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
      <InputContinaer>
        <InputComment
          onChange={(e) => {
            getComment(e);
          }}
          type="text"
          placeholder="피드백을 입력해주세요. 3회 입력 가능합니다."
          value={content}
          ref={inputEl}
        ></InputComment>
        <SubmitBtn onClick={onSubmit}>
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
        </SubmitBtn>
      </InputContinaer>
    </div>
  );
};

const InputContinaer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  bottom: 0;
  border-top: #3a6c7b solid 1px;
	padding: 0.2rem 0;
	align-items: center;
`;
const InputComment = styled.input`
  width: 90%;
  border: none;
  flex: 1;
  :focus {
    outline: none;
  }
  background: transparent;
`;


const SubmitBtn = styled.div`
  width: 10%;
	`

const StyledComment = styled.div`
  height: 17rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
	overflow-x: hidden;
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
	/* overflow-x: hidden; */
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