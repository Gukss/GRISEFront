import React, { useState } from "react";
import styled from "styled-components";

const Comment = (props) => {
	const {commentList} = props;

  return (
	<StyledComment>
		{commentList.map((comment, index) => (
			<li key={index}>
				<span>idid</span>{comment}
			</li>
		))}
	</StyledComment>
	);
};

const StyledComment = styled.ul`
`;

export default Comment;
