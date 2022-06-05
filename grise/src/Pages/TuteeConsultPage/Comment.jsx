import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Comment = ({ commentList, tutee_name }) => {
	const ItemRef = useRef(null);
	
	useEffect (() => {
		ItemRef.current.scrollIntoView({ behavior: "smooth" });
	}, []);

	const getItem = () => {
    const result = [];
    for (let i = 0; i < commentList.length - 1; i++) {
      result.push(
        <div
          key={i}
          style={{
            listStyleType: "none",
            backgroundColor:
              tutee_name === comment.comment?.user_name ? "#e3e3e3" : "#3a6c7b",
            width: "90%",
            marginBottom: "0.5rem",
            borderRadius: "10px",
            padding: "0.2rem 0",
            paddingLeft: "0.7rem",
            fontSize: "0.9rem",
            color: tutee_name === comment.comment?.user_name ? "#000" : "#fff",
          }}
        >
          <span>{comment.comment?.user_name}</span>
          {comment.comment?.content}
        </div>
      );
    }
    result.push(
			<div
          key={commentList.length - 1}
					ref={ItemRef}
          style={{
            listStyleType: "none",
            backgroundColor:
              tutee_name === comment.comment?.user_name ? "#e3e3e3" : "#3a6c7b",
            width: "90%",
            marginBottom: "0.5rem",
            borderRadius: "10px",
            padding: "0.2rem 0",
            paddingLeft: "0.7rem",
            fontSize: "0.9rem",
            color:
              tutee_name === comment.comment?.user_name ? "#000" : "#fff",
          }}
        >
          <span>{comment.comment?.user_name}</span>
          {comment.comment?.content}
        </div>
    );
    return result;
  };

  return <StyledComment>{getItem()}</StyledComment>;
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

const comment = styled.div`
	
`

export default Comment;
