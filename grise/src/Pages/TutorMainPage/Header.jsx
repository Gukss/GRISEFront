import React, { useRef, useEffect } from "react";
import styled from 'styled-components';
import NormalConsultList from "./List/NormalConsultList"
import RequestConsultList from "./List/RequestConsultList";
import ConsultingList from "./List/ConsultingList";


const Header = () => {
  const NormalConsultRef = useRef(null);
  const RequestConsultRef = useRef(null);
  const NormalConsultListRef = useRef(null);
  const RequestConsultListRef = useRef(null);
  const consultingRef = useRef(null);
  const consultingListRef = useRef(null);
  useEffect(() => {
    onClickNormalConsultListBtn();
  }, []);

  const onClickNormalConsultListBtn = () => {
    NormalConsultRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    NormalConsultRef.current.style.color = "#3A6C7B";
    NormalConsultListRef.current.style.display="block";

    RequestConsultRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    RequestConsultRef.current.style.color = "#b1b1b1";
    RequestConsultListRef.current.style.display="none";

    consultingRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    consultingRef.current.style.color = "#b1b1b1";
    consultingListRef.current.style.display="none";
  };

  const onClickRequestConsultBtn = () => {
    NormalConsultRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    NormalConsultRef.current.style.color = "#b1b1b1";
    NormalConsultListRef.current.style.display="none";

    RequestConsultRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    RequestConsultRef.current.style.color = "#3A6C7B";
    RequestConsultListRef.current.style.display="block";

    consultingRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    consultingRef.current.style.color = "#b1b1b1";
    consultingListRef.current.style.display="none";
  };

  const onClickConsultingBtn = () =>{
    NormalConsultRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    NormalConsultRef.current.style.color = "#b1b1b1";
    NormalConsultListRef.current.style.display="none";

    RequestConsultRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    RequestConsultRef.current.style.color = "#b1b1b1";
    RequestConsultListRef.current.style.display="none";

    consultingRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    consultingRef.current.style.color = "#3A6C7B";
    consultingListRef.current.style.display="block";
  }
  return (
    <div>
      <div style={{ display: "flex",width:"95%",margin: "0 auto" }}>
        <ConsultBtn ref={NormalConsultRef} onClick={onClickNormalConsultListBtn}>
          일반 피드백
        </ConsultBtn>
        <ConsultBtn
          ref={RequestConsultRef}
          onClick={onClickRequestConsultBtn}
        >
          요청받은 피드백
        </ConsultBtn>
        <ConsultBtn ref={consultingRef} onClick={onClickConsultingBtn}>
          진행중인 피드백
        </ConsultBtn>
      </div>
			<div ref={NormalConsultListRef}>
      	<NormalConsultList/>
			</div>
			<div ref={RequestConsultListRef}>
				<RequestConsultList/>
			</div>
      <div ref={consultingListRef}>
        <ConsultingList/>
      </div>
    </div>
  );
};

const ConsultBtn = styled.span`
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
