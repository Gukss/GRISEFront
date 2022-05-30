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
	
	useEffect(() => {
		axios({
      method: "GET",
      url: `http://grise.p-e.kr/tutee/consults/${location.state.consultId}`,
      headers: {
        Authorization: window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
				setConsult(res.data);
        console.log("df", res.data);
				videoRef.current.src = `http://grise.p-e.kr/tutee/video/${res.data.video.videoId}`;
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
      <Title
        title={consult?.title}
        tuteeName={consult?.tutee?.name}
        tutorName={consult?.tutor?.name}
        consultId={location.state.consultId}
      />
      <MainText content={consult?.content} />
      <Footer
        consultId={location.state.consultId}
        tuteeName={consult?.tutee?.name}
        // tutorName={location.state.tutor.name}
      />
    </Wrap>
  );
};

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