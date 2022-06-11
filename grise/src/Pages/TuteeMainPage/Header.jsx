import React, { useEffect, useRef,useState } from "react";
import styled from 'styled-components';
import ConsultList from "./List/ConsultList"

const Header = () => {
  const consultingListRef = useRef(null);
  const consultingHeaderRef = useRef(null);
  const [loadingConsulting,SetLoadingConsulting] = useState(false);
  const tutorListRef = useRef(null);
  const tutorHeaderRef = useRef(null);
  const [loadingTutor,SetLoadingTutor] = useState(false);
  const solvedConsultListRef = useRef(null);
  const solvedConsultHeaderRef = useRef(null);
  const [loadingSolvedConsult,SetLoadingSolvedConsult] = useState(false);
  const requestConsultListRef = useRef(null);
  const requestConsultHeaderRef = useRef(null);
  const [loadingRequestConsult,SetLoadingRequestConsult] = useState(false);

  const ShowRequestConsultList = () => {
    requestConsultHeaderRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    requestConsultHeaderRef.current.style.color = "#3A6C7B";
    requestConsultListRef.current.style.display="block";

    consultingHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    consultingHeaderRef.current.style.color = "#b1b1b1";
    consultingListRef.current.style.display="none";

    tutorHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    tutorHeaderRef.current.style.color = "#b1b1b1";
    tutorListRef.current.style.display="none";

    solvedConsultHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    solvedConsultHeaderRef.current.style.color = "#b1b1b1";
    solvedConsultListRef.current.style.display="none";

    SetLoadingRequestConsult(true);
  }

  const ShowConsultingList = () =>{
    requestConsultHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    requestConsultHeaderRef.current.style.color = "#b1b1b1";
    requestConsultListRef.current.style.display="none";

    consultingHeaderRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    consultingHeaderRef.current.style.color = "#3A6C7B";
    consultingListRef.current.style.display="block";

    tutorHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    tutorHeaderRef.current.style.color = "#b1b1b1";
    tutorListRef.current.style.display="none";

    solvedConsultHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    solvedConsultHeaderRef.current.style.color = "#b1b1b1";
    solvedConsultListRef.current.style.display="none";


    SetLoadingConsulting(true);
  }

  const ShowSolvedConsultList = () =>{
    requestConsultHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    requestConsultHeaderRef.current.style.color = "#b1b1b1";
    requestConsultListRef.current.style.display="none";

    consultingHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    consultingHeaderRef.current.style.color = "#b1b1b1";
    consultingListRef.current.style.display="none";

    solvedConsultHeaderRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    solvedConsultHeaderRef.current.style.color = "#3A6C7B";
    solvedConsultListRef.current.style.display="block";

    tutorHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    tutorHeaderRef.current.style.color = "#b1b1b1";
    tutorListRef.current.style.display="none";

    SetLoadingSolvedConsult(true);
  }

  const ShowTutorList = () => {
    requestConsultHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    requestConsultHeaderRef.current.style.color = "#b1b1b1";
    requestConsultListRef.current.style.display="none";

    consultingHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    consultingHeaderRef.current.style.color = "#b1b1b1";
    consultingListRef.current.style.display="none";

    solvedConsultHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    solvedConsultHeaderRef.current.style.color = "#b1b1b1";
    solvedConsultListRef.current.style.display="none";

    tutorHeaderRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    tutorHeaderRef.current.style.color = "#3A6C7B";
    tutorListRef.current.style.display="block";

    SetLoadingTutor(true);
  }

  useEffect(()=>{
    ShowConsultingList(); //디폴트값 : 진행중인 피드백
  },[])

  return (
    <div>
      <HeaderContainer>
        <HeaderBtn ref={requestConsultHeaderRef} onClick={ShowRequestConsultList}>
          요청중
        </HeaderBtn>
        <HeaderBtn ref={consultingHeaderRef} onClick={ShowConsultingList}>
          진행중
        </HeaderBtn>
        <HeaderBtn ref={solvedConsultHeaderRef} onClick={ShowSolvedConsultList}>
          완료
        </HeaderBtn>
        <HeaderBtn ref={tutorHeaderRef} onClick={ShowTutorList}>
          튜터 선택
        </HeaderBtn>
      </HeaderContainer>
      <div ref={requestConsultListRef} style={{display:'none'}}>
        <ConsultList SetLoading={SetLoadingRequestConsult}  Loading={loadingRequestConsult} consult = "Requesting"/>
      </div>
      <div ref={consultingListRef} style={{display:'none'}}>
        <ConsultList SetLoading={SetLoadingConsulting} Loading={loadingConsulting} consult = "Consulting"/>
      </div>
      <div ref = {solvedConsultListRef} style={{display:'none'}}>
        <ConsultList SetLoading={SetLoadingSolvedConsult} Loading={loadingSolvedConsult} consult = "SolvedConsult"/>
      </div>
			<div ref={tutorListRef} style={{display:'none'}}>
				<ConsultList SetLoading={SetLoadingTutor} Loading={loadingTutor} consult="Tutor"/>
			</div>
    </div>
  );
};

const HeaderContainer = styled.span`
  display: flex;
  width: 95%;
  margin-left: 2.5%;
`

const HeaderBtn = styled.span`
  width: 100%;
  height: 2.5rem;
  margin: 0 auto;
  display: flex;
  line-height: 2.5rem;
  justify-content: center;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: bold;
  border-bottom : #b1b1b1 solid 0.2rem;
  color: #b1b1b1;
`;

export default Header;
