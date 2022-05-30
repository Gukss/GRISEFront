import React,{useRef} from 'react'
import axios from 'axios';

const VideoSubmit = () => {
    const FormRef = useRef(null);
    const Test = (event) =>{
        event.preventDefault();
        let data = new FormData(FormRef.current);
        console.log(data);
        console.log("test시작");
        for(var pair of data.entries()) {
            console.log(pair[0]+ ', '+ pair[1]); 
        }
        
        axios({
            method: "post",
            url: `http://grise.p-e.kr/tutee/consults/general`, //환경변수
            headers: { "Content-Type": "multipart/form-data", Authorization: localStorage.getItem("token") },
            data:data
        }).then((res) => console.log(res)).catch((error) => console.log(error));
        
    }
  return (
    <div>
        <button onClick={()=>{
            axios({
                method: "get",
                url: `http://grise.p-e.kr/tutee/consults/19`, //환경변수
                headers: { Authorization: window.localStorage.getItem('token') ,"Content-Type": "application/json", },
            }).then((res) => console.log(res)).catch((error) => console.log(error));
        }}>test</button>
        <form id = "video-form" ref={FormRef}>
            <fieldset>
                <legend>Upload a video</legend>
                <div>
                    <div><label htmlFor="video">Video File</label></div>
                    <input id="video" name="video" type="File" accept='application/mp4'></input>
                </div>
                <div>
                    <div><label htmlFor="title">title</label></div>
                    <input id="title" name="title" type="Text"></input>
                </div>
                <div>
                    <div><label htmlFor="content">content</label></div>
                    <input id="content" name="content" type="Text"></input>
                </div>
                <button type='submit' onClick={Test}>Save</button>
            </fieldset>
        </form>
    </div>
  )
}

export default VideoSubmit