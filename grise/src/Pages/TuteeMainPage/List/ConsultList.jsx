import React,{useState,useRef,useEffect,useCallback} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import ConsultItem from './ConsultItem';
import TutorItem from './TutorItem';
import {Link} from 'react-router-dom';

const ConsultList = (props) => {
  const [consultList,SetConsultList] = useState([]);
  const [touchPosition,SetTouchPosition]= useState({x:0,y:0});
  const itemRef = useRef(null);
  const containerRef = useRef(null);
  const pageNumber = useRef(0);
  const noRefreshRef = useRef(null);

  const Refresh = () => {
    pageNumber.current+=1;
    noRefreshRef.current.style.display = 'block';
    console.log('새로고침',pageNumber.current);
    if(props.consult === 'Requesting'){
      axios({
        method:'GET',
        url:`https://grise.p-e.kr/tutee/consults`,
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
        const temp = [...consultList,...res.data];
        SetConsultList(temp);
      }).catch((error) => {console.log(error);pageNumber.current-=1;});
    }
    else if(props.consult === 'Consulting'){
      // axios.get('Json/mainPageTutee/requestconsultList.json')
      // .then((res) => {
      //   const temp = [...consultList].concat(res.data);
      //   SetConsultList(temp);
      // }).catch((error) => console.log(error));

      
			axios({
        method:'GET',
        url:`https://grise.p-e.kr/tutee/consults`,
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
        const temp = [...consultList,...res.data];
        SetConsultList(temp);
      }).catch((error) => {console.log(error);pageNumber.current-=1;});
      
    }else if(props.consult === 'Tutor'){
      axios({
        method:'GET',
        url:`https://grise.p-e.kr/tutee/tutors`,
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
        const temp = [...consultList,...res.data];
        SetConsultList(temp);
      }).catch((error) => {console.log(error);pageNumber.current-=1;noRefreshRef.current.style.display = 'none'});
      
    }else if(props.consult === 'SolvedConsult'){
      axios({
        method:'GET',
        url:`https://grise.p-e.kr/tutee/consults`,
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
        const temp = [...consultList,...res.data];
        SetConsultList(temp);
      }).catch((error) => {console.log(error);noRefreshRef.current.style.display = 'none';pageNumber.current-=1;});
    }
  }

  const GetConsult = useCallback(() =>{
    pageNumber.current = 0;
    if(props.consult === 'Requesting'){
      axios.get('Json/mainPageTutee/requestconsultList.json')
      // .then((res) => {
      //   SetConsultList(res.data);
      // }).catch((error) => console.log(error));
      
			/*
			axios({
        method: "GET",
        url: `https://grise.p-e.kr/tutee/consults`,
        headers: {
          Authorization: window.localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        params:{
          offset:pageNumber.current*10,
          limit:10,
          content : 'posting'
        }
      })
			*/
        .then((res) => {
          SetConsultList(res.data);
        })
        .catch((error) => {
          console.log(error);
          noRefreshRef.current.style.display = "none";
        });

    }
    else if(props.consult === 'Consulting'){
      /*
			axios({
        method:'GET',
        url:`https://grise.p-e.kr/tutee/consults`,
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
			*/
      axios
        .get("Json/mainPageTutee/requestconsultList.json")
        .then((res) => {
          SetConsultList(res.data);
        })
        .catch((error) => {
          console.log(error);
          noRefreshRef.current.style.display = "none";
        });

    }else if(props.consult === 'Tutor'){
      /*
			axios({
        method:'GET',
        url:`https://grise.p-e.kr/tutee/tutors`,
        headers: {
          Authorization: window.localStorage.getItem('token') ,
          "Content-Type": "application/json",
        },
        params:{
          offset:pageNumber.current*10,
          limit:10,
        }
      })
			*/
      axios
        .get("Json/mainPageTutee/tutorList.json")
        .then((res) => {
          SetConsultList(res.data);
        })
        .catch((error) => {
          console.log(error);
          noRefreshRef.current.style.display = "none";
        });
      
    }else if(props.consult === 'SolvedConsult'){
      /*
			axios({
        method:'GET',
        url:`https://grise.p-e.kr/tutee/consults`,
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
			*/
      axios
        .get("Json/mainPageTutee/requestconsultList.json")
        .then((res) => {
          SetConsultList(res.data);
        })
        .catch((error) => {
          console.log(error);
          noRefreshRef.current.style.display = "none";
        }); 
    }
  },[props.consult,pageNumber,noRefreshRef,SetConsultList])

  const DeleteItem = useCallback(()=>{
    GetConsult();
  },[GetConsult])

  const TouchStart=(e)=>{
    SetTouchPosition({ x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY });
  }

  const TouchEnd=(e)=>{
    if(consultList.length < 10){return;}
    const distanceY = touchPosition.y - e.changedTouches[0].pageY; //드래그한 Y길이 시작Y좌표 - 드래그끝났을때 Y좌표 내릴때 양수
    const DivHeight = itemRef.current.style.height; //아이템 하나의 높이
    const scrollY = containerRef.current.getBoundingClientRect().bottom-itemRef.current.getBoundingClientRect().bottom;
    //높이가 소수점이면 애매하게 딱 안맞을 수 있어서 수정
    if(-1<scrollY&&scrollY<1){
      if(distanceY>DivHeight){//스크롤링위치가 맨마지막에 되어있을때 item하나의 높이보다 더 드래그하면 새로고침
        Refresh();
      }
    }
  }

  useEffect(()=>{
    if(props.Loading){
      GetConsult();
      props.SetLoading(false);
    }
  },[props,GetConsult])

  useEffect(()=>{noRefreshRef.current.style.display = 'none'},[consultList])

  return (
    <div>
      <NoRefreshDiv ref = {noRefreshRef} />
      <ScrollDiv ref = {containerRef} TouchStart={TouchStart} TouchEnd={TouchEnd}>
        {
          consultList.map(function(el,i){
            if(i === consultList.length-1){
              if(props.consult === 'Requesting'){
                return <div key = {consultList.length} ref={itemRef}><ConsultItem key = {consultList.length-1} isEnd={true} DeleteItem={DeleteItem} consult={props.consult} data = {consultList[consultList.length-1]}></ConsultItem></div>;
              }
              else if(props.consult === 'Consulting'){
                return <div key = {consultList.length} ref={itemRef}><ConsultItem key = {consultList.length-1} DeleteItem={DeleteItem} consult={props.consult} isEnd={true} data = {consultList[consultList.length-1]}></ConsultItem></div>;
              }else if(props.consult === 'Tutor'){
                return <div key = {consultList.length} ref={itemRef}><TutorItem key = {consultList.length-1} consult={props.consult} isEnd={true} data = {consultList[consultList.length-1]}></TutorItem></div>;
              }else if(props.consult === 'SolvedConsult'){
                return <div key = {consultList.length} ref={itemRef}><ConsultItem key = {consultList.length-1} DeleteItem={DeleteItem} consult={props.consult} isEnd={true} data = {consultList[consultList.length-1]}></ConsultItem></div>;
              }
            }else{
              if(props.consult === 'Requesting'){
                return <ConsultItem key = {i} isEnd={false} DeleteItem={DeleteItem} consult={props.consult} data = {consultList[i]}></ConsultItem>;
              }
              else if(props.consult === 'Consulting'){
                return <ConsultItem key = {i} isEnd={false} DeleteItem={DeleteItem} consult={props.consult} data = {consultList[i]}></ConsultItem>;
              }else if(props.consult === 'Tutor'){
                return <TutorItem key = {i} isEnd={false} consult={props.consult} data = {consultList[i]}></TutorItem>;
              }else if(props.consult === 'SolvedConsult'){
                return <ConsultItem key = {i} isEnd={false} DeleteItem={DeleteItem} consult={props.consult} data = {consultList[i]}></ConsultItem>;
              }
            }
          })
        }
      </ScrollDiv>
      <Link to='/RequestConsult' state={{consult:'NormalConsult',tutorId:null}}><RequestButton>일반 상담 요청하기</RequestButton></Link>
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
