<<<<<<< HEAD
import React, {useEffect,useRef} from "react";
=======
import React, { useState, useRef } from "react";
>>>>>>> 6f6cc1f1dbb9a12eba6e5863b02c429423cca499
import styled from 'styled-components'
<<<<<<< HEAD
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
=======
const Video = () => {
	const videoRef = useRef(null);
	
  return (
    <StyledVideo>
      <video controls style={{ width: "100%", height: "100%" }}>
<<<<<<< HEAD
        <source ref={} type="video/mp4"></source>
>>>>>>> 1f6db699da411349813abae2ff261e92d60629b4
=======
        <source ref={videoRef} type="video/mp4"></source>
>>>>>>> 6f6cc1f1dbb9a12eba6e5863b02c429423cca499
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