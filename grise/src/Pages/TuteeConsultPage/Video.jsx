import React, {useEffect,useRef} from "react";
import styled from 'styled-components'
import axios from "axios";

const Video = (props) => {
  const videoRef = useRef(null);
  // async function VideoInit(){
  //   console.log('비디오 시작 test');
  //   const result = await fetch(`https://grise.p-e.kr/tutee/video/${props.videoId}`, {
  //     headers: {
  //       Authorization: window.localStorage.getItem('token')
  //     }
  //   });

  //   const blob = await result.blob();
  //   console.log(result);

  //   if (blob) {
  //     videoRef.current.src = URL.createObjectURL(blob);

  //     // Load the new resource
  //     videoRef.current.parentElement.load();

  //     console.info("Ready!", videoRef.current.src);
  //   } else {
  //     console.warn("Can not load");
  //   }
  // }
  useEffect(()=>{
    axios.get( `https://grise.p-e.kr/tutee/video/${props.videoId}`, {headers: {Authorization: window.localStorage.getItem('token')} } )
    .then( response => {
      videoRef.current.src = URL.createObjectURL(new Blob(response));
      console.log(response);
    })
    .catch((error) => console.log(error));
  },[])
    
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