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
  height: 18rem;
  margin: 0 auto;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
	display: flex;
  flex-direction: column-reverse;
`;


export default CommentContainer;