import React,{ useRef} from "react";
import styled from 'styled-components';
import { useLocation,useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import axios from 'axios';
const RequestConsultPage = ()=>{
  const location = useLocation();
  const FormRef = useRef(null);
  const TitleRef = useRef(null);
  const ContentRef = useRef(null);
  const VideoRef = useRef(null);
  const VideoNameRef = useRef(null);
  const SubmitingRef = useRef(null);
  const navigate = useNavigate();

  const onChangeVideo = (e) =>{
    VideoNameRef.current.innerHTML = e.target.files[0].name;
  }

	//제목이랑 본문 둘 중 하나 안 채워 졌을 때 어떻게 나타낼지 정하기
  const summitConsult = (event) => {
    event.preventDefault();
    const isTitle = TitleRef.current.value.length > 2 ? true:false;
    const isContent = ContentRef.current.value.length > 4 ? true:false;
    const isVideo = VideoRef.current.files[0] !== undefined ? true:false;
    SubmitingRef.current.style.display='block';
		if (isTitle&&isContent&&isVideo) {
			console.log("정상 제출");
      let data = new FormData(FormRef.current);
      let URL = 'http://grise.p-e.kr/tutee/consults';
      
      if(location.state.consult === 'NormalConsult'){
        data.append("tutorId",null);
        URL+='/general';
      }
      else if(location.state.consult === 'RequestConsult'){
        data.append("tutorId",location.state.tutorId);
        URL+='/post';
      }
      
      axios({
        method: "post",
        url: URL, //환경변수
        headers: { "Content-Type": "multipart/form-data", Authorization: localStorage.getItem("token") },
        data:data
      }).then((res) => {
        console.log(res);
        SubmitingRef.current.style.display='none';
        navigate('/tuteeMain');
      }).catch((error) => console.log(error));
      
		}   
    else if(!isTitle){
      console.log("제목 미입력");
      alert('제목을 입력해 주세요!(3글자 이상)');
    }
		else if(!isContent) {
			console.log("본문 미입력");
      alert('본문을 입력해 주세요!(5글자 이상)');
		}
    else if(!isVideo){
      console.log("비디오 미입력");
      alert('비디오를 업로드해 주세요')
    }
  };

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
            <TitleInput ref={TitleRef} id="title" name="title" type="Text" placeholder="제목을 입력해 주세요"></TitleInput>
          </div>
          <div>
            <div><Label htmlFor="content">본문</Label></div>
            <ContentInput ref={ContentRef} id="content" name="content" type="Text" placeholder="피드백 받고싶은 내용을 입력해 주세요"></ContentInput>
          </div>
          <div>
            <VideoTitleDiv>영상 업로드</VideoTitleDiv>
            <input id="video" name="video" type="File" accept='video/*' style={{display:'none'}} onChange={onChangeVideo} ref={VideoRef}></input>
            <VideoConatiner>
              <UploadButton htmlFor="video">동영상선택</UploadButton>
              <VideoName ref={VideoNameRef}>선택된 파일없음</VideoName>
            </VideoConatiner>
          </div>
          <SubmmitButton type='submit' onClick={summitConsult}>피드백 요청</SubmmitButton>
        </fieldset>
      </form>
    </Wrap>
  );
}

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


const VideoConatiner = styled.div`
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

export default RequestConsultPage;