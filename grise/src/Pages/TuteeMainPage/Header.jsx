import React, { useEffect, useRef,useState } from "react";
import styled from 'styled-components';
import ConsultList from "./List/ConsultList"

const Header = () => {
  const ConsultingListRef = useRef(null);
  const ConsultingHeaderRef = useRef(null);
  const [LoadingConsulting,SetLoadingConsulting] = useState(false);
  const TutorListRef = useRef(null);
  const TutorHeaderRef = useRef(null);
  const [LoadingTutor,SetLoadingTutor] = useState(false);
  const SolvedConsultListRef = useRef(null);
  const SolvedConsultHeaderRef = useRef(null);
  const [LoadingSolvedConsult,SetLoadingSolvedConsult] = useState(false);
  const RequestConsultListRef = useRef(null);
  const RequestConsultHeaderRef = useRef(null);
  const [LoadingRequestConsult,SetLoadingRequestConsult] = useState(false);

  const ShowRequestConsultList = () => {
    RequestConsultHeaderRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    RequestConsultHeaderRef.current.style.color = "#3A6C7B";
    RequestConsultListRef.current.style.display="block";

    ConsultingHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    ConsultingHeaderRef.current.style.color = "#b1b1b1";
    ConsultingListRef.current.style.display="none";

    TutorHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    TutorHeaderRef.current.style.color = "#b1b1b1";
    TutorListRef.current.style.display="none";

    SolvedConsultHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    SolvedConsultHeaderRef.current.style.color = "#b1b1b1";
    SolvedConsultListRef.current.style.display="none";

    SetLoadingRequestConsult(true);
  }

  const ShowConsultingList = () =>{
    RequestConsultHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    RequestConsultHeaderRef.current.style.color = "#b1b1b1";
    RequestConsultListRef.current.style.display="none";

    ConsultingHeaderRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    ConsultingHeaderRef.current.style.color = "#3A6C7B";
    ConsultingListRef.current.style.display="block";

    TutorHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    TutorHeaderRef.current.style.color = "#b1b1b1";
    TutorListRef.current.style.display="none";

    SolvedConsultHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    SolvedConsultHeaderRef.current.style.color = "#b1b1b1";
    SolvedConsultListRef.current.style.display="none";


    SetLoadingConsulting(true);
  }

  const ShowSolvedConsultList = () =>{
    RequestConsultHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    RequestConsultHeaderRef.current.style.color = "#b1b1b1";
    RequestConsultListRef.current.style.display="none";

    ConsultingHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    ConsultingHeaderRef.current.style.color = "#b1b1b1";
    ConsultingListRef.current.style.display="none";

    SolvedConsultHeaderRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    SolvedConsultHeaderRef.current.style.color = "#3A6C7B";
    SolvedConsultListRef.current.style.display="block";

    TutorHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    TutorHeaderRef.current.style.color = "#b1b1b1";
    TutorListRef.current.style.display="none";

    SetLoadingSolvedConsult(true);
  }

  const ShowTutorList = () => {
    RequestConsultHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    RequestConsultHeaderRef.current.style.color = "#b1b1b1";
    RequestConsultListRef.current.style.display="none";

    ConsultingHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    ConsultingHeaderRef.current.style.color = "#b1b1b1";
    ConsultingListRef.current.style.display="none";

    SolvedConsultHeaderRef.current.style.borderBottom = "#b1b1b1 solid 0.2rem";
    SolvedConsultHeaderRef.current.style.color = "#b1b1b1";
    SolvedConsultListRef.current.style.display="none";

    TutorHeaderRef.current.style.borderBottom = "#3A6C7B solid 0.2rem";
    TutorHeaderRef.current.style.color = "#3A6C7B";
    TutorListRef.current.style.display="block";

    SetLoadingTutor(true);
  }

  useEffect(()=>{
    ShowConsultingList(); //디폴트값 : 진행중인 피드백
  },[])

  return (
    <div>
      <HeaderContainer>
        <HeaderBtn ref={RequestConsultHeaderRef} onClick={ShowRequestConsultList}>
          요청중
        </HeaderBtn>
        <HeaderBtn ref={ConsultingHeaderRef} onClick={ShowConsultingList}>
          진행중
        </HeaderBtn>
        <HeaderBtn ref={SolvedConsultHeaderRef} onClick={ShowSolvedConsultList}>
          완료
        </HeaderBtn>
        <HeaderBtn ref={TutorHeaderRef} onClick={ShowTutorList}>
          튜터 선택
        </HeaderBtn>
      </HeaderContainer>
      <div ref={RequestConsultListRef} style={{display:'none'}}>
        <ConsultList SetLoading={SetLoadingRequestConsult}  Loading={LoadingRequestConsult} consult = "Requesting"/>
      </div>
      <div ref={ConsultingListRef} style={{display:'none'}}>
        <ConsultList SetLoading={SetLoadingConsulting} Loading={LoadingConsulting} consult = "Consulting"/>
      </div>
      <div ref = {SolvedConsultListRef} style={{display:'none'}}>
        <ConsultList SetLoading={SetLoadingSolvedConsult} Loading={LoadingSolvedConsult} consult = "SolvedConsult"/>
      </div>
			<div ref={TutorListRef} style={{display:'none'}}>
				<ConsultList SetLoading={SetLoadingTutor} Loading={LoadingTutor} consult="Tutor"/>
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
