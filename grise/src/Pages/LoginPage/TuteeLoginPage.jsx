import React from 'react';
import styled from 'styled-components';
import {ReactComponent as TuteeLogo} from '../../Image/TuteeLogo.svg';
import GoogleBtn from '../../Image/btn_google_signin_light_normal_web.png';
import axios from 'axios';


export const TuteeLoginPage = () => {
	const onClick = () => {
		axios
      .get("/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth/redirect")
      .then((response) => {
        console.log(response);
      });
	}
  return (
    <Wrap>
      <TuteeLogo style={{ width: "100%", height: "100%" }}></TuteeLogo>
      <div onClick={onClick} style={{ textAlign: "center" }}>
        <img src={GoogleBtn} alt="구글 로그인" />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 1200px;
  height:100%;
  margin:0 auto;
  

  @media (max-width:1220px){
    width: 100%;
  }

  @media (max-width:768px){
    width: 100%;
  }

  @media (max-width:480px){
    width:100%;
    background-color:white;
  }
`

export default TuteeLoginPage;