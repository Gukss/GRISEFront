import React,{forwardRef,useRef} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ReactComponent as Star} from '../../../Image/star.svg';

const TutorItem = forwardRef((props,ref) => {
    const detailDivRef = useRef();
    const isShowDetail = useRef(false);
    const ShowDetailBtnRef = useRef();

    const showDetailInfo = (e) =>{//상세보기클릭
        detailDivRef.current.style.display = (isShowDetail.current)? 'none':'block';
        isShowDetail.current = !isShowDetail.current;
        if(props.isEnd){detailDivRef.current.scrollIntoView({ behavior: 'smooth' });}
        ShowDetailBtnRef.current.innerHTML = (isShowDetail.current)? '접기':'정보 보기';
    }

    return (
        <div ref={ref} style={{borderBottom:"#3A6C7B solid 0.2rem"}}>
            <Container>
                <div style={{float:'left'}}>
                    <Title>{props.data?.username}</Title>
                    <div>
                        <StarImage><Star style={{width:'1.5rem',height:'1.5rem'}}></Star></StarImage>
                        <Score>{props.data?.review.star}</Score>
                        <ShowDetailBtn ref={ShowDetailBtnRef} onClick={showDetailInfo}>정보 보기</ShowDetailBtn>
                    </div>
                </div>
                <Link to='/RequestConsult' state={{consult:'RequestConsult',tutorId:props.data?.tutorId}}><TutorConsultBtn>피드백 요청</TutorConsultBtn></Link>
            </Container>
            <DetailInfo ref = {detailDivRef}>
                {props.data?.resumeContent}
            </DetailInfo>
        </div>
    )
});

const TutorConsultBtn = styled.span`
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
    display: block;
    font-size: 1rem;
    text-align:left;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    color: #3A6C7B;
    height: 1rem;
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
    width: 100%;
    height: 4rem;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 100;
    font-size: 2rem;
    flex: 0 0 auto;
`
const DetailInfo = styled.div`
    margin-top: 0.7rem;
    padding-left: 1.5rem;
    display: none;
    width: 100%;
    white-space: normal;
    word-break: break-all;
    height:auto;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 100;
    font-size: 1rem;
`
export default TutorItem;