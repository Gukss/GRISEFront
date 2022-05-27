import React,{useRef} from "react";
import styled from 'styled-components';
import { useLocation,useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';

const RequestConsultPage = ()=>{
  const location = useLocation();
  const title = useRef('');
  const content = useRef('');
  const isTitle = useRef(false);
  const isContent = useRef(false);
  const fileNameRef = useRef('');
  const uploadDivRef = useRef(null);
  const postfiles = useRef({
    file: null,
    name:''
  });
  const navigate = useNavigate();
	//제목 검사
	const onChangeTitle = (e) => {
		title.current = e.target.value;
		if (e.target.value.length >= 2) {
			isTitle.current = true;
		}else{
      isTitle.current = false;
    }
	}

	//본문 검사
	const onChangeContent = (e) => {
		content.current = e.target.value;
		if (e.target.value.length >= 5) {
			isContent.current = true;
		}else{
      isContent.current = false;
    }
	}

  const uploadFile = (e) => {
    if(e.target.files && e.target.files[0].size > (20 * 1024 * 1024)){
      alert("파일사이즈가 20mb를 넘습니다.");
    }else{
      let reader = new FileReader();
      reader.onloadend = () => {
        postfiles.current = {
          file: e.target.files[0],
          name: e.target.files[0].name,
        };
      };
      e.stopPropagation();
      fileNameRef.current.innerHTML = e.target.files[0].name;
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  };

	//제목이랑 본문 둘 중 하나 안 채워 졌을 때 어떻게 나타낼지 정하기
  const summitConsult = () => {
		if (isTitle.current && isContent.current) {
			console.log("정상 제출");
      if(location.state.consult === 'NormalConsult'){
        const consult = {
          "requestConsult":{
            "title": title.current,
            "content": content.current,
            "isPost": "True",
            "video":postfiles.current
          }
        }
        console.log(consult);
        navigate('/Consult', { state: consult });
      }
      else if(location.state.consult === 'RequestConsult'){
        const consult = {
          "requestConsult":{
            "title": title.current,
            "content": content.current,
            "isPost": "False",
            "tutor":{
              "id":location.state.tutorId
            },
            "video":postfiles.current
          }
        }
        console.log(consult);
        navigate('/Consult', { consult: consult });
      }
		}
    else if(!isTitle.current){
      console.log("제목 미입력");
      alert('제목을 입력해 주세요!(3글자 이상)');
    }
		else if(!isContent.current) {
			console.log("본문 미입력");
      alert('본문을 입력해 주세요!(5글자 이상)');
		}
    //동영상, 유튜브 둘 다 미입력시 경고
  };

  return (
    <Wrap>
      <NavBar />
      <Title>제목</Title>
      <Input
        type="text"
        placeholder="제목을 입력해 주세요"
        onChange={onChangeTitle}
      />
      <Title>본문</Title>
      <TextArea
        placeholder="피드백 받고 싶은 내용을 입력해 주세요"
        onChange={onChangeContent}
      />
      <VideoInputContainer ref={uploadDivRef}>
        <VideoInput htmlFor="input-file">업로드</VideoInput>
        <input
          id="input-file"
          type="file"
          accept="video/*"
          name={"filename"}
          style={{ display: "none" }}
          onChange={uploadFile}
        />
        <FileName ref={fileNameRef} />
      </VideoInputContainer>
      <SubmmitButton onClick={summitConsult}>피드백 요청</SubmmitButton>
    </Wrap>
  );
}

const Select = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: bold;
  color: #3A6C7B;
  border: none;
  :focus {
    outline: none;
  }
`

const Option = styled.option`
  font-size: 1rem;
  padding: 0.5rem;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: bold;
  color: #000000;
  border: none;
  :focus {
    outline: none;
  }
`

const VideoInputContainer = styled.div`
  height:2rem;
  display:flex;
`

const Iframe = styled.iframe`
  width:97%;
  height: auto;
`

const SubmmitButton = styled.div`
    position: fixed;
    bottom: 1rem;
    left: 50%;
    margin-left: -6rem;
    border-radius: 0.5rem;
    width: 12rem;
    height: 3rem;
    float: left;
    font-size: 1rem;
    line-height: 3rem;
    text-align: center;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    color: #fff;
    background-color: #3A6C7B;
`

const FileName = styled.div`
    flex: 2;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 0.5rem;
    text-align: center;
    width: 12rem;
    height:2rem;
    border-radius: 0.5rem;
    line-height: 1rem;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
`

const VideoInput = styled.label`
    flex: 1;
    margin-left: 0.5rem;
    border-radius: 0.5rem;
    width: 10rem;
    height: 2rem;
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    color: white;
    background-color: #3A6C7B;
`

const TextArea = styled.textarea`
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

const Title = styled.div`
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

const Input = styled.input`
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