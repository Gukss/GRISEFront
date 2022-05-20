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
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <AiOutlineHome
            style={{
              float: "left",
              width: "2rem",
              height: "2rem",
              color: "#3A6C7B",
              margin: "1rem 0",
            }}
          />
          <Content>홈화면</Content>
        </Link>
      </SideBarItem>
      <SideBarItem>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <CgProfile
            style={{
              float: "left",
              width: "2rem",
              height: "2rem",
              color: "#3A6C7B",
              margin: "1rem 0",
            }}
          />
          <Content>내 정보 수정</Content>
        </Link>
      </SideBarItem>
      <SideBarItem>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <FiHelpCircle
            style={{
              float: "left",
              width: "2rem",
              height: "2rem",
              color: "#3A6C7B",
              margin: "1rem 0",
            }}
          />
          <Content>도움말</Content>
        </Link>
      </SideBarItem>
      <SideBarItem>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <AiOutlineLogout
            style={{
              float: "left",
              width: "2rem",
              height: "2rem",
              color: "#3A6C7B",
              margin: "1rem 0",
            }}
          />
          <Content>로그아웃</Content>
        </Link>
      </SideBarItem>
    </div>
  );
}

const Content = styled.div`
  float: left;
  line-height: 5rem;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 100;
  font-size: 1rem;
  color: #000000;
	width: 10rem;
`

const SideBarItem = styled.div`
  width: 95%;
  margin-left: 2.5%;
  height: 5rem;
  border-bottom: #3a6c7b solid 0.1rem;
`;

export default SideBarList