import React,{forwardRef} from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const ConsultingItem = forwardRef((props,ref) => {
  const navigate = useNavigate();
  const onClickShowConsultBtn = () =>{
    console.log(props.data?.consult.consultId,'피드백 확인');
    navigate("/tutorConsult", { state: props.data });
  }
  return (
    <Container ref={ref}>
      <ContentDiv>
        <TitleDiv>
          <Title>{props.data?.title}</Title>
          <IsComment show={props.data?.isArriveMessageToTutor}>.</IsComment>
        </TitleDiv>
        <Name>{props.data?.tutee.name}</Name>
      </ContentDiv>
      <ShowConsultBtn onClick={onClickShowConsultBtn}>피드백확인</ShowConsultBtn>
    </Container>
  )
});

const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: bold;
  border-bottom: #3A6C7B solid 0.2rem;
`;

const ContentDiv = styled.div`
  width: 75%;
  height: 4.5rem;
`

const TitleDiv = styled.div`
  width: 100%;
  height: 50%;
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
  height: 50%;
  font-size: 1rem;
  padding-left: 1.5rem;
`;

const ShowConsultBtn = styled.div`
  float: right;
  width: 5rem;
  height: 1.5rem;
  margin-top: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: bold;
  color: #fff;
  background-color: #3a6c7b;
  font-size: 0.8rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export default ConsultingItem;