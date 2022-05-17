import React,{forwardRef} from 'react'
import styled from 'styled-components';

const RequestedConsultItem = forwardRef((props,ref) => {
    const onClickRejectBtn = () =>{
        console.log(props.data?.consult.consult_id,'거절');
    }
    return (
        <div ref={ref} style={{borderBottom:"#3A6C7B solid 0.2rem"}}>
            <Container>
                <div style={{float:'left'}}>
                    <Title>{props.data?.consult.title}</Title>
                    <Name>{props.data?.consult.tutee.name}</Name>
                </div>
                <RejectBtn onClick={onClickRejectBtn}>거절</RejectBtn>
            </Container>
        </div>
    )
});

const Name = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 100;
    font-size: 1rem;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
`

const RejectBtn = styled.span`
    float: right;
    width:5rem;
    height:1.5rem;
    margin-top: 1.25rem;
    border-radius: 1rem;
    text-align: center;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    color: #fff;
    background-color: #3A6C7B;
    font-size:0.8rem;
`

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

export default RequestedConsultItem;