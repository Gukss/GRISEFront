import React,{forwardRef,useRef} from 'react'
import styled from 'styled-components';
const TutorItem = forwardRef((props,ref) => {
    const detailDivRef = useRef();
    let isShowDetail = useRef(false);
    const showDetailInfo = () =>{
        detailDivRef.current.style.display = (isShowDetail.current)? 'none':'block';
        isShowDetail.current = !isShowDetail.current;
        if(props.isEnd){detailDivRef.current.scrollIntoView({ behavior: 'smooth' });}
    }
    return (
        <div ref={ref}>
            <Content onClick={showDetailInfo}>{props.value}</Content>
            <DetailInfo ref = {detailDivRef}>세부사항</DetailInfo>
        </div>
    )
});

const Content = styled.div`
    width: 100%;
    height: 3rem;
    color: white;
    font-weight: 900;
    font-size: 2rem;
    background-color: gray;
    flex: 0 0 auto;
`
const DetailInfo = styled.div`
    display: none;
`
export default TutorItem;