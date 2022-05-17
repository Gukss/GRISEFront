import React,{forwardRef,useRef,useEffect} from 'react'
import styled from 'styled-components';
import { ReactComponent as Star} from '../../../Image/star.svg';
import { ReactComponent as InfoImage} from '../../../Image/info.svg';
const TutorItem = forwardRef((props,ref) => {
    const detailDivRef = useRef();
    const isShowDetail = useRef(false);
    const ShowDetailBtn = useRef();
    const showDetailInfo = (e) =>{
        detailDivRef.current.style.display = (isShowDetail.current)? 'none':'block';
        isShowDetail.current = !isShowDetail.current;
        if(props.isEnd){detailDivRef.current.scrollIntoView({ behavior: 'smooth' });}
        ShowDetailBtn.current.innerHTML = (isShowDetail.current)? '접기':'정보 보기';
    }
    return (
        <div ref={ref} style={{borderBottom:"#3A6C7B solid 0.2rem"}}>
            <Container>
                <div style={{float:'left'}}>
                    <Title>{props.data?.tutor.name}</Title>
                    <div>
                        <StarImage><Star style={{width:'1.5rem',height:'1.5rem'}}></Star></StarImage>
                        <Score>{props.data?.tutor.score}</Score>
                        <span ref={ShowDetailBtn} onClick={showDetailInfo} style={{color:'#000000', fontSize:'1rem'}}>정보 보기</span>
                    </div>
                </div>
                <InfoBtn onClick={showDetailInfo}><InfoImage></InfoImage></InfoBtn>
            </Container>
            <DetailInfo ref = {detailDivRef}>
                {props.data?.tutor.resume.content}
            </DetailInfo>
        </div>
    )
});

const InfoBtn = styled.span`
    float: right;
    margin-top: 0.8rem;
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
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    color: #3A6C7B;
    height: 1rem;
`

const Score = styled.span`
    color: #000000;
    font-size: 0.9rem;
    vertical-align: 0.4rem;
`

const Container = styled.div`
    width: 100%;
    height: 4rem;
    font-weight: 900;
    font-size: 2rem;
    flex: 0 0 auto;
`
const DetailInfo = styled.div`
    display: none;
    margin-left: 1.5rem;
    text-indent : -4.5rem;
`
export default TutorItem;