import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
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
            <Home>GRISE</Home>
          </Link>
          <SlideMenu hidden={hiddenMenu}>
            <Menu
              style={{ width: "2rem", height: "2rem", float: "right" }}
              onClick={() => {
                setHiddenMenu(!hiddenMenu);
              }}
            />
          </SlideMenu>
          <Menu
            style={{
              width: "2rem",
              height: "2rem",
              float: "right",
            }}
            onClick={() => {
              setHiddenMenu(!hiddenMenu);
            }}
          ></Menu>
          <Search
            style={{
              width: "2rem",
              height: "2rem",
              float: "right",
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
    </div>
  );
}

const Home = styled.div`
  color: #3A6C7B;
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height:2rem;
  text-align: center;
  width: 2rem;
  height: 2rem;
  float: left;
  margin-left: 0.5rem;
`

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
