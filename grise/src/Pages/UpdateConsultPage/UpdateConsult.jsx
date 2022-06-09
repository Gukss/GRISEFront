import React,{useEffect,useRef,useState,useCallback} from "react";
import styled from 'styled-components';
import { useLocation,useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import axios from 'axios';
const UpdateConsult = ()=>{
  const location = useLocation();
  const FormRef = useRef(null);
  const [Title,SetTitle]=useState('');
  const [Content,SetContent] = useState('');
  const VideoRef = useRef(null);
  const VideoNameRef = useRef(null);
  const SubmitingRef = useRef(null);
  const navigate = useNavigate();

	//제목이랑 본문 둘 중 하나 안 채워 졌을 때 어떻게 나타낼지 정하기
  const summitConsult = (event) => {
    event.preventDefault();
    if(location.state === null){ 
      alert('잘못된 접근입니다');
      return;
    }
    
    const isTitle = Title.length > 2 ? true:false;
    const isContent = Content.length > 4 ? true:false;
    SubmitingRef.current.style.display='block';
		if (isTitle&&isContent) {
      let URL = `https://grise.p-e.kr/tutee/consults/${location.state.consultId}`;
      let data = new FormData(FormRef.current);

      axios({  
        method: "PUT",
        url: URL, //환경변수
        headers: { "Content-Type": "multipart/form-data", Authorization: localStorage.getItem("token") },
        data:data
      }).then((res) => {
        SubmitingRef.current.style.display='none';
        navigate('/tuteeMain');
      }).catch((error) => {
        console.log(error);
        SubmitingRef.current.style.display='none';
      });
      
		}   
    else if(!isTitle){
      SubmitingRef.current.style.display='none';
      alert('제목을 입력해 주세요!(3글자 이상)');
    }
		else if(!isContent) {
      SubmitingRef.current.style.display='none';
      alert('본문을 입력해 주세요!(5글자 이상)');
		}
  };

  const ChangeTitle = useCallback((e) =>{
    SetTitle(e.target.value);
  },[])

  const ChangeContent = useCallback((e) =>{
    SetContent(e.target.value);
  },[])

  const onChangeVideo = useCallback((e) =>{
    if(e.target.files[0].size > 30*1024*1024){
      VideoRef.current = null;
      VideoNameRef.current.innerHTML = '선택된 파일없음';
      alert("영상의 크기가 30MB를 넘습니다.");
    }else{
      VideoNameRef.current.innerHTML = e.target.files[0].name;
    }
  },[]);

  useEffect(()=>{
    axios({
      method: "GET",
      url: `https://grise.p-e.kr/tutee/consults/${location.state.consultId}`,
      headers: {
        Authorization: window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        SetTitle(res.data.title);
        SetContent(res.data.content);
      })
      .catch((error) => console.log(error));
  },[location.state])
  return (
    <Wrap>
      <SubmitingDiv ref={SubmitingRef}>
        전송중입니다
      </SubmitingDiv>
      <NavBar />
      <form id = "video-form" ref={FormRef}>
        <fieldset>
          <div>
            <div><Label htmlFor="title">제목</Label></div>
            <TitleInput value={Title} onChange={ChangeTitle} id="title" name="title" type="Text" placeholder="제목을 입력해 주세요"></TitleInput>
          </div>
          <div>
            <div><Label htmlFor="content">본문</Label></div>
            <ContentInput value={Content} onChange={ChangeContent}  id="content" name="content" type="Text" placeholder="피드백 받고싶은 내용을 입력해 주세요"></ContentInput>
          </div>
          <div>
            <VideoNameContainer>
              <VideoTitleDiv>영상 업로드</VideoTitleDiv>
              <WarningVideo>※30MB 이하만 업로드 가능합니다</WarningVideo>
            </VideoNameContainer>
            <input id="video" name="video" type="File" accept='video/*' style={{display:'none'}} onChange={onChangeVideo} ref={VideoRef}></input>
            <VideoConatainer>
              <UploadButton htmlFor="video">동영상선택</UploadButton>
              <VideoName ref={VideoNameRef}>기존 동영상입니다</VideoName>
            </VideoConatainer>
          </div>
          <SubmmitButton type='submit' onClick={summitConsult}>피드백 요청</SubmmitButton>
        </fieldset>
      </form>
    </Wrap>
  );
}

const VideoNameContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const WarningVideo = styled.div`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 900;
  font-size: 1rem;
  color: #FF5656;
  margin-left: 1rem;
  padding: 0.3rem;
`

const SubmitingDiv = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: bold;
  color: #fff;
  font-size: 3rem;
  text-align: center;
  line-height: 80vh;
  background-color: rgba(0,0,0,0.8);
`


const VideoConatainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 0;
`

const VideoName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 100;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
`

const VideoTitleDiv = styled.div`
  margin-left: 0.5rem;
  display: block;
  font-size: 1rem;
  text-align:left;
  padding: 0.3rem;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: bold;
  color: #3A6C7B;
`

const UploadButton = styled.label`
  border-radius: 0.5rem;
  margin-left: 0.6rem;
  width: 8rem;
  height: 2rem;
  font-size: 1rem;
  line-height: 2rem;
  text-align: center;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: bold;
  color: #fff;
  background-color: #3A6C7B;
`

const SubmmitButton = styled.button`
  position: absolute;
  z-index: 0;
  bottom: 1rem;
  left: 50%;
  margin-left: -6rem;
  border-radius: 0.5rem;
  width: 12rem;
  height: 3rem;
  float: left;
  font-size: 1rem;
  line-height: 2.5rem;
  text-align: center;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: bold;
  color: #fff;
  background-color: #3A6C7B;
`

const ContentInput = styled.textarea`
  margin-left: 0.5rem;
  width: 95%;
  size: 100%;
  height: 8rem;
  font-size: 1rem;
  text-align:left;
  border: none;
  border-bottom: #3A6C7B solid 0.1rem;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 100;
  :focus {
    outline: none;
  }
`

const Label = styled.label`
  margin-left: 0.5rem;
  display: block;
  font-size: 1rem;
  text-align:left;
  padding: 0.3rem;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: bold;
  color: #3A6C7B;
`

const TitleInput = styled.input`
  width: 95%;
  height: 2rem;
  margin-left: 0.5rem;
  size: 100%;
  font-size: 1rem;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 100;
  text-align:left;
  border: none;
  border-bottom: #3A6C7B solid 0.1rem;
  :focus {
    outline: none;
  }
`

const Wrap = styled.div`
  /* background-color: brown; */
  width: 1200px;
  height:100%;
  margin:0 auto;
  

  @media (max-width:1220px){
    width: 100%;
  }

  @media (max-width:768px){
    width: 100%;
  }

  @media (max-width:480px){
    width:100%;
    background-color:white;
  }
`

export default UpdateConsult;