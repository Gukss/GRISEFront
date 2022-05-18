import React,{useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ReactComponent as Search} from '../Image/search.svg';
import { ReactComponent as Menu} from '../Image/Menu.svg';
import { ReactComponent as Logo} from '../Image/GRISE_logo.svg';
import SideBarContainer from './SideBar/SideBarContainer';

export const NavBar = () => {
  const [searchText, setSearchText] = useState('');
  const [hiddenSearch,setHiddenSearch] = useState(true);
  const sideBarRef = useRef();
  const onClickMenu = () =>{
    sideBarRef.current.style.display='block';
  }
  useEffect(()=>{
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
						<Logo style={{width: "4rem",
  						height: "100%",
  						float: "left",
  						marginLeft: "0.5rem"}}/>
            {/* <Home>GRISE</Home> */}
          </Link>
          <SideBar ref={sideBarRef}>
            <SideBarContainer/>
          </SideBar>
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

const SideBar = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  bottom:0;
  left:0;
  right:0;
`

const Input = styled.input`
  display:${props=>props.hidden ? 'none':'block'};
  width:10rem;
  height:3rem;
  float:right;
`
export default NavBar;
