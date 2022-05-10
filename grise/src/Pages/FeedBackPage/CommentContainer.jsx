import React from 'react'
import styled from "styled-components";
import Footer from "./Footer";

const CommentContainer = (props) => {

	return (
		<StyledCommentContainer>
			<Footer />
		</StyledCommentContainer>
	);
};

const StyledCommentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;


export default CommentContainer;