import React, { useRef, useEffect } from "react";
import styled from 'styled-components';

const Header = () => {
  const NomalConsultRef = useRef(null);
  const RequestedConsultRef = useRef(null);
  useEffect(() => {
    console.log("일반피드백 불러오기");
    onClickNomalConsultBtn();
  }, []);

  const onClickNomalConsultBtn = () => {
    NomalConsultRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    NomalConsultRef.current.style.color = "#3A6C7B";
    RequestedConsultRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    RequestedConsultRef.current.style.color = "#b1b1b1";
  };

  const onClickRequestedConsultBtn = () => {
    NomalConsultRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    NomalConsultRef.current.style.color = "#b1b1b1";
    RequestedConsultRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    RequestedConsultRef.current.style.color = "#3A6C7B";
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <NormalConsultBtn ref={NomalConsultRef} onClick={onClickNomalConsultBtn}>
          일반 피드백
        </NormalConsultBtn>
        <RequestedConsultBtn
          ref={RequestedConsultRef}
          onClick={onClickRequestedConsultBtn}
        >
          요청받은 피드백
        </RequestedConsultBtn>
      </div>
      <div>리스트영역</div>
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
