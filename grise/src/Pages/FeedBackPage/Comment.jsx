import React, { useState } from "react";
import styled from "styled-components";

const Comment = () => {
	const [comments, setComments] = useState([
    "comment 예시1",
    "comment 예시2",
    "comment 예시3",
    "comment 예시4",
  ]);
	let commentList = comments.map((comment) => (
		<div>
			{comment}
		</div>))
  return (
	<StyledComment>
		{commentList}
	</StyledComment>
	);
};

const StyledComment = styled.div`

`;

export default Comment;
