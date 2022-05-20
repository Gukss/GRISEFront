import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {AiOutlineHome,AiOutlineLogout} from 'react-icons/ai';
import {FiHelpCircle} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
const SideBarList = () => {
  return (
    <div>
      <SideBarItem>
        <Link to="/" style={{ textDecoration: 'none'}}>
          <AiOutlineHome 
            style={{
              float: 'left',
              width:'3rem',
              height:'3rem',
              color:'#000000',
              margin: '1rem 2rem 1rem 4rem'
            }} 
          />
          <Content>홈화면</Content>
        </Link>
      </SideBarItem>
      <SideBarItem>
        <Link to="/" style={{ textDecoration: 'none'}}>
          <CgProfile 
            style={{
              float: 'left',
              width:'3rem',
              height:'3rem',
              color:'#000000',
              margin: '1rem 2rem 1rem 4rem'
            }} 
          />
          <Content>내 정보 수정</Content>
        </Link>
      </SideBarItem>
      <SideBarItem>
        <Link to="/" style={{ textDecoration: 'none'}}>
          <FiHelpCircle 
            style={{
              float: 'left',
              width:'3rem',
              height:'3rem',
              color:'#000000',
              margin: '1rem 2rem 1rem 4rem'
            }} 
          />
          <Content>도움말</Content>
        </Link>
      </SideBarItem>
      <SideBarItem>
        <Link to="/" style={{ textDecoration: 'none'}}>
          <AiOutlineLogout 
            style={{
              float: 'left',
              width:'3rem',
              height:'3rem',
              color:'#000000',
              margin: '1rem 2rem 1rem 4rem'
            }} 
          />
          <Content>로그아웃</Content>
        </Link>
      </SideBarItem>
    </div>
  )
}

const Content = styled.div`
  float: left;
  line-height: 5rem;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 100;
  font-size: 2rem;
  color: #000000;
`

const SideBarItem = styled.div`
  width: 95%;
  margin-left: 2.5%;
  height: 5rem;
  border-bottom: #3A6C7B solid 0.1rem;
`

export default SideBarList