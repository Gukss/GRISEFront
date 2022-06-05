import React,{useState,useRef,useEffect,useCallback} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import ConsultItem from './ConsultItem';
import RequestConsultItem from './RequestConsultItem';

const ConsultList = (props) => {
  const [ConsultList,setConsultList] = useState([]);
  const [touchPosition,setTouchPosition]= useState({x:0,y:0});
  const ItemRef = useRef([]);
  const RejectList = useRef([]);
  const ContainerRef = useRef(null);
  const pageNumber = useRef(0);
  const NoRefreshRef = useRef(null);

  function PushReject(idx){
    RejectList.current = [...RejectList.current,idx];
  }

  const GetConsult = useCallback(e=>{
    if(props.consult === 'NormalConsult'){
      // axios.get('Json/mainPageTutor/consultList.json')
      // .then((res) => {
      //   setConsultList(res.data);
      // }).catch((error) => console.log(error));

      axios({
        method:'GET',
        url:`http://grise.p-e.kr/tutor/consults/general`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        params:{
          offset:pageNumber.current*10,
          limit:10
        }
      })
      .then((res) => {
        setConsultList(res.data);
      }).catch((error) => console.log(error));

    }else if(props.consult === 'RequestConsult'){
      // axios.get('Json/mainPageTutor/requestConsultList.json')
      // .then((res) => {
      //   setConsultList(res.data);
      // }).catch((error) => console.log(error));

      
      axios({
        method:'GET',
        url:`http://grise.p-e.kr/tutor/consults/post`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        params:{
          offset:pageNumber.current*10,
          limit:10
        }
      })
      .then((res) => {
        setConsultList(res.data);
      }).catch((error) => console.log(error));
      
    }else if(props.consult === 'consulting'){
      // axios.get('Json/mainPageTutor/consultingList.json')
      // .then((res) => {
      //   setConsultList(res.data);
      // }).catch((error) => console.log(error));

      
      axios({
        method:'GET',
        url:`http://grise.p-e.kr/tutor/consults/consulting`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        params:{
          offset:pageNumber.current*10,
          limit:10
        }
      })
      .then((res) => {
        setConsultList(res.data);
      }).catch((error) => console.log(error));
      
    }
  },[props.consult,pageNumber,setConsultList])

  const Refresh = () => {
    pageNumber.current+=1;
    NoRefreshRef.current.style.display = 'block';
    console.log('새로고침',pageNumber.current);
    
    if(props.consult === 'NormalConsult'){
      // axios.get('Json/mainPageTutee/requestConsultList.json')
      // .then((res) => {
      //   const temp = [...ConsultList,...res.data];
      //   setConsultList(temp);
      // }).catch((error) => console.log(error));

      
      axios({
        method:'GET',
        url:`http://grise.p-e.kr/tutor/consults/general`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        params:{
          offset:pageNumber.current*10,
          limit:10
        }
      })
      .then((res) => {
        const temp = [...ConsultList,...res.data];
        setConsultList(temp);
        console.log(temp);
      }).catch((error) => {console.log(error);pageNumber.current-=1;NoRefreshRef.current.style.display = 'none';});
      
    }else if(props.consult === 'RequestConsult'){
      // axios.get('Json/mainPageTutor/requestConsultList.json')
      // .then((res) => {
      //   const temp = [...ConsultList];
      //   RejectList.current.map(e=>ItemRef.current[e].style.display='none');
      //   RejectList.current=[];
      //   setConsultList([...temp,...res.data]);
      // }).catch((error) => console.log(error));
      
      axios({
        method:'GET',
        url:`http://grise.p-e.kr/tutor/consults/post`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        params:{
          offset:pageNumber.current*10,
          limit:10
        }
      })
      .then((res) => {
        const temp = [...ConsultList];
        RejectList.current.map(e=>ItemRef.current[e].style.display='none');
        RejectList.current=[];
        setConsultList([...temp,...res.data]);
      }).catch((error) => {console.log(error);pageNumber.current-=1;NoRefreshRef.current.style.display = 'none';});
      
    }else if(props.consult === 'consulting'){
      // axios.get('Json/mainPageTutee/test.json')
      // .then((res) => {
      //   setConsultList(res.data);
      // }).catch((error) => console.log(error));

      
      axios({
        method:'GET',
        url:`http://grise.p-e.kr/tutor/consults/consulting`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        params:{
          offset:pageNumber.current*10,
          limit:10
        }
      })
      .then((res) => {
        const temp = [...ConsultList,...res.data];
        setConsultList(temp);
        console.log(temp);
      }).catch((error) => {console.log(error);pageNumber.current-=1;NoRefreshRef.current.style.display = 'none';});
      
    }
  }
  
  useEffect(() => {
    GetConsult();
  }, [GetConsult]);

  useEffect(()=>{NoRefreshRef.current.style.display = 'none';},[ConsultList])

  const onTouchStart=(e)=>{
    setTouchPosition({ x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY });
  }

  const onTouchEnd=(e)=>{
    if(ConsultList.length < 10){return;}
    const distanceY = touchPosition.y - e.changedTouches[0].pageY; //드래그한 Y길이 시작Y좌표 - 드래그끝났을때 Y좌표 내릴때 양수
    const DivHeight = ItemRef.current[ConsultList.length-1].style.height; //아이템 하나의 높이
    const scrollY = ContainerRef.current.getBoundingClientRect().bottom-ItemRef.current[ConsultList.length-1].getBoundingClientRect().bottom;
    //높이가 소수점이면 애매하게 딱 안맞을 수 있어서 수정
    if(-1<scrollY&&scrollY<1){
      if(distanceY>DivHeight){//스크롤링위치가 맨마지막에 되어있을때 item하나의 높이보다 더 드래그하면 새로고침
        Refresh();
      }
    }
  }

  // const getItem = () =>{
  //   if(ConsultList.length === 0){return;}
  //   const result = [];
  //   if(props.consult === 'NormalConsult'){
  //     for(let i = 0; i < ConsultList.length-1; i++){
  //       result.push(<ConsultItem key = {i} isEnd={false} consult = {props.consult} data = {ConsultList[i]}></ConsultItem>);
  //     }
  //     result.push(<ConsultItem key = {ConsultList.length-1} isEnd={true} consult = {props.consult} data = {ConsultList[ConsultList.length-1]} ref={ItemRef}></ConsultItem>);
  //   }else if(props.consult === 'RequestConsult'){
  //     for(let i = 0; i < ConsultList.length-1; i++){
  //       result.push(<RequestConsultItem key = {i} isEnd={false} index = {i} consult = {props.consult} PushReject = {PushReject} data = {ConsultList[i]}></RequestConsultItem>);
  //     }
  //     result.push(<RequestConsultItem key = {ConsultList.length-1} isEnd={true} index = {ConsultList.length-1} consult = {props.consult} PushReject = {PushReject} data = {ConsultList[ConsultList.length-1]} ref={ItemRef}></RequestConsultItem>);
  //   }else if(props.consult === 'consulting'){
  //     for(let i = 0; i < ConsultList.length-1; i++){
  //       result.push(<ConsultItem key = {i} isEnd={false} consult = {props.consult} data = {ConsultList[i]}></ConsultItem>);
  //     }
  //     result.push(<ConsultItem key = {ConsultList.length-1} consult = {props.consult} isEnd={true} data = {ConsultList[ConsultList.length-1]} ref={ItemRef}></ConsultItem>);
  //   }
  //   return result;
  // }

  return (
    <div>
      <NoRefreshDiv ref = {NoRefreshRef} />
      <ScrollDiv ref = {ContainerRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {
          ConsultList.map(function(el,idx){
            if(idx===ConsultList.length-1){
              if(props.consult === 'NormalConsult'){return <div key={idx} ref={(e)=>ItemRef.current[idx]=e}><ConsultItem key = {idx} isEnd={true} consult = {props.consult} data = {el} /></div>;}
              else if(props.consult === 'RequestConsult'){return <div key={idx} ref={(e)=>ItemRef.current[idx]=e}><RequestConsultItem key = {idx} isEnd={true} index = {idx} consult = {props.consult} PushReject = {PushReject} data = {el} /></div>;}
              else if(props.consult === 'consulting'){return <div key={idx} ref={(e)=>ItemRef.current[idx]=e}><ConsultItem key = {idx} consult = {props.consult} isEnd={true} data = {el} /></div>;}
            }else{
              if(props.consult === 'NormalConsult'){return <div key={idx} ref={(e)=>ItemRef.current[idx]=e}><ConsultItem key = {idx} isEnd={false} consult = {props.consult} data = {el} /></div>;}
              else if(props.consult === 'RequestConsult'){return <div key={idx} ref={(e)=>ItemRef.current[idx]=e}><RequestConsultItem key = {idx} isEnd={false} index = {idx} consult = {props.consult} PushReject = {PushReject} data = {el} /></div>;}
              else if(props.consult === 'consulting'){return <div key={idx} ref={(e)=>ItemRef.current[idx]=e}><ConsultItem key = {idx} isEnd={false} consult = {props.consult} data = {el} /></div>;}
            }
          })
        }
      </ScrollDiv>
    </div>
  )
}

const NoRefreshDiv = styled.div`
  margin-left: 2.5%;
  position: absolute;
  width: 95%;
  height: 30rem;
  display: none;
`

const ScrollDiv = styled.div`
  margin: 0 auto;
  width: 95%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y:auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

export default ConsultList;
