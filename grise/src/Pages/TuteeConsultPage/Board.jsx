import React, {useState, useEffect, useRef} from 'react'
import { useLocation } from "react-router-dom";
import styled from 'styled-components'
import NavBar from '../NavBar'
import Title from "./Title";
import MainText from "./MainText";
import Footer from "./Footer";
import axios from 'axios';

const Board = () => {
  const location = useLocation();
	const [consult, setConsult] = useState({});
	const videoRef = useRef(null);
	
	useEffect(() => {
		setConsult(location.state.data);
		// axios({
    //   method: "GET",
    //   url: `https://grise.p-e.kr/tutee/consults/${location.state.consultId}`,
    //   headers: {
    //     Authorization: window.localStorage.getItem("token"),
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
		// 		setConsult(res.data);
		// 		videoRef.current.src = `https://grise.p-e.kr/video/${res.data.video.videoId}`;
    //   })
    //   .catch((error) => console.log(error));
	}, []);

	return (
    <Wrap>
      <NavBar />
      <StyledVideo>
        <video
          src={`https://grise.p-e.kr/video/${location.state.data.video.videoId}`}
          controls
          style={{ width: "100%", height: "100%" }}
        >
          {/* <source ref={videoRef} type="video/mp4"></source> */}
        </video>
      </StyledVideo>
      <Title
        title={consult?.title}
        tuteeName={consult?.tutee?.name}
        tutorName={consult?.tutor?.name}
        consultId={location.state.consultId}
        consultType={location.state.consult}
      />
      <MainText content={consult?.content} />
      <Footer
        consultId={location.state.consultId}
        tuteeName={consult?.tutee?.name}
        consultType={location.state.consult}
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