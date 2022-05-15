import React,{useState,useRef} from 'react'
import styled from 'styled-components';

const TutorList = () => {
    const [list,setList] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    const [touchPosition,setTouchPosition]= useState({x:0,y:0});
    const ItemRef = useRef([]);
    const ContainerRef = useRef();
	
    const remToPixel = (num)=>{
        return num * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    const onTouchStart=(e)=>{
        setTouchPosition({ x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY });
    }

    const onTouchEnd=(e)=>{
        const distanceY = touchPosition.y - e.changedTouches[0].pageY; //드래그한 Y길이 시작Y좌표 - 드래그끝났을때 Y좌표 내릴때 양수
        const DivHeight = remToPixel(3); //아이템 하나의 높이
        const scrollY = ContainerRef.current.getBoundingClientRect().bottom-ItemRef.current[list.length-1].getBoundingClientRect().bottom;
        //높이가 소수점이면 애매하게 딱 안맞을 수 있어서 수정
        if(-0.1<scrollY&&scrollY<0.1){
            if(distanceY>DivHeight){//스크롤링위치가 맨마지막에 되어있을때 item하나의 높이보다 더 드래그하면 새로고침
                console.log('새로고침');
                const temp = [...list];
                for(let i = list.length; i < list.length+10; i++){
                    temp.push(i);
                }
                setList(temp);
            }
        }
    }
    return ( 
        <>
            <ScrollDiv ref = {ContainerRef}>
                {
                    list.map((el,idx)=>(
                    <ScrollItem
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                        key = {idx}
                        ref = {(e) => ItemRef.current[idx] = e}
                    >
                    {el}</ScrollItem>))
                }
            </ScrollDiv>
        </>
    )
}

const ScrollDiv = styled.div`
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-y:auto;
    background-color: lightgray;
`

const ScrollItem = styled.div`
    width: 100%;
    height: 3rem;
    color: white;
    font-weight: 900;
    font-size: 2rem;
    background-color: gray;
    flex: 0 0 auto;
`

export default TutorList;