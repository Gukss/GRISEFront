import React from 'react'
import styled from 'styled-components'
import NavBar from '../NavBar'
import Title from "./Title";
import Video from "./Video";
import MainText from "./MainText";
import Footer from "./Footer";
import CommentContainer from "./CommentContainer";


const Board = () => {


	return (
    <Wrap>
      <NavBar />
      <Video />
      <Title />
      <MainText />
      <CommentContainer />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 1200px;
  height:100%;
  margin:0 auto;

  @media (max-width:1220px){
    width: 100%;
  }

  @media (max-width:768px){
    width: 100%;
  }

  @media (max-width:480px){
    width:100%;
    background-color:white;
  }
`;

export default Board;