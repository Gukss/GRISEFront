import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import ConsultItem from './ConsultItem';
import TutorItem from './TutorItem';
import {Link} from 'react-router-dom';

const ConsultList = (props) => {
  const [ConsultList,setConsultList] = useState([]);
  const [touchPosition,setTouchPosition]= useState({x:0,y:0});
  const ItemRef = useRef(null);
  const ContainerRef = useRef(null);
  const pageNumber = useRef(0);
  const NoRefreshRef = useRef(null);
  const Refresh = () => {
    pageNumber.current+=1;
    NoRefreshRef.current.style.display = 'block';
    console.log('새로고침',pageNumber.current);
    if(props.consult === 'Requesting'){
      axios({
        method:'GET',
        url:`http://grise.p-e.kr/tutee/consults`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        params:{
          offset:pageNumber.current*10,
          limit:10,
          content : 'posting'
        }
      })
      .then((res) => {
        const temp = [...ConsultList,...res.data];
        setConsultList(temp);
        console.log(temp);
      }).catch((error) => {console.log(error);pageNumber.current-=1;});
    }
    else if(props.consult === 'Consulting'){
      // axios.get('Json/mainPageTutee/requestConsultList.json')
      // .then((res) => {
      //   const temp = [...ConsultList].concat(res.data);
      //   setConsultList(temp);
      // }).catch((error) => console.log(error));

      
      axios({
        method:'GET',
        url:`http://grise.p-e.kr/tutee/consults`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        params:{
          offset:pageNumber.current*10,
          limit:10,
          content : 'consulting'
        }
      })
      .then((res) => {
        const temp = [...ConsultList,...res.data];
        setConsultList(temp);
        console.log(temp);
      }).catch((error) => {console.log(error);pageNumber.current-=1;});
      
    }else if(props.consult === 'Tutor'){
      // axios.get('Json/mainPageTutee/tutorList.json')
      // .then((res) => {
      //   const temp = [...ConsultList].concat(res.data);
      //   setConsultList(temp);
      // }).catch((error) => console.log(error));

      
      axios({
        method:'GET',
        url:`http://grise.p-e.kr/tutee/tutors`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        params:{
          offset:pageNumber.current*10,
          limit:10,
        }
      })
      .then((res) => {
        const temp = [...ConsultList,...res.data];
        setConsultList(temp);
        console.log(temp);
      }).catch((error) => {console.log(error);pageNumber.current-=1;NoRefreshRef.current.style.display = 'none'});
      
    }else if(props.consult === 'SolvedConsult'){
      // axios.get('Json/mainPageTutee/test.json')
      // .then((res) => {
      //   const temp = [...ConsultList,...res.data];
      //   setConsultList(temp);
      //   console.log(temp);
      // }).catch((error) => {console.log(error);pageNumber.current-=1;NoRefreshRef.current.style.display = 'none'});

      
      axios({
        method:'GET',
        url:`http://grise.p-e.kr/tutee/consults`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        params:{
          offset:pageNumber.current*10,
          limit:10,
          content : 'done'
        }
      })
      .then((res) => {
        const temp = [...ConsultList,...res.data];
        setConsultList(temp);
        console.log(temp);
      }).catch((error) => {console.log(error);NoRefreshRef.current.style.display = 'none';pageNumber.current-=1;});
      
    }
  }

  useEffect(() => {
    if(props.consult === 'Requesting'){
      // axios.get('Json/mainPageTutee/requestConsultList.json')
      // .then((res) => {
      //   setConsultList(res.data);
      // }).catch((error) => console.log(error));


      axios({
        method:'GET',
        url:`http://grise.p-e.kr/tutee/consults`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        body:{
          content : 'posting'
        },
        params:{
          offset:pageNumber.current*10,
          limit:10,
        }
      })
      .then((res) => {
        setConsultList(res.data);
        console.log(pageNumber.current,res.data);
      }).catch((error) => {console.log(error);NoRefreshRef.current.style.display = 'none';});

    }
    else if(props.consult === 'Consulting'){
      // axios.get('Json/mainPageTutee/requestConsultList.json')
      // .then((res) => {
      //   setConsultList(res.data);
      // }).catch((error) => console.log(error));


      axios({
        method:'GET',
        url:`http://grise.p-e.kr/tutee/consults`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        body:{
          content : 'consulting'
        },
        params:{
          offset:pageNumber.current*10,
          limit:10,
        }
      })
      .then((res) => {
        setConsultList(res.data);
        console.log(pageNumber.current,res.data);
      }).catch((error) => {console.log(error);NoRefreshRef.current.style.display = 'none';});

    }else if(props.consult === 'Tutor'){
      // axios.get('Json/mainPageTutee/tutorList.json')
      // .then((res) => {
      //   setConsultList(res.data);
      // }).catch((error) => console.log(error));

      
      axios({
        method:'GET',
        url:`http://grise.p-e.kr/tutee/tutors`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        params:{
          offset:pageNumber.current*10,
          limit:10,
        }
      })
      .then((res) => {
        setConsultList(res.data);
      }).catch((error) => {console.log(error);NoRefreshRef.current.style.display = 'none';});
      
    }else if(props.consult === 'SolvedConsult'){
      // axios.get('Json/mainPageTutee/test.json')
      // .then((res) => {
      //   setConsultList(res.data);
      // }).catch((error) => console.log(error));

      
      axios({
        method:'GET',
        url:`http://grise.p-e.kr/tutee/consults`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        body:{
          content : 'done'
        },
        params:{
          offset:pageNumber.current*10,
          limit:10,
        }
      })
      .then((res) => {
        setConsultList(res.data);
      }).catch((error) => {console.log(error);NoRefreshRef.current.style.display = 'none';});
      
    }
  }, [props.consult]);

  useEffect(()=>{NoRefreshRef.current.style.display = 'none'},[ConsultList])

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
    if(props.consult === 'Requesting'){
      for(let i = 0; i < ConsultList.length-1; i++){
        result.push(<ConsultItem key = {i} isEnd={false} consult={props.consult} data = {ConsultList[i]}></ConsultItem>);
      }
      result.push(<ConsultItem key = {ConsultList.length-1} isEnd={true} consult={props.consult} data = {ConsultList[ConsultList.length-1]} ref={ItemRef}></ConsultItem>);
    }
    else if(props.consult === 'Consulting'){
      for(let i = 0; i < ConsultList.length-1; i++){
        result.push(<ConsultItem key = {i} isEnd={false} consult={props.consult} data = {ConsultList[i]}></ConsultItem>);
      }
      result.push(<ConsultItem key = {ConsultList.length-1} consult={props.consult} isEnd={true} data = {ConsultList[ConsultList.length-1]} ref={ItemRef}></ConsultItem>);
    }else if(props.consult === 'Tutor'){
      for(let i = 0; i < ConsultList.length-1; i++){
        result.push(<TutorItem key = {i} isEnd={false} consult={props.consult} data = {ConsultList[i]}></TutorItem>);
      }
      result.push(<TutorItem key = {ConsultList.length-1} consult={props.consult} isEnd={true} data = {ConsultList[ConsultList.length-1]} ref={ItemRef}></TutorItem>);
    }else if(props.consult === 'SolvedConsult'){
      for(let i = 0; i < ConsultList.length-1; i++){
        result.push(<ConsultItem key = {i} isEnd={false} consult={props.consult} data = {ConsultList[i]}></ConsultItem>);
      }
      result.push(<ConsultItem key = {ConsultList.length-1} consult={props.consult} isEnd={true} data = {ConsultList[ConsultList.length-1]} ref={ItemRef}></ConsultItem>);
    }
    return result;
  }

  return (
    <div>
      <NoRefreshDiv ref = {NoRefreshRef} />
      <ScrollDiv ref = {ContainerRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {getItem()}
      </ScrollDiv>
      <Link to='/RequestConsult' state={{consult:'NormalConsult',tutorId:null}}><RequestButton>일반 피드백 요청하기</RequestButton></Link>
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

const RequestButton = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 50%;
  margin-left: -6rem;
  border-radius: 0.5rem;
  text-align: center;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: bold;
  color: #fff;
  background-color: #3A6C7B;
  width: 12rem;
  height: 3rem;
  float: left;
  font-size: 1rem;
  line-height: 3rem;
`

export default ConsultList;
