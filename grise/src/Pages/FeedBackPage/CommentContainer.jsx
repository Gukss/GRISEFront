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

`;


export default CommentContainer;