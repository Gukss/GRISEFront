import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Drawer } from 'antd';
import { ReactComponent as Menu} from '../Image/Menu.svg';
import { ReactComponent as Logo} from '../Image/GRISE_logo.svg';
import {AiOutlineHome,AiOutlineLogout} from 'react-icons/ai';
import {FiHelpCircle} from 'react-icons/fi'
import GlobalStyle from '../styles/globalStyle/GlobalStyle';

export const NavBar = () => {
  const [drawerVisible, SetDrawerVisible] = useState(false);

  const CloseDrawer = () => {
    SetDrawerVisible(false);
  };

  const ShowDrawer = () =>{
    SetDrawerVisible(true);
  }

  const Logout = () =>{
    window.localStorage.setItem('userId', '');
    window.localStorage.setItem('userName', '');
    window.localStorage.setItem('token', '');
    //https://velog.io/@bluejoyq/reactOAuth2.0-%EC%97%94%EB%93%9C%ED%8F%AC%EC%9D%B8%ED%8A%B8%EB%A1%9C-%EC%A7%81%EC%A0%91-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EA%B8%B0
  }

  return (
    <div>
      <GlobalStyle/>
      <div
        style={{
          borderBottom: "#e3e3e3 solid 1px",
          width: "97%",
          height: "3.5rem",
          margin: "0 auto",
					display: "flex",
					alignItems: "center",
        }}
      >
        <div style={{
					width: "100%",
					height: "50%",
					padding: "auto 0"
				}}>
          <Link to="/tuteeMain">
						<Logo style={{
              width: "4rem",
  						height: "100%",
  						float: "left",
  						marginLeft: "0.5rem"}}/>
          </Link>
          <Menu
            style={{
              width: "2rem",
              height: "2rem",
              float: "right",
            }}
            onClick={ShowDrawer}
          >
          </Menu>
          <Drawer width='100%' title={window.localStorage.getItem("userName")} placement="right" onClose={CloseDrawer} visible={drawerVisible}>
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
            <SideBarItem onClick={Logout}>
              <Link
                to="/tuteeLogin"
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
          </Drawer>
        </div>
      </div>
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
`

export default NavBar;
