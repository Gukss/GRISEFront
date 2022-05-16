import React, { useState, useRef, useMemo, useEffect } from "react";
import { Row, Col, Select, Divider } from "antd";
import styled from "styled-components";

const MainText = (props) => {
	const MainContent = useRef()
	const text = String(props?.content);
	
	const [isShowMore, setIsShowMore] = useState(false);
  const textLimit = useRef(100);
	useEffect(() => {

	},)
  const commenter = useMemo(() => {
		console.log(props?.content);
    const shortReview = String(props?.content)?.slice(0, textLimit.current);
		if (text.length > textLimit.current){
			if(isShowMore) {
        return text;
      }
			return shortReview;
		}
		return text;
		console.log('sdf');
  }, [isShowMore]);

	const changeMainContentSize = () => {
		MainContent.current.style.height = (isShowMore)? "4rem" : "8rem";
		MainContent.current.style.marginBottom = (isShowMore)? "4rem" : "0rem";
	}

  return (
    <StyledMainText ref={MainContent}>
			{/* 비동기 처리하기 */}
      <div>{commenter}</div>
      <div
        onClick={() => {
          setIsShowMore(!isShowMore);
					changeMainContentSize();
        }}
      >
        {text.length > textLimit.current &&
          (isShowMore ? "[닫기]" : "...[더보기]")}
      </div>
    </StyledMainText>
  );
};

const StyledMainText = styled.div`
  width: 97%;
  height: 8rem;
  margin: 0 auto;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
	background-color: #fff;
`;

export default MainText;
