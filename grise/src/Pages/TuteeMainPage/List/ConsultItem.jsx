import React,{useRef,useCallback} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ConsultItem = (props) => {
  const Navigate = useNavigate();
  const containerRef = useRef();
  
  const DeleteConsult = useCallback(()=>{
    axios({
      method:'DELETE',
      url:`https://grise.p-e.kr/tutee/consults/${props.data?.consultId}`,
      headers: {
        Authorization: window.localStorage.getItem('token') ,
        "Content-Type": "application/json",
      }
    }).then((res)=>{props.DeleteItem()})
    .catch((error) => {console.log(error);});
  },[props]);

  const ShowConsultBtn = useCallback(() => {
    if(props.consult === 'Requesting'){
      Navigate("/updateConsult",{
        state:{
          consultId:props.data?.consultId
        }
      });
      return;
    }
		Navigate("/tuteeConsult", {
      state: {
        consult: props.consult,
        consultId: props.data?.consultId,
        isArriveMessageToTutee: props.data?.isArriveMessageToTutee,
      },
    });
  },[props,Navigate]);

  return (
    <Container 
      onTouchStart={()=>{containerRef.current.style.borderColor='#3A6C7B';}}
      onTouchEnd={()=>{containerRef.current.style.borderLeftColor='transparent';containerRef.current.style.borderRightColor='transparent';}}
      ref={containerRef}
    > 
      <Content onClick={ShowConsultBtn}>
        <TitleDiv>
          <Title>{props.data?.title}</Title>
          <IsComment show={props.data?.isArriveMessageToTutee}>.</IsComment>
        </TitleDiv>
        <Name>{props.data?.username}</Name>
      </Content>
      <DeleteBtn consult={props.consult} onClick={DeleteConsult}>삭제</DeleteBtn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: bold;
  border-left: transparent solid 0.2rem;
  border-right: transparent solid 0.2rem;
  border-bottom: #3A6C7B solid 0.2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const DeleteBtn = styled.div`
  display: ${props=>props.consult==='Consulting'? 'none':'block'};
  width: 5rem;
  height: 1.5rem;
  margin-top: 1.2rem;
  border-radius: 1rem;
  text-align: center;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 900;
  color: #fff;
  background-color: #3a6c7b;
  font-size: 0.8rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

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