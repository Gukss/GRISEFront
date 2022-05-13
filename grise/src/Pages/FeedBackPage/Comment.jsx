import React, { useState } from "react";
import styled from "styled-components";

const Comment = ({commentList}) => {
  return (
    <StyledComment>
      {commentList.map((comment, index) => (
        <li key={index} style={{ listStyleType: "none", backgroundColor: "#e3e3e3", width: "20rem", marginBottom: "0.5rem", 
				borderRadius: "10px", padding: "0.2rem 0", paddingLeft: "0.7rem", fontSize: "0.9rem"}}>
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
