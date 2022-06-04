import React, {useState, useEffect, useRef} from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import NavBar from '../NavBar'
import Title from "./Title";
import MainText from "./MainText";
import Footer from "./Footer";
import axios from 'axios';

const Board = () => {
  const location = useLocation();
	const [videoSrc, setVideoSrc] = useState("");
	const [consult, setConsult] = useState({});
	const videoRef = useRef(null);
	const [consultStart, setConsultStart] = useState(false);
	const onClick = () => {
		axios({
      method: "POST",
      url: `http://grise.p-e.kr/tutor/consults/${location.state.consultId}/startConsult`,
      headers: {
        Authorization: window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("피드백 시작 테스트", res);
      })
      .catch((error) => {
        console.log(error);
      });
		setConsultStart(true);
	};
	const typeRef = useRef();

	const consultType = () => {
		if (location.state.consult === "NormalConsult"){
			typeRef.innerHTML = "피드백 하기";
		} else if (location.state.consult === "RequestConsult") {
			typeRef.current = "피드백 하기";
    } else if (location.state.consult === "consulting"){
			typeRef.current.style.display = "none";
		};
	};
	useEffect(() => {
		axios({
      method: "GET",
      url: `http://grise.p-e.kr/tutor/consults/${location.state.consultId}`,
      headers: {
        Authorization: window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
				setConsult(res.data);
        console.log("df", res.data);
				videoRef.current.src = `http://grise.p-e.kr/tutor/video/${res.data.video.videoId}`;
				consultType();
      })
      .catch((error) => console.log(error));
	}, []);

	return (
    <Wrap>
      <NavBar />
      <StyledVideo>
        <video controls style={{ width: "100%", height: "100%" }}>
          <source ref={videoRef} type="video/mp4"></source>
        </video>
      </StyledVideo>
      <StyledTitle>
        <StyledHeader>{consult?.title}</StyledHeader>
        <CompleteButton onClick={onClick} ref={typeRef}>
          피드백 하기
        </CompleteButton>
      </StyledTitle>
      <MainText content={consult?.content} />
      <Footer
        consultId={location.state.consultId}
        tuteeName={consult?.tutee?.name}
        // tutorName={location.state.tutor.name}
        consultStart={consultStart}
      />
    </Wrap>
  );
};

const CompleteButton = styled.button`
  width: 4rem;
  height: 1.5rem;
  font-size: 0.4rem;
  border-radius: 10px;
  font-weight: bold;
  background-color: #3a6c7b;
  border: none;
  color: #fff;
  margin: auto 0.3rem auto 0;
`;

const StyledTitle = styled.div`
  width: 97%;
  height: 10%;
  margin: 0 auto;
  border-bottom: #3a6c7b solid 1px;
  padding: 0.1rem 0;
  display: flex;
  justify-content: space-between;
`;

const StyledHeader = styled.div`
  width: 80%;
  height: 1rem;
  font-weight: bold;
  font-size: 0.7rem;
  color: #3a6c7b;
  margin: auto 0;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const StyledVideo = styled.div`
  width: 97%;
  margin: 0.5rem auto;
  height: 25%;
`;

const Wrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
	/* display: flex;
	flex-direction: column; */
  @media (max-width: 1220px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;


export default Board;