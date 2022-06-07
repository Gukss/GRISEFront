import React, { forwardRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ConsultItem = forwardRef((props, ref) => {
  const navigate = useNavigate();
	
  const onClickShowConsultBtn = () => {
    if(props.consult === 'Requesting'){return;}
    console.log(props.data, "consult 확인");
		navigate("/tuteeConsult", {
      state: {
        consult: props.consult,
        consultId: props.data?.consultId,
        isArriveMessageToTutee: props.data?.isArriveMessageToTutee,
      },
    });
  };

  return (
    <Container onClick={onClickShowConsultBtn} ref={ref}>
      <TitleDiv>
        <Title>{props.data?.title}</Title>
        <IsComment show={props.data?.isArriveMessageToTutee}>.</IsComment>
      </TitleDiv>
      <Name>{props.data?.username}</Name>
    </Container>
  );
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

export default ConsultItem;