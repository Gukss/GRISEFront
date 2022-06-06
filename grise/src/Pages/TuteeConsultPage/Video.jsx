import React, {useEffect,useRef} from "react";
import styled from 'styled-components'

const Video = (props) => {
  const videoRef = useRef(null);
  
    
  return (
    <StyledVideo>
      <video controls style={{ width: "100%", height: "100%" }}>
        <source ref={videoRef} type="video/mp4"></source>
      </video>
    </StyledVideo>
  );
}
const StyledVideo = styled.div`
  width: 97%;
  margin: 0.5rem auto;
  height: 25%;
`;

export default Video;