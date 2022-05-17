import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import TutorItem from './TutorItem';

const TutorList = () => {
    const [tutorList,setTutorList] = useState([]);
    const [outputList,setOutputList]=useState([]);
    const [touchPosition,setTouchPosition]= useState({x:0,y:0});
    const ItemRef = useRef();
    const ContainerRef = useRef();
	
    useEffect(() => {
        axios.get("./Json/mainPageTutee/tutorList.json").then((response) => {
            setTutorList(response.data?.tutorList);
            let temp = [];
            for(let i=0;i<10;i++){
                if(i >= response.data?.tutorList.length){break;}
                temp.push(response.data?.tutorList[i]);
            };
            setOutputList(temp);
        });
      }, []);

    const onTouchStart=(e)=>{
        setTouchPosition({ x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY });
    }

    const onTouchEnd=(e)=>{
        const distanceY = touchPosition.y - e.changedTouches[0].pageY; //드래그한 Y길이 시작Y좌표 - 드래그끝났을때 Y좌표 내릴때 양수
        const DivHeight = ItemRef.current.style.height; //아이템 하나의 높이
        const scrollY = ContainerRef.current.getBoundingClientRect().bottom-ItemRef.current.getBoundingClientRect().bottom;
        //높이가 소수점이면 애매하게 딱 안맞을 수 있어서 수정
        if(-0.1<scrollY&&scrollY<0.1){
            if(distanceY>DivHeight){//스크롤링위치가 맨마지막에 되어있을때 item하나의 높이보다 더 드래그하면 새로고침
                console.log('새로고침');
                const temp = [...outputList];
                // for(let i = 0 ; i < 10; i++){
                //     temp.push(requestFeedbackList[i]);
                // }
                // setOutputList(temp);
                for(let i = outputList.length; i < outputList.length+10; i++){
                    if(i>=tutorList.length){break;}
                    temp.push(tutorList[i]);
                }
                setOutputList(temp);
            }
        }
    }

    const getItem = () =>{
        const result = [];
        for(let i = 0; i < outputList.length-1; i++){
            result.push(<TutorItem key = {i} isEnd={false} data = {outputList[i]}></TutorItem>);
        }
        result.push(<TutorItem key = {outputList.length-1} isEnd={true} data = {outputList[outputList.length-1]} ref={ItemRef}></TutorItem>);
        return result;
    }

    return ( 
        <>
            <ScrollDiv ref = {ContainerRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                {getItem()}
            </ScrollDiv>
        </>
    )
}

const ScrollDiv = styled.div`
  margin: 0 auto;
  width: 95%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default TutorList;