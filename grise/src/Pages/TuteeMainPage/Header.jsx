import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import RequestConsultList from "./List/RequestConsultList"
import TutorList from "./List/TutorList";

const Header = () => {
  const NomalConsultRef = useRef(null);
  const RequestedConsultRef = useRef(null);
  const TutorListRef = useRef(null);
  const RequestConsultListRef = useRef(null);
  useEffect(() => {
    console.log("일반피드백 불러오기");
    onClickNomalConsultBtn();
  }, []);

  const onClickNomalConsultBtn = () => {
    NomalConsultRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    NomalConsultRef.current.style.color = "#3A6C7B";
    RequestedConsultRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    RequestedConsultRef.current.style.color = "#b1b1b1";
    TutorListRef.current.style.display="None";
    RequestConsultListRef.current.style.display="block";
  };

  const onClickRequestedConsultBtn = () => {
    NomalConsultRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    NomalConsultRef.current.style.color = "#b1b1b1";
    RequestedConsultRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    RequestedConsultRef.current.style.color = "#3A6C7B";
    TutorListRef.current.style.display="block";
    RequestConsultListRef.current.style.display="None";
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <NormalConsultBtn ref={NomalConsultRef} onClick={onClickNomalConsultBtn}>
          피드백 요청 목록
        </NormalConsultBtn>
        <RequestedConsultBtn
          ref={RequestedConsultRef}
          onClick={onClickRequestedConsultBtn}
        >
          튜터 목록
        </RequestedConsultBtn>
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

const NormalConsultBtn = styled.span`
  width: 100%;
  height: 2.5rem;
  margin: 0 auto;
  display: flex;
  line-height: 2.5rem;
  justify-content: center;
  font-weight: bold;
`;

const RequestedConsultBtn = styled.span`
  width: 100%;
  height: 2.5rem;
  margin: 0 auto;
  display: flex;
  line-height: 2.5rem;
  justify-content: center;
  font-weight: bold;
`;

export default Header;
