import React, { useState } from "react";
import styled from "styled-components";

const Comment = ({ commentList, tutee_name }) => {
  return (
    <StyledComment>
      {commentList.map((comment, index) => (
        <li
          key={index}
          style={{
            listStyleType: "none",
            backgroundColor:
              tutee_name === comment.comment?.user_name ? "#e3e3e3" : "#3a6c7b",
            width: "20rem",
            marginBottom: "0.5rem",
            borderRadius: "10px",
            padding: "0.2rem 0",
            paddingLeft: "0.7rem",
            fontSize: "0.9rem",
            color:
              tutee_name === comment.comment?.user_name ? "#000" : "#fff",
          }}
          // style={
          //   tutee_name === comment.comment?.user_name
          //     ? { backgroundColor: "#e3e3e3" }
          //     : { backgroundColor: "#3a6c7b" }
          // }
        >
          <span>{comment.comment?.user_name}</span>
          {comment.comment?.content}
        </li>
      ))}
    </StyledComment>
  );
};

const StyledComment = styled.ul`
`;

export default Comment;
