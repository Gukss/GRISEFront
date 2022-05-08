import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import { ReactComponent as Home} from '../Image/Home.svg';
import { ReactComponent as Search} from '../Image/search.svg';
import { ReactComponent as Menu} from '../Image/Menu.svg';

export const NavBar = () => {
  const [searchText, setSearchText] = useState('');
  const [hiddenSearch,setHiddenSearch] = useState(true);
  const [hiddenMenu,setHiddenMenu] = useState(true);
  
  return (
		//네브바 아이콘 세로로 가운데가 아니다. 정렬하기
    <div>
      <div
        style={{
          borderColor: "#e3e3e3",
          borderBottom: "solid",
          width: "100%",
          height: "3.5rem",
          padding: "0.5rem",
        }}
      >
        <Link to="/">
          <Home
            style={{ width: "3rem", height: "3rem", float: "left", marginLeft: "0.5rem"}}
            onClick={() => {
              console.log("홈버튼클릭");
            }}
          ></Home>
        </Link>
        <SlideMenu hidden={hiddenMenu}>
          <Menu
            style={{ width: "3rem", height: "3rem", float: "right" }}
            onClick={() => {
              setHiddenMenu(!hiddenMenu);
            }}
          />
        </SlideMenu>
        <Menu
          style={{
            width: "3rem",
            height: "3rem",
            float: "right",
            marginRight: "0.5rem",
          }}
          onClick={() => {
            setHiddenMenu(!hiddenMenu);
          }}
        ></Menu>
        <Search
          style={{
            width: "3rem",
            height: "3rem",
            float: "right",
            marginRight: "0.5rem",
          }}
          onClick={() => {
            if (hiddenSearch) {
              setHiddenSearch(false);
            } else if (searchText === "") {
              setHiddenSearch(true);
            } else {
              console.log("서치버튼클릭", { searchText });
            }
          }}
        ></Search>
        <Input
          hidden={hiddenSearch}
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

const Input = styled.input`
  display:${props=>props.hidden ? 'none':'block'};
  width:10rem;
  height:3rem;
  float:right;
`
const SlideMenu = styled.div`
  display:${props=>props.hidden ? 'none':'block'};
  width:40%;
  height:100%;
  left:60%;
  position:absolute;
  background-color: gray;
  transition:1s;
`
export default NavBar;
