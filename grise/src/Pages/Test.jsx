import React, {useRef } from 'react'

const Test = () => {
  const videoRef = useRef();
  const griseURL = 'http://grise.p-e.kr/tutee/video/23';
  const testURL = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4';
  return (
    <div>
      <video ref={videoRef} autoPlay controls style={{ width: "100%", height: "100%" }}/>
      <div onClick={()=>{
        navigator.serviceWorker.controller.postMessage({token: window.localStorage.getItem('token')});
        videoRef.current.src=griseURL;
      }}>test</div>
    </div>
  )
}

export default Test