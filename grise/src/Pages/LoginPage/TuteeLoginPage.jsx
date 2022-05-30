import React from 'react';
import styled from 'styled-components';
import {ReactComponent as TuteeLogo} from '../../Image/TuteeLogo.svg';
import { GoogleLoginButton } from "react-social-login-buttons";


export const TuteeLoginPage = () => {
  return (
    <Wrap>
      <TuteeLogo style={{ width: "100%", height: "100%" }}></TuteeLogo>
      <a
        href="http://grise.p-e.kr/oauth2/authorization/google?redirect_uri=http://localhost:3000/Redirect"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div style={{ width: "60%" }}>
          <GoogleLoginButton></GoogleLoginButton>
        </div>
      </a>
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