import React,{useRef,useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ReactComponent as Search} from '../Image/search.svg';
import { ReactComponent as Menu} from '../Image/Menu.svg';
import { ReactComponent as Logo} from '../Image/GRISE_logo.svg';
import SideBarContainer from './SideBar/SideBarContainer';

export const NavBar = () => {
  const searchText = useRef('');
  const sideBarRef = useRef();
  const searchRef = useRef();
  const onClickMenu = () =>{
    sideBarRef.current.style.display='block';
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
  useEffect(()=>{
    searchRef.current.style.display = 'none';
    sideBarRef.current.style.display='none';
  },[]);
  return (
    <div>
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
          <Link to="/">
						<Logo style={{
              width: "4rem",
  						height: "100%",
  						float: "left",
  						marginLeft: "0.5rem"}}/>
          </Link>
          <SideBarContainer ref = {sideBarRef}/>
          <Menu
            style={{
              width: "2rem",
              height: "2rem",
              float: "right",
            }}
            onClick={onClickMenu}
          ></Menu>
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
export default NavBar;
