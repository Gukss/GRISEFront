import React, {useRef } from 'react'

const Test = () => {
  const videoRef = useRef();
  const video2Ref = useRef();
  const griseURL = 'https//grise.p-e.kr/tutee/video/23';
  const testURL = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4';
  async function VideoInit(){
    const result = await fetch(`https//grise.p-e.kr/tutee/video/23`, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    });

    const blob = await result.blob();

    if (blob) {
      videoRef.current.src = URL.createObjectURL(blob);

      // Load the new resource
      videoRef.current.load();

      console.info("Ready!", videoRef.current.src);
    } else {
      console.warn("Can not load");
    }
  }
  return (

    <div>
      <video ref={video2Ref} autoPlay controls style={{ width: "100%", height: "100%" }}/>
      <div onClick={()=>{
        navigator.serviceWorker.controller.postMessage({token: window.localStorage.getItem('token')});
        video2Ref.current.src=griseURL;
      }}>실시간예제</div>

      <video ref={videoRef} autoPlay controls style={{ width: "100%", height: "100%" }}/>
      <div onClick={VideoInit}>한꺼번에 예제</div>
    </div>
  )
}

export default Test