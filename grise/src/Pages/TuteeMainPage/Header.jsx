import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import RequestConsultList from "./List/RequestConsultList"
import TutorList from "./List/TutorList";

const Header = () => {
  const RequestConsultRef = useRef(null);
  const TutorRef = useRef(null);
  const RequestConsultListRef = useRef(null);
  const TutorListRef = useRef(null);
  useEffect(() => {
    onClickRequestConsultBtn();
  }, []);

  const onClickRequestConsultBtn = () => {
    RequestConsultRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    RequestConsultRef.current.style.color = "#3A6C7B";
    TutorRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    TutorRef.current.style.color = "#b1b1b1";
    TutorListRef.current.style.display="None";
    RequestConsultListRef.current.style.display="block";
  };

  const onClickTutorBtn = () => {
    RequestConsultRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    RequestConsultRef.current.style.color = "#b1b1b1";
    TutorRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    TutorRef.current.style.color = "#3A6C7B";
    TutorListRef.current.style.display="block";
    RequestConsultListRef.current.style.display="None";
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <RequestConsultBtn ref={RequestConsultRef} onClick={onClickRequestConsultBtn}>
          피드백 요청 목록
        </RequestConsultBtn>
        <TutorBtn
          ref={TutorRef}
          onClick={onClickTutorBtn}
        >
          튜터 목록
        </TutorBtn>
      </div>
			<div ref={RequestConsultListRef}>
      	<RequestConsultList />
			</div>
			<div ref={TutorListRef}>
				<TutorList />
			</div>
    </div>
  );
};

const RequestConsultBtn = styled.span`
  width: 100%;
  height: 2.5rem;
  margin: 0 auto;
  display: flex;
  line-height: 2.5rem;
  justify-content: center;
  font-weight: bold;
`;

const TutorBtn = styled.span`
  width: 100%;
  height: 2.5rem;
  margin: 0 auto;
  display: flex;
  line-height: 2.5rem;
  justify-content: center;
  font-weight: bold;
`;

export default Header;
