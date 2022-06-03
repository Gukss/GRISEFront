import React,{useState,useRef,useEffect,useCallback} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import ConsultingItem from './ConsultingItem';
import NormalConsultItem from './NormalConsultItem';
import RequestConsultItem from './RequestConsultItem';

const ConsultList = (props) => {
  const [ConsultList,setConsultList] = useState([]);
  const [touchPosition,setTouchPosition]= useState({x:0,y:0});
  const [isReject,setIsReject] = useState(false);
  const ItemRef = useRef(null);
  const ContainerRef = useRef(null);
  const pageNumber = useRef(1);
  const NoRefreshRef = useRef(null);

  const GetConsult = useCallback(e=>{
    if(props.consult === 'NormalConsult'){
      axios.get('Json/mainPageTutor/consultList.json')
      .then((res) => {
        setConsultList(res.data);
      }).catch((error) => console.log(error));


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
      //   const temp = [...ConsultList].concat(res.data);
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
        setConsultList(res.data);
      }).catch((error) => {console.log(error);pageNumber.current-=1;});
      
    }else if(props.consult === 'RequestConsult'){
      // axios.get('Json/mainPageTutee/tutorList.json')
      // .then((res) => {
      //   const temp = [...ConsultList].concat(res.data);
      //   setConsultList(temp);
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
      }).catch((error) => {console.log(error);pageNumber.current-=1;});
      
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
        setConsultList(res.data);
      }).catch((error) => {console.log(error);pageNumber.current-=1;});
      
    }
  }
  
  useEffect(() => {
    GetConsult();
  }, [GetConsult]);

  useEffect(()=>{NoRefreshRef.current.style.display = 'none'},[ConsultList])

  useEffect(()=>{//거절시 새롭게 상담지를 받아옴
    if(isReject){
      NoRefreshRef.current.style.display = 'block';
      GetConsult();
      NoRefreshRef.current.style.display = 'none';
      setIsReject(false);
      console.log('거절');
    }
  },[isReject,GetConsult])

  const onTouchStart=(e)=>{
    setTouchPosition({ x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY });
  }

  const onTouchEnd=(e)=>{
    if(ConsultList.length < 10){return;}
    const distanceY = touchPosition.y - e.changedTouches[0].pageY; //드래그한 Y길이 시작Y좌표 - 드래그끝났을때 Y좌표 내릴때 양수
    const DivHeight = ItemRef.current.style.height; //아이템 하나의 높이
    const scrollY = ContainerRef.current.getBoundingClientRect().bottom-ItemRef.current.getBoundingClientRect().bottom;
    //높이가 소수점이면 애매하게 딱 안맞을 수 있어서 수정
    if(-1<scrollY&&scrollY<1){
      if(distanceY>DivHeight){//스크롤링위치가 맨마지막에 되어있을때 item하나의 높이보다 더 드래그하면 새로고침
        Refresh();
      }
    }
  }

  const getItem = () =>{
    if(ConsultList.length === 0){return;}
    const result = [];
    if(props.consult === 'NormalConsult'){
      for(let i = 0; i < ConsultList.length-1; i++){
        result.push(<NormalConsultItem key = {i} isEnd={false} data = {ConsultList[i]}></NormalConsultItem>);
      }
      result.push(<NormalConsultItem key = {ConsultList.length-1} isEnd={true} data = {ConsultList[ConsultList.length-1]} ref={ItemRef}></NormalConsultItem>);
    }else if(props.consult === 'RequestConsult'){
      for(let i = 0; i < ConsultList.length-1; i++){
        result.push(<RequestConsultItem key = {i} isEnd={false} setIsReject = {setIsReject} data = {ConsultList[i]}></RequestConsultItem>);
      }
      result.push(<RequestConsultItem key = {ConsultList.length-1} isEnd={true} setIsReject = {setIsReject} data = {ConsultList[ConsultList.length-1]} ref={ItemRef}></RequestConsultItem>);
    }else if(props.consult === 'consulting'){
      for(let i = 0; i < ConsultList.length-1; i++){
        result.push(<ConsultingItem key = {i} isEnd={false} data = {ConsultList[i]}></ConsultingItem>);
      }
      result.push(<ConsultingItem key = {ConsultList.length-1} isEnd={true} data = {ConsultList[ConsultList.length-1]} ref={ItemRef}></ConsultingItem>);
    }
    return result;
  }

  return (
    <div>
      <NoRefreshDiv ref = {NoRefreshRef} />
      <ScrollDiv ref = {ContainerRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {getItem()}
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
