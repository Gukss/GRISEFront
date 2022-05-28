import React,{forwardRef} from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const ConsultRequestItem = forwardRef((props,ref) => {
		const navigate = useNavigate();
		const consult = {
			data: props.data.consult
		}
    const onClickShowConsultBtn = () =>{
        console.log(consult.data,'피드백 확인');
				navigate("/Consult", { state: consult });
    }
    return (
        <div ref={ref} style={{borderBottom:"#3A6C7B solid 0.2rem"}}>
            <Container>
                <div style={{float:'left'}}>
                    <Title>{props.data?.consult.title}</Title>
                    <Name>{props.data?.consult.tutor.name}</Name>
                </div>
                <ShowConsultBtn onClick={onClickShowConsultBtn}>피드백 확인</ShowConsultBtn>
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
    margin-top: 0.8rem;
`

const ShowConsultBtn = styled.span`
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
    height: 4.5rem;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    flex: 0 0 auto;
`

export default ConsultRequestItem;