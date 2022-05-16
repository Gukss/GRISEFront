import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const RequestConsultList = () => {
	const [requestFeedbackList, setRequestFeedbackList] = useState([]);
	const [touchPosition,setTouchPosition]= useState({x:0,y:0});
	const ContainerRef = useRef();
	const [outputList,setOutputList]=useState([]);
	const ItemRef = useRef([]);
	useEffect(() => {
    axios.get("./Json/mainPageTutee/requestConsultList.json")
		.then((response) => {
			setRequestFeedbackList(response.data?.consultList);
            console.log(response.data?.consultList);
            let tmp = [];
			for(let i=0;i<10;i++){
				tmp.push(response.data?.consultList[i]);
			};
			setOutputList(tmp);
    });
  }, []);
	
	const remToPixel = (num)=>{
		return num * parseFloat(getComputedStyle(document.documentElement).fontSize);
	}

	const onTouchStart=(e)=>{
		setTouchPosition({ x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY });
	}

	const onTouchEnd=(e)=>{
        const distanceY = touchPosition.y - e.changedTouches[0].pageY; //드래그한 Y길이 시작Y좌표 - 드래그끝났을때 Y좌표 내릴때 양수
        const DivHeight = remToPixel(3); //아이템 하나의 높이
        const scrollY = ContainerRef.current.getBoundingClientRect().bottom-ItemRef.current[outputList.length-1].getBoundingClientRect().bottom;
        //높이가 소수점이면 애매하게 딱 안맞을 수 있어서 수정
        if (-0.1<scrollY&&scrollY<0.1) {
          if (distanceY > DivHeight) {
            //스크롤링위치가 맨마지막에 되어있을때 item하나의 높이보다 더 드래그하면 새로고침
            console.log("새로고침");
            
                const temp = [...outputList];
                // for(let i = 0 ; i < 10; i++){
                //     temp.push(requestFeedbackList[i]);
                // }
                // setOutputList(temp);
                for(let i = outputList.length; i < outputList.length+10; i++){
                  if(i>=requestFeedbackList.length){break;}
									
									temp.push(requestFeedbackList[i]);
                }
                setOutputList(temp);
          }
        }
	}
	return (
    <>
      <ScrollDiv ref={ContainerRef}>
        {outputList.map((el, idx) => (
          <ScrollItem
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            key={idx}
            ref={(e) => (ItemRef.current[idx] = e)}
          >
            {el.consult.title}
          </ScrollItem>
        ))}
      </ScrollDiv>
    </>
  );
};

const ScrollDiv = styled.div`
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-y:auto;
    background-color: lightgray;
`;

const ScrollItem = styled.div`
    width: 100%;
    height: 3rem;
    color: white;
    font-weight: 900;
    font-size: 2rem;
    background-color: gray;
    flex: 0 0 auto;
`;

export default RequestConsultList;