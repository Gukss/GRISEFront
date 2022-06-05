import React,{useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Drawer } from 'antd';
import { ReactComponent as Search} from '../Image/search.svg';
import { ReactComponent as Menu} from '../Image/Menu.svg';
import { ReactComponent as Logo} from '../Image/GRISE_logo.svg';
import {AiOutlineHome,AiOutlineLogout} from 'react-icons/ai';
import {FiHelpCircle} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import GlobalStyle from '../styles/globalStyle/GlobalStyle';
import "antd/dist/antd.css";

export const NavBar = () => {
  const searchText = useRef('');
  const searchRef = useRef();
  const [MenuVisible, setMenuVisible] = useState(false);
  const [userName,setUserName] = useState('');

  useEffect(()=>{
    setUserName(window.localStorage.getItem("username"));
  },[])

  const onClose = () => {
    setMenuVisible(false);
  };

  const onClickMenu = () =>{
    setMenuVisible(true);
  }
  const onClickSearch = () =>{
    if(searchRef.current.style.display === 'none'){ //현재 검색창이 비활성화되어있을때
      searchRef.current.style.display='block'; //검색창을 보이게함
    }else if(searchText.current === ""){//검색창이 보이는상태이면서 텍스트가 아무것도 없으면 숨기기
      searchRef.current.style.display='none';
    }else{//검색
      console.log(searchText.current);
    }
  }

  const onClickLogOut = () =>{
    //https://velog.io/@bluejoyq/reactOAuth2.0-%EC%97%94%EB%93%9C%ED%8F%AC%EC%9D%B8%ED%8A%B8%EB%A1%9C-%EC%A7%81%EC%A0%91-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EA%B8%B0
  }
  useEffect(()=>{
    searchRef.current.style.display = 'none';
		// console.log(window.location.host, "패쓰확인");
  },[]);
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
            onClick={onClickMenu}
          >
          </Menu>
          <Drawer width='100%' title={userName} placement="right" onClose={onClose} visible={MenuVisible}>
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
            <SideBarItem onClick={onClickLogOut}>
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
          </Drawer>
          <Search
            style={{
              width: "2rem",
              height: "2rem",
              float: "right",
            }}
            onClick={onClickSearch}
          ></Search>
          <Input
            ref = {searchRef}
            type="text"
            onChange={(e) => {
              searchText.current = e.target.value;
            }}
          />
        </div>
      </div>
    </div>
  );
}

const Input = styled.input`
  width:10rem;
  height:2rem;
  float:right;
`

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
