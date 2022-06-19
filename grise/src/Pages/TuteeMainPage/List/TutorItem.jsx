import React,{useRef} from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { ReactComponent as Star} from '../../../Image/star.svg';

const TutorItem = (props) => {
    const detailDivRef = useRef();
    const isShowDetail = useRef(false);
    const showDetailBtnRef = useRef();
    const Navigate = useNavigate();
    const ShowDetailInfo = (e) =>{//상세보기클릭
        detailDivRef.current.style.display = (isShowDetail.current)? 'none':'block';
        isShowDetail.current = !isShowDetail.current;
        if(props.isEnd){detailDivRef.current.scrollIntoView({ behavior: 'smooth' });}
        showDetailBtnRef.current.innerHTML = (isShowDetail.current)? '접기':'정보 보기';
    }
    const RequestConsult = (e) =>{
        Navigate("/RequestConsult",{
            state:{
                consult:'RequestConsult',
                tutorId:props.data?.tutorId
            }
        });
    }
    return (
        <Container>
            <Content>
                <Title>{props.data?.username}</Title>
                <div>
                    <StarImage><Star style={{width:'1.5rem',height:'1.5rem'}}></Star></StarImage>
                    <Score>{props.data?.review.star}</Score>
                    <ShowDetailBtn ref={showDetailBtnRef} onClick={ShowDetailInfo}>정보 보기</ShowDetailBtn>
                </div>
                <DetailInfo ref = {detailDivRef}>
                    {props.data?.resumeContent}
                </DetailInfo>
            </Content>
            <TutorConsultBtn onClick={RequestConsult}>상담 요청</TutorConsultBtn>
        </Container>
    )
};

const TutorConsultBtn = styled.div`
    width: 5rem;
    height: 1.5rem;
    margin-top: 1.3rem;
    border-radius: 1rem;
    text-align: center;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 900;
    color: #fff;
    background-color: #3a6c7b;
    font-size: 0.8rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ShowDetailBtn = styled.span`
    color : #808080;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 100;
    font-size : 1rem;
    margin-left : 1rem;
    vertical-align:30%;
`

const StarImage = styled.span`
    margin-left: 1.5rem;
    margin-right: 0.5rem;
`

const Title = styled.div`
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    text-align:left;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 900;
    color: #3A6C7B;
`

const Score = styled.span`
    color: #000000;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    font-size: 0.9rem;
    vertical-align: 0.4rem;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: #3A6C7B solid 0.2rem;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`

const DetailInfo = styled.div`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    display: none;
    width: 100%;
    height:auto;
    max-height: 5rem;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 100;
    font-size: 1rem;
    white-space:pre;
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge ScrollHidden */
    scrollbar-width: none; /* Firefox ScrollHidden */
    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera ScrollHidden*/
    }
`
export default TutorItem;