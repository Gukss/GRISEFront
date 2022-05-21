import React, { forwardRef, useEffect, useRef } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styled from 'styled-components';
import SideBarList from './SideBarList';

const SideBarContainer = forwardRef((props,ref)=> {
	const username = useRef(null);
	const nameRef = useRef(null);

	useEffect(() => {
		username.current = window.localStorage.getItem("username");
		console.log(username.current);
		nameRef.current.innerHTML = username.current;
	}, []);
	
    const onClickCloseBtn = ()=>{
        ref.current.style.display='none';
    }
    return (
      <Contianer ref={ref}>
        <SideBarHeader>
          <CloseBtn onClick={onClickCloseBtn}>
            <AiOutlineArrowLeft
              style={{ width: "2rem", height: "2rem" }}
            ></AiOutlineArrowLeft>
          </CloseBtn>
          <Name ref={nameRef}></Name>
          <span style={{ width: "3rem" }} />
        </SideBarHeader>
        <SideBarList />
      </Contianer>
    );
});

const CloseBtn = styled.span`
    color:#3A6C7B;
    display: flex;
		align-items: center;
`

const Name = styled.span`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  color: #3A6C7B;
`

const Contianer = styled.div`
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    width:100%;
    height:100%;
    background-color:#ffffff;
`

const SideBarHeader = styled.div`
  width: 95%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 2.5%;
  height: 3.5rem;
  border-bottom: 1px solid rgb(227, 227, 227);
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: bold;
`;

export default SideBarContainer