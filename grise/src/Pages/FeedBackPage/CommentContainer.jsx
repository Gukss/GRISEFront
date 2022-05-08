import React from 'react'
import styled from "styled-components";
import Comment from './Comment'
const CommentContainer = () => {

	return (
		<StyledCommentContainer>
			<Comment />
		</StyledCommentContainer>
	);
};

const StyledCommentContainer = styled.div`
  width: 100%;
  margin: 0.5rem;
`;


export default CommentContainer;