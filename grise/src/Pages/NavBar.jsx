import React,{useState} from 'react';
import styled from 'styled-components';
import { ReactComponent as Home} from '../Image/Home.svg';
import { ReactComponent as Search} from '../Image/search.svg';
import { ReactComponent as Menu} from '../Image/Menu.svg';

export const NavBar = () => {
  const [searchText, setSearchText] = useState('');
  const [hiddenSearch,setHiddenSearch] = useState(true);
  const [hiddenMenu,setHiddenMenu] = useState(true);
  
  return (
    <div>
      <div style={{width:'100%',height:'3rem'}} >
        <Home
          style={{width:'3rem',height:'3rem',float:'left'}}
          onClick={()=>{console.log('홈버튼클릭')}}
        ></Home>
        <SlideMenu hidden={hiddenMenu}>
            <MenuItem>
                <Menu
                    style={{width:'3rem',height:'3rem',float:'right'}}
                    onClick={()=>{setHiddenMenu(!hiddenMenu)}}>
                </Menu>
            </MenuItem>
            <MenuItem>두번째 메뉴</MenuItem>
            <MenuItem>세번째 메뉴</MenuItem>
        </SlideMenu>
        <Menu
          style={{width:'3rem',height:'3rem',float:'right'}}
          onClick={()=>{setHiddenMenu(!hiddenMenu)}}
        ></Menu>
        <Search
          style={{width:'3rem',height:'3rem',float:'right'}}
          onClick={()=>{
            if(hiddenSearch){
              setHiddenSearch(false);
            }
            else if(searchText==''){
              setHiddenSearch(true);
            }
            else{
              console.log('서치버튼클릭',{searchText});
            }
          }}
        ></Search>
        <Input hidden={hiddenSearch} type="text" onChange={(e)=>{setSearchText(e.target.value)}}/>
      </div>
      <hr></hr>
    </div>
  )
}

const Input = styled.input`
    display:${props=>props.hidden ? 'none':'block'};
    width:10rem;
    height:3rem;
    float:right;
`
const SlideMenu = styled.div`
    display:${props=>props.hidden ? 'none':'block'};
    width:50%;
    height:100%;
    left:50%;
    position:absolute;
    background-color: lightgray;
`

const MenuItem = styled.div`
    width:100%;
    height:3.5rem;
`
export default NavBar;
