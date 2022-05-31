import React, {useState} from "react";
import styled from 'styled-components'
const Video = () => {
	
  return (
    <StyledVideo>
      <video controls style={{ width: "100%", height: "100%" }}>
        <source ref={} type="video/mp4"></source>
      </video>
    </StyledVideo>
  );
};

const StyledVideo = styled.div`
	width: 97%;
	margin: 0.5rem auto;
	height: 25%;
`;

export default Video;