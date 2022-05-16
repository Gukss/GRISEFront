import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RequestConsultItem from './RequestConsultItem'

const RequestConsultList = () => {
	const [requestFeedbackList, setRequestFeedbackList] = useState([]);
	const [touchPosition,setTouchPosition]= useState({x:0,y:0});
	const [outputList,setOutputList]=useState([]);
	const ContainerRef = useRef();
	const ItemRef = useRef();

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

	const onTouchStart=(e)=>{
		setTouchPosition({ x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY });
	}

	const onTouchEnd=(e)=>{
        const distanceY = touchPosition.y - e.changedTouches[0].pageY; //드래그한 Y길이 시작Y좌표 - 드래그끝났을때 Y좌표 내릴때 양수
        const DivHeight = ItemRef.current.style.height; //아이템 하나의 높이
        const scrollY = ContainerRef.current.getBoundingClientRect().bottom-ItemRef.current.getBoundingClientRect().bottom;
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
	};

	const getItem = () => {
    const result = [];
    for (let i = 0; i < outputList.length - 1; i++) {
      result.push(
        <RequestConsultItem key={i} data={outputList[i]}></RequestConsultItem>
      );
    }
    result.push(
      <RequestConsultItem
        key={outputList.length - 1}
        data={outputList[outputList.length - 1]}
        ref={ItemRef}
      ></RequestConsultItem>
    );
    return result;
  };

	return (
    // <>
    //   <ScrollDiv ref={ContainerRef}>
    //     {outputList.map((el, idx) => (
    //       <ScrollItem
    //         onTouchStart={onTouchStart}
    //         onTouchEnd={onTouchEnd}
    //         key={idx}
    //         ref={(e) => (ItemRef.current[idx] = e)}
    //       >
    //         {/* {el.consult.title} */}
    //         {<div style={{ float: "left" }}>
    //           <Title>{el.consult.title}</Title>
    //           <div>
    //             <TutorName>{el.consult.tutor.name}</TutorName>
    //           </div>
    //         </div>}
    //       </ScrollItem>
    //     ))}
    //   </ScrollDiv>
    // </>
    <>
      <ScrollDiv
        ref={ContainerRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {getItem()}
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
`;

const ScrollItem = styled.div`
  width: 100%;
  height: 4rem;
  font-weight: 900;
  font-size: 2rem;
  flex: 0 0 auto;
`;

const Title = styled.div`
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  display: block;
  font-size: 1rem;
  text-align: left;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  color: #3a6c7b;
  height: 1rem;
`;

const TutorName = styled.span`
  color: #000000;
  font-size: 0.9rem;
  vertical-align: 0.4rem;
  margin-left: 1.5rem;
`;

export default RequestConsultList;