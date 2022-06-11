import React, {useState, useEffect, useRef} from 'react'
import { useLocation } from "react-router-dom";
import styled from 'styled-components'
import NavBar from '../NavBar'
import Comment from "./Comment";
import FinishConsultButton from "./FinishConsultButton";
import axios from 'axios';

const Board = () => {
  const location = useLocation();
	const [consult, setConsult] = useState({});
	const videoRef = useRef(null);
	
	useEffect(() => {
		axios({
      method: "GET",
      url: `https://grise.p-e.kr/tutee/consults/${location.state.consultId}`,
      headers: {
        Authorization: window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
				setConsult(res.data);
				videoRef.current.src = `https://grise.p-e.kr/video/${res.data.video.videoId}`;
      })
      .catch((error) => console.log(error));
	}, [location.state.consultId]);

	return (
    <Wrap>
      <NavBar />
      <StyledVideo>
        <video
          controls
          controlsList="nodownload"
          ref={videoRef}
          style={{ maxWidth: "100%", width: "auto", height: "15rem" }}
        />
      </StyledVideo>
      <StyledTitle>
        <StyledHeader>{consult?.title}</StyledHeader>
        <FinishConsultButton
          consultId={location.state.consultId}
          style={{ float: "right" }}
          consultType={location.state.consult}
        ></FinishConsultButton>
      </StyledTitle>
      <StyledMainText>{consult?.content}</StyledMainText>
      <Comment
        consultId={location.state.consultId}
        tuteeName={consult?.tutee?.name}
        consultType={location.state.consult}
      />
    </Wrap>
  );
};

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

const StyledMainText = styled.div`
  width: 97%;
  height: 3rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: #fff;
`;

const StyledVideo = styled.div`
  width: 97%;
  margin: 0.5rem auto;
  text-align: center;
`;

const Wrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
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