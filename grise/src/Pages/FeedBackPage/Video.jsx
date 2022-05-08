import React, {useState} from "react";

const Video = () => {
	const [videoSrc, setVideoSrc] = useState('/videos/test.mp4')
  return (
    <>
      <video controls>
        <source src={videoSrc}></source>
      </video>
    </>
  );
};

export default Video;
