import React,{forwardRef} from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const ConsultingItem = forwardRef((props,ref) => {
  const navigate = useNavigate();
  const onClickShowConsultBtn = () =>{
    console.log(props.data?.consultId,'피드백 확인');
    navigate("/tutorConsult", { state: props.data,consult:props.consult });
  }
  return (
    <Container ref={ref} onClick={onClickShowConsultBtn}>
      <TitleDiv>
        <Title>{props.data?.title}</Title>
        <IsComment show={props.data?.isArriveMessageToTutor}>.</IsComment>
      </TitleDiv>
      <Name>{props.data?.tutee.name}</Name>
    </Container>
  )
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: bold;
  border-bottom: #3A6C7B solid 0.2rem;
`;

const TitleDiv = styled.div`
  width: 100%;
  height: 2rem;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: row;
`

const Title = styled.div`
  font-size: 1rem;
  color: #3a6c7b;
  padding-top: 0.5rem;
  padding-right : 0.5rem;
`;

const IsComment = styled.div`
  color: #FF0000;
  font-size: 1.5rem;
  line-height: 1.5rem;
  display: ${props=>props.show? 'block':'none'};
`

const Name = styled.div`
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  padding-left: 1.5rem;
`;

export default ConsultingItem;