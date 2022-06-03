import React,{forwardRef} from 'react'
import styled from 'styled-components';
import axios from 'axios';

const RequestConsultItem = forwardRef((props,ref) => {
    const onClickRejectBtn = () =>{
        console.log(props.data?.consultId,'거절');
        axios({
            method:'POST',
            url:`http://grise.p-e.kr/tutor/consults/${props.data?.consultId}/cancel`,
            headers: {
              Authorization: window.localStorage.getItem('token') ,
              "Content-Type": "application/json",
            },
        })
        .then((res) => {
            console.log(res);
            props.setIsReject(true);
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div ref={ref} style={{borderBottom:"#3A6C7B solid 0.2rem"}}>
            <Container>
                <div style={{float:'left'}}>
                    <Title>{props.data?.title}</Title>
                    <Name>{props.data?.tutee.name}</Name>
                </div>
                <RejectBtn onClick={onClickRejectBtn}>거절</RejectBtn>
            </Container>
        </div>
    )
});

const Name = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
`

const RejectBtn = styled.span`
  float: right;
  width: 5rem;
  height: 1.5rem;
  margin-top: 1.25rem;
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

const Title = styled.div`
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    display: block;
    font-size: 1rem;
    text-align:left;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    color: #3A6C7B;
    height: 1rem;
`

const Container = styled.div`
    width: 100%;
    height: 4rem;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    flex: 0 0 auto;
`

export default RequestConsultItem;