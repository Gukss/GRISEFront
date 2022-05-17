import React, { useRef, useEffect } from "react";
import styled from 'styled-components';
import NormalConsultList from "./List/NormalConsultList"
import RequestConsultList from "./List/RequestConsultList";

const Header = () => {
  const NormalConsultRef = useRef(null);
  const RequestConsultRef = useRef(null);
  const NormalConsultListRef = useRef(null);
  const RequestConsultListRef = useRef(null);
  useEffect(() => {
    onClickNormalConsultListBtn();
  }, []);

  const onClickNormalConsultListBtn = () => {
    NormalConsultRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    NormalConsultRef.current.style.color = "#3A6C7B";
    RequestConsultRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    RequestConsultRef.current.style.color = "#b1b1b1";
    NormalConsultListRef.current.style.display="block";
    RequestConsultListRef.current.style.display="none";
  };

  const onClickRequestConsultBtn = () => {
    NormalConsultRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    NormalConsultRef.current.style.color = "#b1b1b1";
    RequestConsultRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    RequestConsultRef.current.style.color = "#3A6C7B";
    NormalConsultListRef.current.style.display="none";
    RequestConsultListRef.current.style.display="block";
  };
  return (
    <div>
      <div style={{ display: "flex",width:"95%",margin: "0 auto" }}>
        <NormalConsultBtn ref={NormalConsultRef} onClick={onClickNormalConsultListBtn}>
          일반 피드백
        </NormalConsultBtn>
        <RequestConsultBtn
          ref={RequestConsultRef}
          onClick={onClickRequestConsultBtn}
        >
          요청받은 피드백
        </RequestConsultBtn>
      </div>
			<div ref={NormalConsultListRef}>
      	<NormalConsultList/>
			</div>
			<div ref={RequestConsultListRef}>
				<RequestConsultList/>
			</div>
    </div>
  );
};

const NormalConsultBtn = styled.span`
  width: 100%;
  height: 2.5rem;
  margin: 0 auto;
  display: flex;
  line-height: 2.5rem;
  justify-content: center;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: bold;
`;

const RequestConsultBtn = styled.span`
  width: 100%;
  height: 2.5rem;
  margin: 0 auto;
  display: flex;
  line-height: 2.5rem;
  justify-content: center;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: bold;
`;

export default Header;
