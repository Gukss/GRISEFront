import React from 'react';
import styled from 'styled-components';
import {ReactComponent as TutorLogo} from '../../Image/TutorLogo.svg';
import GoogleBtn from '../../Image/btn_google_signin_light_normal_web.png';
export const TutorLoginPage = () => {
  return (
    <Wrap>
      <TutorLogo style={{width:'100%',height:'100%'}}></TutorLogo>
      <div
        onClick={()=>{console.log('구글로그인')}}
        style={{textAlign:'center'}}
      >
        <img src={GoogleBtn} alt="구글 로그인" />
      </div>
    </Wrap>
  )
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

export default TutorLoginPage;