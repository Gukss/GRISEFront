import React, {useState} from "react";
import styled from 'styled-components'
const Video = () => {
	const [videoSrc, setVideoSrc] = useState('/videos/test.mp4')
  return (
    <StyledVideo>
      <video controls style={{width: "100%",}}>
        <source src={videoSrc}></source>
      </video>
    </StyledVideo>
  );
};

const StyledVideo = styled.div`
	width: 97%;
	margin: 0.5rem auto;
`;

export default Video;
