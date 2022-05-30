import React, {useEffect,useRef} from "react";
import styled from 'styled-components'
const Video = (props) => {
  const videoRef = useRef(null);
  async function VideoInit(){
    const result = await fetch(`http://grise.p-e.kr/tutee/video/${props.videoId}`, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    });

    const blob = await result.blob();

    if (blob) {
      videoRef.current.src = URL.createObjectURL(blob);

      // Load the new resource
      videoRef.current.parentElement.load();

      console.info("Ready!", videoRef.current.src);
    } else {
      console.warn("Can not load");
    }
  }
  useEffect(()=>{
    VideoInit();
  },[])
  return (
    <StyledVideo>
      <video controls style={{width: "100%", height: "100%"}}>
        <source ref={videoRef}></source>
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
